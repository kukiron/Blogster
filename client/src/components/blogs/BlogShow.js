import React, { Component } from "react"
import { connect } from "react-redux"

import { fetchBlog } from "../../actions"

class BlogShow extends Component {
  componentDidMount() {
    this.props.fetchBlog(this.props.match.params._id)
  }

  renderImage = () => {
    const { title, imageUrl } = this.props.blog
    return (
      imageUrl && (
        <img
          src={`https://s3.ap-south-1.amazonaws.com/blogster-123/${imageUrl}`}
          alt={`${title}`}
        />
      )
    )
  }

  render() {
    if (!this.props.blog) return ""

    const { title, content } = this.props.blog
    return (
      <div>
        <h3>{title}</h3>
        <p>{content}</p>
        {this.renderImage()}
      </div>
    )
  }
}

const mapStateToProps = ({ blogs }, ownProps) => ({
  blog: blogs[ownProps.match.params._id]
})

export default connect(mapStateToProps, { fetchBlog })(BlogShow)
