import "./Features.css";

const Features = () => {
  return (
    <section className="features-section">
      <div className="container">
        <div className="row top-features">
          <div className="col-lg-4">
            <div className="features-box">
              <img src="images/web-design2.png" alt="" />
              <h3>Website and Apps</h3>
              <p>
                A web-app can help establish your business or personal brand
                online, and can also provide a platform for customers or clients
                to find and interact with you.
              </p>
            </div>
          </div>

          <div className="col-lg-4">
            <div className="features-box">
              <img src="images/server.png" alt="" />
              <h3>Server Maintenance</h3>
              <p>
                Simplify your server management with our expert service. We will handle all aspects of your server
                including updates, backups, security and troubleshooting.
              </p>
            </div>
          </div>

          <div className="col-lg-4">
            <div className="features-box">
              <img src="images/network.png" alt="" />
              <h3>Network Infrastructure</h3>
              <p>
                Share resources and information among multiple devices and
                users, and increase efficiency and collaboration within your
                organization, school or industry.
              </p>
            </div>
          </div>
        </div>

        <div className="row align-items-center">
          <div className="col-lg-4">
            <div className="left-head">
              <h2>Why Tech!?</h2>
            </div>
          </div>

          <div className="col-lg-8">
            <div className="right-text">
              <p>
                Did you know that the internet and social media platforms can
                help you reach a wider audience and expand your customer base?
              </p>
              <p>
                Did you also know that Software and apps can help your employees
                stay organized and manage their time more effectively?
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
