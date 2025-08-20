import { randomUUID } from "node:crypto";

export default class UsersService {
    constructor() {
        this.users = [
            { id: randomUUID(), name: "João" },
            { id: randomUUID(), name: "Maria" },
            { id: randomUUID(), name: "Pedro" }
        ];
    }

    async listUsers() {
        return this.users;
    }

    async getUserById(id) {
        if (!id) throw new Error("ID do usuário não fornecido", { statusCode: 400 });
        if (!this.users.find(user => user.id === id)) throw new Error("Usuário não encontrado", { statusCode: 404 });

        return this.users.find(user => user.id === id);
    }

    async updateUser(user) {
        const { id, name, age } = user;

        this.users.map((u) => {
            if (u.id === id) {
                u.name = name || u.name;
                u.age = age || u.age;
                return u;
            }
        });

        return this.users.find(u => u.id === id);
    }

    async deleteUser(id) {
        if (!id) throw new Error("ID do usuário não fornecido");
        this.users = this.users.filter(user => user.id !== id);
    }
}