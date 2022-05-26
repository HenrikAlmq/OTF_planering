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
        alert("Något gick fel!")
    }
    return this.props.children
  }
}

export default ErrorView