import "./index.scss";
import TypeIt from "typeit-react";
import { CSSTransition, SwitchTransition } from "react-transition-group";

function Video() {
  return (
    <div className="Video">
      <div className="textobanner">
        <TypeIt
          options={{
            strings: ["Prazer, eu sou o Design System da Grownt_"],
            speed: 75,
            waitUntilVisible: true,
            loop: true,
          }}
          style={{
            fontSize: "80px",
            color: "white",
            fontFamily: "Bricolage Grotesque",
            lineHeight: "1",
          }}
        />
      </div>
      {/* <video autoplay controls loop muted >
            <source src="https://marciomedeirosdesign.com.br/nucleoweb/receitasapi/imgs/video_home.mp4" type="video/mp4"></source>
        </video> */}
    </div>
  );
}
export default Video;
