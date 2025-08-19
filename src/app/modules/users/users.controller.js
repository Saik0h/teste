import UsuarioService from "./users.service.js";
import createUserDto from "./dto/createUserDto.js";
import updateUserDto from "./dto/updateUserDto.js";

export default class UsuariosController {
    constructor() {
        this.service = new UsuarioService();
    }

    getAllUsers = (req, res) => {
        console.log(req.user)
        return res.status(200).json(this.service.listarUsuarios());
    }

    getUserById = (req, res) => {
        const { id } = req.params;
        return res.status(200).json(this.service.obterUsuarioPorId(id));
    }

    createUser = (req, res) => {
        const dto = createUserDto(req.body);
        return res.status(201).json(this.service.criarUsuario(dto));
    }

    updateUser = (req, res) => {
        const { id } = req.params;
        const dto = updateUserDto(id, req.body);
        return res.status(200).json(this.service.atualizarUsuario(dto));
    }

    deleteUser = (req, res) => {
        const { id } = req.params;
        this.service.deletarUsuario(id);
        return res.status(204).send();
    }
}



