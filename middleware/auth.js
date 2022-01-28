import jwt from "jsonwebtoken";
import { secret } from "../secret";

const auth = async (req, res, next) => {
    try {
        const token = req.headers.authorization.split(" ")[1];

        let decodedData;

        if(token) {
            decodedData = jwt.verify(token, secret);

            req.userId = decodedData?.id;
        }

        next();
    } catch (error) {
        console.log(error);
    }
}

export default auth;