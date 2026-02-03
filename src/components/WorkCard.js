import React from 'react';
import { NavLink } from "react-router-dom";
import { FaCode, FaDatabase, FaNetworkWired, FaServer } from 'react-icons/fa';

const WorkCard = (props) => {
  
  const renderIcon = (title) => {
    if (title.includes("AI") || title.includes("Prompt")) return <FaCode className="project-icon" />;
    if (title.includes("Database") || title.includes("MySQL")) return <FaDatabase className="project-icon" />;
    if (title.includes("Network")) return <FaNetworkWired className="project-icon" />;
    return <FaServer className="project-icon" />;
  };

  return (
    <div className="project-card">
      <div className="icon-wrapper">
        {renderIcon(props.title)}
      </div>
      <h2 className="project-title">{props.title}</h2>
      <div className="pro-details">
        <p>{props.text}</p>
        <div className="pro-skills">
            {props.skills.split(',').map((skill, index) => (
                <span key={index} className="skill-badge">{skill}</span>
            ))}
        </div>
        <div className="pro-btns">
          <NavLink to={props.view} className="btn">Details</NavLink>
        </div>
      </div>
    </div>
  );
};

export default WorkCard;