// const db = require("../models");
const db = require('../utils');
const faker = require('faker');
const bcrypt = require('bcrypt');
const uuidv4 = require('uuidv4');
 
// const { v4: uuidv4 } = require("uuid");

const jwt = require('jsonwebtoken')
const { compare } = require('bcrypt');
const User = require("../models/user");


async function hasUser(pwd) {
    const salt = await bcrypt.genSalt(10);

    return bcrypt.hash(pwd, salt);

}


async function createUser(req, res) {
    const {
        id_user,
        prenom_user,
        nom_user,
        postnom_user,
        email,
        password,
        status,
        avatar } = req.body;

    const newUser = new User(
        {
            email,
            avatar,
            status,
            id_user,
            nom_user,
            prenom_user,
            postnom_user,
            password: bcrypt.hashSync(password, 10),

        })
    const savedUser = await newUser
        .save()
        .then(res => { res.status(200).json({ message: "register succes" }) })
        .catch(err => {
            console.log("error:", err);
            res.status(500).json({ error: "cannont register " + err });
        })
}

async function viewUser(req, res) {
    User
        .findAll()
        .then(users => res.send(users))
        .catch((err) => console.log(err))
}

async function viewUserById(req, res) {
    const id_user = req.params.id;
    console.log(id_user)

    try {
        const user = await User.findOne({ where: { id_user } });
        return res.json(user);
    } catch (err) {
        console.log(err)
    }

}

async function destroyUser(req, res) {
    const id_user = req.params.id;
    console.log(id_user)
    try {
        const user = await User.findOne({ where: { id_user } });
        await user.destroy()
        return res.send({ message: "suppression" }).status(200);
    } catch (err) {
        console.log(err)
        return res.send({ message: err }).status(500)

    }
}

async function editUser(req, res) {
    const id_user = req.params.id;
    const {
        prenom_user,
        nom_user,
        postnom_user,
        email,
        password,
        status,
        avatar } = req.body;

    try {
        const user = await User.findOne({ where: { id_user: id_user } })
        user.id_user = id_user;
        user.email = email;
        user.status = status;
        user.avatar = avatar;
        user.nom_user = nom_user;
        user.password = password;
        user.prenom_user = prenom_user;
        user.postnom_user = postnom_user;

        await user.save()
        return res.send({ message: "mise a jour" }).status(200);

    } catch (err) {
        console.log(err)
        return res.send({ message: err }).status(500)
    }
}


async function postLogin(req, res) {
    const {
        email,
        password } = req.body;

    try {

        const userWithEmail = await User.findOne({ where: { email } });

        console.log(userWithEmail);

        if (!userWithEmail) {
            return res.status(400). json({ message: "Email or password does not match!" });
        }
        const isPasswordValid = await compare(password, userWithEmail.password);

        if (!isPasswordValid) {
            return res.status(400).json({ message: "Email or password does not match!" });
        }
        const jwtToken = jwt.sign(
            { id: userWithEmail.id_user,email:userWithEmail.email },
            process.env.JWT_SECRET
        );
        return res.json({ message: "Welcome Back!", token: jwtToken });

    } catch (error) {
        return res.send({ message: "error ", error }).status(500)
    }
}

module.exports = {
    viewUser: viewUser,
    editUser: editUser,
    postLogin: postLogin,
    createUser: createUser,
    destroyUser: destroyUser,
    viewUserById: viewUserById
}