import React, {Component} from "react";
import {Container, Input, List} from "semantic-ui-react";
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
}

export default App;
