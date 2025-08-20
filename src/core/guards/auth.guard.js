import AuthService from '../../modules/auth/auth.service.js';
const authService = new AuthService();

function authGuard(req, res, next) {
    const token = req.cookies.token;
    if (!token) return res.status(401).json({ message: 'Token não fornecido' });

    const payload = authService.verify(token);
    if (!payload) return res.status(401).json({ message: 'Token inválido' });

    req.user = payload;
    next();
}


export default authGuard;