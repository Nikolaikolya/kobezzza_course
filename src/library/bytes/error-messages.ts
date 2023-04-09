export const ERROR_SET_BIT = "Failed to set bit";

export const keyMessages = {
  notData: "not-data",
  notIndexBit: "not-index-bit",
};

const errorMessage = {
  [keyMessages.notData]: "There is no data at this index in the array",
  [keyMessages.notIndexBit]:
    "The passed parameter bit index must not be greater than 7 and not less than 0",
};

export const getMessageError = (key: string): string | undefined => {
  if (errorMessage[key]) {
    return errorMessage[key];
  }
};
