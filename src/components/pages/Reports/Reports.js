import React from "react";
import {connect} from "react-redux";


const Reports = () => {

}


const mapStateToProps = (state) => {
    return {
        something: state.something,

    }
}

const mapDispatchToProps = () => {
    return {
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Reports);