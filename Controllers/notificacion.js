const { response, request } = require("express");

// elementos para funcionamiento de SMS con TWILIO.
const accountSid = process.env.accountSid;
const authToken = process.env.authToken;
const number = process.env.number;
const client = require("twilio")(accountSid, authToken);
const notificacionPost = async (req, res = response) => {
  // realizacion de peticion a API de TWILIO

  const { numero, mensaje } = req.body;
  try {
    client.messages
      .create({
        body: mensaje,
        to: "+503" + numero,
        from: number,
      })
      .then((message) => console.log(message.sid))
      .done(
        res.json({
          msg: "Exito",
        })
      );
  } catch {
    res.json({
      msg: "ERROR EN ENVIO DE SMS",
    });
  }
};

const notificacionPatch = (req, res = response) => {
  res.json({
    msg: "patch API -notificacionPatch",
  });
};

module.exports = {
  notificacionPost,
  notificacionPatch,
};
