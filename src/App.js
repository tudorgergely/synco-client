import React, {Component} from "react";
import {Container, Input, List} from "semantic-ui-react";
import Dropzone from 'react-dropzone'
import "./App.css";

class App extends Component {
    constructor() {
        super();
        this.state = {
            items: []
        }
    }

    render() {
        return (
            <Container>
                <Input icon='search' placeholder='Search...' fluid onChange={this.onChange}/>

                <List divided relaxed>
                    {
                        this.state.items.map(({id, fileMetadata}, i) =>
                            <List.Item key={i}>
                                <List.Content>
                                    <List.Header>{fileMetadata.name}</List.Header>
                                    <List.Description>{fileMetadata.size} kb</List.Description>
                                    <a href={"http://localhost:8080/api/export/" + id}>Download</a>
                                </List.Content>
                            </List.Item>
                        )
                    }
                </List>

                <Dropzone onDrop={this.onDrop}>
                    {({isDragActive, isDragReject, acceptedFiles, rejectedFiles}) => {
                        if (isDragActive) {
                            return "This file is authorized";
                        }
                        if (isDragReject) {
                            return "This file is not authorized";
                        }
                        return acceptedFiles.length || rejectedFiles.length
                            ? `Accepted ${acceptedFiles.length}, rejected ${rejectedFiles.length} files`
                            : "Try dropping some files";
                    }}
                </Dropzone>
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
}

export default App;
