import UsuarioService from '../users/users.service.js';
import JwtService from './utils/jwt.service.js';
import CookieService from './utils/cookie.service.js';
import HashService from './utils/hash.service.js';

export default class AuthService {
    constructor() {
        this.cookieService = new CookieService();
        this.jwt = new JwtService();
        this.hash = new HashService();
        this.userService = new UsuarioService();
        this.users = this.userService.users || [];
    }

    async login(email, password) {
        const user = this.users.find(user => user.email === email);
        if (!user) throw new Error("Usuário não encontrado", { statusCode: 404 });
        const isValid = this.hash.comparePasswords(password, user.password);
        if (!isValid) throw new Error("Senha incorreta", { statusCode: 401 });
        const token = await this.jwt.sign({ id: user.id });
        return { token };
    }

    async register(userData) {
        const userAlreadyExists = this.users.find(user => user.email === userData.email);
        if (userAlreadyExists) throw new Error("Usuário já existe", { statusCode: 409 });

        const user = { id: randomUUID(), ...userData };

        this.users.push(user);

        const token = await this.jwt.sign({ id: user.id });

        return { token };
    }

    async logout(userId) {
        const userIndex = this.users.findIndex(user => user.id === userId);
        if (userIndex === -1) throw new Error("Usuário não encontrado", { statusCode: 404 });
        this.users.splice(userIndex, 1);
        return { message: "Logout bem-sucedido" };
    }

    async refreshToken(userId) {
        const user = this.users.find(user => user.id === userId);
        if (!user) throw new Error("Usuário não encontrado", { statusCode: 404 });
        const newToken = await this.jwt.sign({ id: user.id });
        user.token = newToken;
        return { token: newToken };
    }

}