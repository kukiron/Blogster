// BlogFormReview shows users their form inputs for review
import _ from "lodash"
import React, { Component } from "react"
import { connect } from "react-redux"
import formFields from "./formFields"
import { withRouter } from "react-router-dom"
import * as actions from "../../actions"

class BlogFormReview extends Component {
  state = { file: null }

  renderFields = () => {
    const { formValues } = this.props

    return _.map(formFields, ({ name, label }) => (
      <div key={name}>
        <label>{label}</label>
        <div>{formValues[name]}</div>
      </div>
    ))
  }

  renderButtons = () => {
    const { onCancel } = this.props

    return (
      <div>
        <button
          className="yellow darken-3 white-text btn-flat"
          onClick={onCancel}
        >
          Back
        </button>
        <button className="green btn-flat right white-text">
          Save Blog
          <i className="material-icons right">email</i>
        </button>
      </div>
    )
  }

  onFileChange = e => {
    this.setState({ file: e.target.files[0] })
  }

  onSubmit = event => {
    event.preventDefault()

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
