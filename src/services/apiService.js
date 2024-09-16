import axios from "axios";

// chỉ chứa các function business
const BASE_URL = 'https://dummyjson.com';

// function get detail product
export const detailProduct = async (id)=>{
    try {
        const rs = await axios.get(`${BASE_URL}/products/${id}`);
        return rs.data;
    } catch (error) {
        console.log(error);
        return {};
    }
}