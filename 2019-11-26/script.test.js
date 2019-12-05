import { roundOffMarks, findLargestWord, checkPalindrome } from "./hackerrank";
test('roundOffMarks abc xyz', () => {
    expect(roundOffMarks(66)).toEqual(70);
    expect(roundOffMarks(90)).toEqual(90);
    expect(roundOffMarks(32)).toEqual(32);
    expect(typeof roundOffMarks(66)).toEqual("number");
    const random = parseInt(Math.random() * 100);
    expect(typeof roundOffMarks(random)).toEqual("number")
});
test('findLargestWord :: finds the largest word in a sentence', () => {
    expect(findLargestWord("This is the largest sentence of my life")).toEqual("sentence");
    expect(findLargestWord("I am Sarah... I am verryy happy!")).toEqual("verryy");
})
// Test Driven Development
test('checkPalidrome :: checks if a word is a palindrome or not :: palindrom is a word whose reverse is the same as the word', () => {
    expect(checkPalindrome("maham")).toEqual(true);
    expect(checkPalindrome("ghjkjhgfyujn")).toEqual(false);
})