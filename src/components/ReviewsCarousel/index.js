import {Component} from 'react'
import './index.css'

class ReviewsCarousel extends Component {
  state = {carouselIndex: 0}

  onClickLeftArrow = () => {
    const {carouselIndex} = this.state
    if (carouselIndex > 0) {
      this.setState(prevState => ({carouselIndex: prevState.carouselIndex - 1}))
    }
  }

  onClickRightArrow = () => {
    const {carouselIndex} = this.state
    const {reviewsList} = this.props
    if (carouselIndex < reviewsList.length - 1) {
      this.setState(prevState => ({carouselIndex: prevState.carouselIndex + 1}))
    }
  }

  render() {
    const {carouselIndex} = this.state
    const {reviewsList} = this.props
    const {imgUrl, username, companyName, description} = reviewsList[
      carouselIndex
    ]
    return (
      <div className="app-container">
        <div className="reviews-container">
          <h1 className="heading">Reviews</h1>
          <div className="review-card">
            <button
              testid="leftArrow"
              onClick={this.onClickLeftArrow}
              type="button"
            >
              <img
                src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png "
                alt="left arrow"
              />
            </button>

            <div className="user-details">
              <img src={imgUrl} alt={username} />
              <p className="name">{username}</p>
              <p className="review-details">{companyName}</p>
            </div>
            <button
              testid="rightArrow"
              onClick={this.onClickRightArrow}
              type="button"
            >
              <img
                src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
                alt="right arrow"
              />
            </button>
          </div>
          <p className="review-details">{description}</p>
        </div>
      </div>
    )
  }
}

export default ReviewsCarousel
