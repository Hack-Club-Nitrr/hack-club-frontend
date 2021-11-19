import "../assets/stylesheets/Teams.css";

const Teams = () => {
  return (
    <div className="team-area">
      <div className="container">
        <div className="team-heading">
          <h1>Our Team</h1>
          <p>Meet Our Talented Team Member</p>
        </div>
        <div className="row">
          {/* <!--== Single Team Item ==--> */}
          <div className="col-md-3">
            <div className="single-team">
              <div className="team-img">
                <img
                  src="https://randomuser.me/api/portraits/men/34.jpg"
                  alt=""
                />
              </div>
              <div className="team-content">
                <div className="team-info">
                  <h3>Aditya Ray</h3>
                  <p>Web Developer</p>
                </div>
                <p className="team-icon">
                  <i className="fa fa-instagram" aria-hidden="true"></i>
                  <i className="fa fa-linkedin" aria-hidden="true"></i>
                  <i className="fa fa-envelope-o" aria-hidden="true"></i>
                </p>
              </div>
            </div>
          </div>
          {/* <!--== Single Team Item ==--> */}
          <div className="col-md-3">
            <div className="single-team">
              <div className="team-img">
                <img
                  src="https://randomuser.me/api/portraits/men/11.jpg"
                  alt=""
                />
              </div>
              <div className="team-content">
                <div className="team-info">
                  <h3>Aditya Ray 2</h3>
                  <p>Web Developer</p>
                </div>
                <p className="team-icon">
                  <i className="fa fa-instagram" aria-hidden="true"></i>
                  <i className="fa fa-linkedin" aria-hidden="true"></i>
                  <i className="fa fa-envelope-o" aria-hidden="true"></i>
                </p>
              </div>
            </div>
          </div>
          {/* <!--== Single Team Item ==--> */}
          <div className="col-md-3">
            <div className="single-team">
              <div className="team-img">
                <img src="https://i.postimg.cc/K80X9VpS/3.jpg" alt="" />
              </div>
              <div className="team-content">
                <div className="team-info">
                  <h3>Aditya Ray 3</h3>
                  <p>Web Developer</p>
                </div>
                <p className="team-icon">
                  <i className="fa fa-instagram" aria-hidden="true"></i>
                  <i className="fa fa-linkedin" aria-hidden="true"></i>
                  <i className="fa fa-envelope-o" aria-hidden="true"></i>
                </p>
              </div>
            </div>
          </div>
          {/* <!--== Single Team Item ==--> */}
          <div className="col-md-3">
            <div className="single-team">
              <div className="team-img">
                <img src="https://i.postimg.cc/3JZzRVT4/4.jpg" alt="" />
              </div>
              <div className="team-content">
                <div className="team-info">
                  <h3>Aditya Ray 4</h3>
                  <p>Web Developer</p>
                </div>
                <p className="team-icon">
                  <i className="fa fa-instagram" aria-hidden="true"></i>
                  <i className="fa fa-linkedin" aria-hidden="true"></i>
                  <i className="fa fa-envelope-o" aria-hidden="true"></i>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Teams;
