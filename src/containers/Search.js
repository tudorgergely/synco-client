import React from "react";
import SearchInput from "../components/SearchInput";
import {connect} from "react-redux";
import {close, loadRecent, open, search} from "../redux/ducks/search";
import {goToTimeline} from "../redux/ducks/home";

function mapStateToProps(state) {
    const {open, recentSearches, term} = state.search;
    return {
        open,
        recentSearches,
        term
    };
}

function mapDispatchToProps(dispatch) {
    return {
        openRecents() {
            dispatch(open())
        },
        closeRecents() {
            dispatch(close())
        },
        search(term) {
            dispatch(close());
            dispatch(search(term))
        },
        searchCleared() {
            dispatch(search(''))
            dispatch(goToTimeline());
        },
        loadRecents() {
            dispatch(loadRecent());
        }
    };
}

class Search extends React.Component {
    componentWillReceiveProps(newProps) {
        if (newProps.open !== this.props.open) {
            this.props.loadRecents();
        }
    }

    render() {
        return (
            <span>
                <SearchInput
                    searchText={this.props.term}
                    open={this.props.open}
                    recentSearches={this.props.recentSearches}
                    onSearchInputFocus={this.props.openRecents}
                    onSearchInputBlur={this.props.closeRecents}
                    onSearchTextChange={this.props.search}
                    onSearchInputCleared={this.props.searchCleared}/>
            </span>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Search);