// SVG Assets for Chess Pieces (styled with sleek dark/light theme gradients)
const PIECE_SVGS = {
    'p': `<svg viewBox="0 0 45 45"><path d="M22.5 9c-2.21 0-4 1.79-4 4 0 .89.29 1.71.78 2.38C17.33 16.5 16 18.59 16 21c0 2.03.94 3.84 2.41 5.03-.83.62-1.41 1.61-1.41 2.72 0 1.93 1.57 3.5 3.5 3.5h4c1.93 0 3.5-1.57 3.5-3.5 0-1.11-.58-2.1-1.41-2.72C28.06 24.84 29 23.03 29 21c0-2.41-1.33-4.5-3.28-5.62.49-.67.78-1.49.78-2.38 0-2.21-1.79-4-4-4z" fill="#f8fafc" stroke="#1e293b" stroke-width="1.5"/></svg>`,
    'r': `<svg viewBox="0 0 45 45"><path d="M9 39h27v-3H9v3zm3-13v7h21v-7H12zm2.5-11h16l1.5 8h-19l1.5-8zM12 9v4h4V9h3v4h7V9h3v4h4V9h3v5H9V9h3z" fill="#f8fafc" stroke="#1e293b" stroke-width="1.5"/></svg>`,
    'n': `<svg viewBox="0 0 45 45"><path d="M22 10c-5 0-10 3-10 8 0 3 1.5 6 3.5 7.5c-1.5 1-2.5 3-2.5 4.5 0 3.5 3 6 8 6h8c3.5 0 6-3 6-6 0-3.5-3-7-6-8.5.5-1 1-2.5 1-4 0-5.5-4-7.5-8-7.5z" fill="#f8fafc" stroke="#1e293b" stroke-width="1.5"/></svg>`,
    'b': `<svg viewBox="0 0 45 45"><path d="M9 36h27v-3H9v3zm13.5-27c-4 0-8 4-8 10 0 3 1 6 3 8l3.5 3.5-1.5 1.5h6l-1.5-1.5 3.5-3.5c2-2 3-5 3-8 0-6-4-10-8-10z" fill="#f8fafc" stroke="#1e293b" stroke-width="1.5"/></svg>`,
    'q': `<svg viewBox="0 0 45 45"><path d="M9 37h27v-3H9v3zm3.5-20l3-10 6 10 6-10 6 10 3-10 3 10-27 0zm1.5 15h21v-4H14v4z" fill="#f8fafc" stroke="#1e293b" stroke-width="1.5"/></svg>`,
    'k': `<svg viewBox="0 0 45 45"><path d="M12 36h21v-3H12v3zm10.5-28v3h-3v3h3v3h3V9h3V6h-3V3h-3v3zm-8 14c-2 2-3 5-3 8h22c0-3-1-6-3-8l-3.5 3.5-4.5-4.5-4.5 4.5L14.5 22z" fill="#f8fafc" stroke="#1e293b" stroke-width="1.5"/></svg>`,
    
    // Black pieces (styled darker with accent border)
    'P': `<svg viewBox="0 0 45 45"><path d="M22.5 9c-2.21 0-4 1.79-4 4 0 .89.29 1.71.78 2.38C17.33 16.5 16 18.59 16 21c0 2.03.94 3.84 2.41 5.03-.83.62-1.41 1.61-1.41 2.72 0 1.93 1.57 3.5 3.5 3.5h4c1.93 0 3.5-1.57 3.5-3.5 0-1.11-.58-2.1-1.41-2.72C28.06 24.84 29 23.03 29 21c0-2.41-1.33-4.5-3.28-5.62.49-.67.78-1.49.78-2.38 0-2.21-1.79-4-4-4z" fill="#312e81" stroke="#a855f7" stroke-width="1.5"/></svg>`,
    'R': `<svg viewBox="0 0 45 45"><path d="M9 39h27v-3H9v3zm3-13v7h21v-7H12zm2.5-11h16l1.5 8h-19l1.5-8zM12 9v4h4V9h3v4h7V9h3v4h4V9h3v5H9V9h3z" fill="#312e81" stroke="#a855f7" stroke-width="1.5"/></svg>`,
    'N': `<svg viewBox="0 0 45 45"><path d="M22 10c-5 0-10 3-10 8 0 3 1.5 6 3.5 7.5c-1.5 1-2.5 3-2.5 4.5 0 3.5 3 6 8 6h8c3.5 0 6-3 6-6 0-3.5-3-7-6-8.5.5-1 1-2.5 1-4 0-5.5-4-7.5-8-7.5z" fill="#312e81" stroke="#a855f7" stroke-width="1.5"/></svg>`,
    'B': `<svg viewBox="0 0 45 45"><path d="M9 36h27v-3H9v3zm13.5-27c-4 0-8 4-8 10 0 3 1 6 3 8l3.5 3.5-1.5 1.5h6l-1.5-1.5 3.5-3.5c2-2 3-5 3-8 0-6-4-10-8-10z" fill="#312e81" stroke="#a855f7" stroke-width="1.5"/></svg>`,
    'Q': `<svg viewBox="0 0 45 45"><path d="M9 37h27v-3H9v3zm3.5-20l3-10 6 10 6-10 6 10 3-10 3 10-27 0zm1.5 15h21v-4H14v4z" fill="#312e81" stroke="#a855f7" stroke-width="1.5"/></svg>`,
    'K': `<svg viewBox="0 0 45 45"><path d="M12 36h21v-3H12v3zm10.5-28v3h-3v3h3v3h3V9h3V6h-3V3h-3v3zm-8 14c-2 2-3 5-3 8h22c0-3-1-6-3-8l-3.5 3.5-4.5-4.5-4.5 4.5L14.5 22z" fill="#312e81" stroke="#a855f7" stroke-width="1.5"/></svg>`
};

