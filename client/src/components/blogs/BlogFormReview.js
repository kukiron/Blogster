// BlogFormReview shows users their form inputs for review
import React, { Component } from "react"
import { connect } from "react-redux"
import { withRouter } from "react-router-dom"
import _ from "lodash"

import * as actions from "../../actions"
import formFields from "./formFields"

class BlogFormReview extends Component {
  state = { file: null }

  renderFields = () =>
    _.map(formFields, ({ name, label }) => (
      <div key={name}>
        <label>{label}</label>
        <div>{this.props.formValues[name]}</div>
      </div>
    ))

  renderButtons = () => (
    <div>
      <button
        className="yellow darken-3 white-text btn-flat"
        onClick={this.props.onCancel}
      >
        Back
      </button>
      <button className="green btn-flat right white-text">
        Save Blog
        <i className="material-icons right">email</i>
      </button>
    </div>
  )

  onFileChange = e => {
    this.setState({ file: e.target.files[0] })
  }

  onSubmit = e => {
    e.preventDefault()

    const { file } = this.state
    const { submitBlog, history, formValues } = this.props
    submitBlog(formValues, file, history)
  }

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <h5>Please confirm your entries</h5>
        {this.renderFields()}

        <h5>Add an image</h5>
        <input onChange={this.onFileChange} type="file" accept="image/*" />

        {this.renderButtons()}
      </form>
    )
  }
}

const mapStateToProps = ({ form: { blogForm } }) => ({
  formValues: blogForm.values
})

export default connect(mapStateToProps, actions)(withRouter(BlogFormReview))
