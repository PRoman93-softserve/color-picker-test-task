import axios from "axios"
import {ColorType} from "../accets/types";

const instance = axios.create({
    baseURL: "http://localhost:3004/color"
})
export const api = {
    getColor() {
        return instance.get(``).then(data => data.data)
    },
    changeColor(color: ColorType) {
        return instance.post(``, color)
    }
}