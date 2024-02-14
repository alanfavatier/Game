const jwt = require('jsonwebtoken');
const { User } = require('../db');
require("dotenv").config();

async function loginUser(req, res) {
    const { email, password } = req.body;

    try {
        // Buscar al usuario en la base de datos por su nombre de usuario
        const user = await User.findOne({ where: { email } });
        if (!user) {
            return res.status(401).json({ error: 'Credenciales inválidas' });
        }

        // Verificar si la contraseña coincide
        if (password !== user.password) {
            return res.status(401).json({ error: 'Credenciales inválidas' });
        }

        // Generar un token JWT
        const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });

        // Devolver el token como respuesta
        res.status(201).json({ user, token });
    } catch (error) {
        res.status(500).json({ error: 'Error interno del servidor' });
    }
}

module.exports = {
    loginUser
};