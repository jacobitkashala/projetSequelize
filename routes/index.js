const { testConnection,
    destroy } = require('../controller/controllerFamille');

const {
    createUser,
    viewUser,
    editUser,
    viewUserById,
    destroyUser,
    postLogin
} = require('../controller/controllerUser');


const router = (app) => {
    app.route('/user')
        .post(createUser)
        .get(viewUser);
    app.route('/user/:id')
        .put(editUser)
        .get(viewUserById)
        .delete(destroyUser);
    
    app.route('/user_login')
    .post(postLogin)
}

    ;

module.exports = router;