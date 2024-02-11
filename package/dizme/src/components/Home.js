import parse from "html-react-parser";
import { useEffect, useState } from "react";
import { fatchData } from "../utilits";

const Home = ({ dark }) => {
  const [data, setData] = useState({});
  useEffect(async () => {
    setData(await fatchData("/static/info.json"));
  }, []);

  return (
    <div className="dizme_tm_section" id="home">
      <div className="dizme_tm_hero">
        <div
          className="background"
          data-img-url={`img/slider/${dark ? 2 : 1}.jpg`}
          // style={{ backgroundImage: `img/slider/${dark ? 2 : 1}.jpg` }}
        />
        <div className="container">
          <div className="content">
            <div className="details">
              <div className="hello">
                <h3 className="titleText">{`Hey, I'm`}</h3>
              </div>
              <div className="name">
                <h3>{data && data.name ? data.name : "Marcelina"}</h3>
              </div>
              <div className="job">
                <p>
                  <span className="greenText">A Social Media Manager From</span>{" "}
                  <span className="purpleText">Cheltenham.</span>
                </p>
              </div>
              <div className="text">
                <p>I work with business owners who truly understand the value of a
strong social media presence, one that reflects on their business’
values and ethos.</p>
              </div>
              <div className="button">
                <div className="dizme_tm_button">
                  <a className="anchor" href="#about">
                    <span>About Me</span>
                  </a>
                </div>
                <div className="social">
                  <ul>
                    {data &&
                      data.social &&
                      data.social.map((social, i) => (
                        <li key={i}>
                          <a href={data.social[i].url} target="_blank" rel="noreferrer">
                            <i className={social.icon} />
                          </a>
                        </li>
                      ))}
                  </ul>
                </div>
              </div>
            </div>
            <div className="avatar">
              <div className="image">
                <img
                  src={data && data.img ? data.img : "/img/slider/avatar.png"}
                  alt="image"
                />
                {data &&
                  data.skills &&
                  data.skills.map(
                    (skill, i) =>
                      skill.icon && (
                        <span
                          key={i}
                          className={`skills ${skill.name} anim_moveBottom`}
                        >
                          {parse(skill.icon)}
                        </span>
                      )
                  )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
