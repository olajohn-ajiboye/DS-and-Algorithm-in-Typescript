// Problems  statement
// Giving a list of parentheses of different types (both closing and opening). Check if we have complete pairs.
// Example => giving these types of parentheses { [ (  .
// If you have a list like { [ ( ) ] } , confirm if they are a complete pair. That is if each opening bracket has a closing parentheses

/* Solution using a stack 

- Transverse the list of parentheses
- When you encounter an opening parenthesis push on to the stack
- Continue traversing, as soon as you get a closing pair. Pop off the last Item on stack

*/

enum Opening {
  bracket = '(',
  curly = '{',
  angle = '[',
}

enum Closing {
  bracket = ')',
  curly = '}',
  angle = ']',
}

function isPair(open: string, close: string) {
  if (open === '(' && close === ')') return true;
  else if (open === '{' && close === '}') return true;
  else if (open === '[' && close === ']') return true;
  else return false;
}

function isOpening(p: string) {
  if (p === '(' || p === '{' || p === '[') return true;
}

function isClosing(p: string) {
  if (p === ')' || p === '}' || p === ']') return true;
}

function isCompleteBrackets(p: Array<string>) {
  const stack = new Stack<string>();

  for (let i = 0; i < p.length - 1; i++) {
    const pt = p[i];
    // if opening push in Stack
    if (isOpening(pt)) {
      stack.push(pt);
    }
    else {
        if(stack.isEmpty()){ return  false}
      const lastBracket = stack.peek().data;
      if (isPair(lastBracket, pt)) {
        stack.pop();
      }
    }
  }
}
