import UserService from "./user.service.js";

export const getUsers = async (req, res) => {
    try {
        const result = await new UserService().getUsers();
        if (result.length > 0) {
            res.status(200).send({
                status: "success",
                code: 1,
                message: "",
                cause: "",
                result: result,
            });
        } else {
            res.status(200).send({
                status: "success",
                code: 1,
                message: "No data found",
                cause: "",
                result: "",
            });
        }
    } catch (error) {
        console.error(error);
        res.status(500).send({
            status: "error",
            code: 0,
            message: "Internal Server Error",
            cause: error.message,
            result: "",
        });
    }
};  
export const insertUser = async (req, res) => {
    try {
        const user = {
            username: req.body.username,
            password: req.body.password
        }
        const result = await new UserService().insertUser(user);
        res.status(200).send({
            status: "success",
            code: 1,
            message: "",
            cause: "",
            result: result,
        });
    } catch (error) {
        console.error(error);
        res.status(500).send({
            status: "error",
            code: 0,
            message: "Internal Server Error",
            cause: error.message,
            result: "",
        });
    }
};