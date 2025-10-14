import "./CVPreview.css";
import { Calendar1Icon, Link, Mail, MapPin, Phone } from "lucide-react";

export default function CVPreview({ sectionContent }) {
  return (
    <div className="cv">
      <div className="section header">
        <div className="name">{sectionContent[0]?.content.name}</div>
        <div className="role">{sectionContent[1]?.content.role}</div>
        <div className="personel">
          <div className="info phone">
            <Phone className="icon" />
            {sectionContent[0]?.content.phoneNumber}
          </div>

          <div className="info email">
            <Mail className="icon" />
            {sectionContent[0]?.content.email}
          </div>

          <div className="info website">
            <Link className="icon" />
            {sectionContent[0]?.content.website}
          </div>

          <div className="info location">
            <MapPin className="icon" />
            {sectionContent[0]?.content.location}
          </div>
        </div>
      </div>

      <div className="section summury">
        <div className="heading">SUMMARY</div>
        <div className="content">
          <p>{sectionContent[1].content.summary}</p>
        </div>
      </div>

      <div className="section skills">
        <div className="heading">SKILLS</div>
        <div className="content">
          <ul>
            {sectionContent[2]?.content.map((skill, index) => (
              <li key={index} className="skill">
                {skill}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="section experience">
        <div className="heading">EXPERIENCE</div>
        <div className="content">
          <ul>
            {sectionContent[3]?.content?.map((experience, index) => (
              <li key={index} className="item">
                <p className="position">{experience.position}</p>
                <p className="organization">{experience.organization}</p>
                <div className="details">
                  <div className="info period">
                    <Calendar1Icon className="icon" />
                    <p>
                      {experience.startDate} - {experience.endDate}
                    </p>
                  </div>

                  <div className="info location">
                    <MapPin className="icon" />
                    <p>{experience.location}</p>
                  </div>
                </div>

                <ul className="accomplishments">
                  {experience.achievements?.map((acc, i) => (
                    <li key={i}>{acc}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="section education">
        <div className="heading">EDUCATION</div>
        <div className="content">
          <ul>
            {sectionContent[4]?.content?.map((deg, i) => (
              <li key={i}>
                <p className="degree">{deg.degree}</p>
                <p className="institution">{deg.institution}</p>

                <div className="details">
                  <div className="info period">
                    <Calendar1Icon className="icon" />
                    <p>
                      {deg.startDate} - {deg.endDate}
                    </p>
                  </div>

                  <div className="info location">
                    <MapPin className="icon" />
                    <p>{deg.location}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
