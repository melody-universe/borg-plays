import { SingleByteMemoryRegister } from "../../memory/memory-register.js";
import { memory } from "../../memory/memory.js";

export class LineYCompareRegister implements SingleByteMemoryRegister {
  offset = 0xff45;
  name = "LYC";

  get value() {
    return memory.readByte(this.offset);
  }

  set value(byte: number) {
    memory.writeByte(this.offset, byte);
  }
}

export const lineYCompareRegister = new LineYCompareRegister();
