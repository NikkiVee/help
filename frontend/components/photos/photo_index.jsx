import React from 'react';
import PhotoIndexItem from './photo_index_item';

class PhotoIndex extends React.Component {
  constructor(props) {
    super(props);
    this.enlargeFirst = this.enlargeFirst.bind(this);
    this.enlargeLast = this.enlargeLast.bind(this);
    this.resetPhotos = this.resetPhotos.bind(this);
    this.allPhotos = this.allPhotos.bind(this);
  }

  componentDidMount() {
    if(this.props.photos.length > 0 && this.props.match.path === "/businesses/:businessId") {
      this.resetPhotos();
    } else if(this.props.match.path === "/businesses/:businessId/photos") {
      debugger
      this.props.fetchBizPhotos(this.props.businessId);
    } 
  }

  enlargeFirst() {
    document.getElementById("first_photo").style.cssText = "transform: scale(1.1) perspective(1px); z-index: 1; transition-duration: 0.2s"
    document.getElementById("second_photo").style.cssText = "transform: scale(1) perspective(1px); z-index: 0; transition-duration: 0.2s"
  }

  resetPhotos() {
    document.getElementById("first_photo").style.cssText = "transform: scale(1) perspective(1px); z-index: 0; transition-duration: 0.2s"
    document.getElementById("second_photo").style.cssText = "transform: scale(1.1) perspective(1px); z-index: 1; transition-duration: 0.2s"
    document.getElementById("third_photo").style.cssText = "transform: scale(1) perspective(1px); z-index: 0; transition-duration: 0.2s"
  }

  enlargeLast() {
    document.getElementById("third_photo").style.cssText = "transform: scale(1.1) perspective(1px); z-index: 1; transition-duration: 0.2s"
    document.getElementById("second_photo").style.cssText = "transform: scale(1) perspective(1px); z-index: 0; transition-duration: 0.2s"
  }

  allPhotos() {
     this.props.history.push(`/businesses/${this.props.businessId}/photos`);
  }



  render() {
    if(this.props.photos.length === 0) {
      return null;
    } else if (this.props.match.path === "/businesses/:businessId") {

      return(
          <ul className="photo-items-ul" onClick={this.allPhotos}>
            <li>
              <img id="first_photo" onMouseOver={this.enlargeFirst}
              onMouseOut={this.resetPhotos} className="biz-indiv-photo"
              src={this.props.photos[0].image}/>
            </li>
            <li>
              <img id="second_photo" src={this.props.photos[1].image}
                className="biz-indiv-photo"/>
            </li>
            <li>
              <img id="third_photo" onMouseOver={this.enlargeLast}
              onMouseOut={this.resetPhotos} className="biz-indiv-photo"
              src={this.props.photos[this.props.photos.length - 1].image}/>
            </li>
          </ul>
      );
    } else {
      const photos = this.props.photos.map((photo) => {
        return <PhotoIndexItem key={photo.id} photo={photo} />;
      });
      return (
        photos
      );
    }

  }

}


export default PhotoIndex;
