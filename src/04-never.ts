const withoutEnd = () => {
  while (true) {
    console.log('nunca pares de aprender');
  }
}

const fail = (message: string) => {
  throw new Error(message);

}

const example = (input: unknown) => {
  if (typeof input === 'string') {
    return 'Es un string';
  } else if (Array.isArray(input)) {
    return 'Es un array';
  }
  return fail('not match');
}
console.log(example('Hola'));
console.log(example([2,3,4]));
console.log(example(1234));
console.log(example('Hola desp del fail'));




