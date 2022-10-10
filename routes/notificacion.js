const { Router } = require('express');

const {notificacionPost,
    notificacionPatch} = require('../Controllers/notificacion');

const router = Router();

// Endpoint de envio de notificacion.
router.post('/EnvioSMS', notificacionPost);

router.patch('/', notificacionPatch);

module.exports = router;