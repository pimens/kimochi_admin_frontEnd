import React, { Component } from 'react';
import { connect } from "react-redux";

class Counter extends Component {
  state = {  }
  render() { 
    console.log(this.props)
    return (
      <div>
        <p>{this.props.dataIdentitas}</p>      
        <button onClick={this.props.reset}>RESET</button>
        <button onClick={()=> this.props.ubahId(20)}>ubah</button>

      </div>
    );
  }
}
 
// function Counter({ counter, increment, decrement, reset }) {
  
// }
const mapStateToProps = (state) => {
  return {
    counter: state.globalReducer.counter,
    dataIdentitas: state.globalReducer.id
  }
}
const mapDispatchToProps = dispatch => {
  return { 
    reset: () => dispatch({ type: 'RESET'}),
    // ubahId: (id) => dispatch(ubahId(id))
    ubahId: (id) => dispatch({ type: 'ubahId', data: id })

  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);
