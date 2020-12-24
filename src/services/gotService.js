export default class GotService {
    constructor() {
        this._apiBase = 'https://test.spaceflightnewsapi.net/api/v2/';
    }

    getResource = async (url) => {
        const res = await fetch(`${this._apiBase}${url}`,
            {
                "method": "GET",
                "headers": {
                    "accept": "application/json",
                }
            }
        );

        if (!res.ok) {
            throw new Error(`Could not fetch ${url}` +
                `, received ${res.status}`);
        }
        return await res.json();
    }

    getAllArticles = async (start, limit) => {
        const res = await this.getResource(`/articles?_limit=${limit}&_start=${start}`);
        return(res.map(obj => {
            return this._transformArticle(obj);
        }));
    }

    getArticle = async (id) => {
        const article = await this.getResource(`/articles/${id}/`);
        return this._transformArticle(article);
    }

    getAllBlogs = async () => {
        const res = await this.getResource(`/blogs?_limit=5`);
        return res.map(this._transformBlogs);
    }

    getBlog = async (id) => {
        const character = await this.getResource(`/blogs/${id}`);
        return this._transformBlogs(character);
    }

    getAllReports = async () => {
        const res = await this.getResource(`/reports?_limit=18`);
        return res.map(this._transformReports);
    }

    getReport = async (id) => {
        const house = await this.getResource(`/reports/${id}/`);
        return this._transformHouse(house);
    }

    isSet(data) {
        if (data) {
            return data
        } else {
            return 'no data :('
        }
    }

    _extractId = (item) => {
        const idRegExp = /\/([0-9]*)$/;
        return item.url.match(idRegExp)[1];
    }

    _transformBlogs = (blog) => {
        return {
            id: this.isSet(blog.id),
            title: this.isSet(blog.title),
            url: this.isSet(blog.url),
            imageUrl: this.isSet(blog.imageUrl),
            newsSite: this.isSet(blog.newsSite),
            summary: this.isSet(blog.summary),
            publishedAt: this.isSet(blog.publishedAt),
            updatedAt: this.isSet(blog.updatedAt),
        };
    }

    _transformReports = (report) => {
        return {
            id: this.isSet(report.id),
            title: this.isSet(report.title),
            url: this.isSet(report.url),
            imageUrl: this.isSet(report.imageUrl),
            newsSite: this.isSet(report.newsSite),
            summary: this.isSet(report.summary),
            publishedAt: this.isSet(report.publishedAt),
            updatedAt: this.isSet(report.updatedAt),
        };
    }

    _transformArticle = (article) => {
        return {
            id: this.isSet(article.id),
            title: this.isSet(article.title),
            url: this.isSet(article.url),
            imageUrl: this.isSet(article.imageUrl),
            newsSite: this.isSet(article.newsSite),
            summary: this.isSet(article.summary),
            publishedAt: this.isSet(article.publishedAt),
            updatedAt: this.isSet(article.updatedAt),
            featured: this.isSet(article.featured),
            launches: this.isSet(article.launches),
            events: this.isSet(article.events),
        };
    }
}
