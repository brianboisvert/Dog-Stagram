import React from 'react';

class Form extends React.Component {

  state = {
    name: ''
  }

  handleChange = (event) => {
    let name = event.target.value
    this.setState({
      name: name
    })
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.addPost(this.state.name)
    this.setState({
      name: ''
    })
  }

  render() {
    return (
      <div className='form'>
        <form onSubmit={this.handleSubmit}>
          <input onChange={(event) => this.handleChange(event)}/>
          <button type='submit'>Submit!</button>
        </form>
      </div>
    )
  }
}

export default Form;
