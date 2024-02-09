let bgColor = undefined

$(document).ready(() => {
    $("#btn").on('click', () => {
        onClickMeClicked()
    })
})

function onClickMeClicked() {
    updateBg()
}

// Model

/**
 * Gets a color and updates the background.
 */
function updateBg() {
    bgColor = getBgColor()
    showBgColor()
}

/**
 * Selects a random color from a standard list of colors.
 * 
 * @returns the random color.
 */
function getBgColor() {
    const colors = ['red', 'white', 'black', 'green', 'blue', 'yellow']
    return colors[Math.floor(Math.random() * colors.length)]
}

/**
 * Fills the values of the corresponding UI Elements.
 */
function showBgColor() {
    $('#clr-hex').html(bgColor)
    $('body').css('background-color', bgColor)
}

