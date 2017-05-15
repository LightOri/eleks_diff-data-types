import React from 'react';
import HeaderContainer from './containers/Header';
import FooterContainer from './containers/Footer';
import PageContentContainer from './containers/PageContent';

class App extends React.Component {
  render() {
    return (
      <div>
        <HeaderContainer />
        <PageContentContainer />
        <FooterContainer />
      </div>
    )
  }
}

export default App;