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
      ],
      comments : [
          {
            text: "Wes. WE should have lunch.",
            user: "jdaveknox"
          },
          {
            text: "#adults",
            user: "jdaveknox"
          },
          {
            text: "@jdaveknox yes!",
            user: "wesbos"
          },
          {
            text: "😍 love Hamilton!",
            user: "willowtreemegs"
          }
        ],
    }
  }

  render() {

    const comments =  this.state.comments.map((option,index) => (
      <div className="" key= {index}>       
        <span className="userColor">{option.user} </span>
        <span> {option.text}</span>
      </div>  
    ));

    return (
      <div className= "row photoDiv">
        <div className="col-md-6 imgDiv mainImgDiv">
            <img height="" width="100%" src={this.state.photo.display_src} />
        </div> 
        <div className="col-md-5 userCommentBox">
        <h4>Users Comments</h4>  
        {comments}
        </div>
      </div>
    );
  }
}

export default PhotoView;