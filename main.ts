basic.forever(function () {
    basic.showNumber(input.temperature())
    if (input.temperature() > 34) {
        for (let index = 0; index < 3; index++) {
            basic.showString("T.ALTA")
        }
    } else {
        if (input.temperature() < 26) {
            for (let index = 0; index < 3; index++) {
                basic.showString("T.BAJA")
            }
        } else {
            for (let index = 0; index < 3; index++) {
                basic.showString("T.NORMAL")
            }
        }
    }
})
