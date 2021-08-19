const { testConnection,
    destroy } = require('../controller/controllerFamille');
const { allUser } = require('../controller/controllerUser');


const router = (app) => {
    app.route('/')
        .get(allUser);
}


module.exports = router;