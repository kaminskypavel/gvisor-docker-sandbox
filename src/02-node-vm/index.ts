import vm from 'vm';

console.log('Starting Process');
vm.runInNewContext('this.constructor.constructor("return process")().exit()');
console.log('Never gets executed.');
