
import lg from "./lg.jpg";

import "./Banner.css";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <>
      <section
        className="banner-section"
        style={{
          backgroundImage: `url(${lg})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed"
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="banner-text">
                <h1 className="h1">Stripe-tec LTD</h1>
                <p className="p">
                  We are a leading IT solution provider, dedicated to delivering
                  innovative and efficient technology solutions to businesses of
                  all sizes
                </p>
                <div className="btn-main">
                  <a href="https://wa.me/2347088366937" className="btn btn-primary">
                    CONTACT US
                  </a>
                  <Link
                    to={'/blog'}
                    className="btn btn-outline-light"
                    style={{
                      fontSize: 15,
                      fontWeight: 500,
                      padding: "12px 12px",
                      borderRadius: 0,
                    }}
                  >
                    READ MORE
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;
