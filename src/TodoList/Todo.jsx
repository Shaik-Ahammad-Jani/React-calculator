import { Component } from 'react';

class Todo extends Component {
  state = {
    str: '',
    str1: []
  };

  get = (e) => {
    this.setState({ str: e.target.value });
  };

  add = () => {
    if (this.state.str.trim() !== '') { 
      this.setState((prevState) => ({
        str1: [...prevState.str1, prevState.str],
        str: '' 
      }));
    }
  };

  delete = (index) => {
    this.setState((prevState) => ({
      str1: prevState.str1.filter((_, i) => i !== index) // Removes the clicked item
    }));
  };

  render() {
    return (
      <>
        <h1 style={{textAlign:'center'}}>Todo List</h1>
        <div style={{border: '1px solid', width: 400, padding: 10, marginLeft: '40%'}}>
          <div>
            <input
              type="text"
              placeholder="Enter Todo"
              onChange={this.get}
              value={this.state.str} // Input field shows current value
            />
            &emsp;
            <button onClick={this.add}>Add</button>
          </div>

          <div style={{ marginTop: 20, border: '1px solid', width: 200, padding: 10 }}>
            {this.state.str1.map((item, index) => (
              <div key={index}>
                <h3 style={{ display: 'inline-block' }}>{item}</h3>
                &emsp;&emsp;
                <button onClick={() => this.delete(index)}>Delete</button> {/* Pass index correctly */}
              </div>
            ))}
          </div>
        </div>
      </>
    );
  }
}

export default Todo;
