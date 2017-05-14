import React from 'react';
import {List} from "semantic-ui-react";

export default class FilesList extends React.Component {
    static propTypes = {
        items: React.PropTypes.array.isRequired
    };

    render() {
        return <List divided relaxed>
            {
                this.props.items.map(({id, fileMetadata}, i) =>
                    <List.Item key={i}>
                        <List.Content>
                            <List.Header>{fileMetadata.name}</List.Header>
                            <List.Description>{fileMetadata.size} kb</List.Description>
                            <a href={"http://localhost:8080/api/export/" + id}>Download</a>
                        </List.Content>
                    </List.Item>
                )
            }
        </List>
    }
}