// Global state variables
let game = null;
let autoplayTimer = null;
let isAutoplayActive = false;
let lastMoveSquares = [];

// DOM Elements
const boardEl = document.getElementById('board');
const gameStatusEl = document.getElementById('game-status');
const btnStart = document.getElementById('btn-start');
const btnNext = document.getElementById('btn-next');
const btnAutoplay = document.getElementById('btn-autoplay');
const btnReset = document.getElementById('btn-reset');
const battleLog = document.getElementById('battle-log');
const pgnHistory = document.getElementById('pgn-history');

const p1ApiKeyEl = document.getElementById('p1-api-key');
const p2ApiKeyEl = document.getElementById('p2-api-key');
const p1ModelEl = document.getElementById('p1-model');
const p2ModelEl = document.getElementById('p2-model');
const p1TempEl = document.getElementById('p1-temp');
const p2TempEl = document.getElementById('p2-temp');
const p1TempVal = document.getElementById('p1-temp-val');
const p2TempVal = document.getElementById('p2-temp-val');
const autoplayDelayEl = document.getElementById('autoplay-delay');
const showThinkingEl = document.getElementById('show-thinking');

// Initialize settings value display & store locally
p1TempEl.addEventListener('input', (e) => p1TempVal.textContent = e.target.value);
p2TempEl.addEventListener('input', (e) => p2TempVal.textContent = e.target.value);

// Load keys from localStorage if they exist
window.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem('gemini_p1_key')) {
        p1ApiKeyEl.value = localStorage.getItem('gemini_p1_key');
    }
    if (localStorage.getItem('gemini_p2_key')) {
        p2ApiKeyEl.value = localStorage.getItem('gemini_p2_key');
    }
    createInitialBoard();
});

// Toggle password view helper
function togglePassword(id) {
    const input = document.getElementById(id);
    const button = input.nextElementSibling;
    if (input.type === 'password') {
        input.type = 'text';
        button.innerHTML = '<i class="fa-solid fa-eye-slash"></i>';
    } else {
        input.type = 'password';
        button.innerHTML = '<i class="fa-solid fa-eye"></i>';
    }
}

// Draw initial chessboard
function createInitialBoard() {
    boardEl.innerHTML = '';
    for (let r = 0; r < 8; r++) {
        for (let f = 0; f < 8; f++) {
            const square = document.createElement('div');
            const isLight = (r + f) % 2 === 0;
            square.className = `square ${isLight ? 'light' : 'dark'}`;
            square.dataset.square = `${String.fromCharCode(97 + f)}${8 - r}`;
            boardEl.appendChild(square);
        }
    }
    drawPieces();
}

