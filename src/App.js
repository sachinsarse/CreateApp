// import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';

// class App extends Component {

//   constructor(props) {
//     super();
//     this.state = {
//       photos : [
//         {
//           code: "BAcyDyQwcXX",
//           caption: "Lunch #hamont",
//           likes: 56,
//           id: "1161022966406956503",
//           display_src:
//             "https://scontent.cdninstagram.com/hphotos-xap1/t51.2885-15/e35/12552326_495932673919321_1443393332_n.jpg"
//         },
//         {
//           code: "BAcJeJrQca9",
//           caption: "Snow! ⛄️🌨❄️ #lifewithsnickers",
//           likes: 59,
//           id: "1160844458347054781",
//           display_src:
//             "https://scontent.cdninstagram.com/hphotos-xaf1/t51.2885-15/e35/12407344_1283694208323785_735653395_n.jpg"
//         },
//       ]
//     }
//   }

//   render() {
//    const photos =  this.state.photos.map((option) => (
//       <div key= {option.id} className="col-md-4 imgDiv">
//         <img key={option.id} height="250" width="250" src={option.display_src} />
//       </div>  
//     ));
//     return (
//       <div className= "row photoDiv">
//         { photos }
//       </div>
//     );
//   }
// }

// export default App;


import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import HomeView from './HomeView';
import PhotoView from './PhotoView';
import './App.css';

class App extends Component {
   render() {
      return (
         <Router>
            <div>
               <Switch>
                  <Route exact path='/' component={HomeView} />
                  <Route exact path='/photo' component={PhotoView} />
               </Switch>
            </div>
         </Router>
      );
   }
}
export default App;