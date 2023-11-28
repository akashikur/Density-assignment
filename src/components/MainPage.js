import React from "react";
import "../components/page1.css";
import threePhone from "../images/Group 626822.png";
import phone1 from "../images/Group 1000003825.png";
import phone2 from "../images/Group 1000003826.png";
import phone3 from "../images/Group 1000003827.png";
import frame525 from "../images/Frame 1000005525 (1).png";
import frame3815 from "../images/Group 1000003815.png";
import frame161 from "../images/Frame 16.png";
import grap from "../images/Frame 1000005684.png";
import percent from "../images/25% 2.png";
import profile from "../images/Manager 1.png";
import iphone14 from "../images/iPhone 14 Pro Space Black Mockup.png";
import proficon from "../images/Group 1000003801.png";
import frame11 from "../images/Frame 1000005711.png";
import frame5526 from "../images/Frame 1000005526.png";
import horn from "../images/Group 1000003819.png";
import frame669 from "../images/Frame 1000005669.png";
import f2 from "../images/Frame 1000005669.png";
import bigiphone from "../images/Group 1000003804.png";
import groundlogo from "../images/Group 626657.png";
import CalRow from "./CalRow";
import coin from "../images/Group 626789.png";
import up from "../images/Group 1000003802.png";
import iphone2 from "../images/iPhone 14 Pro Space Black Mockup (1).png";
import iphone3 from "../images/iPhone 14 Pro Space Black Mockup (2).png";
const MainPage = () => {
  return (
    <>
      <h1>
        It’s time to trade, the <span>future.</span>
      </h1>
      <p>Trade BTC, ETH Futures with 125x leverage and earn rewards.</p>
      <div className="threephones">
        <img src={threePhone} alt="three phones" />
      </div>
      {/* <img src={frame16} alt="frame16" className="frame16" /> */}
      <CalRow />
      <img src={phone1} alt="frame16" className="p1" />
      <img src={phone2} alt="frame16" className="p1" />
      <img src={phone3} alt="frame16" className="p1" />
      <h1>
        Trade More. <span>Pay Less.</span>
      </h1>
      <p>Our low Fees Supercharge Your Profits</p>
      <img src={frame525} alt="frame16" className="frame525" />
      <h1 className="big-txt">
        Explore the Markets like it is your <span>Playground.</span>
      </h1>
      <p>Search for your favorite coins and stay ahead of the market</p>
      <img src={frame3815} alt="frame16" width="auto" />
      <button className="big-btn">Explore Markets</button>
      <h1>
        <span>Unlock</span> New Frontiers.
      </h1>
      <p>
        Are you a stock trader looking for new opportunities to make money? We
        got you covered!
      </p>
      {/* <img src={frame161} alt="frame16" width="auto" /> */}
      <div className="black-cal">
        <p>Same Strategies</p>

        <p>Same Indicators</p>

        <p>Better Leverage</p>

        <p>24x7 Trading</p>
      </div>
      <img src={grap} alt="frame16" width="auto" />
      <div className="white-part">
        <div className="text-div">
          <h1>Start Small. Earn Big.</h1>
          <p>
            Deposity a minimum of 1000 and get a Deposit bonus + dedicagted
            relationship manager
          </p>
        </div>
        <div className="card">
          <div>
            <img src={percent} />
            <h2>Deposit Bonus.</h2>
            <p>
              Our assets' liquidity is unmatched in the market, with a small
              bid-ask spread and a well-balanced order book.
            </p>
          </div>
          <div>
            <img src={profile} />
            <h2>Dedicated Relationship Manager.</h2>
            <p>
              Dedicated Relationship Manager. Our assets' liquidity is unmatched
              in the market, with a small bid-ask spread and a well-balanced
              order book.
            </p>
          </div>
        </div>
      </div>
      <h1 className="big-txt">
        Derivates made simple in <span>3 Easy</span> Steps
      </h1>
      <div className="phone-flex">
        <img src={iphone14} />
        <div className="inner-phone">
          <img src={proficon} />
          <h3>Create an Account</h3>
          <p>
            Create an Account Register & Complete your Verification in less than
            2 minutes
          </p>
          <button>Trade Now</button>
        </div>
      </div>
      <div className="phone-flex">
        <img src={iphone2} alt="hi" />
        <div className="inner-phone">
          <img src={coin} alt="phone" />
          <h3>Deposit Funds</h3>
          <p>Add funds quickly using a variety of payment methods</p>
          <button>Trade Now</button>
        </div>
      </div>
      <div className="phone-flex">
        <img src={iphone3} alt="phone2" />
        <div className="inner-phone">
          <img src={up} alt="phone3" />
          <h3>Become a Trader</h3>
          <p>Choose Your Trading Pair & Trade Seamlessly</p>
          <button>Trade Now</button>
        </div>
      </div>
      <h1 className="big-txt">Backed by the Best.</h1>
      <img src={frame11} alt="7511" />
      <div className="white-part">
        <h1 className="big-txt">Don’t take our word for it.</h1>
        <p>
          Hear it from our expert community of traders who have made insane
          amounts in a short amount of time
        </p>
        <img src={frame5526} alt="hello" />
      </div>
      <img src={horn} alt="horn" />
      <h1 className="big-txt">Earn Money. The Easy Way.</h1>
      <p>No Complexity of Trading Fee, generate volume and win</p>
      <img src={frame669} alt="669" />
      <button>start earning now</button>
      <div className="backgroung">
        <h1 className="big-txt">Trade Together. Thrive Together.</h1>
        <p>Join the fun-filled community on our platform.</p>
        <img src={frame161} alt="frame" />
        <button>Join community</button>
      </div>
      <h1 className="big-txt">Meet the Visionaries behind Density.</h1>
      <img src={f2} alt="frame" />
      <h1 className="big-txt">Get started now.</h1>
      <img src={bigiphone} alt="images" />
      <button className="big-button">Start Trading!</button>
      <div className="footer">
        <img src={groundlogo} alt="logo1" />
        <div>
          <ul>
            <li>Blog</li>
            <li>Fees</li>
            <li>Leaderboard</li>
            <li>Careers</li>
            <li>Contact Us</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <p>
          Lörem ipsum od ohet dilogi. Bell trabel, samuligt, ohöbel utom diska.
          Jinesade bel när feras redorade i belogi. FAR paratyp i muvåning, och
          pesask vyfisat. Viktiga poddradio har un mad och inde.
        </p>
        <div></div>
      </div>
    </>
  );
};

export default MainPage;
