import { flagRegister } from "../constants";
import C8 from "../types/c8";
import { getX } from "./common";

export default function rightShiftVx(c8: C8, code: number) {
  const x = getX(code);
  const currentValue = c8.registers[x];
  c8.registers[flagRegister] = currentValue & 0x1;
  c8.registers[x] = currentValue >> 1;
}
