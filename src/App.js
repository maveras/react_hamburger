import React, { Component, Fragment } from 'react';
import Layout from './components/Layout/Layout'
import BurgerBuilder from './containers/burgerBuilder/BurgerBuilder'
class App extends Component {
  render() {
    return (
      <Fragment>
        <Layout>
          <BurgerBuilder></BurgerBuilder>
        </Layout>
      </Fragment>
    )
  }
}

export default App;
