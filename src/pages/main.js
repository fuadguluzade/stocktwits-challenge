import React, { Component } from "react";
import Container from "./../components/Container";
import Header from './../components/Header'
import InputForm from "./../components/InputForm";
import Twits from "./../components/Twits";


import api from "./../utils/api";

class Main extends Component {
    state = {
        twits: []
    }

    handleInput = async event => {
        api.getTwits(event.target.value)
            .then(response => {
                console.log(response.data.messages)
                this.setState({twits: response.data.messages})
            })
            .catch(e => {
                console.log(e)
            });
    }

    render() {
        return (
            <div>
                <Header />
                <Container>
                    <InputForm handleInput={this.handleInput} />
                    <Twits twits={this.state.twits} />
                </Container>
            </div>

        )
    }
}

export default Main;

