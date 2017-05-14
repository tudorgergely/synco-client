import React from 'react';
import {Icon, Input, Segment, List} from "semantic-ui-react";

export default class SearchInput extends React.Component {
    render() {
        return (
            <span>
                <Input className='icon' placeholder='Search...' fluid style={{padding: 0}}>
                    <input />
                    <Icon name='search'/>
                </Input>
                <div style={{position: 'absolute', marginTop: 0, width: '100%', left: 0, padding: '0 14px'}}>

                <Segment>
                      <List divided relaxed>
                        <List.Item>
                          <List.Icon name='github' size='large' verticalAlign='middle'/>
                          <List.Content>
                            <List.Header as='a'>Semantic-Org/Semantic-UI</List.Header>
                            <List.Description as='a'>Updated 10 mins ago</List.Description>
                          </List.Content>
                        </List.Item>
                        <List.Item>
                          <List.Icon name='github' size='large' verticalAlign='middle'/>
                          <List.Content>
                            <List.Header as='a'>Semantic-Org/Semantic-UI-Docs</List.Header>
                            <List.Description as='a'>Updated 22 mins ago</List.Description>
                          </List.Content>
                        </List.Item>
                        <List.Item>
                          <List.Icon name='github' size='large' verticalAlign='middle'/>
                          <List.Content>
                            <List.Header as='a'>Semantic-Org/Semantic-UI-Meteor</List.Header>
                            <List.Description as='a'>Updated 34 mins ago</List.Description>
                          </List.Content>
                        </List.Item>
                        <List.Item>
                          <List.Icon name='github' size='large' verticalAlign='middle'/>
                          <List.Content>
                            <List.Header as='a'>Semantic-Org/Semantic-UI-Meteor</List.Header>
                            <List.Description as='a'>Updated 34 mins ago</List.Description>
                          </List.Content>
                        </List.Item>
                        <List.Item>
                          <List.Icon name='github' size='large' verticalAlign='middle'/>
                          <List.Content>
                            <List.Header as='a'>Semantic-Org/Semantic-UI-Meteor</List.Header>
                            <List.Description as='a'>Updated 34 mins ago</List.Description>
                          </List.Content>
                        </List.Item>
                      </List>
                </Segment>
                </div>
            </span>
        );
    }
}