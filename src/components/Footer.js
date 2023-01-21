const Footer = () => {
  return (
    <>
      {/* <!--Start CTA Section	--> */}
      <section className="cta-section" id="contact">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-9">
              <div className="cta-text">
                <h2>Don't hesitate to contact us any time</h2>
                <p>
                  We provide high standard tech & IT services for your business
                  solutions
                </p>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="cta-btn">
                <a href="mailto:stripetecltd@gmail.com" className="btn btn-primary">
                  book an appointment
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End CTA Section	 */}

      {/* <!--Start Footer--> */}

      <footer>
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <div className="footer-col footer-about">
                <p className="phone-text">+234 708 836 6937</p>
                <p>stripetecltd@gmail.com</p>
                <p>13 Adisa Estate Gudu, Federal Capital Territory, Nigeria </p>
                {/* <ul className="top-social">
                  <li>
                    <a href="">
                      <i className="fa fa-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <i className="fa fa-instagram"></i>
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <i className="fa fa-twitter"></i>
                    </a>
                  </li>
                   <li>
                    <a href="">
                      <i className="fa fa-pinterest"></i>
                    </a>
                  </li> 
                </ul> */}
              </div>
            </div>
            {/* 
            <div className="col-lg-3">
              <div className="footer-col footer-menu">
                <h3>Useful Links</h3>
                <ul>
                  <li>
                    <a href="">About Us</a>
                  </li>
                  <li>
                    <a href="">Corporate Profile</a>
                  </li>                  
                  <li>
                    <a href="">Portfolio</a>
                  </li>
                  <li>
                    <a href="">Our Office</a>
                  </li>
                </ul>
              </div>
            </div> */}

            <div className="col-lg-9">
              <div className="footer-col footer-menu">
                <iframe
                  title="location"
                  width="100%"
                  height="200"
                  id="gmap_canvas"
                  src="https://maps.google.com/maps?q=adisa%20estate&t=&z=13&ie=UTF8&iwloc=&output=embed"
                ></iframe>
              </div>
            </div>

            <div className="col-md-12">
              <div className="copy-text text-center">
                <p>Copyright {new Date().getFullYear()} All Right Reserved.</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
      {/* <!--End Footer--> */}
    </>
  );
};

export default Footer;
