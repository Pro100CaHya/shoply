import express from "express";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

const PORT = process.env.PORT || 8000;

const app = express();

app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());

const startServer = () => {
    try {
        app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
    } catch (error) {
        console.log(error);
    }
}

export {
    startServer
}