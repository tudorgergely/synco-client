import React from 'react';
import {connect} from "react-redux";
import {NavBar} from "./NavBar";
import RecentActivity from "./RecentActivity";
import {RESULTS_SCREEN, TIMELINE_SCREEN} from "../redux/ducks/home";
import Results from "./Results";
import Dropzone from 'react-dropzone';
import api from '../redux/api';
import NotificationSystem from 'react-notification-system'

function mapStateToProps(state) {
    return {
        screen: state.home.screen
    }
}

function mapDispatchToProps(dispatch) {
    return {};
}

class Home extends React.Component {
    constructor() {
        super();

        this.state = {
            dropzoneActive: false
        }
    }

    render() {
        const {dropzoneActive} = this.state;
        const overlayStyle = {
            position: 'absolute',
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            padding: '2.5em 0',
            background: 'rgba(0,0,0,0.5)',
            textAlign: 'center',
            zIndex: 999999999999,
            color: '#fff'
        };
        let cmp = null;
        switch (this.props.screen) {
            case TIMELINE_SCREEN:
                cmp = <RecentActivity/>;
                break;
            case RESULTS_SCREEN:
                cmp = <Results/>;
                break;
            default:
                cmp = null;
        }

        return <Dropzone
            disableClick
            style={{}}
            onDragEnter={() => this.setState(f => ({...f, dropzoneActive: true}))}
            onDragLeave={() => this.setState(f => ({...f, dropzoneActive: false}))}
            onDrop={(files) => {
                api.uploadFiles(files)
                    .then(() => {
                        this.refs.notificationSystem.addNotification({
                            message: 'Upload success',
                            level: 'success',
                            autoDismiss: 2
                        })
                    }, () => {
                        this.refs.notificationSystem.addNotification({
                            message: 'Upload failed',
                            level: 'error'
                        })
                    });
                this.setState({dropzoneActive: false})
            }}>
            { dropzoneActive && <div style={overlayStyle}>Drop files...</div> }
            <span>
                <NotificationSystem ref="notificationSystem"/>
                <NavBar/>
                <div style={{marginTop: '100px'}}/>

                {cmp}
            </span>
        </Dropzone>
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);