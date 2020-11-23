// https://github.com/patriksimek/vm2#vm

import { VM } from 'vm2';
new VM().run('this.constructor.constructor("return process")().exit()');
// Throws ReferenceError: process is not defined
