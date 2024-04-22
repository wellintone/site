import React from "react";
import experiences from "../experiences.json";
import ExperienceDetail from "./ExperiencesDetail";

const Experiences = () => {
  return (
    <div className="experiences">
      <h1 className="experiences__title h1">Experiences</h1>

      <div className="experiences__wrapper">
        <ul id="exp" className="experiences__wrapper-description">
          {experiences.map((el: any, indx: number) => {
            return (
              <ExperienceDetail
                id={el.id}
                key={indx}
                style={{ marginTop: "0px" }}
                position={el.position}
                company={el.company}
                companyLink={el.companyLink}
                time={el.time}
                address={el.address}
                work={el.work}
              />
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Experiences;
