import express from "express";
import cors from "cors";
import indexRouter from "./index.routes.js";



const app = express();
const port = process.env.PORT;


app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", indexRouter);

app.get("/test", (req, res) => {
  res.status(200).send({
    status: "success",
    code: 1,
    message: "",
    cause: "",
    result: "",
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
app.use(cors({
  origin: 'http://localhost:3000'
}));