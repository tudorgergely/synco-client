import React from 'react';
import {Input} from "semantic-ui-react";

export default class SearchBar extends React.Component {
    static propTypes = {
        onTextChange: React.PropTypes.func.isRequired
    };

    render() {
        return <Input icon='search' placeholder='Search...'
                      fluid
                      onChange={this.props.onTextChange}
        />;
    }
}