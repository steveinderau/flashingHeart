Bright = 0
Steps = 5
basic.show_leds("""
    . # . # .
        # # # # #
        # # # # #
        . # # # .
        . . # . .
""")

def on_forever():
    global Steps, Bright
    if led.brightness() >= 255:
        Steps = -5
    elif led.brightness() <= 0:
        Steps = 5
    Bright += Steps + Bright
    led.set_brightness(Bright)
    basic.pause(250)
basic.forever(on_forever)
