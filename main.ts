input.onButtonPressed(Button.A, function () {
    basic.showNumber(steps)
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(steps / 26)
})
let steps = 0
steps = 0
basic.forever(function () {
    if (input.acceleration(Dimension.Strength) > 1500) {
        steps += 1
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    }
})
