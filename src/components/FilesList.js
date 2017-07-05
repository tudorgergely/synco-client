import React from 'react';
import {Button, Card, List} from "semantic-ui-react";

export default class FilesList extends React.Component {
    static propTypes = {
        items: React.PropTypes.array.isRequired,
        onDownloadClick: React.PropTypes.func.isRequired
    };

    render() {
        return <List celled horizontal>
            {
                this.props.items.map(({id, fileMetadata}, i) =>
                    <List.Item key={i} style={{wordWrap: 'break-word'}}>
                        <List.Content>
                            <Card>
                                <Card.Content>
                                    <Card.Header>{fileMetadata.name}</Card.Header>
                                    <Card.Meta>{fileMetadata.size + ' kb'}</Card.Meta>
                                    <Card.Description>
                                    </Card.Description>
                                </Card.Content>
                                <Card.Content extra>
                                    <div className='ui two buttons'>
                                        <Button basic onClick={() => this.props.onDownloadClick(this.props.items[i])}>Download</Button>
                                    </div>
                                </Card.Content>
                            </Card>
                        </List.Content>
                    </List.Item>
                )
            }
        </List>
    }
}