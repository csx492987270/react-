import React, { Component } from 'react';
import Records from './componens/table/Records';
import Home from './componens/home';
import Echart from './componens/echart/echarts';
import Videos from './componens/video/video';
import Photo from './componens/photos/photos'
import {
  BrowserRouter as Router,
  Route
}  from 'react-router-dom'
class App extends Component {
  render() {
    return (
       <Router>
         <div>  
           <Route exact path='/' component={Home} />
           <Route path='/Records' component={Records} />
           <Route path='/Echart' component={Echart} />
           <Route path='/Videos' component={Videos} />
           <Route path='/Photo' component={Photo} />
         </div>
       </Router>
    );
  }
}

export default App;
