import logo from "../../assets/cv.svg";
import Button from "../Button/Button";
import { ChevronRight } from "lucide-react";
import "./Hero.css";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <header>
          <img src={logo} alt="CVLIAN logo" />
          <h1>CVLIAN</h1>
        </header>
        <main>
          <div className="hero-text">
            <p>Take your career to the</p>
            <p className="decorative-hero">NEXT LEVEL</p>
            <p>with an eye-catching CV</p>
          </div>
          <Button className="start" icon={ChevronRight}>
            Get Started
          </Button>
        </main>
      </div>
    </section>
  );
}
