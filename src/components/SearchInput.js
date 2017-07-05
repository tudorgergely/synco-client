import React from 'react';
import PropTypes from 'prop-types';
import {Icon, Input, Segment, List} from "semantic-ui-react";
import Moment from "react-moment";

export default class SearchInput extends React.Component {
    static propTypes = {
        searchText: PropTypes.string,
        open: PropTypes.bool.isRequired,
        recentSearches: PropTypes.array.isRequired,
        onSearchTextChange: PropTypes.func,
        onSearchInputFocus: PropTypes.func,
        onSearchInputBlur: PropTypes.func,
        onSearchInputCleared: PropTypes.func,
    };

    render() {
        return (
            <span>
                {this.renderSearchInput(this.props.searchText, this.searchInputChange,
                    this.props.onSearchInputFocus, this.props.onSearchInputBlur)}
                {this.renderRecentSearches(this.props.recentSearches, this.props.open)}
            </span>
        );
    }

    searchInputChange = (e) => {
        const text = e.target.value;

        if (text.length === 0) {
            this.props.onSearchInputCleared();
        } else {
            this.props.onSearchTextChange(e.target.value);
        }
    };

    renderSearchInput(searchText, onSearchTextChange, onSearchInputFocus, onSearchInputBlur) {
        return <Input className='icon' placeholder='Search...' fluid style={{padding: 0}} type="search">
            <input value={searchText}
                   onChange={onSearchTextChange}
                   onFocus={onSearchInputFocus}
                   onBlur={onSearchInputBlur}
                   type="search"/>
            <Icon name='search'/>
        </Input>;
    }

    renderRecentSearches(searches, open) {
        console.log(searches);
        if (searches.length > 0 && open) {
            return <div style={{position: 'absolute', marginTop: 0, width: '100%', left: 0, padding: '0 14px'}}>
                <Segment>
                    <List divided relaxed>
                        {
                            searches.map((s, i) => <List.Item key={i}>
                                <List.Content>
                                    <List.Header as='a'>{s.content}</List.Header>
                                    <List.Description as='a'> <Moment fromNow ago>{s.date}</Moment> ago
                                    </List.Description>
                                </List.Content>
                            </List.Item>)
                        }
                    </List>
                </Segment>
            </div>;
        }
        return null;
    }
}