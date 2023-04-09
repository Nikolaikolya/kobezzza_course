import { createBitGetter } from "../library/bytes/create-bit-getter.js";

export const lessonOneStart = () => {
  const bitGetter = createBitGetter(new Uint8Array([0b1110, 0b1101]));

  console.log(bitGetter.get(0, 0)); // 0

  bitGetter.set(1, 1, 1);

  console.log(bitGetter.get(1, 1)); // 1
};
