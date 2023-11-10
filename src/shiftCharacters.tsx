
const ALPHABET_UPPERCASE = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const ALPHABET_LOWERCASE = 'abcdefghijklmnopqrstuvwxyz';
const NUMBERS = '0123456789';
const SPECIAL_CHARACTERS = ' ;.,';

const shiftCharacters = (input: string, shift: number): string => {
  const alphabet = ALPHABET_UPPERCASE + ALPHABET_LOWERCASE + SPECIAL_CHARACTERS + NUMBERS;
  const alphabetLength = alphabet.length;
  return input
    .split('')
    .map((char) => {
      const isUppercase = char.toUpperCase() === char;
      const isLowercase = char.toLowerCase() === char;
      const isNumber = !isNaN(Number(char));
      const isSpecialCharacter = SPECIAL_CHARACTERS.includes(char);
      let charSet = '';

      if (isUppercase) {
        charSet = ALPHABET_UPPERCASE;
      } else if (isLowercase) {
        charSet = ALPHABET_LOWERCASE;
      } else if (isNumber) {
        charSet = NUMBERS;
      } else if (isSpecialCharacter) {
        charSet = SPECIAL_CHARACTERS;
      }

      const charIndex = charSet.indexOf(char);
      if (charIndex !== -1) {
        const newIndex = (charIndex + shift) % alphabetLength;
        return charSet[newIndex];
      } else {
        return char;
      }
    })
    .join('');
};

export default shiftCharacters;