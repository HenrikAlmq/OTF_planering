import React from 'react'

class Deliveries extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '', 
      delivery: '',
      deliveryAddress: '',
      zipCode: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

 

  handleChangeLambda = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.name + this.state.delivery);
    localStorage.setItem("Delivery", JSON.stringify(this.state));
    console.log(this.state.name, this.state.delivery)
    event.preventDefault();
  }

  render() {
    return (
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
    );
  }

}


export default Deliveries;