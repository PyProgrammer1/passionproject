const gameContent = document.getElementById('game-content');
var deskUnlocked = false;
function startGame() {
    gameContent.innerHTML = `
        <p>You find yourself in a locked room. There's a desk with a locked drawer and a keypad on the wall. There is also a bobby pin.</p>
        <button class="button" onclick="inspectDesk()">Inspect Desk</button>
        <button class="button" onclick="inspectKeypad()">Inspect Keypad</button>
        <button class="button" onclick="inspectPin()">Inspect Bobby Pin</button>
    `;
}

function inspectDesk() {
    if (deskUnlocked) {
        gameContent.innerHTML = `
            <p>You open the desk drawer. It has a note in it that says "30 37 34 34".</p>
            <button class="button" onclick="startGame()">Ok</button>
        `;
    } else {
        gameContent.innerHTML = `
            <p>The desk drawer is locked. You need a key to open it.</p>
            <button class="button" onclick="startGame()">Go Back</button>
        `;
    }
}

function inspectKeypad() {
    gameContent.innerHTML = `
        <p>The keypad requires a 4-digit code. You might know the code.</p>
        <button class="button" onclick="startGame()">Go Back</button>
        <button class="button" onclick="tryCode()">Try a code</button>
    `;
}

function inspectPin() {
    gameContent.innerHTML = `
        <p>The bobby pin looks ike it could pick the lock. Do you want to use it?
        <button class="button" onclick="pickLock()">Yes</button>
        <button class="button" onclick="startGame()">No</button>
    `;
}

function pickLock() {
    gameContent.innerHTML = `
        <p>You successfully picked the lock.</p>
        <button class="button" onclick="startGame();>Ok</button>
    `;
    deskUnlocked = true;
}

function tryCode() {
    gameContent.innerHTML = `
        <p>You can try a code.</p>
    `;
}