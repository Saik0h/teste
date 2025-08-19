import { randomUUID } from "node:crypto";

export default class UrlService {
    constructor() {
        this.urls = [];
    }

    shorten(longUrl) {
        const shortUrl = randomUUID();
        this.urls.push({ longUrl, shortUrl });
        return shortUrl;
    }

    redirect(shortUrl) {
        const url = this.urls.find(url => url.shortUrl === shortUrl);
        if (!url) throw new Error("URL não encontrada", { statusCode: 404 });
        return url.longUrl;
    }
}