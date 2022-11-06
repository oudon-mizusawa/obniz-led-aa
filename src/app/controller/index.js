import Obniz from "obniz"
import * as dotenv from "dotenv"
import { LedMatrix } from "../provider/led-matrix.provider"
import { DotAnims } from "../../constants/dot-anims"
import { DotImages } from "../../constants/dot-images"

dotenv.config()
const obniz = new Obniz(process.env.OBNIZ_ID, {
  access_token: process.env.OBNIZ_TOKEN,
})
obniz.onconnect = async () => {
  const matrix = new LedMatrix(obniz)
  matrix.animateLoop(DotAnims.CAT, 50, 400)
}
