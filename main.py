while True:
    print(input.rotation(Rotation.ROLL))
    if input.rotation(Rotation.ROLL) > -78:
        light.show_animation(light.rainbowAnimation, 500)
        music.ba_ding.play_until_done()
    else:
        light.clear()
        music.stop_all_sounds()
        