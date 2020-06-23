import React, { Component } from 'react'
import './ReviewEdit.scss'
import { Redirect } from 'react-router-dom'
import { getReview, updatePost } from '../services/reviews'


class ReviewEdit extends Component {
    constructor(props) {
        super(props)
        this.state = {
          review: {
            name: '',
            star: '',
            text: '',
            },
            updated: false
        }
    }

    async componentDidMount() {
        let { id } = this.props.match.params
        const review = await getReview(id)
        this.setState({ review })
    }


    handleChange = (event) => {
        const { name, value } = event.target
        this.setState({
          review: {
                ...this.state.review,
                [name]: value
            }
        })
    }

    handleSubmit = async (event) => {
        event.preventDefault()
        let { id } = this.props.match.params
        const updated = await updateProduct(id, this.state.review)
        this.setState({ updated })
    }

    render() {

        const { review, updated } = this.state

        if (updated) {
            return <Redirect to={`/reviews/${this.props.match.params.id}`} />
        }

        return (
            <Layout>
                <div className="review-edit">
                    <div className="image-container">
                        <img className="edit-product-image" src={review.imgURL} alt={review.name} />
                        <form onSubmit={this.handleSubmit}>
                            <input
                                className="edit-input-image-link"
                                placeholder='Image Link'
                                value={review.imgURL}
                                name='imgURL'
                                required
                                onChange={this.handleChange}
                            />
                        </form>
                    </div>
                    <form className="edit-form" onSubmit={this.handleSubmit}>
                        <input
                            className="input-name"
                            placeholder='Name'
                            value={review.name}
                            name='name'
                            required
                            autoFocus
                            onChange={this.handleChange}
                        />
                        <input
                            className="input-price"
                            placeholder='star'
                            value={review.star}
                            name='star'
                            required
                            onChange={this.handleChange}
                        />
                        <textarea
                            className="textarea-review"
                            rows={10}
                            cols={78}
                            placeholder='review'
                            value={review.review}
                            name='review'
                            required
                            onChange={this.handleChange}
                        />
                        <button type='submit' className="save-button">Save</button>
                    </form>
                </div>
            </Layout>
        )
    }
}

export default ReviewEdit