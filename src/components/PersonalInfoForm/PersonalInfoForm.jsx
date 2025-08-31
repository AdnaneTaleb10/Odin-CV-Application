import Button from "../Button/Button";
import FormGroup from "../FormGroup/FormGroup";
import "./PersonalInfoForm.css";
import { ChevronRight, ChevronLeft } from "lucide-react";

export default function PersonalInfoForm() {
  return (
    <div className="personal-info-section">
      <div className="form-section">
        <h1>Personal Information</h1>
        <form>
          <FormGroup id="name" labelName="Name" />
          <FormGroup id="phone-number" labelName="Phone Number" />
          <FormGroup id="email" labelName="Email" />
          <FormGroup id="website" labelName="Website [Optional]" />
          <FormGroup id="location" labelName="Location" />
        </form>
      </div>

      <div className="section-navigator">
        <Button
          className="preivous-button"
          iconPosition="left"
          icon={ChevronLeft}
        >
          Previous
        </Button>
        <Button className="next-button" icon={ChevronRight}>
          Next
        </Button>
      </div>
    </div>
  );
}
