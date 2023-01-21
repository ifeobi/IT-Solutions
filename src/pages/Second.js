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
              You are not familiar with the concept of IT Networking? Close down
              your Organization!
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
          <h2 className="sub-heading">
            {" "}
            If you run an organization you must read this!
          </h2>
          <p className="post-text">
            IT networking and infrastructure are critical components of any
            modern organization. They provide the foundation for communication,
            collaboration, and access to information and resources.
            <p />
            <p className="post-text">
              Networking allows for the sharing of data and resources among
              computers and other devices within your organization. This can
              improve communication and collaboration among employees, as well
              as allow for more efficient use of resources. Additionally,
              networking enables your organization to connect to external
              networks, such as the internet, which can provide access to a wide
              range of information and services.
            </p>{" "}
            <p className="post-text">
              Infrastructure refers to the physical and logical components that
              make up a network. This includes hardware such as servers,
              routers, and switches, as well as software such as operating
              systems and applications. A well-designed and maintained
              infrastructure is crucial for ensuring the reliability and
              performance of a network.
            </p>
            <p className="post-text">
              One of the key benefits of IT networking and infrastructure is the
              ability to support remote work and collaboration. With the rise of
              remote work due to the COVID-19 pandemic, the importance of IT
              networking and infrastructure has become more apparent. A robust
              network infrastructure enables employees to access the information
              and resources they need from anywhere, at any time, which is
              essential for maintaining productivity and continuity of
              operations.{" "}
            </p>
            <p className="post-text">
              In addition, a strong IT networking and infrastructure can also
              provide a competitive edge by enabling an organization to respond
              quickly to changes in the market and take advantage of new
              opportunities. With the fast-paced nature of the business world,
              being able to quickly adapt to new technologies and market trends
              is crucial for staying ahead of the competition.
            </p>
            <p className="post-text">
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
            In conclusion, IT networking and infrastructure are critical for the
            success of any modern organization. They provide the foundation for
            communication, collaboration, and access to information and
            resources, and are essential for maintaining productivity and
            competitiveness in today's fast-paced business world.
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
