import * as dotenv from "dotenv"
import { Peripherals } from "../../constants/peripherals"

dotenv.config()

export class LedMatrix {
  constructor(obniz) {
    this.obniz = obniz
    this.peripheral = obniz.wired(Peripherals.LED_MATRIX, {
      gnd: 0,
      vcc: 1,
      sda: 2,
      scl: 3,
    })
  }

  draw(dots) {
    this.peripheral.dots(dots)
  }

  animate(anim, interval) {
    anim.forEach((dots) => {
      this.draw(dots)
      this.obniz.wait(interval)
    })
    this.peripheral.clear()
  }

  animateLoop(anim, loopCount, interval) {
    for (let i = 0; i < loopCount; i++) {
      this.animate(anim, interval)
    }
  }
}
