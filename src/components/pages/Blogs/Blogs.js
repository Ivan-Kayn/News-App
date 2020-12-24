import React from "react";
import {connect} from "react-redux";
import gotService from "../../../services/gotService";
import {blogsLoaded} from "../../../actions";
import {Spinner} from "../../Spinner/Spinner";
import BlogItem from "../../BlogItem/BlogItem";
import {Col, Container, Row} from "reactstrap";
import "./Blogs.scss";


class Blogs extends React.Component {

    componentDidMount() {
        const service = new gotService();
        service.getAllBlogs().then(response => {
            this.props.blogsLoaded(response);
        })


    }
    render()
{
    if (this.props.blogs[0] === undefined) {
        return (
            <Spinner/>
        )
    } else {
        return (
            <div className="blogs">
                <Container>
                    <Row className={"justify-content-center"}><h1>Blogs about space</h1></Row>
                    <Row>
                        {
                            this.props.blogs.map(blogs => {
                                    return (
                                        <Col xl="6" className="mt-3 mb-2"
                                             key={blogs.id}
                                        >
                                            <BlogItem

                                                id={blogs.id}
                                                title={blogs.title}
                                                url={blogs.url}
                                                imageUrl={blogs.imageUrl}
                                                newsSite={blogs.newsSite}
                                                summary={blogs.summary}
                                                publishedAt={blogs.publishedAt}
                                                updatedAt={blogs.updatedAt}
                                            />
                                        </Col>
                                    )
                                }
                            )
                        }
                    </Row>
                </Container>
            </div>
        )
    }


}}

const mapStateToProps = (state) => {
    return {
        blogs: state.blogs,

    }
}

const mapDispatchToProps = {
    blogsLoaded: blogsLoaded
}

export default connect(mapStateToProps, mapDispatchToProps)(Blogs);