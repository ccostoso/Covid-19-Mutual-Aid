// import React, { Component } from "react";
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";
// import Settings from './settings'
// import { fetchSettings } from './api'

// const routes = [
//     {
//         path: '/settings',
//         component: Settings,
//         fetchInitialData: (id) => fetchSettings(id),
//     }
// ]

// class App extends Component {
//     render() {
//         return (
//             <Router>
//                 <div>
//                     <ul>
//                         <li><Link to='/settings'>Settings</Link></li>
//                     </ul>

//                     <hr />
                    
//                     [routes.map(({ path, component: C, fetchInitialData }) => (
//                         <Route
//                             path={path}
//                             render={(props) => <C {...props} fetchInitialData={fetchInitialData} />}
//                         />
//                     ))]
//                 </div>
//             </Router>
//         )
//     }
// }