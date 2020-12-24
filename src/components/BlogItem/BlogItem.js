import React from "react";
import "./BlogItem.scss";
import {Container, Row, Col} from "reactstrap";

const BlogItem = ({id, title, url, imageUrl, newsSite, summary, publishedAt, updatedAt}) => {
    const createData = (dateData) => {
        const date = new Date(dateData);

        return (`${date.getDay()}/${date.getMonth()}/${date.getFullYear()}`);
    }
    return (
        <div className="blogs">


            <div className="blog-card spring-fever" style={{background: `url(${imageUrl})`}}>
                <div className="title-content">
                    <h3><a target="_blank" href={url}>{title}</a></h3>
                    <div className="intro"><a target="_blank" href={url}>{newsSite}</a></div>
                </div>
                <div className="card-info">
                    {summary}
                    <div className="container">
                        <a target="_blank" href={url} className="btn">Read article</a>
                    </div>
                </div>
                <div className="utility-info">
                    <ul className="utility-list">

                        <li><span className="licon icon-dat"/> {createData(publishedAt)}</li>
                        <li><span className="licon icon-tag"/><a target="_blank" href={imageUrl}>Photo</a></li>
                    </ul>
                </div>
                <div className="gradient-overlay"/>
                <div className="color-overlay"/>
            </div>


        </div>
    )
}


export default BlogItem;