// Draw pieces on squares matching FEN state
function drawPieces() {
    const fen = game ? game.fen() : 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1';
    const parts = fen.split(' ');
    const boardState = parts[0].split('/');
    
    // Clear pieces
    document.querySelectorAll('.square').forEach(sq => {
        sq.innerHTML = '';
        sq.classList.remove('highlight', 'check', 'last-move');
        
        // Restore highlights
        if (lastMoveSquares.includes(sq.dataset.square)) {
            sq.classList.add('last-move');
        }
    });

    if (game && game.in_check()) {
        const turn = game.turn();
        // find king position
        let kingPiece = turn === 'w' ? 'k' : 'K';
        let found = false;
        for (let r = 0; r < 8 && !found; r++) {
            const rowStr = boardState[r];
            let col = 0;
            for (let i = 0; i < rowStr.length; i++) {
                const char = rowStr[i];
                if (isNaN(char)) {
                    if (char === kingPiece) {
                        const sqName = `${String.fromCharCode(97 + col)}${8 - r}`;
                        const sqEl = document.querySelector(`[data-square="${sqName}"]`);
                        if (sqEl) sqEl.classList.add('check');
                        found = true;
                        break;
                    }
                    col++;
                } else {
                    col += parseInt(char);
                }
            }
        }
    }

    // Place pieces
    for (let r = 0; r < 8; r++) {
        const rowStr = boardState[r];
        let col = 0;
        for (let i = 0; i < rowStr.length; i++) {
            const char = rowStr[i];
            if (isNaN(char)) {
                const sqName = `${String.fromCharCode(97 + col)}${8 - r}`;
                const square = document.querySelector(`[data-square="${sqName}"]`);
                if (square) {
                    const pieceEl = document.createElement('div');
                    pieceEl.className = 'piece';
                    pieceEl.innerHTML = PIECE_SVGS[char];
                    square.appendChild(pieceEl);
                }
                col++;
            } else {
                col += parseInt(char);
            }
        }
    }
}

// Start Game
btnStart.addEventListener('click', () => {
    const key1 = p1ApiKeyEl.value.trim();
    const key2 = p2ApiKeyEl.value.trim();
    
    if (!key1 || !key2) {
        alert("Please enter both White (P1) and Black (P2) Gemini API Keys.");
        return;
    }

    // Save to localStorage
    localStorage.setItem('gemini_p1_key', key1);
    localStorage.setItem('gemini_p2_key', key2);

    game = new Chess();
    lastMoveSquares = [];
    
    btnStart.disabled = true;
    btnNext.disabled = false;
    btnAutoplay.disabled = false;
    btnReset.disabled = false;
    
    // Reset configurations so they can't be changed during active gameplay
    p1ApiKeyEl.disabled = true;
    p2ApiKeyEl.disabled = true;
    
    addLogEntry('system', 'Game started. The battlefield is set. White (Player 1) is to move first.');
    updateGameUIState();
});

// Reset Game
btnReset.addEventListener('click', () => {
    stopAutoplay();
    game = null;
    lastMoveSquares = [];
    
    btnStart.disabled = false;
    btnNext.disabled = true;
    btnAutoplay.disabled = true;
    btnReset.disabled = true;
    
    p1ApiKeyEl.disabled = false;
    p2ApiKeyEl.disabled = false;
    
    createInitialBoard();
    
    gameStatusEl.textContent = 'Configure your API keys and press Start Game!';
    gameStatusEl.className = 'status-banner';
    
    battleLog.innerHTML = `<div class="log-entry system">Game reset. Ready to start over.</div>`;
    pgnHistory.innerHTML = `<div class="empty-state">No moves played yet</div>`;
});

// Autoplay loop control
btnAutoplay.addEventListener('click', () => {
    if (isAutoplayActive) {
        stopAutoplay();
    } else {
        startAutoplay();
    }
});

function startAutoplay() {
    isAutoplayActive = true;
    btnAutoplay.innerHTML = '<i class="fa-solid fa-pause"></i> Pause';
    btnNext.disabled = true;
    makeNextAIMove();
}

