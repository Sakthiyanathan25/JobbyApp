import {Route, Switch, Redirect} from 'react-router-dom'
import LoginForm from './components/LoginPage'
import Home from './components/HomePage'
import NotFound from './components/NotFoundPage'
import ProtectedRoute from './components/ProtectedRoute'
import AboutJobPage from './components/AboutJobPage'
import AllJobs from './components/AllJobs'
import './App.css'

const App = () => (
  <Switch>
    <Route exact path="/login" component={LoginForm} />
    <ProtectedRoute exact path="/" component={Home} />
    <ProtectedRoute exact path="/jobs" component={AllJobs} />
    <ProtectedRoute exact path="/jobs/:id" component={AboutJobPage} />
    <Route path="/not-found" component={NotFound} />
    <Redirect to="not-found" />
  </Switch>
)

export default App
