const articlesLoaded = (newArticles) => {
    return {
        type: 'ARTICLES_LOADED',
        payload: newArticles
    };
};

const blogsLoaded = (newBlogs) => {
    return {
        type: 'BLOGS_LOADED',
        payload:newBlogs
    }
}

const reportsLoaded = (newReports) => {
    return {
        type: 'REPORTS_LOADED',
        payload: newReports,
    }
}

export {
    articlesLoaded,
    blogsLoaded,
    reportsLoaded,

};