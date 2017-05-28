import React, {Component} from "react";
import {Container} from "semantic-ui-react";
import "./App.css";
import {NavBar} from "./containers/NavBar";
import {RecentActivity} from "./containers/RecentActivity";

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

    render() {
        return (
            <Container fluid>
                <NavBar/>

                <RecentActivity sections={this.state.items}/>
            </Container>
        );
    }
}

export default App;
