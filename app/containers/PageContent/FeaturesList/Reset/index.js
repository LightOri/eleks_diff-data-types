import React from 'react';

class ResetContainer extends React.Component {

  handleReset(e) {
          location.reload()
  };

  render() {
    return (
        <li id="reset" className="list-group-item" onClick={this.handleReset}>RESET</li>
    )
  }
}

export default ResetContainer;