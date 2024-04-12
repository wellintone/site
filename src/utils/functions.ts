export function findWord(phrases: string, wordToFind: string) {
  var word = phrases.split(" ");
  for (var i = 0; i < word.length; i++) {
    if (word[i].includes(wordToFind)) {
      return word[i];
    }
  }
  return null;
}

export function debounce(cb: any, delay: number = 1000) {
  let timeout: ReturnType<typeof setTimeout>;
  return (...args: any) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      cb(...args);
    }, delay);
  };
}

export const throttle = (fn: any, delay: number) => {
  let lastTime = 0;
  let id = 0;
  console.log("CALLED subito");

  return (...args: any) => {
    const now = new Date().getTime();
    id++;
    if (now - lastTime < delay) return;
    lastTime = now;
    fn(...args);
  };
};
