import { randomUUID } from "node:crypto";

export default class UsuarioService {
    constructor() {
        this.usuarios = [
            { id: randomUUID(), nome: "João" },
            { id: randomUUID(), nome: "Maria" },
            { id: randomUUID(), nome: "Pedro" }
        ];
    }

    listarUsuarios() {
        return this.usuarios;
    }

    obterUsuarioPorId(id) {
        if (!id) throw new Error("ID do usuário não fornecido", { statusCode: 400 });
        if (!this.usuarios.find(usuario => usuario.id === id)) throw new Error("Usuário não encontrado", { statusCode: 404 });

        return this.usuarios.find(usuario => usuario.id === id);
    }

    criarUsuario(usuario) {
        const newUser = { id: randomUUID(), ...usuario };
        this.usuarios.push(newUser);
        return newUser;
    }

    atualizarUsuario(usuario) {
        const { id, nome, idade } = usuario;

        this.usuarios.map((u) => {
            if (u.id === id) {
                u.nome = nome || u.nome;
                u.idade = idade || u.idade;
                return u;
            }
        });

        return this.usuarios.find(u => u.id === id);
    }

    deletarUsuario(id) {
        if (!id) throw new Error("ID do usuário não fornecido");
        this.usuarios = this.usuarios.filter(usuario => usuario.id !== id);
    }
}