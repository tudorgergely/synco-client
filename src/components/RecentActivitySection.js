import React from "react";
import {List, Segment} from "semantic-ui-react";
import RecentActivityItem from "./RecentActivityItem";

export class RecentActivitySection extends React.Component {
    static propTypes = {
        items: React.PropTypes.array.isRequired
    };

    render() {
        return (
            <Segment>
                <List divided relaxed="very">
                    {
                        this.props.items.map((item, i) => {
                            return (
                                <List.Item key={i}>
                                    <RecentActivityItem action={item}/>
                                </List.Item>
                            );
                        })
                    }
                </List>
            </Segment>
        );
    }
}