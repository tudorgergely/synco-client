import React from "react";
import {Container, Divider, Grid, Header, List, Segment} from "semantic-ui-react";
import {RecentActivitySection} from "../components/RecentActivitySection";
import "./RecentActivity.css";

export class RecentActivity extends React.Component {
    static propTypes = {
        sections: React.PropTypes.array.isRequired
    };

    render() {
        return <Grid>
            <Grid.Row>
                <Grid.Column width="2">
                </Grid.Column>
                <Grid.Column width="12">
                    <List relaxed className="RecentActivity">
                        {
                            this.props.sections.map((section, i) => {
                                return (
                                    <List.Item key={i} className="RecentActivity__section">
                                        <Header as='h5' className="RecentActivity__section__name">
                                            {section.name}
                                        </Header>
                                        <RecentActivitySection items={section.items}/>
                                    </List.Item>
                                )
                            })
                        }
                    </List>
                </Grid.Column>
                <Grid.Column width="2">
                </Grid.Column>
            </Grid.Row>
        </Grid>
    }

    renderListItem = () => {
        return null;
    };
}