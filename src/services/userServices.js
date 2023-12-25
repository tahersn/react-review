import axios from "axios";
const url="http://localhost:3000/user";

export const getUsers = async () => {
    try {
        const response = await axios.get(url+"/getUsers");
        return response.data;
    } catch (error) {
        console.error(error);
    }
    }
