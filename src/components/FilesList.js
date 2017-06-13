import React from 'react';
import {Button, Card, List} from "semantic-ui-react";

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
                            <Card>
                                <Card.Content>
                                    <Card.Header>{fileMetadata.name}</Card.Header>
                                    <Card.Meta>{fileMetadata.size + ' kb'}</Card.Meta>
                                    <Card.Description>
                                        Steve wants to add you to the group <strong>best friends</strong>
                                    </Card.Description>
                                </Card.Content>
                                <Card.Content extra>
                                    <div className='ui two buttons'>
                                        <Button basic>Download</Button>
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