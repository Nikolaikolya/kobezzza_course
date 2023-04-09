import { BitValue } from "./interface.js";

export class Byte {
  /**
   * Setting a bit by index in a number to the left
   * @param {number} value - Original number
   * @param {number} index - Index bit
   * @return {number} - The resulting number
   */
  static setBitToIndexLeft(value: number, index: number): number {
    return value << index;
  }

  /**
   * Setting a bit by index in a number to the right
   * @param {number} value - Original number
   * @param {number} index - Index bit
   * @return {number} - The resulting number
   */
  static setBitToIndexRight(value: number, index: number): number {
    if (value === -1) return -1;
    return value >> index;
  }

  /**
   * Bit position check
   * @param {number} value - Original number
   * @param {number} index - Index bit
   * @return {boolean} - The resulting check
   */
  static isSetBit(value: number, index: number): boolean {
    return (value & this.setBitToIndexLeft(1, index)) !== 0;
  }

  /**
   * Get bit from index
   * @param {number} value - Original number
   * @param {number} index - Index bit
   * @return {boolean} - The resulting
   */
  static getBit(value: number, index: number): number {
    return (value >> index) & 1;
  }

  /**
   * Setting bit to 1 by index
   * @param {number} value - Original number
   * @param {number} index - Bit position
   * @return {number} - The resulting number
   */
  static setBit(value: number, index: number): number {
    return value | this.setBitToIndexLeft(1, index);
  }

  /**
   * Setting bit to value by index
   * @param {number} value - Original number
   * @param {number} index - Bit position
   * @param {BitValue} bitValue - Value bit to 1 or 0
   * @return {number} - The resulting number
   */
  static setValueBitFromIndex = (
    value: number,
    index: number,
    bitValue: BitValue,
  ): number => {
    return (
      this.resetBit(value, index) | this.setBitToIndexLeft(bitValue, index)
    );
  };

  /**
   * Bit inversion by index
   * @param {number} value - Original number
   * @param {number} index - Bit position
   * @return {number} - The resulting number
   */
  static inversionBit(value: number, index: number): number {
    return value ^ this.setBitToIndexLeft(1, index);
  }

  /**
   * Reset bit to 0 by index
   * @param {number} value - Original number
   * @param {number} index - Bit position
   * @return {number} - The resulting number
   */
  static resetBit(value: number, index: number): number {
    return value & ~this.setBitToIndexLeft(1, index);
  }
}
