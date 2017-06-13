import React from 'react';
import FilesList from "../components/FilesList";
import {connect} from "react-redux";

function mapStateToProps(state) {
    return {
        files: state.files.results
    };
}

function mapDispatchToProps() {
    return {

    };
}

class Results extends React.Component {
    render() {
        return (
            <FilesList items={this.props.files}/>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Results);