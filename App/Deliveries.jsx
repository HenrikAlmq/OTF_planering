import React from 'react'

class Deliveries extends React.Component {
  constructor(props) {
    super(props)

    const storedState = localStorage.getItem("Delivery");

    if (storedState) {
      this.state = JSON.parse(storedState);
    } else {
      this.state = {
        name: '', 
        delivery: '',
        deliveryAddress: '',
        zipCode: ''
      };
    }
  }

  // I min render ska jag endast använda state/props
  // Skapa state från localstorage 
  // I handlesubmit så sparar jag ordern och även sätter state och localstorage och sedan läsa från konstruktorn. 
  

  handleChangeLambda = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  handleSubmit = (e) => {
    localStorage.setItem("Delivery", JSON.stringify(this.state));
    e.preventDefault();
    this.setState({[e.target.name]: e.target.value})
    
  }

  renderDelivery() {
    
    let getLocalStorage = localStorage.getItem("Delivery");
    
    if (getLocalStorage != null) {
      return (<h1>Order skapad: <br />Namn: {this.state.name} <br /> Ordernummer:{this.state.delivery} <br />Leveransadress:{this.state.deliveryAddress} <br />Postnummer:{this.state.zipCode}</h1>)
    }
  }


  render() {
    
    return (
      <>
      <form onSubmit={this.handleSubmit}>
        <label>
          Namn:
          <input name='name' type="text" value={this.state.name} onChange={this.handleChangeLambda} />
        </label>
        <label>
          Ordernummer:
          <input name='delivery' type="text" value={this.state.delivery} onChange={this.handleChangeLambda} />
        </label>
        <label>
          Leveransadress:
          <input name='deliveryAddress' type="text" value={this.state.deliveryAddress} onChange={this.handleChangeLambda} />
        </label>
        <label>
          Postnummer:
          <input name='zipCode' type="text" value={this.state.zipCode} onChange={this.handleChangeLambda} />
        </label>
        <input type="submit" value="Skapa order" />
      </form>
      <div>
        {this.renderDelivery()}
      </div>
      </>
    );
  }
}


export default Deliveries;