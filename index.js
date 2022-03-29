import { file } from './lib/file.js';

// const createFileStatus1 = await file.create('users', 'petras.json', {
//     name: 'Petras',
//     age: 99,
//     isMarried: true
// });
// console.log(createFileStatus1);

// const createFileStatus2 = await file.create('users', 'maryte.json', {
//     name: 'Maryte',
//     age: 87,
//     isMarried: false
// });
// console.log(createFileStatus2);

const listStatus = await file.list('users');
console.log(listStatus);

// const readFileStatus1 = await file.read('users', 'petras.json');
// console.log(readFileStatus1);

// const readFileStatus2 = await file.read('users', 'maryte.json');
// console.log(readFileStatus2);

// const updateFileStatus = await file.update('users', 'petras.json', {
//     name: 'Petras',
//     age: 99
// });
// console.log(updateFileStatus);

// const readFileStatus2 = await file.read('users', 'petras.json');
// console.log(readFileStatus2);

// const updateFileStatus2 = await file.update('users', 'petras.json', {
//     name: 'Petras'
// });
// console.log(updateFileStatus2);

// const readFileStatus3 = await file.read('users', 'petras.json');
// console.log(readFileStatus3);

// const deleteFileStatus = await file.delete('users', 'petras.json');
// console.log(deleteFileStatus);

// const readFileStatus4 = await file.read('users', 'petras.json');
// console.log(readFileStatus4);