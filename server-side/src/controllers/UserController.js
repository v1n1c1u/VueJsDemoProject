const userService = require('../service/UserService');

module.exports = class UserController {
    async login(req, res) {
        const { email, password } = req.body;

        if (!email || !password) {
            return res
                .status(401)
                .json({
                    message: "Invalid e-mail or password.",
                    name: "Authentication"
                });
        }

        try {
            var authenticatedUser = await userService.validateUser(email, password);
            return res.json(authenticatedUser);

        } catch (error) {
            console.log(error);
            return res.status(401).json({ message:error.message })
        }
    }

    async logout(req, res) {
        try {
            var signedOut = await userService.logout(req.headers.authorization);

            if (signedOut) {
                return res
                    .status(200)
                    .json({ message: "Successfull logout" });
            }

            return res
                .status(400)
                .json({ message: "User was not logged." });

        } catch (error) {
            console.log(error);
            return res.status(400).json({ message:error.message })
        }
    }

    async findAll(req, res) {
        try {
            let userService = userService.findAll();
            return res.json(userService);
        } catch (error) {
            console.log(error);
            return res.json({ message:error.message })
        }
    }

    async findById(req, res) {
        try {
            var id = req.params.id;

            let user = userService.findById(id);
            return res.json(user);

        } catch (error) {
            console.log(error);
            return res.json({ message:error.message })
        }
    }
}