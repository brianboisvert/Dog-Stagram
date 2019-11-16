import React from 'react';

class Post extends React.Component {
  render() {
    console.log(this.props.name)
    return(
      <div>
        {this.props.names ? this.props.names.map((name) => (<div>{name}</div>)) : null}
      </div>
    )
  }
}

export default Post;
