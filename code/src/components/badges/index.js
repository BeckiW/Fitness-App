import React from "react"
import Badge from "../badge"
import { Link } from 'react-router-dom'
import 'react-day-picker/lib/style.css'

class Badges extends React.Component {

  club = localStorage.getItem("Club id")

  render() {
    return (
      <div>
        <div className="navigation">
          <Link to="/"><i class="fas fa-arrow-left"></i> Change your club</Link>
          <br />
          <div className="vertical-navigation">
            <Link to="/activity">Add an activity <i class="fas fa-arrow-right"></i></Link>
            <br />
            <Link to="/stats">View stats page <i class="fas fa-arrow-right"></i></Link>
          </div>
        </div>
        <h2>{this.club}</h2>
        <h1>Your points and badges</h1>
        <p>Great job! You have earned {this.props.pointsData} points for {this.club} so far!</p>
        <div className="badgesContainer">
          <Badge
            pointsData={this.props.pointsData}
            pointsLimit={100}
            source="badge-heart"
          />
          <Badge
            pointsData={this.props.pointsData}
            pointsLimit={500}
            source="badge-star"
          />
          <Badge
            pointsData={this.props.pointsData}
            pointsLimit={1000}
            source="badge-diamond"
          />
          <Badge
            pointsData={this.props.pointsData}
            pointsLimit={1500}
            source="badge-medal"
          />
          <Badge
            pointsData={this.props.pointsData}
            pointsLimit={2000}
            source="badge-flag"
          />
          <Badge
            pointsData={this.props.pointsData}
            pointsLimit={2500}
            source="badge-diamond2"
          />
          <Badge
            pointsData={this.props.pointsData}
            pointsLimit={3000}
            source="badge-trophy"
          />
          <Badge
            pointsData={this.props.pointsData}
            pointsLimit={4000}
            source="badge-heart2"
          />
          <Badge
            pointsData={this.props.pointsData}
            pointsLimit={5000}
            source="badge-trophy2"
          />
        </div>
      </div>
    )
  }
}

export default Badges
