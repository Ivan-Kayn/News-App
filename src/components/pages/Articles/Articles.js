import React from "react";
import {connect} from "react-redux";
import ArticleItem from "../../ArticleItem/ArticleItem";
import "./Articles.scss";
import {Spinner} from "../../Spinner/Spinner";
import gotService from "../../../services/gotService";
import {articlesLoaded} from "../../../actions";

class Articles extends React.Component {

    service = new gotService(); // creating new service for fetch

    componentDidMount() {

        this.service.getAllArticles(0, 5).then(result => { // adding articles from fetch to redux store
            this.props.articlesLoaded(result);

        });


    }

    render() {

        if (this.props.articles[0] === undefined) {
            return (
                <Spinner/>
            )
        } else {
            return (
                <div className="articles">
                    <h1>Articles about space</h1>
                    {
                        this.props.articles.map(article => {
                            console.log(article.id)
                            return (
                                <ArticleItem
                                    key={article.id}
                                    id={article.id}
                                    title={article.title}
                                    url={article.url}
                                    imageUrl={article.imageUrl}
                                    newsSite={article.newsSite}
                                    summary={article.summary}
                                    publishedAt={article.publishedAt}
                                    updatedAt={article.updatedAt}
                                    featured={article.featured}
                                    launches={article.launches}
                                />
                            )

                        })}
                </div>
            )
        }
    }

}

const mapStateToProps = (state) => {
    return {
        articles: state.articles,
    }
}

const mapDispatchToProps = {
    articlesLoaded: articlesLoaded,
}

export default connect(mapStateToProps, mapDispatchToProps)(Articles);