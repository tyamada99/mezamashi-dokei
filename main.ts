input.onButtonPressed(Button.A, function () {
    if (動作中) {
        basic.showString(timeanddate.time(timeanddate.TimeFormat.HHMM24hr))
    }
})
input.onButtonPressed(Button.AB, function () {
    if (動作中 && 演奏中) {
        動作中 = false
        演奏中 = false
        basic.clearScreen()
    }
})
let 演奏中 = false
let 動作中 = false
動作中 = false
let 時 = 18
let 分 = 58
let アラーム時 = 19
let アラーム分 = 0
basic.showString("Set Hr")
while (!(input.buttonIsPressed(Button.AB))) {
    if (input.buttonIsPressed(Button.A)) {
        時 = 時 + 1
    } else if (input.buttonIsPressed(Button.B)) {
        時 = 時 - 1
    }
    basic.showNumber(時)
}
basic.showString("Set Min")
while (!(input.buttonIsPressed(Button.AB))) {
    if (input.buttonIsPressed(Button.A)) {
        分 = 分 + 1
    } else if (input.buttonIsPressed(Button.B)) {
        分 = 分 - 1
    }
    basic.showNumber(分)
}
timeanddate.set24HourTime(時, 分, 0)
basic.showString(timeanddate.time(timeanddate.TimeFormat.HHMM24hr))
basic.showString("Set Alm Hr")
while (!(input.buttonIsPressed(Button.AB))) {
    if (input.buttonIsPressed(Button.A)) {
        アラーム時 += 1
    } else if (input.buttonIsPressed(Button.B)) {
        アラーム時 += -1
    }
    basic.showNumber(アラーム時)
}
basic.showString("Set Alm min")
while (!(input.buttonIsPressed(Button.AB))) {
    if (input.buttonIsPressed(Button.A)) {
        アラーム分 += 1
    } else if (input.buttonIsPressed(Button.B)) {
        アラーム分 += -1
    }
    basic.showNumber(アラーム分)
}
basic.showString("" + convertToText(アラーム時) + ":" + convertToText(アラーム分))
演奏中 = false
動作中 = true
basic.forever(function () {
    timeanddate.numericTime(function (hour, minute, second, month, day, year) {
        if (hour == アラーム時 && minute == アラーム分) {
            if (動作中) {
                basic.showIcon(IconNames.EigthNote)
                演奏中 = true
            }
        } else {
            演奏中 = false
            動作中 = true
        }
    })
    while (演奏中) {
        music.startMelody(music.builtInMelody(Melodies.Prelude), MelodyOptions.Once)
        basic.pause(5000)
        basic.pause(5000)
    }
    basic.pause(500)
})
