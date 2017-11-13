import React from 'react';
import ReactDOM from 'react-dom';

const Child = props => (
  <div
    style={{
      width: 300,
      height: 100,
      backgroundColor: '#bbb',
      border: '1px solid gray',
    }}
  >
    <h4> Nested Inner Component </h4>
    <div>
      <label> Inner Text Input: </label>
      <input type = "text" ref={props.childComponentRef} />
    </div>
  </div>
);

class Index extends React.Component {
  constructor() {
    super();
    this.childComponentRef = null;
    this.sameComponentRef = null;
  }


  getValueFromRef = () => {
    this.forceUpdate();
  }

  render() {
    return (
      <div style={{ margin: 50 }}>
        <h1> Refs </h1>
        <h4> Outer Text Input : { this.sameComponentRef ? this.sameComponentRef.value : 'none' } </h4>
        <h4> Inner Text Input : { this.childComponentRef ? this.childComponentRef.value : 'none' } </h4>
        <div>
          <label> Outer Text Input: </label>
          <input type= "text" ref={ n => this.sameComponentRef = n } />
        </div>
        <Child childComponentRef={ n => this.childComponentRef = n} />
        <button onClick = {this.getValueFromRef} > Get Value From Ref </button>
      </div> 
    );
  }
}

export default Index;

//ReactDOM.render(<Index />, document.getElementById('root'));
