import React, { Component } from 'react';


class PhotoView extends Component {

  constructor(props) {
    super();
    this.state = {
      photo : [
        {
          code: "BAcyDyQwcXX",
          caption: "Lunch #hamont",
          likes: 56,
          id: "1161022966406956503",
          display_src:
            "https://scontent.cdninstagram.com/hphotos-xap1/t51.2885-15/e35/12552326_495932673919321_1443393332_n.jpg"
        }       
      ]
    }
  }

  render() {
    return (
      <div className= "row photoDiv">
        <div className="col-md-10 imgDiv">
            <img height="500" width="70%" src={this.state.photo.display_src} />
            <div height="500" className="commentDiv">
            </div> 
        </div> 
      </div>
    );
  }
}

export default PhotoView;