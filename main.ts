let Roll = 0
input.onButtonPressed(Button.A, function () {
    Roll = randint(1, 6)
    if (Roll == 1) {
        basic.showString("Eat a Klondike bar")
    } else if (Roll == 2) {
        basic.showString("Drink a gallon of toilet water")
    } else if (Roll == 3) {
        basic.showString("Jump out of an airplane without a parachute")
    } else if (Roll == 4) {
        basic.showString("Get a winning lottery ticket")
    } else if (Roll == 5) {
        basic.showString("Burn your dominant hand")
    } else {
        basic.showString("Eat mcdonalds")
    }
})
input.onButtonPressed(Button.B, function () {
    Roll = randint(1, 6)
    if (Roll == 1) {
        basic.showString("How long do you sleep for everyday")
    } else if (Roll == 2) {
        basic.showString("WOULD YOU RATHER FREEZE TO DEATH OVER TWO DAYS OR SLOW COOK AT AN OPEN FIRE")
    } else if (Roll == 3) {
        basic.showString("WOULD YOU RATHER LISTEN TO CARDI B OR DIE")
    } else if (Roll == 4) {
        basic.showString("WOULD YOU RATHER DIE OF HUNGER OR THIRST")
    } else if (Roll == 5) {
        basic.showString("WOULD YOU RATHER SAVE YOUR MOTHER OR FATHER FROM FALLING OFF A CLIFF TO THEIR DEATH")
    } else {
        basic.showString("What is the worst thing you have done")
    }
})
