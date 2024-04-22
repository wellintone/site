import React from "react";
import educations from "../education.json";
import Education from "./EducationDetail";

const Educations = () => {
  return (
    <div className="educations">
      <h1 className="educations__title h1">Education</h1>

      <div className="educations__wrapper">
        <ul id="exp" className="educations__wrapper-description">
          {educations.map((el: any, indx: number) => {
            return (
              <Education
                id={el.id}
                key={indx}
                style={{ marginTop: "0px" }}
                position={el.position}
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

export default Educations;
