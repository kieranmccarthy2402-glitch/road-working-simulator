controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    info.changeLifeBy(-1)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    info.changeScoreBy(1)
})
info.onLifeZero(function () {
    game.gameOver(false)
    game.setGameOverMessage(false, "You actually worked?")
})
scene.setBackgroundImage(assets.image`Pot hole`)
info.setScore(0)
game.splash("CLICK A TO STARE", "Click B to work")
music.play(music.createSong(hex`0078000408010104001c00100500640000041e000004000000000000000000000000000a040004700000000400091d1e2022242527292a04000800091d1e2022242527292a08000c00091d1e2022242527292a0c001000091d1e2022242527292a10001400091d1e2022242527292a14001800091d1e2022242527292a18001c00091d1e2022242527292a1c002000091d1e2022242527292a`), music.PlaybackMode.LoopingInBackground)
