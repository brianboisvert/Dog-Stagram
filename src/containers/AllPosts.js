import React from 'react';
import Form from './Form';
import Post from '../components/Post';

class AllPosts extends React.Component {
  state = {
    names: []
  }

  addPost = (name) => {
    this.setState({
      names: name
    })
  }

  render() {
    return (
      <div>
        <Form addPost={this.addPost} />
        <Post name={this.state.names} />
      </div>
    )
  }
}

export default AllPosts;
