import './App.scss';
import React from "react";
import gotService from "./services/gotService";
import {connect} from "react-redux";
import {articlesLoaded} from "./actions/index";
import {Sidebar} from "./components/Sidebar/Sidebar";
import Articles from "./components/pages/Articles/Articles";

import {Container, Row, Col} from 'reactstrap';
import {Switch, Route} from "react-router";

class App extends React.Component {

    service = new gotService(); // creating new service for fetch

    componentDidMount() {

        this.service.getAllArticles(0, 5).then(result => { // adding articles from fetch to redux store
            this.props.articlesLoaded(result);

        });


    }


    render() {

        return (
            <div>
                <Container fluid={true} className="pl-0 ml-0" style={{backgroundColor: "black", height: "100vh"}}>
                    <Row>
                        <Col sm={2} style={{backgroundColor: "black"}} className="p-0 m-0">
                            <Sidebar/>
                        </Col>
                        <Col sm={10} style={{backgroundColor: "blue", overflowY: "scroll", height: "100vh"}}
                             className="p-0 m-0">
                            <Container fluid={true}>
                                <Row className="overflow-auto">
                                    <Col style={{backgroundColor: "#f1f1f1"}}>
                                        <Switch>
                                            <Route path="/articles/">
                                                <Articles/>
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
