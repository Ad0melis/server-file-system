import { file } from './lib/file.js';

const status = await file.create('users', 'petras.json', false);
console.log(status);
file.read();
file.update();
file.read();
file.delete();
file.read();
