import React from "react";
import {Grid, Header, List} from "semantic-ui-react";
import {RecentActivitySection} from "../components/RecentActivitySection";
import "./RecentActivity.css";
import {connect} from "react-redux";
import {loadTimeline} from "../redux/ducks/timeline";

function mapStateToProps(state) {
    return {
        sections: state.timeline.timeline
    }
}

function mapDispatchToProps(dispatch) {
    return {
        loadTimeline() {
            dispatch(loadTimeline());
        }
    };
}

class RecentActivity extends React.Component {
    componentDidMount() {
        this.props.loadTimeline();
    }

    render() {
        return <Grid>
            <Grid.Row>
                <Grid.Column width="2">
                </Grid.Column>
                <Grid.Column width="12">
                    <List relaxed className="RecentActivity">
                        {
                            this.props.sections.map((section, i) => {
                                if (section.items.length > 0) {
                                    return (
                                        <List.Item key={i} className="RecentActivity__section">
                                            <Header as='h5' className="RecentActivity__section__name">
                                                {section.name}
                                            </Header>
                                            <RecentActivitySection items={section.items}/>
                                        </List.Item>
                                    )
                                } else {
                                    return null;
                                }
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

export default connect(mapStateToProps, mapDispatchToProps)(RecentActivity);