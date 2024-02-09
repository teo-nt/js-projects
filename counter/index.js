// Initial state
const DEFAULT = 0
let counter = DEFAULT
$(document).ready(function() {
    const $btnDecr = $("#btnDecr")
    const $btnReset = $("#btnReset")
    const $btnIncr = $("#btnIncr")

    $btnDecr.on('click', () => onDecreaseClicked())
    $btnReset.on('click', () => onResetClicked())
    $btnIncr.on('click', () => onIncreaseClicked())
})

/**
 * Actions taken after "Decrease" button was clicked.
 * Actions include decreasing the counter.
 */
function onDecreaseClicked() {
    decreaseCounter()
}

/**
 * Actions taken after "Reset" button was clicked.
 * Actions include reseting the counter.
 */
function onResetClicked() {
    resetCounter()
}

/**
 * Actions taken after "Increase" button was clicked.
 * Actions include increasing the counter.
 */
function onIncreaseClicked() {
    increaseCounter()
}

// Model

/**
 * Decreases the counter and syncs the UI.
 */
function decreaseCounter() {
    counter--
    showCounter()
}

/**
 * Resets the counter and syncs the UI.
 */
function resetCounter() {
    counter = DEFAULT
    showCounter()
}

/**
 * Increases the counter and syncs the UI.
 */
function increaseCounter() {
    counter++
    showCounter()
}

/**
 * Assigns counter to the corresponding UI Element and
 * gives style accordingly.
 */
function showCounter() {
    const $counterDOM = $("#counter")
    $counterDOM.html(counter) 
    styleCounter($counterDOM)
}

function styleCounter($counterDOM) {
    $counterDOM.toggleClass("color-green", counter > 0)
    $counterDOM.toggleClass("color-black", counter === 0)
    $counterDOM.toggleClass("color-red", counter < 0)
}