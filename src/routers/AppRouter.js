import React from 'react'
import {
  BrowserRouter,
  Switch,
  Route,
  // Link
} from 'react-router-dom'
import Header from '../components/Header'
import App from '../components/App'
import Page1 from '../components/Page1'
// import HelpPage from '../components/HelpPage'
import Page2 from '../components/Page2'
import HelpPage from '../components/HelpPage'
import NotFoundPage from '../components/NotFoundPage'

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path="/" component={App} exact={true} />
        <Route path="/category1" component={Page1} />
        <Route path="/category2" component={Page2} />
        {/* <Route path="/edit/:id" component={EditPostPage} /> */}
        <Route path="/help" component={HelpPage} />
        <Route  component={NotFoundPage} />
      </Switch>
    </div>
  </BrowserRouter>
)

export default AppRouter
