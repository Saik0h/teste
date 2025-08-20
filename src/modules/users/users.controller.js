import UsersService from "./users.service.js";
import updateUserDto from "./dto/updateUserDto.js";

export default class UsersController {
    constructor() {
        this.service = new UsersService();
    }

    getAllUsers = (req, res) => {
        return res.status(200).json(this.service.listUsers());
    }

    getUserById = (req, res) => {
        const { id } = req.params;
        return res.status(200).json(this.service.getUserById(id));
    }

    updateUser = (req, res) => {
        const { id } = req.params;
        const dto = updateUserDto(id, req.body);
        return res.status(200).json(this.service.updateUser(dto));
    }

    deleteUser = (req, res) => {
        const { id } = req.params;
        this.service.deleteUser(id);
        return res.status(204).send();
    }
}



