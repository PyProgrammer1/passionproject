function startGame() {
    const gameContent = document.getElementById('game-content');
    gameContent.innerHTML = `
        <p>You find yourself in a locked room. There's a desk with a locked drawer and a keypad on the wall.</p>
        <button class="button" onclick="inspectDesk()">Inspect Desk</button>
        <button class="button" onclick="inspectKeypad()">Inspect Keypad</button>
    `;
}

function inspectDesk() {
    const gameContent = document.getElementById('game-content');
    gameContent.innerHTML = `
        <p>The desk drawer is locked. You need a key to open it.</p>
        <button class="button" onclick="startGame()">Go Back</button>
    `;
}

function inspectKeypad() {
    const gameContent = document.getElementById('game-content');
    gameContent.innerHTML = `
        <p>The keypad requires a 4-digit code. You don't know the code yet.</p>
        <button class="button" onclick="startGame()">Go Back</button>
    `;
}