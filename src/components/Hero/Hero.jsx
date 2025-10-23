import Logo from "../Logo/Logo";
import Button from "../Button/Button";
import logo from "../../assets/cv.svg";
import { ChevronRight } from "lucide-react";
import "./Hero.css";

export default function Hero({onStart}) {
  return (
    <section className="hero">
      <div className="hero-content">
        <Logo />
        <main>
          <div className="hero-text">
            <p>Take your career to the</p>
            <p className="decorative-hero">NEXT LEVEL</p>
            <p>with an eye-catching CV</p>
          </div>
          <Button  
            title="Get Started"
            className="start"
            iconPosition="right"
            icon={ChevronRight}
            onClick={onStart}
          />
        </main>
      </div>
    </section>
  );
}
