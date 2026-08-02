const express = require('express');
const fs = require('fs');
const path = require('path');
const { spawn } = require('child_process');

const app = express();
const PORT = 8080;

app.use(express.json());
app.use(express.static(__dirname));

let gameProcess = null;
let movesList = [];

// Parse config.js for API keys
function getKeys() {
    let geminiKey = process.env.GEMINI_API_KEY || '';
    let openaiKey = process.env.OPENAI_API_KEY || '';

    try {
        const configPath = path.join(__dirname, 'config.js');
        if (fs.existsSync(configPath)) {
            const configContent = fs.readFileSync(configPath, 'utf8');
            const geminiMatch = configContent.match(/p1_key:\s*["']([^"']+)["']/);
            const openaiMatch = configContent.match(/p2_key:\s*["']([^"']+)["']/);
            if (geminiMatch) geminiKey = geminiMatch[1];
            if (openaiMatch) openaiKey = openaiMatch[1];
        }
    } catch (e) {
        console.error("Error reading config.js:", e);
    }
    return { geminiKey, openaiKey };
}

// Start simulation
app.post('/api/start', (req, res) => {
    if (gameProcess) {
        return res.json({ status: "error", message: "Simulation is already running." });
    }

    const { geminiKey, openaiKey } = getKeys();
    
    if (!geminiKey) {
        return res.status(400).json({ status: "error", message: "No Gemini API key found. Add it to config.js or env." });
    }

    console.log("Starting game.py simulation...");
    movesList = []; // Reset moves on start
    
    // Spawn python3 game.py
    gameProcess = spawn('python3', ['game.py'], {
        cwd: __dirname,
        env: {
            ...process.env,
            GEMINI_API_KEY: geminiKey,
            OPENAI_API_KEY: openaiKey
        }
    });

    gameProcess.stdout.on('data', (data) => {
        const str = data.toString();
        console.log(`[game.py stdout]: ${str}`);
        
        // Parse moves from stdout
        const lines = str.split('\n');
        lines.forEach(line => {
            if (line.includes('MOVE_PLAYED:')) {
                const move = line.split('MOVE_PLAYED:')[1].trim();
                if (move && !movesList.includes(move)) {
                    movesList.push(move);
                }
            }
        });
    });

    gameProcess.stderr.on('data', (data) => {
        console.error(`[game.py stderr]: ${data}`);
    });

    gameProcess.on('close', (code) => {
        console.log(`game.py process exited with code ${code}`);
        gameProcess = null;
    });

    res.json({ status: "success", message: "Simulation started." });
});

// Stop simulation
app.post('/api/stop', (req, res) => {
    if (!gameProcess) {
        return res.json({ status: "error", message: "No simulation is currently running." });
    }

    console.log("Stopping game.py simulation...");
    gameProcess.kill();
    gameProcess = null;
    res.json({ status: "success", message: "Simulation stopped." });
});

// Check status
app.get('/api/status', (req, res) => {
    res.json({ running: gameProcess !== null });
});

// Get current game moves
app.get('/api/moves', (req, res) => {
    res.json({ moves: movesList });
});

app.listen(PORT, () => {
    console.log(`Express server running at http://localhost:${PORT}`);
});
