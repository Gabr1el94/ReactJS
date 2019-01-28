import React from 'react';

export default class Contador extends React.Component {
    
    constructor(){
        super();
        this.state = {
            contador:0,
        }
    }

    decrementar(){
        this.setState({
            contador:this.state.contador - 1,
        })
    }

    incrementar(){
        this.setState({
            contador:this.state.contador + 1,
        })
    }

    zero(){
        this.setState({
            contador:0
        })
    }
    
    render() {
        return (
            <div>
                <h1>{this.state.contador}</h1>
                <div>
                    <button onClick={this.decrementar.bind(this)}>-</button>
                    <button onClick={this.incrementar.bind(this)}>+</button>
                    <button onClick={this.zero.bind(this)}>zerar</button>
                </div>
            </div>
        );
    }

}