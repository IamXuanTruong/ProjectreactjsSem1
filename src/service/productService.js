import  * as http from "../http/http"
const urlApi = "http://localhost:3000/data";

export const getAll = async (page) => {
    try {
        const res = await http.get(`${urlApi}?_page=${page}&_limit=8`)
        return res;
    } catch (error) {
        console.log(error)
    }
}
export const getShop = async (page) => {
    try {
        const res = await http.get(`${urlApi}?_page=${page}&_limit=9`)
        return res;
    } catch (error) {
        console.log(error)
    }
}


export const getPro = async (page) => {
    try {
        const res = await http.get(`${urlApi}?_page=${page}&_limit=4`)
        return res;
    } catch (error) {
        console.log(error)
    }
}

export const filterByKeyName = async (keyWord) => {
    try {
        const res = await http.get(`${urlApi}?productName_like=${keyWord}&_limit=4`);
        return res;
    } catch (err) {
        alert(err);
    }
}

export const detailsProducts = async (id) => {
    try {
        const res = await http.get(`${urlApi}/${id}`);
        return res;
    } catch (error) {
        console.log(error);
    }
}

export const findByCate_id = async (id) => {
    try {
        const res = await http.get(`${urlApi}?cate_id=${id}&_limit=9`);
        return res;
    } catch (error) {
        console.log(error);
    }
}
export const getShops = async (page) => {
    try {
        const res = await http.get(`${urlApi}?_page=${page}&_limit=6`)
        return res;
    } catch (error) {
        console.log(error)
    }
}

