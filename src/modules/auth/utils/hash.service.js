import bcrypt from 'bcryptjs';

export default class HashService {

    hashSync(password) {
        const salt = bcrypt.genSaltSync(10);
        return bcrypt.hashSync(password, salt);
    }

    comparePasswords(password, hashedPassword) {
        return bcrypt.compareSync(password, hashedPassword);
    }
}
