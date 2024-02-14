// authMiddleware.js

const authMiddleware = (req, res, next) => {
    // Aquí debes verificar si el usuario está autenticado
    // Por ejemplo, podrías verificar si hay un token de autenticación válido en el encabezado de autorización
    const token = req.headers.authorization;
    if (!token) {
        return res.status(401).json({ error: 'Unauthorized' });
    }
    // Lógica para verificar y decodificar el token, y establecer req.user si es válido
    // ...
    next(); // Llama a next() si el usuario está autenticado
};

module.exports = authMiddleware;