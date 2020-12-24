import './App.scss';
import React from "react";
import gotService from "./services/gotService";
import {connect} from "react-redux";
import {articlesLoaded} from "./actions/index";
import {Sidebar} from "./components/Sidebar/Sidebar";
import Articles from "./components/pages/Articles/Articles";
import Blogs from "./components/pages/Blogs/Blogs";
import {Container, Row, Col} from 'reactstrap';
import {Switch, Route} from "react-router";
import Reports from "./components/pages/Reports/Reports";

class App extends React.Component {


    render() {

        return (
            <div>
                <Container fluid={true} className="pl-0 ml-0" style={{height: "100vh"}}>
                    <Row>
                        <Col sm={2} className="p-0 m-0">
                            <Sidebar/>
                        </Col>
                        <Col sm={10} style={{backgroundColor: "#f1f1f1", overflowY: "scroll", height: "100vh"}}
                             className="p-0 m-0">
                            <Container fluid={true}>
                                <Row className="overflow-auto">
                                    <Col className="m-0 p-0">
                                        <Switch>
                                            <Route path="/articles/">
                                                <Articles/>
                                            </Route>
                                            <Route path="/blogs/">
                                                <Blogs/>
                                            </Route>
                                            <Route path="/reports/">
                                                <Reports />
                                            </Route>
                                        </Switch>
                                    </Col>
                                </Row>
                            </Container>
                        </Col>
                    </Row>
                </Container>
            </div>
        )

    }
}

const mapStateToProps = (state) => {
    return {
        articles: state.articles,
    }
}
const mapDispatchToProps = {
    articlesLoaded: articlesLoaded,
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
