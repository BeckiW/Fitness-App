import React from "react"

class Badge extends React.Component {

  render() {
    return (
      <div className={this.props.pointsData > this.props.pointsLimit ? "completed" : "badge"} >
        <img src={"./images/" + this.props.source + ".jpg"} alt={this.props.source} />
      </div>
    )
  }
}

export default Badge