function stopAutoplay() {
    isAutoplayActive = false;
    btnAutoplay.innerHTML = '<i class="fa-solid fa-forward"></i> Auto Play';
    if (game && !game.game_over()) {
        btnNext.disabled = false;
    }
    if (autoplayTimer) {
        clearTimeout(autoplayTimer);
        autoplayTimer = null;
    }
}

// Request the active player AI to generate the next move
async function makeNextAIMove() {
    if (!game || game.game_over()) {
        stopAutoplay();
        return;
    }

    const activeTurn = game.turn(); // 'w' or 'b'
    const isWhite = activeTurn === 'w';
    const prefix = isWhite ? 'White' : 'Black';
    
    const apiKey = isWhite ? p1ApiKeyEl.value.trim() : p2ApiKeyEl.value.trim();
    const model = isWhite ? p1ModelEl.value : p2ModelEl.value;
    const temp = parseFloat(isWhite ? p1TempEl.value : p2TempEl.value);
    
    addLogEntry('system', `${prefix} Engine is analyzing the position...`);
    
    try {
        const legalMoves = game.moves();
        const fen = game.fen();
        const pgn = game.pgn() || 'Initial board state';
        
        const systemPrompt = `You are a Grandmaster-level chess engine playing as ${prefix}.
Your goal is to defeat your opponent by choosing the best legal chess moves.
Always output valid JSON containing your thoughts/strategic assessment and the exact move you wish to make in Standard Algebraic Notation (SAN).
You MUST ONLY choose a move that is listed in the legal moves list below. Any move not in the list is invalid and will lose you the game.

Current Position (FEN): ${fen}
Game History (PGN): ${pgn}
Available Legal Moves: ${legalMoves.join(', ')}`;

        const responseText = await callGeminiAPI(apiKey, model, systemPrompt, temp);
        
        let moveData;
        try {
            moveData = JSON.parse(responseText);
        } catch (e) {
            // Attempt to recover JSON from text responses that wrapped it in markdown code blocks
            const regex = /\{[\s\S]*\}/;
            const match = responseText.match(regex);
            if (match) {
                moveData = JSON.parse(match[0]);
            } else {
                throw new Error("Could not parse JSON response from the LLM");
            }
        }
        
        if (!moveData.move) {
            throw new Error("API response did not contain a 'move' key.");
        }
        
        // Clean move notation
        let chosenMove = moveData.move.trim();
        
        // Verify legal move
        if (!legalMoves.includes(chosenMove)) {
            // Fallback: search if matches case-insensitively or with minor string differences
            const matched = legalMoves.find(m => m.toLowerCase() === chosenMove.toLowerCase());
            if (matched) {
                chosenMove = matched;
            } else {
                addLogEntry(isWhite ? 'white' : 'black', `Suggested illegal move: "${chosenMove}". Choosing first legal move as backup.`);
                chosenMove = legalMoves[0];
            }
        }
        
        // Apply move to local logic
        const moveDetails = game.move(chosenMove);
        if (moveDetails) {
            lastMoveSquares = [moveDetails.from, moveDetails.to];
            
            // Output thoughts
            addLogEntry(
                isWhite ? 'white' : 'black',
                `Thought: ${moveData.thought || 'Analyzing board structure.'}\nMove: ${chosenMove}`
            );
            
            drawPieces();
            updateGameUIState();
            
            // Trigger next turn in Autoplay or stop
            if (isAutoplayActive && !game.game_over()) {
                const delay = parseInt(autoplayDelayEl.value) * 1000 || 3000;
                autoplayTimer = setTimeout(makeNextAIMove, delay);
            } else if (game.game_over()) {
                stopAutoplay();
            }
        } else {
            throw new Error(`Failed to apply move ${chosenMove}`);
        }
        
    } catch (err) {
        console.error(err);
        addLogEntry('system', `Error executing move for ${prefix}: ${err.message}`);
        stopAutoplay();
    }
}

// Trigger single step
btnNext.addEventListener('click', () => {
    makeNextAIMove();
});

