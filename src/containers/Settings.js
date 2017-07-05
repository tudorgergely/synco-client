import React from "react";
import {Button, Icon, Modal} from "semantic-ui-react";
import api from '../redux/api';

const electron = window.require('electron');
const fs = electron.remote.require('fs');
const dialog = electron.remote.dialog;// const dialog = remote.require('electron').dialog;

export class Settings extends React.Component {
    constructor() {
        super();

        this.state = {
            backupPath: '',
            syncPath: ''
        }
    }

    componentDidMount() {
        api.getBackupPath()
            .then(path => {
                this.setState(state => ({...state, backupPath: path}));
            });
        api.getSyncPath()
            .then(path => {
                this.setState(state => ({...state, syncPath: path}));
            });
    }

    render() {
        return <Modal trigger={<Button basic icon>
            <Icon name="configure"/>
        </Button>}>
            <Modal.Header>Settings</Modal.Header>
            <Modal.Content>
                <Modal.Description>
                    Backup folder: {this.state.backupPath === '' ? 'Not selected' : this.state.backupPath}
                    <div><Button onClick={() => this.changeBackup()}>Select backup folder</Button></div>
                    Sync folder: {this.state.syncPath === '' ? 'Not selected' : this.state.syncPath}
                    <div><Button onClick={() => this.changeSync()}>Select sync folder</Button></div>
                    <div><Button basic icon>
                        <Icon name="google"/>
                        Login with Google
                    </Button></div>
                    <Button basic>Restore from Google Drive</Button>
                </Modal.Description>
            </Modal.Content>
        </Modal>
    }

    changeBackup() {
        var path = dialog.showOpenDialog({
            properties: ['openDirectory']
        });
        api.setBackupPath(path[0])
            .then(p => {
                this.setState(state => ({...state, backupPath: p}));
            });
    }

    changeSync() {
        var path = dialog.showOpenDialog({
            properties: ['openDirectory']
        });

        api.setSyncPath(path[0])
            .then(p => {
                this.setState(state => ({...state, syncPath: p}));
            });
    }
}