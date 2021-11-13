import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'; 
import Home from './components/page/Home';
import Destination from './components/page/Destination';
import Blogs from './components/page/Blogs';
import AboutUs from './components/page/AboutUs';
import Search from './components/page/Search';

function App() {
  return (
    <>
    <Router>
    <Navbar />
    <Switch>
      <Route path='/' exact component={Home} />
      <Route path='/about' component={AboutUs} />
      <Route path='/search' component={Search} />
      <Route path='/destinations' component={Destination} />
      <Route path='/blogs' component={Blogs} />
    </Switch>
    </Router>
    </>
  );
}

export default App;