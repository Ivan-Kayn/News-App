import React, {useState} from "react";
import "./ArticleItem.scss";

const ArticleItem = ({id, title, url, imageUrl, newsSite, summary, publishedAt, updatedAt, featured, launches}) => {
    const createData = (dateData) => {
        const date = new Date(dateData);
        return( `${date.getDay()}/${date.getMonth()}/${date.getFullYear()}`);
    }
    return (
        <div className="news">
            <div className="container mt-5">
                <div className="row">
                    <div className="col-12 p-0">
                        <article className="blog-card">
                            <div className="blog-card__background">
                                <div className="card__background--wrapper">
                                    <div className="card__background--main"
                                         style={{backgroundImage: `url('${imageUrl}')`}}>
                                        <div className="card__background--layer"/>
                                    </div>
                                </div>
                            </div>
                            <div className="blog-card__head">
                                  <span className="date__box">
                                    <span className="date__day">11</span>
                                    <span className="date__month">JAN</span>
                                  </span>
                            </div>
                            <div className="blog-card__info">
                                <h5>{title}</h5>
                                <p>
                                    <a href="#" className="icon-link mr-3">{createData(publishedAt)}</a>
                                </p>
                                <p>{summary}</p>
                                <a href={url} target="_blank" className="btn btn--with-icon">READ MORE</a>
                            </div>
                        </article>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default ArticleItem;