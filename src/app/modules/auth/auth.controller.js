import AuthService from "./auth.service.js";

export default class AuthController {
    constructor() {
        this.service = new AuthService();
    }

    register = (req, res) => {
        console.log(req.user)
        return res.status(200).json(this.service.register(req.body));
    }

    login = (req, res) => {
        const { email, password } = req.body;
        return res.status(200).json(this.service.login(email, password));
    }

    refresh = (req, res) => {
        return res.status(201).json(this.service.refreshToken(req.user.id));
    }

    logout = (req, res) => {
        return res.status(200).json(this.service.logout(req.user.id));
    }
}



