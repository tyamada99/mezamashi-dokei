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
input.onButtonPressed(Button.B, function () {
    if (動作中) {
        basic.showString("" + convertToText(アラーム時) + ":" + convertToText(アラーム分))
    }
})
function 時刻セット (数値: number, 時分: string) {
    while (!(input.buttonIsPressed(Button.AB))) {
        if (input.buttonIsPressed(Button.A)) {
            if (時分 == "時" && 数値 < 24) {
                数値 = 数値 + 1
            } else if (時分 == "分" && 数値 < 60) {
                数値 = 数値 + 1
            }
        } else if (input.buttonIsPressed(Button.B)) {
            if (数値 > 0) {
                数値 = 数値 - 1
            }
        }
        basic.showNumber(数値)
        basic.pause(500)
    }
    return 数値
}
let 数値 = 0
let 演奏中 = false
let アラーム分 = 0
let アラーム時 = 0
let 動作中 = false
動作中 = false
let 時 = 14
let 分 = 51
アラーム時 = 14
アラーム分 = 53
basic.showString("Hour")
時 = 時刻セット(時, "時")
basic.showString("Minute")
分 = 時刻セット(分, "分")
timeanddate.set24HourTime(時, 分, 0)
basic.showString(timeanddate.time(timeanddate.TimeFormat.HHMM24hr))
basic.showString("Alm Hr")
アラーム時 = 時刻セット(アラーム時, "時")
basic.showString("Alm min")
アラーム分 = 時刻セット(アラーム分, "分")
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
        basic.pause(9000)
    }
    basic.pause(500)
})
