export default class AuthService {

    login(longUrl) {
        const shortUrl = randomUUID();
        this.urls.push({ longUrl, shortUrl });
        return shortUrl;
    }

    register(userData) {
        const user = { id: randomUUID(), ...userData };
        this.users.push(user);
        return user;
    }

    logout(userId) {
        const userIndex = this.users.findIndex(user => user.id === userId);
        if (userIndex === -1) throw new Error("Usuário não encontrado", { statusCode: 404 });
        this.users.splice(userIndex, 1);
        return { message: "Logout bem-sucedido" };
    }

    refreshToken(userId) {
        const user = this.users.find(user => user.id === userId);
        if (!user) throw new Error("Usuário não encontrado", { statusCode: 404 });
        // Lógica para gerar um novo token
        const newToken = randomUUID();
        user.token = newToken;
        return { token: newToken };
    }

}