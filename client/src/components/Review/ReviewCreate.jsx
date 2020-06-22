import React, { Component } from 'react'
import './Review.scss'
import { Redirect } from 'react-router-dom'
import { createReview } from '../services/review'

class ReviewCreate extends Component {
    constructor() {
        super()
        this.state = {
            review: {
                name: '',
                star: '',
                text: '',
            },
            created: false
        }
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
        const created = await createReview(this.state.review)
        this.setState({ created })
    }

    render() {
        const { review, created } = this.state

        if (created) {
            return <Redirect to={`/recipte/:id`} />
        }
        return (
            <Layout>
                <form className="create-form" onSubmit={this.handleSubmit}>
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
                        className="input-star"
                        placeholder='Star'
                        value={review.star}
                        name='star'
                        required
                        onChange={this.handleChange}
                    />
                    <textarea
                        className="textarea-description"
                        rows={10}
                        placeholder='Description'
                        value={review.description}
                        name='description'
                        required
                        onChange={this.handleChange}
                    />
                    <button type='submit' className="submit-button">Submit</button>
                </form>
            </Layout>
        )
    }
}

export default ReviewCreate