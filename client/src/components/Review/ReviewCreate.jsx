import React, { Component } from "react";
import "./Review.scss";
import { Redirect } from "react-router-dom";
import { createReview } from "../../services/reviews";

class ReviewCreate extends Component {
  constructor() {
    super();
    this.state = {
      review: {
        name: "",
        starCount: "",
        review: "",
        imgURL: "",
        featuredChef: false,
      },
      created: false,
    };
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      review: {
        ...this.state.review,
        [name]: value,
      },
    });
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    const created = await createReview(this.state.review);
    this.setState({ created });
  };

  render() {
    const { review, created } = this.state;

    if (created) {
      return <Redirect to={`/recipes/${this.props.id}`} />;
    }
    return (
      <form className="create-form" onSubmit={this.handleSubmit}>
        <input
          className="input-name"
          placeholder="Name"
          value={review.name}
          name="name"
          required
          autoFocus
          onChange={this.handleChange}
        />
        <input
          className="input-star"
          placeholder="Star Count"
          value={review.star}
          name="starCount"
          required
          onChange={this.handleChange}
        />
        <textarea
          className="textarea-review"
          rows={10}
          placeholder="Review"
          value={review.description}
          name="review"
          required
          onChange={this.handleChange}
        />
        <input
          className="input-image-link"
          placeholder="Image Link"
          value={review.imgURL}
          name="imgURL"
          required
          onChange={this.handleChange}
        />
        <select name="featuredChef" onChange={this.handleChange}>
          <option value="true">Featured</option>
          <option value="false">not Featured</option>
        </select>
        <button type="submit" className="submit-button">
          Submit
        </button>
      </form>
    );
  }
}

export default ReviewCreate;
