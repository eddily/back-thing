while (true) {
    console.log(input.rotation(Rotation.Roll))
    if (input.rotation(Rotation.Roll) > -78) {
        light.showAnimation(light.rainbowAnimation, 500)
        music.baDing.playUntilDone()
    } else {
        light.clear()
        music.stopAllSounds()
    }
    
}
