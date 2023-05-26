const express = require("express");
const router = express.Router();

// Rota para exibir a página inicial
router.get("/", (req, res) => {
    res.send('Hello');
});

module.exports = router;
