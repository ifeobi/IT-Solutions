import { Link as Li } from "react-router-dom";

const BlogHeader = () => {
  return (
    <>
      <div className="top-header">
        <div className="container">
          <div className="row">
            <div className="col-lg-7">
              <div className="top-contact">
                <ul>
                  <li>
                    <a href="tel:+234 708 836 6937">
                      <i className="fa fa-phone"></i> +234 708 836 6937
                    </a>
                  </li>
                  <li>
                    <a href="stripetecltd@gmail.com">
                      <i className="fa fa-envelope"></i> stripetecltd@gmail.com
                    </a>
                  </li>

                  <li>
                    <a href="">
                      <i className="fa fa-home"></i> 13 Adisa Estate Gudu FCT
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-5">
              <div className="top-right-info">
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
                </ul> */}

                <a href="" className="btn btn-primary">
                  book an appointment
                </a>

                <span className="blog-nav-link">
                  <Li to="/" href="#">
                    HOME
                  </Li>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogHeader;
