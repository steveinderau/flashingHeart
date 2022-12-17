input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    Pause = 0
    basic.setLedColor(0x00ff00)
})
input.onButtonEvent(Button.B, input.buttonEventClick(), function () {
    Pause = 1
    basic.setLedColor(0xff0000)
})
let Bright = 0
let Pause = 0
basic.setLedColor(0x00ff00)
Pause = 0
let Steps = 5
let Speed = 50
basic.showIcon(IconNames.Heart)
basic.forever(function () {
    if (Pause == 0) {
        if (Bright >= 255) {
            Steps = -10
        } else if (Bright <= 5) {
            Steps = 10
        }
        Bright = Steps + Bright
        led.setBrightness(Bright)
    }
    basic.pause(Speed)
})
