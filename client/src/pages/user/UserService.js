import ConstantList from "../../appConfig.js";
import axios from "axios";

const API_PATH_USER = "/api/user";
const API_PATH_ROLE = "/api/role";

export const checkUserLogin = (user) => {
    let url = ConstantList.API_ENDPOINT + API_PATH_USER;
    return axios.post(url, user);
};

export const getAllRoles = () => {
    let url = ConstantList.API_ENDPOINT + API_PATH_ROLE + '/all';
    return axios.get(url);
};

export const getUserById = id => {
    let url = ConstantList.API_ENDPOINT + API_PATH_USER + id;
    return axios.get(url);
};

export const saveUser = user => {
    return axios.post(ConstantList.API_ENDPOINT + API_PATH_USER, user);
};
