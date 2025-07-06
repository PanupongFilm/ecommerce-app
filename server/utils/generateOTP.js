import crypto from 'crypto'

export default function generateOTP() {
    try {
        return crypto.randomInt(100000, 1000000).toString();

    } catch (error) {
        console.error("Error from /server/utils/rabdomOTP.js: " + error);
        throw error;
    }

};