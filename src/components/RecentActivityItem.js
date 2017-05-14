import React from 'react';
import Moment from 'react-moment';
import {Grid, Icon} from 'semantic-ui-react';


export default class RecentActivityItem extends React.Component {
    static propTypes = {
        action: React.PropTypes.object.isRequired
    };

    render() {
        const {action} = this.props;
        return (
            <Grid stretched>
                <Grid.Row>
                    <Grid.Column width="3">
                        <Grid>
                            <Grid.Row>
                                <Grid.Column width="3">
                                    {this.renderActionIcon(action.type)}
                                </Grid.Column>
                                <Grid.Column width="6">
                                    <Moment format="DD/MM/YY">{action.date}</Moment>
                                </Grid.Column>
                                <Grid.Column width="7">
                                    {
                                        action.locations.map((location, i) => {
                                            return <span key={i}>
                                                {this.renderLocationIcon(location)}
                                            </span>
                                        })
                                    }
                                </Grid.Column>
                            </Grid.Row>
                        </Grid>
                    </Grid.Column>
                    <Grid.Column width="13">
                        {action.content}
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        );
    }

    renderActionIcon(action) {
        const iconsMap = {
            'upload': <Icon name="upload" size="large"/>,
            'download': <Icon name="download" size="large"/>,
            'search': <Icon name="search" size="large"/>
        };
        return iconsMap[action];
    }

    renderLocationIcon(location) {
        const locationsMap = {
            'drive': <Icon name="google"/>,
            'dropbox': <Icon name="dropbox"/>,
            'hdd': <Icon name="disk outline"/>
        };
        return locationsMap[location];
    }
}