import { checkPalindrome } from "./hackerrank"

test('checkPalindrome - it should return a boolean', () => {
    expect(typeof checkPalindrome("talat")).toEqual("boolean");
});

test('checkPalindrome - it should tell whether a word is a boolean or not', () => {
    expect(checkPalindrome("talat")).toEqual(true);
    expect(checkPalindrome("areeba")).toEqual(false);
    expect(checkPalindrome("jamila")).toEqual(false);
    expect(checkPalindrome("Maham")).toEqual(true);
    expect(checkPalindrome("ali")).toEqual(false);
});