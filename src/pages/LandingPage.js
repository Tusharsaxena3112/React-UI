import React from 'react'
import "../css/Landing.css"
const LandingPage = () => {
    return (
        <div className="landing">
            <div className="landing-container">
                <img className='image' src="/assets/bg.jpg" alt="" />
                <div className="overlay">
                    <div>

                    <h1>Unlimited movies, TV <br /> shows and more.</h1>
                    <h4>
                        Watch anywhere.
                    </h4>
                    <h6>Ready to watch? Enter your email to create  or restart your membership.
</h6>
                    <div className="input-div">
                        <div className="input-div-1">
                <input type="text" placeholder="Email address" className="input" />
                        </div>
                        <div className="input-div-2">
                <input type="submit" className="submit" value="Sign In >" />

                        </div>
                    </div>
                        </div>

                </div>
            </div>
            <hr className="division" />
            <div className="enjoy">
                    <h1 className="heading">
                    Enjoy on your TV.
                </h1>
                <h6 className="sub-heading">Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray <br /> players and more.</h6>
                <div className="play-tv">
                    <div className="tv-video">
                        <video autoPlay playsInline muted loop >
                            <source src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-in-0819.m4v" type="video/mp4" />
                        </video>
                    </div>
                    <img  src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png" alt="" />
                </div>
            </div>
        </div>

    )
}

export default LandingPage
