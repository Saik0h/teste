import UrlService from "./url.service.js";

export default class UrlController {
    constructor() {
        this.service = new UrlService();
    }

    shortenUrl = (req, res) => {
        const { longUrl } = req.body;
        const shortUrl = this.service.shorten(longUrl);
        return res.status(201).json({ shortUrl });
    }

    redirectToURL = (req, res) => {
        const { shortUrl } = req.params;
        const longUrl = this.service.redirect(shortUrl);
        return res.redirect(longUrl);
    }

}

