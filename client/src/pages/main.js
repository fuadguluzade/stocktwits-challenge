import React, { Component } from "react";
import Container from "./../components/Container";
import Header from './../components/Header'
import InputForm from "./../components/InputForm";
import Twits from "./../components/Twits";


import api from "./../utils/api";

class Main extends Component {
    state = {
        stockSymbol: '',
        twits: [],
        newTwitsCount: 0
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
                this.setState({ twits: [], stockSymbol: '', newTwitsCount: 0 })
                console.log(e)
            });
    }

    handleInput = async event => {
        await this.setState({ stockSymbol: event.target.value })
        this.getResults();
        this.setState({ newTwitsCount: 0 })
    }

    isThereNew = () => {
        let i = 0;
        let newTwitsQueue = [];
        if (this.state.stockSymbol) {
            api.getTwits(this.state.stockSymbol)
                .then(async response => {
                    while ((i < response.data.length) && (response.data[i].id) > this.state.twits[0].id) {
                        newTwitsQueue.push(response.data[i])
                        i++;
                    }
                    if (newTwitsQueue.length > 0) {
                        this.setState({ twits: newTwitsQueue.concat(this.state.twits), newTwitsCount: this.state.newTwitsCount + newTwitsQueue.length })
                    }
                })
        }
    }

    render() {
        return (
            <div>
                <Header />
                <Container>
                    <InputForm twits={this.state.twits} handleInput={this.handleInput} newTwitsCount={this.state.newTwitsCount} />
                    <Twits twits={this.state.twits} />
                </Container>
            </div>

        )
    }
}

export default Main;