// Call Gemini API
async function callGeminiAPI(apiKey, model, systemPrompt, temperature) {
    const url = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`;
    
    const requestBody = {
        contents: [
            {
                role: "user",
                parts: [{ text: systemPrompt }]
            }
        ],
        generationConfig: {
            temperature: temperature,
            responseMimeType: "application/json",
            responseSchema: {
                type: "OBJECT",
                properties: {
                    thought: { type: "STRING" },
                    move: { type: "STRING" }
                },
                required: ["thought", "move"]
            }
        }
    };

    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(requestBody)
    });

    if (!response.ok) {
        const errText = await response.text();
        throw new Error(`Gemini API Error: Status ${response.status} - ${errText}`);
    }

    const data = await response.json();
    if (!data.candidates || data.candidates.length === 0 || !data.candidates[0].content) {
        throw new Error("No response candidates returned from API");
    }

    return data.candidates[0].content.parts[0].text;
}

// Log formatting and auto-scrolling
function addLogEntry(type, text) {
    const entry = document.createElement('div');
    entry.className = `log-entry ${type}`;
    
    let title = 'System Notification';
    if (type === 'white') title = 'White AI Engine';
    if (type === 'black') title = 'Black AI Engine';
    
    // Parse thought vs move
    let htmlContent = `<div class="meta">${title}</div>`;
    
    if (type === 'system') {
        htmlContent += `<div>${text}</div>`;
    } else {
        const splitText = text.split('\nMove:');
        const thought = splitText[0].replace('Thought:', '').trim();
        const move = splitText[1] ? splitText[1].trim() : '';
        
        if (showThinkingEl.checked && thought) {
            htmlContent += `<div class="thought">${thought}</div>`;
        }
        if (move) {
            htmlContent += `<div>Played: <span class="move-made">${move}</span></div>`;
        } else {
            htmlContent += `<div>${text}</div>`;
        }
    }
    
    entry.innerHTML = htmlContent;
    battleLog.appendChild(entry);
    battleLog.scrollTop = battleLog.scrollHeight;
}

// Update game status banner and active turn styling
function updateGameUIState() {
    if (!game) return;
    
    const turn = game.turn();
    const isGameOver = game.game_over();
    
    if (isGameOver) {
        let statusText = "Game Over - ";
        if (game.in_checkmate()) {
            statusText += `Checkmate! ${turn === 'w' ? 'Black (P2)' : 'White (P1)'} wins.`;
            addLogEntry('system', `Checkmate! Game complete.`);
        } else if (game.in_draw()) {
            statusText += "Draw!";
            addLogEntry('system', `The game ended in a draw.`);
        } else if (game.in_stalemate()) {
            statusText += "Stalemate!";
            addLogEntry('system', `The game ended in a stalemate.`);
        } else {
            statusText += "Game finished.";
        }
        
        gameStatusEl.textContent = statusText;
        gameStatusEl.className = 'status-banner';
        btnNext.disabled = true;
        btnAutoplay.disabled = true;
        return;
    }
    
    if (turn === 'w') {
        gameStatusEl.textContent = "White's Turn (Player 1)";
        gameStatusEl.className = 'status-banner white-turn';
    } else {
        gameStatusEl.textContent = "Black's Turn (Player 2)";
        gameStatusEl.className = 'status-banner black-turn';
    }
    
    // Update PGN History
    renderPGNHistory();
}

// Render PGN Moves list nicely structured in columns
function renderPGNHistory() {
    if (!game) return;
    const history = game.history();
    pgnHistory.innerHTML = '';
    
    if (history.length === 0) {
        pgnHistory.innerHTML = '<div class="empty-state">No moves played yet</div>';
        return;
    }
    
    for (let i = 0; i < history.length; i += 2) {
        const moveNum = Math.floor(i / 2) + 1;
        const whiteMove = history[i];
        const blackMove = history[i + 1] || '';
        
        const row = document.createElement('div');
        row.className = 'pgn-row';
        row.innerHTML = `
            <span class="pgn-num">${moveNum}.</span>
            <span class="pgn-move">${whiteMove}</span>
            <span class="pgn-move">${blackMove}</span>
        `;
        pgnHistory.appendChild(row);
    }
    pgnHistory.scrollTop = pgnHistory.scrollHeight;
}
