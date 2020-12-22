const articlesLoaded = (newArticles) => {
    return {
        type: 'ARTICLES_LOADED',
        payload: newArticles
    };
};

export {
    articlesLoaded,

};