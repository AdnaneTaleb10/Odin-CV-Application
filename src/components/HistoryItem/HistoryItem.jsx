import "./HistoryItem.css";
import { Trash, Calendar, MapPin } from "lucide-react";

export default function HistoryItem({
  title,
  organization,
  startDate,
  endDate,
  location,
  achievements,
}) {
  return (
    <div className="history-item">
      <div className="history-header">
        <p className="history-title">{title}</p>
        <Trash className="delete-icon" />
      </div>

      <div className="history-meta">
        <p className="history-organization">{organization}</p>

        <div className="history-duration">
          <Calendar />
          <p>
            {startDate} – {endDate}
          </p>
        </div>

        <div className="history-location">
          <MapPin />
          <p>{location}</p>
        </div>
      </div>

      <ul className="achievements-container">
        {achievements &&
          achievements.map((achievement, index) => {
            return (
              <li key={index} className="achievement">
                {achievement}
              </li>
            );
          })}
      </ul>
    </div>
  );
}
