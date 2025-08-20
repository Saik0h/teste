export default class CookieService {
    getCookie(req, name) {
        const cookie = req.cookies[name];
        return cookie ? JSON.parse(cookie) : null;
    }

    setCookie(res, name, value, options = {}) {
        const cookie = JSON.stringify(value);
        res.cookie(name, cookie, options);
    }

    deleteCookie(res, name) {
        res.cookie(name, '', { maxAge: 0 });
    }
}
