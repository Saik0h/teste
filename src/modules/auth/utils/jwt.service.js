export default class JwtService {
    constructor() {
        this.SECRET = process.env.JWT_SECRET || 'A_VERY_LARGE_RANDOMIC_AND_AWESOME_KEY';
        this.expiresIn = '1h';
    }

    sign(payload) {
        return jwt.sign(payload, this.SECRET, { expiresIn: this.expiresIn, ...options });
    }

    verify(token) {
        try {
            return jwt.verify(token, this.SECRET);
        } catch (error) {
            return null;
        }
    }
}
