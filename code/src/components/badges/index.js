import React from "react"
import { Link } from 'react-router-dom'
import 'react-day-picker/lib/style.css'

class Badges extends React.Component {

  club = localStorage.getItem("Club id")

  pointsData = this.props.pointsData

  componentWillMount() {
    let styleName1 = ""
    if (this.pointsData > 10) {
      this.styleName1 = "completed"
    } else {
      this.styleName1 = "badge"
    }
    let styleName2 = ""
    if (this.pointsData > 25) {
      this.styleName2 = "completed"
    } else {
      this.styleName2 = "badge"
    }
    let styleName3 = ""
    if (this.pointsData > 45) {
      this.styleName3 = "completed"
    } else {
      this.styleName3 = "badge"
    }
    let styleName4 = ""
    if (this.pointsData > 50) {
      this.styleName4 = "completed"
    } else {
      this.styleName4 = "badge"
    }
    let styleName5 = ""
    if (this.pointsData > 65) {
      this.styleName5 = "completed"
    } else {
      this.styleName5 = "badge"
    }
    let styleName6 = ""
    if (this.pointsData > 70) {
      this.styleName6 = "completed"
    } else {
      this.styleName6 = "badge"
    }
    let styleName7 = ""
    if (this.pointsData > 90) {
      this.styleName7 = "completed"
    } else {
      this.styleName7 = "badge"
    }
    let styleName8 = ""
    if (this.pointsData > 100) {
      this.styleName8 = "completed"
    } else {
      this.styleName8 = "badge"
    }
    let styleName9 = ""
    if (this.pointsData > 110) {
      this.styleName9 = "completed"
    } else {
      this.styleName9 = "badge"
    }
  }

  render() {
    console.log(this.styleName1)
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
          <div className={this.styleName1} >
            <img src="./images/badge-heart.jpg" alt="heart-badge" />
          </div>
          <div className={this.styleName2}>
            <img src="./images/badge-star.jpg" alt="star-badge" />
          </div>
          <div className={this.styleName3}>
            <img src="./images/badge-diamond.jpg" alt="diamond-badge" />
          </div>
          <div className={this.styleName4}>
            <img src="./images/badge-diamond2.jpg" alt="diamond-badge" />
          </div>
          <div className={this.styleName5}>
            <img src="./images/badge-heart2.jpg" alt="heart-badge" />
          </div>
          <div className={this.styleName6}>
            <img src="./images/badge-flag.jpg" alt="flag-badge" />
          </div>
          <div className={this.styleName7}>
            <img src="./images/badge-medal.jpg" alt="medal-badge" />
          </div>
          <div className={this.styleName8}>
            <img src="./images/badge-trophy.jpg" alt="trophy-badge" />
          </div>
          <div className={this.styleName9}>
            <img src="./images/badge-trophy2.jpg" alt="trophy-badge" />
          </div>
        </div>
      </div>
    )
  }
}

export default Badges
