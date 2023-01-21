import { Link } from "react-router-dom";
import BlogHeader from "../components/BlogHeader";
import "./Article.css";
import Socials from "../components/Socials";

const Second = () => {
  return (
    <div className="div">
      <BlogHeader />
      <article className="article">
        {/* Post Content */}
        <section className="post-header">
          <div className="header-content post-container">
            {/* Back To Home */}
            <Link to={"/blog"} className="back-home">
              Back to blog
            </Link>
            {/* {Title} */}
            <h1 className="header-title">
              What They Don't Want You to Know About Digital Marketing!
            </h1>
            {/* Post Image */}
            <img
              src="https://images.pexels.com/photos/39284/macbook-apple-imac-computer-39284.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
              className="header-img"
            />
          </div>
        </section>

        {/* Post */}
        <section className="post-content post-container">
          <h2 className="sub-heading"> No 1 Will Shock You!</h2>
          <p className="post-text">
            Digital marketing is crucial to the survival of your business
            because it allows you to reach a larger audience at a lower cost
            than traditional marketing methods. With the rise of the internet
            and social media, more and more people are using digital channels to
            research products, connect with brands, and make purchasing
            decisions. By having a strong digital presence, your business can
            reach potential customers where they are spending the majority of
            their time online, and with the right strategies you can achieve
            more conversions and drive more sales.
            
            <p className="post-text">
              Digital marketing also allows for greater targeting and
              personalization. With tools like Google Analytics and Facebook
              Insights, you can track the behavior of your target audience and
              tailor your marketing efforts to their specific needs and
              preferences. By tracking the performance of your digital
              campaigns, you can also make data-driven decisions to optimize
              your marketing strategies and maximize your ROI.
            </p>{" "}
            <p className="post-text">
              In addition, digital marketing allows for greater flexibility and
              scalability. You can start small and grow your efforts as your
              business grows. You can also easily pivot and adjust your
              campaigns as needed to respond to changes in the market or your
              industry.
            </p>
            <p className="post-text">
              Overall, digital marketing is crucial for the survival of your
              business because it allows you to reach a larger audience, target
              and personalize your efforts, and adapt to changes in the market.
              Without a strong digital presence, your business may struggle to
              compete in today's digital landscape.
            </p>
          
          </p>
        </section>

        {/* Share */}
        <footer className="footerf">
          <div class="social-links2">
            <Socials />
          </div>
          <span>Share this article</span>
        </footer>

        <footer className="footer-end">
          <div class="container">
            <div class="row">
              <div class="col-lg-3">
                <div class="footer-col footer-about" style={{ color: "white" }}>
                  <p class="phone-text">+234 708 836 6937</p>
                  <p>gecorps22@gmail.com</p>
                  <p>
                    13 Adisa Estate Gudu, Federal Capital Territory, Nigeria{" "}
                  </p>
                </div>
              </div>

              <div class="col-lg-9">
                <div class="footer-col footer-menu">
                  <iframe
                    title="location"
                    width="100%"
                    height="200"
                    id="gmap_canvas"
                    src="https://maps.google.com/maps?q=adisa%20estate&t=&z=13&ie=UTF8&iwloc=&output=embed"
                  ></iframe>
                </div>
              </div>

              <div class="col-md-12">
                <div class="copy-text text-center">
                  <p style={{ color: "white" }}>
                    Copyright {new Date().getFullYear()} All Right Reserved.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </article>
    </div>
  );
};

export default Second;
