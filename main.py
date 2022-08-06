def on_button_pressed_a():
    if 動作中:
        basic.show_string(timeanddate.time(timeanddate.TimeFormat.HHMM2_4HR))
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_ab():
    global 動作中, 演奏中
    if 動作中 and 演奏中:
        動作中 = False
        演奏中 = False
        basic.clear_screen()
input.on_button_pressed(Button.AB, on_button_pressed_ab)

def on_button_pressed_b():
    if 動作中:
        basic.show_string("" + convert_to_text(アラーム時) + ":" + convert_to_text(アラーム分))
input.on_button_pressed(Button.B, on_button_pressed_b)

def 時刻セット(数値: number, 時分: str):
    while not (input.button_is_pressed(Button.AB)):
        if input.button_is_pressed(Button.A):
            if 時分 == "時" and 数値 < 24:
                数値 = 数値 + 1
            elif 時分 == "分" and 数値 < 60:
                数値 = 数値 + 1
        elif input.button_is_pressed(Button.B):
            if 数値 > 0:
                数値 = 数値 - 1
        basic.show_number(数値)
        basic.pause(500)
    return 数値
数値2 = 0
演奏中 = False
アラーム分 = 0
アラーム時 = 0
動作中 = False
動作中 = False
時 = 14
分 = 51
アラーム時 = 14
アラーム分 = 53
basic.show_string("Hour")
時 = 時刻セット(時, "時")
basic.show_string("Minute")
分 = 時刻セット(分, "分")
timeanddate.set24_hour_time(時, 分, 0)
basic.show_string(timeanddate.time(timeanddate.TimeFormat.HHMM2_4HR))
basic.show_string("Alm Hr")
アラーム時 = 時刻セット(アラーム時, "時")
basic.show_string("Alm min")
アラーム分 = 時刻セット(アラーム分, "分")
basic.show_string("" + convert_to_text(アラーム時) + ":" + convert_to_text(アラーム分))
演奏中 = False
動作中 = True

def on_forever():
    
    def on_numeric_time(hour, minute, second, month, day, year):
        global 演奏中, 動作中
        if hour == アラーム時 and minute == アラーム分:
            if 動作中:
                basic.show_icon(IconNames.EIGTH_NOTE)
                演奏中 = True
        else:
            演奏中 = False
            動作中 = True
    timeanddate.numeric_time(on_numeric_time)
    
    while 演奏中:
        music.start_melody(music.built_in_melody(Melodies.PRELUDE), MelodyOptions.ONCE)
        basic.pause(9000)
    basic.pause(500)
basic.forever(on_forever)
