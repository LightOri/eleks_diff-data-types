import React from 'react';
import FeaturesListContainer from './FeaturesList';
import RenderedDataContainer from './RenderedData';

class PageContentContainer extends React.Component {
  render() {
    return (
        <section className="container">
            <div className="row">
                <FeaturesListContainer />
                <RenderedDataContainer />
            </div>
        </section>
    )
  }
}

export default PageContentContainer;