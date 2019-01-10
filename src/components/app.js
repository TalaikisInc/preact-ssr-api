import { h, Component } from 'preact'
import { Router } from 'preact-router'
import AsyncRoute from 'preact-async-route'
import { Provider } from 'unistore/preact'

import createStore from '../store'
import Header from './header'
import NotFound from '../routes/notfound'
const store = createStore()

export default class App extends Component {
  handleRoute = (e) => {
    this.currentUrl = e.url
  }

  getCategories = (url, cb, props) => {
    const c = import('../routes/categories')
    if (c.then) {
      return c.then(module => module.default)
    } else if (c.default) {
      cb({ component: c.default })
    }
  }

  getHome = (url, cb, props) => {
    const c = import('../routes/home')
    if (c.then) {
      return c.then(module => module.default)
    } else if (c.default) {
      cb({ component: c.default })
    }
  }

  getLoadingComponent = (route) => {
    if (this.state.ssrShown) {
      return <div>loading...</div>;
    } else {
      return <div dangerouslySetInnerHTML={{ __html: this.ssrText }} />
    }
  }

  render () {
    return (
      <div id='app'>
        <Header />
        <Provider store={store}>
          <Router onChange={this.handleRoute} {...this.props}>
            <AsyncRoute key='home' path='/' getComponent={this.getHome} />
            <AsyncRoute key='categories' path='/categories/:id?' getComponent={this.getCategories} />
            <NotFound default />
          </Router>
        </Provider>
      </div>
    )
  }
}
