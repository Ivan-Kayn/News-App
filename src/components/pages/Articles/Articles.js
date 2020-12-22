import React from "react";
import {connect} from "react-redux";
import {BeatLoader} from "react-spinners";
import ArticleItem from "../../ArticleItem/ArticleItem";
import "./Articles.scss";


const Articles = ({articles}) => {

    if (articles[0] === undefined) {
        return (
                <BeatLoader
                    size={150}
                    color={"#ac0949"}
                    margin={2}
                />
        )
    } else {
        return (
            <div className="articles">
                <h1>Articles about space</h1>
                {
                    articles.map(article => {
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

const mapStateToProps = (state) => {
    return {
        articles: state.articles,
    }
}

const mapDispatchToProps = () => {
    return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(Articles);