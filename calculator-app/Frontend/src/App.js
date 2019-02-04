import React, { Component } from 'react';
import './App.css';
import axios from 'axios';


class App extends Component {
  constructor(props){
    super(props);
  
    this.state ={
      toCalculate:''
    }
    
    this.toCalculateChangeHandler = this.toCalculateChangeHandler.bind(this);
    this.add = this.add.bind(this);
    this.subtract = this.subtract.bind(this);
    this.divide = this.divide.bind(this);
    this.multiply = this.multiply.bind(this);
    this.finalResult = this.finalResult.bind(this);
    }

  toCalculateChangeHandler = (e) => {
    this.setState({
      toCalculate : e.target.value
    })
  }

  add = (e) => {
    this.setState({
      toCalculate: this.state.toCalculate + '+'
    })
  }

  subtract = (e) => {
    this.setState({
      toCalculate: this.state.toCalculate + '-'
    })
  }

  divide = (e) => {
    this.setState({
      toCalculate: this.state.toCalculate + '/'
    })
  }

  multiply = (e) => {
    this.setState({
      toCalculate: this.state.toCalculate + '*'
    })
  }

  finalResult = (e) => {
    var headers = new Headers();   
    e.preventDefault();
    const data = {
    toCalculate: this.state.toCalculate
    }

    axios.defaults.withCredentials = true;
    axios.post('http://localhost:3002/cal',data)
        .then(response => {
            console.log("Status Code : "+response.status);
            console.log("Data: "+response.data);

            this.setState(
              {
                toCalculate : response.data
              }
            );

        });
  }

  render() {
    return (
      <div className="App">
        <br></br>
        <div class="cal">
        <input onChange = {this.toCalculateChangeHandler} value={this.state.toCalculate} type="text" class="form-control" name="toCalculate" placeholder="Enter equation!"/>
        </div>
        <br></br>
        <div className="operator-keys">
        <button class="btn btn-primary" onClick={this.add.bind(this, '+')}>+</button>
        <button class="btn btn-danger" onClick={this.subtract.bind(this, '-')}>−</button>  
        <button class="btn btn-warning" onClick={this.multiply.bind(this, '*')}>×</button>
        <button class="btn btn-dark" onClick={this.divide.bind(this, '/')}>÷</button>
        <button class="btn btn-success" onClick={this.finalResult} type ="submit">=</button>
        </div>
      </div>
    );
  }
}

export default App;
