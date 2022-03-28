import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const file = {};

/**
 * 
 * @param {*} dir 
 * @param {*} fileName 
 * @returns 
 */
file.fullPath = (dir, fileName) => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);
    return path.join(__dirname, '../.data', dir, fileName);
}

/**
 * Asinchronine funkcija, kuri sukuria norima faila nurodytoje vietoje ir iraso pradini turini.
 * @param {string} dir Folderio pavadinimas, kuriame bus kuriamas naujas failas (`.data` folderyje).
 * @param {string} fileName Norimo sukurti failo pavadinimas su pletiniu.
 * @param {Object} content Norimas irasyti turinys (JS objektas).
 * @param {string} content.name Vartotojo vardas.
 * @param {number} content.age Vartotojo amzius.
 * @returns {Promise<boolean>} Statusas, ar pavyko sukurti faila.
 */
file.create = async (dir, fileName, content) => {
    let fileDescriptor = null;
    try {
        const filePath = file.fullPath(dir, fileName);
        fileDescriptor = await fs.open(filePath, 'wx');
        await fs.writeFile(fileDescriptor, JSON.stringify(content));
        return true;
    } catch (error) {
        console.log(error);
        return false;
    } finally {
        if (fileDescriptor) {
            await fileDescriptor.close();
        }
    }
}

/**
 * Nuskaitomas failas ir grazinamas jo **tekstinis** turinys.
 * @param {string} dir Folderio pavadinimas, kuriame bus kuriamas naujas failas (`.data` folderyje).
 * @param {string} fileName Norimo sukurti failo pavadinimas su pletiniu.
 * @returns {Promise<boolean>} Statusas, ar pavyko perskaityti faila.
 */
file.read = (dir, fileName) => {
    console.log('Skaitomas failas...');
    // kai yra klaida
    return [true, 'Konkretus klaidos pranesimas'];
    return [true, 'Nerastas failas'];
    return [true, 'Failo skaitymo metu ivyko kritine sistemos klaida'];

    // kai nera klaidos
    return [false, { name: 'Petras' }];
    return [false, false];

}

file.update = (dir, fileName, content) => {
    console.log('Atnaujinamas failas...');
}

file.delete = (dir, fileName) => {
    console.log('Trinamas failas...');
}

export { file }