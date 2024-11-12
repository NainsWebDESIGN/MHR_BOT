import Rock from "../models/rockModel.js";
import { Form } from "../service/dataForm.js";

export const getRocks = async (req, res) => {
    const rocks = await Rock.GETALL();
    res.send(Form(true, rocks));
    res.end();
}