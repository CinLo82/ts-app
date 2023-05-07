// cinlo => [c,i,n,l,o] => string => string[];
// [c,i,n,l,o] => cinlo => string[] => string;

export function parseStr(input: string): string[];
export function parseStr(input: string[]): string;
export function parseStr(input: number): boolean;


/*
export function parseStr(input: string | string[]): string | string[] {
  if(Array.isArray(input)) {
    return input.join(''); // estariamos retornando un string
  } else {
    return input.split(''); // retornamos un string[]
  }
}
*/

export function parseStr(input: unknown): unknown {
  if(Array.isArray(input)) {
    return input.join(''); // estariamos retornando un string
  } else if (typeof input === 'string'){
    return input.split(''); // retornamos un string[]
  } else if (typeof input === 'number'){
    return true; // retornamos un boolean
  }
}

const rtaArray = parseStr('cinlo');
//if(Array.isArray(rtaArray)) {
  rtaArray.reverse();
//}
console.log('rtaArray','cinlo =>', rtaArray);

const rtaStr = parseStr(['c','i','n','l','o']);
//if(typeof rtaStr === 'string') {
  rtaStr.toLowerCase();
//}
console.log('rtaStr', "['c','i','n','l','o'] => ",rtaStr);

const rtaBoolean = parseStr(12);
