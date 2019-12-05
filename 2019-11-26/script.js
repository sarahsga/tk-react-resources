export function roundOffMarks(score) {
    let result = score;
    if(score >= 38) {
        const remainder = score % 5;
        if (remainder) {
            result += 5 - remainder;
        }
    }
    return result;
}
export function findLargestWord(sentence) {
    const words = sentence.split(/[,.\s!]/);
    let largestWord = words[0];
    for (let i = 1; i < words.length ; i++) {
        if (words[i].length > largestWord.length) {
            largestWord = words[i];
        }
    }
    return largestWord;
}
export function checkPalindrome(word) {
    if (word.split('').reverse().join('') === word) {
        return true;
    }
    return false;
}