import { Fragment } from "react";

const Newsletter = () => {
  return (
    <Fragment>
      <div className="dizme_tm_section">
        <div className="dizme_tm_subscribe">
          <div className="container">
            <div className="inner">
              <div className="background">
                <div
                  className="dots"
                  data-img-url="img/subscribe/dots.jpg"
                  style={{ backgroundImage: 'url("img/subscribe/dots.jpg")' }}
                />
                <div className="overlay" />
              </div>
              <div className="content">
                <div className="left wow fadeInLeft" data-wow-duration="1s">
                  <span className="subtitle">Monthly Letter</span>
                  <h3 className="title">Join For Updates</h3>
                  <p className="text">
                    Find out when I have free spaces and how I may be able to help you.
                  </p>
                </div>
                <div className="right wow fadeInRight" data-wow-duration="1s">
                  <div className="field">
                    <input type="text" placeholder="Your email here" />
                    <input type="submit" defaultValue="Send Now" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default Newsletter;
