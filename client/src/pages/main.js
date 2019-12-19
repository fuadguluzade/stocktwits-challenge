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
        setInterval(this.isThereNew, 60000) // checks for the new tweet every minute
    }

    getResults = () => {
        api.getTwits(this.state.stockSymbol)
            .then(response => {
                this.setState({ twits: response.data })
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
        let newTwitsStack = [];
        let i = 0;
        if (this.state.stockSymbol) {
            api.getTwits(this.state.stockSymbol)
                .then(async response => {
                    while ((i < response.data.length) && (response.data[i].id) > this.state.twits[0].id) {
                        newTwitsStack.push(response.data[i])
                        i++;
                    }
                    if (newTwitsStack.length > 0) {
                        this.setState({ twits: newTwitsStack.concat(this.state.twits) })
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

