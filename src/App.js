import React, {Component} from "react";
import {Container, Dropdown, Icon, Input, List, Menu, Dimmer, Segment} from "semantic-ui-react";
import Dropzone from 'react-dropzone'
import "./App.css";
import SearchBar from "./components/SearchBar";
import FilesList from "./components/FilesList";
import {NavBar} from "./containers/NavBar";
import {RecentActivity} from "./containers/RecentActivity";
let folderSelect;

class App extends Component {
    constructor() {
        super();
        this.state = {
            items: [
                {
                    name: 'Today',
                    items: [
                        {
                            date: new Date(),
                            type: 'upload',
                            locations: ['drive', 'dropbox'],
                            content: 'Nume_fisier_5.png'
                        },
                        {
                            date: new Date(),
                            type: 'download',
                            locations: ['dropbox'],
                            content: 'fisier.zip'
                        },
                        {
                            date: new Date(),
                            type: 'upload',
                            locations: ['drive', 'dropbox'],
                            content: 'Nume_fisier_5.png'
                        },
                        {
                            date: new Date(),
                            type: 'download',
                            locations: ['dropbox'],
                            content: 'fisier.zip'
                        },
                        {
                            date: new Date(),
                            type: 'upload',
                            locations: ['drive', 'dropbox'],
                            content: 'Nume_fisier_5.png'
                        },
                        {
                            date: new Date(),
                            type: 'download',
                            locations: ['dropbox'],
                            content: 'fisier.zip'
                        },
                        {
                            date: new Date(),
                            type: 'upload',
                            locations: ['drive', 'dropbox'],
                            content: 'Nume_fisier_5.png'
                        },
                        {
                            date: new Date(),
                            type: 'download',
                            locations: ['dropbox'],
                            content: 'fisier.zip'
                        }
                    ]
                },
                {
                    name: 'Yesterday',
                    items: [
                        {
                            date: new Date(),
                            type: 'search',
                            locations: ['hdd', 'drive', 'dropbox'],
                            content: 'fisier.zip'
                        }
                    ]
                },

                {
                    name: 'Last month',
                    items: [
                        {
                            date: new Date(),
                            type: 'upload',
                            locations: ['drive'],
                            content: 'Nume_fisier_5.png'
                        },
                        {
                            date: new Date(),
                            type: 'download',
                            locations: ['dropbox'],
                            content: 'fisier.zip'
                        }
                    ]
                },
                {
                    name: 'Last year',
                    items: [
                        {
                            date: new Date(),
                            type: 'upload',
                            locations: ['drive'],
                            content: 'Nume_fisier_5.png'
                        },
                        {
                            date: new Date(),
                            type: 'download',
                            locations: ['dropbox'],
                            content: 'fisier.zip'
                        },

                        {
                            date: new Date(),
                            type: 'upload',
                            locations: ['drive'],
                            content: 'Nume_fisier_5.png'
                        },
                        {
                            date: new Date(),
                            type: 'download',
                            locations: ['dropbox'],
                            content: 'fisier.zip'
                        },

                        {
                            date: new Date(),
                            type: 'upload',
                            locations: ['drive'],
                            content: 'Nume_fisier_5.png'
                        },
                        {
                            date: new Date(),
                            type: 'download',
                            locations: ['dropbox'],
                            content: 'fisier.zip'
                        },

                        {
                            date: new Date(),
                            type: 'upload',
                            locations: ['drive'],
                            content: 'Nume_fisier_5.png'
                        },
                        {
                            date: new Date(),
                            type: 'download',
                            locations: ['dropbox'],
                            content: 'fisier.zip'
                        }
                    ]
                },
            ]
        }
    }

    componentDidMount() {
        if (folderSelect) {
            folderSelect.webkitdirectory = true
        }
    }

    render() {
        return (
            <Container fluid>
                <NavBar/>

                <RecentActivity sections={this.state.items}/>
            </Container>
        );
    }

    onChange = (e, data) => {
        const text = data.value;
        if (text.length > 3) {
            fetch('http://localhost:8080/api/search/', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json, text/plain, */*',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({q: text})
            })
                .then(res => res.json())
                .then(res => {
                    this.setState(() => ({
                        items: res
                    }))
                })
        }
    }

    onDrop = acceptedFiles => {
        const formData = new FormData();
        acceptedFiles.forEach(file => {
            formData.append(file.name, file);
        });
        fetch('http://localhost:8080/api/import/', {
            method: 'POST',
            body: formData
        }).then(res => res.json())
            .catch(err => console.log(err));
    }

    sourceFolderChange = e => {
        console.log(e);
    }
}

export default App;
