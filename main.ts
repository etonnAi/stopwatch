let start = 0
let elaspsed = 0
input.onButtonPressed(Button.A, function () {
    start = input.runningTime()
})
input.onButtonPressed(Button.B, function () {
    elaspsed = input.runningTime() - start
    basic.showNumber(Math.idiv(elaspsed, 1000))
})
basic.forever(function () {
	
})
