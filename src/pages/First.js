import { Link } from "react-router-dom";
import BlogHeader from "../components/BlogHeader";
import "./Article.css";
import Socials from "../components/Socials";

const First = () => {
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
              Why You Need a Website for your Business
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
          <h2 className="sub-heading"> Why having a Website is Compulsory </h2>
          <p className="post-text">
            In the 21st century, having a website is crucial for any business,
            organization, or individual looking to establish a presence online.
            Here are a few reasons why having a website is so important:
            <p />
            <p>
              1. Credibility: Having a professional website gives your business
              credibility and legitimacy in the eyes of potential customers.
            </p>{" "}
            <p>
              2. Reach: A website allows you to reach a global audience, 24
              hours a day, 7 days a week.
            </p>
            <p>
              3. Cost-effective: A website is a cost-effective way to reach and
              engage with customers. It is much cheaper than traditional forms
              of advertising such as print or television ads.{" "}
            </p>
            <p>
              4. Flexibility: A website allows you to update and change your
              content easily and quickly, giving you the flexibility to adapt to
              the changing needs of your customers.
            </p>
            <p>
              5. Accessibility: A website allows customers to access your
              business and its offerings at any time, from anywhere. In short,
              having a website in the 21st century is a necessity for any
              business or individual looking to establish a strong online
              presence, reach a global audience, and increase credibility.
              Without a website, you risk missing out on potential customers and
              opportunities.
            </p>{" "}
          </p>
          <p className="post-text">
            Having a website can help establish your business or personal brand
            online, and can also provide a platform for customers or clients to
            find and interact with you. Additionally, having a website can help
            you reach a wider audience and increase visibility for your products
            or services.
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

export default First;
