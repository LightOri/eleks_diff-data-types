import React from 'react';
import ResetContainer from './Reset';
import JSONContainer from './JSON';
import JQueryContainer from './JQuery';
import XHRContainer from './XHR';
import PromiseContainer from './Promise';

class FeaturesListContainer extends React.Component {
  render() {
    return (
        <aside className="col-md-3">
            <h2>Features:</h2>
            <ul className="list-group">
                <ResetContainer />
                <JSONContainer />
                <JQueryContainer />
                <XHRContainer />
                <PromiseContainer />
            </ul>
        </aside>
    )
  }
}

export default FeaturesListContainer;