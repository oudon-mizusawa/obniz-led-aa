import Obniz from "obniz"
import * as dotenv from "dotenv"
import { Peripherals } from "../constants/peripherals"

dotenv.config()
const obniz = new Obniz(process.env.OBNIZ_ID)

obniz.onconnect = async () => {
  const matrix = obniz.wired(Peripherals.LED_MATRIX, {
    gnd: 0,
    vcc: 1,
    sda: 2,
    scl: 3,
  })
}
