import "./topbar.scss";
import { GitHub, Mail ,Instagram,LinkedIn,YouTube} from "@material-ui/icons";

export default function Topbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            SoulX
          </a>
          <div className="itemContainer">
            <a href="https://github.com/parthpradhan?tab=repositories" target="_blank" rel=" noopener noreferrer" alt="github"><GitHub className="icon" /></a>
            <span>Github</span>
          </div>
          <div className="itemContainer">
            <a href="https://www.instagram.com/thesoulfrost/" target="_blank" rel=" noopener noreferrer" alt="insta"><Instagram className="icon" /></a>
            <span>Insta</span>
            </div>
            <div className="itemContainer">
            <a href="https://www.linkedin.com/in/parth-shankar-pradhan-584b761aa/" target="_blank" rel=" noopener noreferrer" alt="linkedin"><LinkedIn className="icon" /></a>
            <span>LinkedIn</span>
            </div>
            <div className="itemContainer">
            <a href="https://www.youtube.com/channel/UCFAOx2wRuWGHYNYpOTKc3_A" target="_blank" rel=" noopener noreferrer" alt="youtube"><YouTube className="icon" /></a>
            <span>Youtube</span>
          </div>
          <div className="itemContainer">
            <Mail className="icon" />
            <span>soulcoder11111@gmail.com</span>
          </div>
        </div>
        <div className="right">
          <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
