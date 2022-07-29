import React, { Component } from 'react';
import Api from './Api'

class App extends Component{

  state = {
    moedas: [],
  }

  async componentDidMount(){
    const response = await Api.get('');
    this.setState({moedas: response.data});
  }

  render(){

    const {moedas} = this.state;



    return(
      <div>
        <h1>Cotação de Moeda</h1>
        {moedas.map(moeda => (
          <li key={moeda.show.id}>
            <h2>
              <strong>
                Moeda: 
                {console.log(moeda)}
              </strong>
              {moeda.show.name}
            </h2>
            <p>
              Compra:{moeda.show.bid}
              Venda:{moeda.show.ask}
            </p>
          </li>
        ))}
      </div>
    );
  }
}

export default App;
