export default function createUserDto(body) {
    const { nome, idade } = body;
    if (!nome) {
        throw new Error("Nome do usuário é obrigatório");
    }

    if (!idade && idade !== 0) {
        throw new Error("Idade do usuário é obrigatória");
    }

    if (typeof idade !== 'number') {
        throw new Error("Idade deve ser um número");
    }

    return { id: randomUUID(), nome, idade };
}