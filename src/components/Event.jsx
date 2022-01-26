import "../assets/stylesheets/Event.css";
import { Zoom } from "react-awesome-reveal";

const Event = () => {
  return (
    <div className="Event">
      <div className="eventHeading">Latest Event</div>
      <div className="eventContainer">
        <Zoom triggerOnce>
          <div className="vedio">
            <iframe
              src="https://www.youtube.com/embed/jdhUHTY43CA"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </Zoom>
        {/* <Slide direction={"right"} triggerOnce>
          <div className="description">
            <div className="desHeading">Treck The Hill</div>
            <div className="desBody">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum
              consectetur velit delectus laudantium dolorem impedit fuga
              voluptatibus, mollitia laboriosam, voluptate expedita
              necessitatibus animi tempora molestiae at error nam quasi
              cupiditate aperiam doloribus? Adipisci inventore non laborum
              voluptatibus reiciendis perspiciatis, fugit incidunt et illum
              exercitationem repellendus quos quod vitae quas voluptates?
            </div>
          </div>
        </Slide> */}
      </div>
    </div>
  );
};

export default Event;
