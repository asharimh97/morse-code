import { letter, number, symbols } from "./constants";

const mappedCodes = {
  ...letter,
  ...number,
  ...symbols
};

const reversedCodes = Object.entries(mappedCodes).reduce((obj, curr) => {
  const [key, value] = curr;

  obj[value] = key;

  return obj;
}, {});

const generateMorse = (input) => {
  const formattedInput = input
                          .split("")
                          .map(alp => {
                            if (alp) {
                              return mappedCodes[alp.toUpperCase()] || "#"
                            }

                            return "";
                          })
                          .join("/");

  return formattedInput;
}

const translateMorse = (input) => {
  console.log(input);
  const formattedInput = input
                          .split("/")
                          .map(alp => {
                            if (alp) {
                              return reversedCodes[alp] || "#"
                            }

                            return "";
                          })
                          .join("");

  return formattedInput;
}

/**
 * Generate morse code
 * @param {string} input 
 */
export const generateCode = (input = "") => {
  const regex = /[a-z0-9,\?\\!/\(\)&:;+=_$@]+/g
  // TODO: better converter
  // do regex to check if there's alphabet so we convert from
  // alphabet to morse

  if (input.match(regex))
    return generateMorse(input);

  // otherwise if there's no alphabet/number/punctuations (except space)
  // we should convert from morse to alphabet
  return translateMorse(input);
}