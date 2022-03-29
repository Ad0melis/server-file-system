import { file } from './lib/file.js';
// const users = ['Petras', 'Maryte', 'Jonas', 'Ona'];

const users = [
    { name: 'Petras', age: 99, isMarried: true },
    { name: 'Maryte', age: 87, isMarried: false },
    { name: 'Jonas', age: 66, isMarried: false },
    { name: 'Ona', age: 54, isMarried: true },
];


for (const user of users) {
   const fileName = user.name.toLocaleLowerCase()+'.json';
   const status = await file.create('users', fileName, user)
   console.log(fileName, status);
}

