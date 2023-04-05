import db from '../models/index';

let getToken = (req, res) => {
    return res.send({
        token: 'test123'
    });
}

let getAllUser = async (req, res) => {
    let data = await db.User.findAll({
        logging: (sql) => {
            console.log(sql)
        },
    });
    return res.send(data);
}

let checkLoginUser = (req, res) => {
    return res.send({
        token: 'test123'
    });
}

export default {
    getToken: getToken,
    getAllUser: getAllUser
} ;