import React from "react";
import {connect} from "react-redux";


const Blogs = () => {

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

export default connect(mapStateToProps, mapDispatchToProps)(Blogs);