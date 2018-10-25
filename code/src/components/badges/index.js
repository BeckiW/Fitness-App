import React from "react"
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
        //forEach club in state print out the number of points earned for that club
        <p>{this.club}: xx points</p>
        <div className="badgesContainer">
          <div className="badge">
            <img src="./images/badge-heart.jpg" alt="heart-badge" />
          </div>
          <div className="badge">
            <img src="./images/badge-star.jpg" alt="star-badge" />
          </div>
          <div className="badge">
            <img src="./images/badge-diamond.jpg" alt="diamond-badge" />
          </div>
          <div className="badge">
            <img src="./images/badge-diamond2.jpg" alt="diamond-badge" />
          </div>
          <div className="badge">
            <img src="./images/badge-heart2.jpg" alt="heart-badge" />
          </div>
          <div className="badge">
            <img src="./images/badge-flag.jpg" alt="flag-badge" />
          </div>
          <div className="badge">
            <img src="./images/badge-medal.jpg" alt="medal-badge" />
          </div>
          <div className="badge">
            <img src="./images/badge-trophy.jpg" alt="trophy-badge" />
          </div>
          <div className="badge">
            <img src="./images/badge-trophy2.jpg" alt="trophy-badge" />
          </div>
        </div>
      </div>
    )
  }
}

export default Badges
