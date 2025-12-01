radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
    music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Dadadadum), music.PlaybackMode.LoopingInBackground)
    if (input.buttonIsPressed(Button.A)) {
        music.stopAllSounds()
    }
})
radio.setGroup(1)
