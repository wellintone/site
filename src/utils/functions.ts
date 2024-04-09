export function findWord(phrases: string, wordToFind: string) {
  var word = phrases.split(" ");
  for (var i = 0; i < word.length; i++) {
    if (word[i].includes(wordToFind)) {
      return word[i];
    }
  }
  return null;
}
