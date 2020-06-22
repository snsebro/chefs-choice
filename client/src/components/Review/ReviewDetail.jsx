import React, { Component } from 'react'
import './ReviewDetail.css'
import { getProduct, deleteProduct } from '../services/products'
import { Link } from 'react-router-dom'

class ReviewDetail extends Component {
    constructor(props) {
        super(props)
        this.state = {
          review: {
              name: '',
              star: '',
              text: '',
          },
        }
    }

    async componentDidMount() {
        let { id } = this.props.match.params
        const review = await getReview(id)
        this.setState({ review })
    }

    render() {
        const { review } = this.state
        return (
            <Layout>
                <div className="review-detail">
                    <img className="review-detail-image" src={review.imgURL} alt={review.name} />
                    <div className="detail">
                        <div className="name">{review.name}</div>
                        <div className="price">{review.star}</div>
                        <div className="description-review">{review.review}</div>
                        <div className="button-container">
                        <button className="edit-button"><Link className="edit-link" to={`/reviews/${review._id}/edit`}>Edit</Link></button>
                            <button className="delete-button" onClick={() => deleteReview(review._id)}>Delete</button>
                        </div>
                    </div>
                </div>
            </Layout>
        )
    }
}

export default ReviewDetail
