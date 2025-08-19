export default function updateUserDto(id, body) {
    const { nome, idade } = body;

    if (!id) throw new Error("ID do usuário é obrigatório")
    if (!nome && !idade)
        throw new Error("Pelo menos um campo (nome ou idade) deve ser fornecido para atualização")

    const user = this.service.obterUsuarioPorId(id);

    if (idade && typeof idade !== 'number')
        throw new Error("Idade deve ser um número")

    if (!idade) {
        idade = user.idade;
    }

    if (!nome) {
        nome = user.nome;
    }

    return { id, nome, idade };
}
