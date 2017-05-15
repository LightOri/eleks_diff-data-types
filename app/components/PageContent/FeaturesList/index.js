import React from 'react';
import Reset from './Reset';
import JSON from './JSON';
import JQuery from './JQuery';
import XHR from './XHR';
import Promise from './Promise';


class FeaturesList extends React.Component {
  render() {
    return (
        <aside className="col-md-3">
            <h2>Features:</h2>
            <ul className="list-group">
                <Reset />
                <JSON />
                <JQuery />
                <XHR />
                <Promise />
            </ul>
        </aside>
    )
  }
}

export default FeaturesList;