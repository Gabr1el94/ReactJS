import React from 'react';
import Placar from './Placar';

const dados = {
    partida:{
        estadio:"Ilha do Retiro/PE",
        data:"01/06/2016",
        horario:"19h"
    },
    casa:{
        nome:"Sport"
    },
    visitante:{
        nome:"Santa Cruz"
    }
};

//Create the class first
export default class App extends React.Component{

    //return 
    render(){
        return(
                 <Placar {...dados} />
        );
    
    }
}