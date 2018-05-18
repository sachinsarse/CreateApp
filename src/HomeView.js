import React, { Component } from 'react';
import { Redirect } from 'react-router';

class HomeView extends Component {

  constructor(props) {
    super();
    this.state = {
      photos : [
        {
          code: "BAcyDyQwcXX",
          caption: "Lunch #hamont",
          likes: 56,
          id: "1161022966406956503",
          display_src:
            "https://scontent.cdninstagram.com/hphotos-xap1/t51.2885-15/e35/12552326_495932673919321_1443393332_n.jpg"
        },
        {
          code: "BAcJeJrQca9",
          caption: "Snow! ⛄️🌨❄️ #lifewithsnickers",
          likes: 59,
          id: "1160844458347054781",
          display_src:
            "https://scontent.cdninstagram.com/hphotos-xaf1/t51.2885-15/e35/12407344_1283694208323785_735653395_n.jpg"
        },
           {
          code: "BAcJeJrQca9",
          caption: "Snow! ⛄️🌨❄️ #lifewithsnickers",
          likes: 59,
          id: "1160844458347054781",
          display_src:
            "https://scontent.cdninstagram.com/hphotos-xaf1/t51.2885-15/e35/12407344_1283694208323785_735653395_n.jpg"
        }, {
          code: "BAcJeJrQca9",
          caption: "Snow! ⛄️🌨❄️ #lifewithsnickers",
          likes: 59,
          id: "1160844458347054781",
          display_src:
            "https://scontent.cdninstagram.com/hphotos-xaf1/t51.2885-15/e35/12407344_1283694208323785_735653395_n.jpg"
        },
           {
          code: "BAcJeJrQca9",
          caption: "Snow! ⛄️🌨❄️ #lifewithsnickers",
          likes: 59,
          id: "1160844458347054781",
          display_src:
            "https://scontent.cdninstagram.com/hphotos-xaf1/t51.2885-15/e35/12407344_1283694208323785_735653395_n.jpg"
        }, {
          code: "BAcJeJrQca9",
          caption: "Snow! ⛄️🌨❄️ #lifewithsnickers",
          likes: 59,
          id: "1160844458347054781",
          display_src:
            "https://scontent.cdninstagram.com/hphotos-xaf1/t51.2885-15/e35/12407344_1283694208323785_735653395_n.jpg"
        }, {
          code: "BAcJeJrQca9",
          caption: "Snow! ⛄️🌨❄️ #lifewithsnickers",
          likes: 59,
          id: "1160844458347054781",
          display_src:
            "https://scontent.cdninstagram.com/hphotos-xaf1/t51.2885-15/e35/12407344_1283694208323785_735653395_n.jpg"
        }, {
          code: "BAcJeJrQca9",
          caption: "Snow! ⛄️🌨❄️ #lifewithsnickers",
          likes: 59,
          id: "1160844458347054781",
          display_src:
            "https://scontent.cdninstagram.com/hphotos-xaf1/t51.2885-15/e35/12407344_1283694208323785_735653395_n.jpg"
        }
      ]
    }
  }

  handleOnClick = () => {
    // some action...
    // then redirect
    this.setState({redirect: true});
  }

  render() {
    if (this.state.redirect) {
      return <Redirect push to="/photo" />;
    }

   const photos =  this.state.photos.map((option) => (
      <div key= {option.id} className="col-md-4 imgDiv">
        <img key={option.id} src={option.display_src} onClick={this.handleOnClick} alt="Image" />
      </div>  
    ));
    return (
      <div className= "row photoDiv">
        { photos }
      </div>
    );
  }
}

export default HomeView;