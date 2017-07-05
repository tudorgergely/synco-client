import React from 'react';
import {Menu, Input, Icon, Button, Grid} from 'semantic-ui-react';
import './NavBar.css';
import SearchInput from "../components/SearchInput";
import Search from "./Search";
import {Settings} from "./Settings";

export class NavBar extends React.Component {
    render() {
        return <Menu borderless size="large" fluid widths="16" fixed="top">
            <Menu.Item>
                <Grid style={{width: '100%'}}>
                    <Grid.Row>
                        <Grid.Column width="2">
                            Synco
                        </Grid.Column>
                        <Grid.Column width="12">
                            <Search/>
                        </Grid.Column>
                        <Grid.Column width="2">
                            <Button.Group>
                                <Button basic icon>
                                    <Icon name="upload"/>
                                </Button>
                                <Settings/>
                            </Button.Group>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Menu.Item>
        </Menu>
    }
}
