let Roll = 0
input.onButtonPressed(Button.B, function () {
    Roll = randint(1, 6)
    if (Roll == 1) {
        basic.showString("WOULD YOU RATHER CUT YOUR LEGS OFF OR TWO OF YOUR FRIENDS LRGS OFF")
    } else if (Roll == 2) {
        basic.showString("WOULD YOU RATHER FREEZE TO DEATH OVER TWO DAYS OR SLOW COOK AT AN OPEN FIRE")
    } else if (Roll == 3) {
        basic.showString("WOULD YOU RATHER LISTEN TO CARDI B OR DIE")
    } else if (Roll == 4) {
        basic.showString("WOULD YOU RATHER DIE OF HUNGER OR THIRST")
    } else if (Roll == 5) {
        basic.showString("WOULD YOU RATHER SAVE YOUR MOTHER OR FATHER FROM FALLING OFF A CLIFF TO THEIR DEATH")
    } else {
        basic.showString("WOULD YOU RATHER SUFFOCATE OR EXPLODE")
    }
})
