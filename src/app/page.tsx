import Image from "next/image";
import React from "react";
import ProfilePicture from "../../public/img/developer-pic-1.png";

const Home = () => {
  return (
    <main className="home align-center justify-center w-full">
      <div className="display-f align-center justify-between w-full">
        <div className="img__container">
          <Image
            src={ProfilePicture}
            alt="Wellintone"
            className="w-full h-auto"
          />
        </div>
        <div className="img__container">
          <h1>Turning Vision Into Reality With Code And Design.</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora
            labore explicabo libero commodi sequi delectus saepe, et suscipit
            veritatis aliquid itaque, voluptatum dolores, dolorum ut aspernatur.
            Nostrum dolorum vero tempora!
          </p>
        </div>
      </div>
    </main>
  );
};

export default Home;
