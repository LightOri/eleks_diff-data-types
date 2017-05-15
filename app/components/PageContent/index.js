import React from 'react';
import FeaturesList from './FeaturesList';
import RenderedData from './RenderedData';

class PageContent extends React.Component {
  render() {
    return (
        <section className="container">
            <div className="row">
                <FeaturesList />
                <RenderedData />
            </div>
        </section>
    )
  }
}

export default PageContent;