// cinlo => [c,i,n,l,o] => string => string[];
// [c,i,n,l,o] => cinlo => string[] => string;

function parseStr(input: string | string[]): string | string[] {
  if(Array.isArray(input)) {
    return input.join(''); // estariamos retornando un string
  } else {
    return input.split(''); // retornamos un string[]
  }
}
const rtaArray = parseStr('cinlo');
if(Array.isArray(rtaArray)) {
  rtaArray.reverse();
}
console.log('rtaArray','cinlo =>', rtaArray);

const rtaStr = parseStr(['c','i','n','l','o']);
if(typeof rtaStr === 'string') {
  rtaStr.toLowerCase();
}
console.log('rtaStr', "['c','i','n','l','o'] => ",rtaStr);
