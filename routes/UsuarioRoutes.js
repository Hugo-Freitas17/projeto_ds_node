const express = require("express");

const routes = express.Routes();

const usuarioController = require("../controllers/UsuarioController");

router.post(
  "/usuarios",
  usuarioController.criarUsuario
);

router.get(
  "/usuarios",
  usuarioController.consultarUsuarios
);

router.post(
  "/usuario",
  usuarioController.loginUsuario
);
