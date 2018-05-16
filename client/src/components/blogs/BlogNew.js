// BlogNew shows BlogForm and BlogFormReview
import React, { Component } from "react"
import { reduxForm } from "redux-form"
import BlogForm from "./BlogForm"
import BlogFormReview from "./BlogFormReview"

class BlogNew extends Component {
  state = { showFormReview: false }

  renderContent = () =>
    this.state.showFormReview ? (
      <BlogFormReview
        onCancel={() => this.setState({ showFormReview: false })}
      />
    ) : (
      <BlogForm onBlogSubmit={() => this.setState({ showFormReview: true })} />
    )

  render() {
    return <div>{this.renderContent()}</div>
  }
}

export default reduxForm({
  form: "blogForm"
})(BlogNew)
