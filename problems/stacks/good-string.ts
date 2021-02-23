function goodString(string: string) {
  const strings: Array<string> = string.split('');
  const stack: string[] = [];
  let l = stack.length;
  const isLowerCase = (str: string) => string === str.toLowerCase();
  const isUpperCase = (str: string) => string === str.toUpperCase();

  strings.forEach((str) => {
    if (!l) {
      stack.push(str);
    }
    // they are same so valid
    else if (str.toLowerCase() === stack[0].toLowerCase()) {
      if (isLowerCase(stack[0]) && isUpperCase(str)) stack.pop();
      else if (isUpperCase(stack[0]) && isLowerCase(str)) stack.pop();
      else {
        stack.push(str);
      }
    } else {
      stack.push(str);
    }
  });
  return stack.join('');
}
