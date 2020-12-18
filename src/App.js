import './App.css';
import React from "react";
import gotService from "./services/gotService";
import {connect} from "react-redux";



class App extends React.Component {

    service = new gotService();



    render() {
        return (
            <div className="App">
                Hello world!
            </div>
        );
    }


}

const mapStateToProps = ({items}) => {
    return {
        items
    }
}
const mapDispatchToProps = {

};
export default connect(mapStateToProps, mapDispatchToProps)(App);
