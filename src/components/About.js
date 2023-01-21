import "./About.css";

const About = () => {
  return (
    <section className="about-section" id="about">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="about-text text-center">
              <h2>About Stripe-tec LTD</h2>
              <p>
                We are an IT and software provider that specializes in helping
                businesses optimize their operations and stay ahead of the
                competition. Our team of experts is dedicated to delivering
                innovative solutions that are tailored to meet the unique needs
                of each of our clients. Whether you're looking for help with
                cloud computing, data management, cybersecurity, or any other
                area of IT, we have the knowledge and resources to help you
                succeed. We pride ourselves in providing the highest quality of
                customer service and support, and we are committed to delivering
                solutions that are reliable, scalable, and cost-effective.
                Contact us today to learn more about how we can help your
                business grow in the digital age.
              </p>
              <div className="signature">
                <img src="images/signature.png" alt="" />
                <p>Founder Of Stripe-Tec LTD</p>
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="about-img">
              <img src="images/it-relax.jpg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
