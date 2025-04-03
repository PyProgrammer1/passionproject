const gameContent = document.getElementById('game-content');

// Game state variables
var time = 0; // Time in seconds
var timer = null; // Timer variable
var timerRunning = false; // Flag to check if the timer is running
var timerInterval = null; // Timer interval variable
var timerDisplay = document.getElementById('timer-display'); // Timer display element
// Start the timer
function startTimer() {
    if (!timerRunning) {
        timerRunning = true;
        timerInterval = setInterval(() => {
            time++;
            timerDisplay.innerText = `Time: ${time} seconds`;
        }, 1000);
    }
}
var code = "4470";
var codeEntered = "";
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
        <p>The bobby pin looks ike it could pick the lock. Do you want to use it?</p>
        <button class="button" onclick="pickLock()">Yes</button>
        <button class="button" onclick="startGame()">No</button>
    `;
}

function pickLock() {
    gameContent.innerHTML = `
        <p>You successfully picked the lock.</p>
        <button class="button" onclick="startGame()">Ok</button>
    `;
    deskUnlocked = true;
}

function tryCode() {
    gameContent.innerHTML = `
        <p>You can try a code.</p>
        <button class="button" onclick="key1()">1</button>
        <button class="button" onclick="key2()">2</button>
        <button class="button" onclick="key3()">3</button>
        <button class="button" onclick="key4()">4</button>
        <button class="button" onclick="key5()">5</button>
        <button class="button" onclick="key6()">6</button>
        <button class="button" onclick="key7()">7</button>
        <button class="button" onclick="key8()">8</button>
        <button class="button" onclick="key9()">9</button>
        <button class="button" onclick="key0()">0</button>
    `;
}

function key1() {
    codeEntered += "1";
}
function key2() {
    codeEntered += "2";
}
function key3() {
    codeEntered += "3";
}
function key4() {
    codeEntered += "4";
}
function key5() {
    codeEntered += "5";
}
function key6() {
    codeEntered += "6";
}
function key7() {
    codeEntered += "7";
}
function key8() {
    codeEntered += "8";
}
function key9() {
    codeEntered += "9";
}
function key0() {
    codeEntered += "0";
}
function checkCode() {
    if (codeEntered === code) {
        gameContent.innerHTML = `
            <p>The door unlocked and you escaped in a time of ${time}.</p>
            <button class="button" onclick="resetGame()">Reset</button>
        `;
    } else {
        gameContent.innerHTML = `
            <p>Incorrect code. Try again.</p>
            <button class="button" onclick="tryCode()">Try Again</button>
        `;
        codeEntered = "";
    }
}
function resetGame() {
    codeEntered = "";
    deskUnlocked = false;
    startGame();
    startTimer();
    timerRunning = false;
    clearInterval(timerInterval);
    time = 0;
}
// Start the game when the page loads
document.addEventListener('DOMContentLoaded', (event) => {
    resetGame();
});