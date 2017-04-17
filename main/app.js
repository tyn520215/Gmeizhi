/**
 * Created by Administrator on 2017/2/28.
 */
import React from 'react';
import { Link,IndexLink } from 'react-router';

 class App extends React.Component{
    render(){
        return(
            <div className="app">
               <ul>
                   <li><IndexLink to="/" >Home</IndexLink></li>
                   <li><Link to="/content" >Content</Link></li>
                   <li><Link to="/about" >About</Link></li>
               </ul>
            </div>
        )
    }
}

export default App