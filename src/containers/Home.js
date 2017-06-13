import React from 'react';
import {connect} from "react-redux";
import {NavBar} from "./NavBar";
import RecentActivity from "./RecentActivity";
import {RESULTS_SCREEN, TIMELINE_SCREEN} from "../redux/ducks/home";
import Results from "./Results";

function mapStateToProps(state) {
    return {
        screen: state.home.screen
    }
}

function mapDispatchToProps(dispatch) {
    return {};
}

class Home extends React.Component {
    render() {
        switch (this.props.screen) {
            case TIMELINE_SCREEN:
                return (
                    <span>
                        <NavBar/>
                        <div style={{marginTop: '100px'}}/>

                        <RecentActivity/>
                     </span>
                );
            case RESULTS_SCREEN:
                return (
                    <span>
                        <NavBar/>
                        <div style={{marginTop: '100px'}}/>

                        <Results/>
                     </span>
                );
            default:
                return (
                    <span>
                        <NavBar/>
                    </span>
                );
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);