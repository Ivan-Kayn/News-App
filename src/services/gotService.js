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
        const book = await this.getResource(`/articles/${id}/`);
        return this._transformArticle(book);
    }

    getAllBlogs = async () => {
        const res = await this.getResource(`/blogs?page=5&pageSize=10`);
        return res.map(this._transformCharacter);
    }

    getBlog = async (id) => {
        const character = await this.getResource(`/blogs/${id}`);
        return this._transformCharacter(character);
    }

    getAllReports = async () => {
        const res = await this.getResource(`/reports/`);
        return res.map(this._transformHouse);
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

    _transformCharacter = (char) => {
        return {
            id: this._extractId(char),
            name: this.isSet(char.name),
            gender: this.isSet(char.gender),
            born: this.isSet(char.born),
            died: this.isSet(char.died),
            culture: this.isSet(char.culture)
        };
    }

    _transformHouse = (house) => {
        return {
            id: this._extractId(house),
            name: this.isSet(house.name),
            region: this.isSet(house.region),
            words: this.isSet(house.words),
            titles: this.isSet(house.titles),
            ancestralWeapons: this.isSet(house.ancestralWeapons)
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
