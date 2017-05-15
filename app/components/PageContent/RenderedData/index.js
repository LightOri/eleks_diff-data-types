import React from 'react';

class RenderedData extends React.Component {
  render() {
    return (
        <div className="col-md-9">
            <h2>Some rendered data here:</h2>
            <div id="result" className="jumbotron">
                <h1>Hello, world!</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam gravida ex vitae ante sollicitudin, at faucibus orci dapibus. Fusce fringilla tortor sit amet tellus accumsan pharetra. Ut finibus elit id sem commodo cursus. Nulla id efficitur magna. Morbi et semper turpis. Cras sit amet mauris sodales, porttitor eros sit amet, molestie est.</p>
                <p><a className="btn btn-primary btn-lg" href="#" role="button">Learn more</a></p>
            </div>
        </div>
    )
  }
}

export default RenderedData;