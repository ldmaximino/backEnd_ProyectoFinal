import { dirname, join } from "path";
import { fileURLToPath } from "url";
export const __dirname = join(dirname(fileURLToPath(import.meta.url)),'..');

export const numberFormat = (number) => {
    return number.toFixed(2);
}

/* Bcrypt */
import bcrypt from 'bcrypt';

export const hashearPass = (password) => {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8))
};

export const verifyPassHasheada = (password, passwordHasheada) => {
    return bcrypt.compareSync(password, passwordHasheada);
};
//

/**
 * Receives the date and time of the last connection and returns true if more than xx minutes 
 * have passed since that date, or false otherwise
 * @param {*} lastConnection Date
 * @param {*} minutesLimit Number
 * @returns boolean
 */
export const isLastConnectionValid = (lastConnection, minutesLimit) => {
    const timeLimit = minutesLimit * 60 * 1000; //convert minutes to milliseconds
    const currentTime = new Date();
    const diffTime = currentTime - lastConnection;
    return diffTime > timeLimit; //return true or false
};