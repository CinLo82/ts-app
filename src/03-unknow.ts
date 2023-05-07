let anyVar: any;
anyVar = true;
anyVar = undefined;
anyVar = null;
anyVar = 2;
anyVar = 'fds';
anyVar = [];
anyVar = {};

let isNew: boolean = anyVar;

anyVar.doSomething();
anyVar.touppercase();


let unknowVar: unknown;
unknowVar = true;
unknowVar = undefined;
unknowVar = null;
unknowVar = 2;
unknowVar = 'fds';
unknowVar = [];
unknowVar = {};

// unknowVar.doSomething();
if(typeof unknowVar === 'string'){
  unknowVar.toUpperCase();
}

if(typeof unknowVar === 'boolean'){
let isNewV2: boolean = unknowVar;
}

const parse = (str: string): unknown => {
  return JSON.parse(str);
}
