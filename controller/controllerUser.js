// const db = require("../models");
const db = require('../utils');
const bcrypt = require('bcrypt')
const uuid = require('uuidv4')
const User = require("../models/user");
const jwt = require('jsonwebtoken')
const { compare } = require('bcrypt')

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

    res.send().status(200);
    const newUser = new User(
        {
            id_user,
            prenom_user,
            nom_user,
            postnom_user,
            email,
            password: bcrypt.hashSync(password, 10),
            status,
            avatar
        })
    const savedUser = await newUser.save().catch(err => {
        console.log("error:", err);
        res.status(500).json({ error: "cannont register " });
    })
    // db.sync().then((result) => {
    //     return User.create({
    //         id_user: id_user,
    //         prenom_user: prenom_user,
    //         nom_user: nom_user,
    //         postnom_user: postnom_user,
    //         email: email,
    //         password: hasUser(password),
    //         status: status,
    //         avatar: avatar
    //     })

    // }).catch(error => console.log(error))
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


async function login(req, res) {
    const {
        email,
        password } = req.body;
    const userWithEmail = await User.findOne({ where: { email } })
        .catch((err) => {
            console.log("error:", err)
        })

    if (!userWithEmail) {
        return res.status(400).json({ message: "Email or password does not match!" })
    }
    const isPasswordValid = await compare(password, userWithEmail.password);

    if (!isPasswordValid) {
        return res.status(400).json({ message: "Email or password does not match!" })

    }
    const jwtTokens = jwt.sign(
        { id: userWithEmail.id_user }
    )

}

module.exports = {
    viewUser: viewUser,
    editUser: editUser,
    createUser: createUser,
    destroyUser: destroyUser,
    viewUserById: viewUserById,
    login: login
}