import { letter, number, symbols } from "./constants";

const mappedCodes = {
  ...letter,
  ...number,
  ...symbols
};

/**
 * Generate morse code
 * @param {string} input 
 */
export const generateCode = (input = "") => {
  // const regex = /^[a-z0-9]$/g

  // TODO: better converter
  // do regex to check if there's alphabet so we convert from
  // alphabet to morse

  // otherwise if there's no alphabet/number/punctuations (except space)
  // we should convert from morse to alphabet
  const formattedInput = input.split("").map(alp => mappedCodes[alp.toUpperCase()]).join("/");

  return formattedInput;
}