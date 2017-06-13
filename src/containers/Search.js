import React from 'react';
import SearchInput from "../components/SearchInput";
import {connect} from "react-redux";
import {open, close, search} from '../redux/ducks/search';
import {goToTimeline} from "../redux/ducks/home";

function mapStateToProps(state) {
    console.log(state);
    const {open, recentSearches} = state.search;
    return {
        open,
        recentSearches,
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
            dispatch(close())
            dispatch(search(term))
        },
        searchCleared() {
            dispatch(goToTimeline());
        }
    };
}

class Search extends React.Component {
    render() {
        return (
            <span>
                <SearchInput
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