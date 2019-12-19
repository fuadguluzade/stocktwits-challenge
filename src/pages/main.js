import React, { Component } from "react";
import Container from "./../components/Container";
import Header from './../components/Header'
import InputForm from "./../components/InputForm";
import Twits from "./../components/Twits";


import api from "./../utils/api";

class Main extends Component {
    state = {
        stockSymbol: '',
        twits: []
    }

    componentDidMount = () => {
        setInterval(this.isThereNew, 300000) // checks for the new tweet every 5 minute
    }

    getResults = () => {
        api.getTwits(this.state.stockSymbol)
            .then(response => {
                console.log(response.data.messages);
                this.setState({ twits: response.data.messages })
            })
            .catch(e => {
                this.setState({ twits: [], stockSymbol: '' })
                console.log(e)
            });
    }

    handleInput = async event => {
        await this.setState({ stockSymbol: event.target.value })
        this.getResults();
    }

    isThereNew = () => {
        if (this.state.stockSymbol) {
            api.getTwits(this.state.stockSymbol)
                .then(response => {
                    console.log(this.state.twits.length )
                    console.log(response.data.messages.length)
                    if (this.state.twits.length === response.data.messages.length) {
                        for (let i = 0; i < this.state.twits.length; i++) {
                            if (this.state.twits[i].id !== response.data.messages[i].id) {
                                this.getResults();
                            }
                        }
                    } else {
                        this.getResults();
                    }
                })
        }
    }

    render() {
        return (
            <div>
                <Header />
                <Container>
                    <InputForm handleInput={this.handleInput} />
                    <p>{this.state.twits.length} results found</p>
                    <Twits twits={this.state.twits} />
                </Container>
            </div>

        )
    }
}

export default Main;

