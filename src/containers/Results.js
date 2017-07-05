import React from 'react';
import FilesList from "../components/FilesList";
import {connect} from "react-redux";
import {downloadFile} from "../redux/ducks/files";
import {Grid} from "semantic-ui-react";

function mapStateToProps(state) {
    return {
        files: state.files.results
    };
}

function mapDispatchToProps(dispatch) {
    return {
        downloadFile: file => {
            console.log(file);
            dispatch(downloadFile(file));
        }
    };
}

class Results extends React.Component {
    render() {
        return (
            <Grid>
                <Grid.Row>
                    <Grid.Column width="2">
                    </Grid.Column>
                    <Grid.Column width="12">
                        <FilesList items={this.props.files} onDownloadClick={(file) => this.props.downloadFile(file)}/>
                    </Grid.Column>
                    <Grid.Column width="2">
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Results);