export function shortText(text: string, limitChar = 10) {
  if (text.length && text.length > limitChar) {
    const limited = text.split('').splice(0, limitChar);

    for (let index = limited.length - 1; index >= 0; index--) {
      if (limited[index] === ' ') {
        limited.splice(index, 1);
      } else {
        index = 0;
      }
    }

    return limited.join('') + '...';
  } else {
    return text;
  }
}
