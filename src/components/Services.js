import review from "./review-bg.jpg";
import "./Services.css";

const Services = () => {
  return (
    <>
      <section className="services-section" id="services">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="section-title-main">
                <h2 className="section-title">Service Areas</h2>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="services-box">
                <div className="services-media">
                  <img src="images/webapp2.jpg" alt="" />
                </div>
                <div className="services-info">
                  <h3>Web and Mobile Apps</h3>
                  <p>
                    We develop websites and mobile apps ensuring that every
                    project is delivered on time and within budget.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="services-box">
                <div className="services-media">
                  <img src="images/server.jpg" alt="" />
                </div>
                <div className="services-info">
                  <h3>Server Maintenance</h3>
                  <p>
                    Our team of professionals will handle all aspects of your
                    server including updates, backups, security and
                    troubleshooting.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="services-box">
                <div className="services-media">
                  <img src="images/network.jpg" alt="" />
                </div>
                <div className="services-info">
                  <h3>IT Networking</h3>
                  <p>
                    We provide 24/7 support and monitoring to ensure that your
                    network is always up and running.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="services-box">
                <div className="services-media">
                  <img src="images/data.jpg" alt="" />
                </div>
                <div className="services-info">
                  <h3>Data Management</h3>
                  <p>
                    From data storage and backup to analytics and reporting, we
                    have the expertise to help you transition from analog to
                    digital.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="services-box">
                <div className="services-media">
                  <img src="images/brand.jpg" alt="" />
                </div>
                <div className="services-info">
                  <h3>Brand Management</h3>
                  <p>
                    We help businesses build and maintain a strong and
                    consistent brand image in the digital age.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="services-box">
                <div className="services-media">
                  <img src="images/social.jpg" alt="" />
                </div>
                <div className="services-info">
                  <h3>Digital Marketing</h3>
                  <p>
                    Drive more traffic, increase conversions, and boost your ROI
                    with our tailored strategies.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="test-section"
        style={{
          backgroundImage: `url(${review})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      />
    </>
  );
};

export default Services;
