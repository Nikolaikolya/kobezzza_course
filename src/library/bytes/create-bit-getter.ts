import { getMessageError, keyMessages } from "./error-messages.js";
import { Byte } from "./index.js";
import { BitValue, IBitGetterResponse, IValidateParams } from "./interface.js";

export const createBitGetter = (uArray: Uint8Array): IBitGetterResponse => {
  const validateParams = (params: IValidateParams): string => {
    const { index, bitPosition } = params;

    if (!uArray[index] || bitPosition > 7 || bitPosition < 0) {
      if (!uArray[index]) {
        return keyMessages.notData;
      }

      if (bitPosition > 7 || bitPosition < 0) {
        return keyMessages.notIndexBit;
      }
    }

    return "";
  };

  return {
    get: (index: number, bitPosition: number): number => {
      const validateResult = validateParams({ index, bitPosition });

      if (validateResult) {
        return -1;
      }

      const itemValue = uArray[index];

      return Byte.getBit(itemValue, bitPosition);
    },

    set: (index: number, bitPosition: number, value: BitValue): void => {
      const validateResult = validateParams({ index, bitPosition });

      if (validateResult) {
        throw new Error(getMessageError(validateResult as string));
      }

      const itemValue = uArray[index];

      uArray[index] = Byte.setValueBitFromIndex(itemValue, bitPosition, value);
    },
  };
};
