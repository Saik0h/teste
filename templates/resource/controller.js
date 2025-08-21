import AppService from "./app.service.js";

export default class UsersController {
    constructor() {
        this.service = new AppService();
    }

    getHello = (req, res) => {
        return res.status(200).json(this.service.getHello());
    }

}



