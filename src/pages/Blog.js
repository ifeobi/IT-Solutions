import { Link as Li } from "react-router-dom";
import "./Blog.css";
import BlogHeader from "../components/BlogHeader";

const Blog = () => {
  return (
    <>
      <BlogHeader />

      <header>
        <div class="container">
          <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container-fluid">
              <Li class="navbar-brand" to={"/"}>
                <h2 className="logo">Stripe-tech</h2>
              </Li>
            </div>
          </nav>
        </div>
      </header>
      {/*  header  */}
      <div class="blog-header">
        {/* <nav class = "navbar">
        <div class = "container">
          <a href = "index.html" class = "navbar-brand">Art.Design</a>
          <div class = "navbar-nav">
            <a href = "">home</a>
            <a href = "">design</a>
            <a href = "">blog</a>
            <a href = "">about</a>
          </div>
        </div>
      </nav> */}
        <div class="banner">
          <div class="container">
            <h1 class="banner-title">
              <span>IT.</span> Tech Blog
            </h1>
            <p>everything that you want to know about Tech & IT</p>
            {/* <form>
            <input type = "text" class = "search-input" placeholder="find your food . . ." />
            <button type = "submit" class = "search-btn">
              <i class = "fas fa-search"></i>
            </button>
          </form> */}
          </div>
        </div>
      </div>
      {/* <!-- end of header --> */}

      {/* blog  */}
      <section className="blog" id="blog">
        <div class="container">
          <div class="title">
            <h2>Latest Blog</h2>
            <p>recent blogs about Tech & IT</p>
          </div>
          <div class="blog-content">
            {/* <!-- item --> */}
            <div class="blog-item">
              <div class="blog-img">
                <img src="images/lapy.jpg" alt="" />
                <span>
                  <i class="fa fa-heart"></i>
                </span>
              </div>
              <div class="blog-text">
                <span>17 January, 2023</span>
                <h2>Why You Need a Website for your Business</h2>
                <p>
                  Having a website can help establish your business or personal
                  brand online, and can also provide a platform for customers or
                  clients to find...
                </p>
                <Li to={"/blog/1"}>Read More</Li>
              </div>
            </div>
            {/* <!-- end of item -->
          <!-- item --> */}
            <div class="blog-item">
              <div class="blog-img">
                <img src="images/net.jpg" alt="" />
                <span>
                  <i class="fa fa-heart"></i>
                </span>
              </div>
              <div class="blog-text">
                <span>17 January, 2023</span>
                <h2>
                  You are not familiar with the concept of IT Networking? Close
                  down your Organization!
                </h2>
                <p>
                  IT networking and infrastructure are critical components of
                  any modern organization. They provide the foundation for
                  communication, collaboration, and ...
                </p>
                <Li to={"/blog/2"}>Read More</Li>
              </div>
            </div>
            {/* <!-- end of item -->
          <!-- item --> */}
            <div class="blog-item">
              <div class="blog-img">
                <img src="images/digital.jpg" alt="" />
                <span>
                  <i class="fa fa-heart"></i>
                </span>
              </div>
              <div class="blog-text">
                <span>17 January, 2023</span>
                <h2>
                  What they don't want you to know about Digital Marketing
                </h2>
                <p>
                  Digital marketing is crucial to the survival of your business
                  because it allows you to reach a larger audience at a lower
                  cost than traditional...
                </p>
                <Li to={"/blog/3"}>Read More</Li>
              </div>
            </div>
            {/* <!-- end of item -->
          <!-- item --> */}
            {/* <div class="blog-item">
              <div class="blog-img">
                <img src="images/blog-p-4.jpg" alt="" />
                <span>
                  <i class="fa fa-heart"></i>
                </span>
              </div>
              <div class="blog-text">
                <span>20 January, 2020</span>
                <h2>Lorem ipsum, dolor sit amet consectetur adipisicing</h2>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Omnis libero quas ipsum laudantium nihil! Quaerat.
                </p>
                <a href="#">Read More</a>
              </div>
            </div> */}
            {/* <!-- end of item -->
          <!-- item --> */}
            {/* <div class="blog-item">
              <div class="blog-img">
                <img src="images/blog-p-5.jpg" alt="" />
                <span>
                  <i class="fa fa-heart"></i>
                </span>
              </div>
              <div class="blog-text">
                <span>20 January, 2020</span>
                <h2>Lorem ipsum, dolor sit amet consectetur adipisicing</h2>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Omnis libero quas ipsum laudantium nihil! Quaerat.
                </p>
                <a href="#">Read More</a>
              </div>
            </div> */}
            {/* <!-- end of item -->
          <!-- item --> */}
            {/* <div class="blog-item">
              <div class="blog-img">
                <img src="images/blog-p-6.jpg" alt="" />
                <span>
                  <i class="fa fa-heart"></i>
                </span>
              </div>
              <div class="blog-text">
                <span>20 January, 2020</span>
                <h2>Lorem ipsum, dolor sit amet consectetur adipisicing</h2>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Omnis libero quas ipsum laudantium nihil! Quaerat.
                </p>
                <a href="#">Read More</a>
              </div>
            </div> */}
            {/* <!-- end of item --> */}
          </div>
        </div>
      </section>
      {/* <!-- end of blog --> */}

      {/* <!-- footer --> */}
      <footer className="footer">
        <div class="social-links">
          <a href="">
            <i class="fa fa-facebook"></i>
          </a>
          <a href="#">
            <i class="fa fa-twitter"></i>
          </a>
          <a href="#">
            <i class="fa fa-instagram"></i>
          </a>
        </div>
        <span>IT.Tech Blog Page</span>
      </footer>
      {/* <!-- end of footer --> */}
    </>
  );
};

export default Blog;
