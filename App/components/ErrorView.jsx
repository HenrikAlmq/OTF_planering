import React, { Component } from 'react'

class ErrorView extends Component {
constructor(props) {
  super(props)

  this.state = {
     hasError: false
  }
}
    static getDerivedStateFromError(error){
        return {
            hasError: true
        }
    }
  render() {
    if (this.state.hasError) {
        return <h1>Något gick fel</h1>
    }
    return this.props.children
  }
}

export default ErrorView