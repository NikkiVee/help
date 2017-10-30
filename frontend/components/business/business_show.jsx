import React from 'react';
import NavBar from '../NavBar';
import { Link } from 'react-router-dom';

class BusinessShow extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.clickHandler = this.clickHandler.bind(this);
  }

  handleClick(event) {
    this.props.nextPage(`${this.props.location.pathname}/reviews`);
  }

  clickHandler(event) {
    this.props.nextPage(`${this.props.location.pathname}/photos/new`);
  }

  componentDidMount() {
    this.props.fetchBusiness(this.props.match.params.businessId);
  }

  hours() {
    let days = ["mon", "tue", "wed", "thur", "fri", "sat", "sun"]; 
  }

  render() {
    if(this.props.business === undefined) {
      return null;
    } else {
    return(
      <div>
          <NavBar currentUser={this.props.currentUser} intendedPage={this.props.intendedPage} logout={this.props.logout} nextPage={this.props.nextPage} clearPage={this.props.clearPage}/>

          <div className="main-div">

          <ul className="biz-show-head">
            <ul>
              <li className="biz-name-main">
                {this.props.business.name}
              </li>
              <li>
                <ul className="rating-review-show">
                  <li className="star-rating-show">
                    stars
                  </li>
                  <li className="review-number-show">
                    #
                  </li>
                  <li className="review-text-show">
                    reviews
                  </li>
                </ul>
                <ul className="price-cuisine-show">
                  <li className="price-show">
                    dollar signs
                  </li>
                  <li ><div className="period-container"><div className="period">·</div></div> </li>
                  <li className="cusine-link-show">
                    <Link to={'/search'}>
                      {this.props.business.cuisine}
                    </Link>
                  </li>
                </ul>
                <li>
                  <div className="map-show">
                    Map Box
                  </div>
                </li>
              </li>
            </ul>
            <ul>

            <ul className="add-buttons-show">
              <li className="review-button-show">
                <Link to={'/reviews'} onClick={this.handleClick} className="review-button-button-show"><i className="fa fa-star" aria-hidden="true"></i> Write a Review</Link>
              </li>
              <li className="photo-button-show">
                <Link to={'/photos'} className="add-photo-show" onClick={this.clickHandler}><i class="fa fa-camera" aria-hidden="true"></i>Add Photo</Link>
              </li>
            </ul>
            <div>
              <ul className="picture-list-show">
                <li className="first-photo-show">
                  <Link to={"/business/photos"}>Picture 1</Link>
                </li>
                <li className="second-photo-show">
                  <Link to={"/business/photos"}>Picture 2</Link>
                </li>
                <li className="third-photo-show">
                  <Link to={"/business/photos"}>See all photos</Link>
                </li>
              </ul>
            </div>
          </ul>
          </ul>




          <div className="biz-show-head">
            <div className="biz-show-reviews">
              Reviews
            </div>
            <div className="all-hours-show">

            <div className="hours-div-show">Hours</div>
            <ul className="hours-open-show">
              <li>
                Mon
              </li>
              <li>
                Tue
              </li>
              <li>
                Wed
              </li>
              <li>
                Thur
              </li>
              <li>
                Fri
              </li>
              <li>
                Sat
              </li>
              <li>
                Sun
              </li>
            </ul>
          </div>
        </div>
        </div>
      </div>

    );}
  }
}

export default BusinessShow;