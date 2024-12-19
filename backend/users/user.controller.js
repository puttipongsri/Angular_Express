import UserService from "./user.service.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import config from "../config.js";

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
        const username =   req.body.username;
        const password = req.body.password;
        const handpassword = await bcrypt.hash(password, 10);
        const result = await new UserService().insertUser(username,handpassword);
        res.status(201).send({
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
export const login = async (req, res) => {
    try {
      const { username, password } = req.body;
  
      const user = await new UserService().getUserByUsername(username);
  
      if (!user) {
        return res.status(401).send({
          status: "fail",
          code: 0,
          message: "Invalid username or password",
          cause: "",
          result: "",
        });
      }
      const isPasswordValid = await bcrypt.compare(password, user.password);
  
      if (!isPasswordValid) {
        return res.status(401).send({
          status: "fail",
          code: 0,
          message: "Invalid username or password",
          cause: "",
          result: "",
        });
      } else {
        const token = jwt.sign(
          { id: user.id, username: user.username },
          config.app.jwtkey,
          { expiresIn: "1h" }
        );
  
        return res.status(200).send({
          status: "success",
          code: 1,
          message: "",
          cause: "",
          result: { token: token },
        });
      }
    } catch (error) {
      console.error(error);
      return res.status(500).send({
        status: "error",
        code: 0,
        message: "Internal Server Error",
        cause: error.message,
        result: "",
      });
    }
  };