import React from "react";
import FeaturedProjects from "./FeaturedProjects";
import first from "../../../../public/img/bachelor.jpg";
import second from "../../../../public/img/hair1.jpg";
import third from "../../../../public/img/developer-pic-2.jpg";
import fourth from "../../../../public/img/developer-pic-1.png";
import fifth from "../../../../public/img/right.jpg";

const Projects = () => {
  return (
    <div className="projects">
      <div className="projects__wrapper">
        <h1 className="h1 about__title">Imagination Trumps knowledge!</h1>
        <div className="projects__content">
          <div className="container">
            <div className="card single">
              <FeaturedProjects
                type="featured projects"
                title="Crypto Screener Application"
                summary="Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo facere molestiae quisquam voluptas. Labore optio aliquid minima quo eaque vero! Qui, cum commodi id nostrum ipsum repellendus veniam debitis sint."
                img={first}
                link="https://google.com"
                github="https://google.com"
              />
            </div>
          </div>
          <div className="container">
            <div className="card">
              <FeaturedProjects
                type="Web site"
                title="Crypto Screener Application"
                summary="Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo facere molestiae quisquam voluptas. Labore optio aliquid minima quo eaque vero! Qui, cum commodi id nostrum ipsum repellendus veniam debitis sint."
                img={second}
                link="https://google.com"
                github="https://google.com"
              />
            </div>
            <div className="card ">
              <FeaturedProjects
                type="Web site template"
                title="Crypto Screener Application"
                summary="Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo facere molestiae quisquam voluptas. Labore optio aliquid minima quo eaque vero! Qui, cum commodi id nostrum ipsum repellendus veniam debitis sint."
                img={third}
                link="https://google.com"
                github="https://google.com"
              />
            </div>
          </div>
          <div className="container">
            <div className="card single">
              <FeaturedProjects
                type="Website"
                title="Crypto Screener Application"
                summary="Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo facere molestiae quisquam voluptas. Labore optio aliquid minima quo eaque vero! Qui, cum commodi id nostrum ipsum repellendus veniam debitis sint."
                img={fourth}
                link="https://google.com"
                github="https://google.com"
              />
            </div>
          </div>
          <div className="container">
            <div className="card">
              <FeaturedProjects
                type="Portfolio website"
                title="Crypto Screener Application"
                summary="Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo facere molestiae quisquam voluptas. Labore optio aliquid minima quo eaque vero! Qui, cum commodi id nostrum ipsum repellendus veniam debitis sint."
                img={fifth}
                link="https://google.com"
                github="https://google.com"
              />
            </div>
            <div className="card">
              <FeaturedProjects
                type="Blog website"
                title="Crypto Screener Application"
                summary="Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo facere molestiae quisquam voluptas. Labore optio aliquid minima quo eaque vero! Qui, cum commodi id nostrum ipsum repellendus veniam debitis sint."
                img={first}
                link="https://google.com"
                github="https://google.com"
              />
            </div>
          </div>
          <div className="container">
            <div className="card single">
              <FeaturedProjects
                type="Blog website"
                title="Crypto Screener Application"
                summary="Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo facere molestiae quisquam voluptas. Labore optio aliquid minima quo eaque vero! Qui, cum commodi id nostrum ipsum repellendus veniam debitis sint."
                img={second}
                link="https://google.com"
                github="https://google.com"
              />
            </div>
          </div>
          <div className="container">
            <div className="card">
              <FeaturedProjects
                type="Web site template"
                title="Crypto Screener Application"
                summary="Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo facere molestiae quisquam voluptas. Labore optio aliquid minima quo eaque vero! Qui, cum commodi id nostrum ipsum repellendus veniam debitis sint."
                img={third}
                link="https://google.com"
                github="https://google.com"
              />
            </div>
            <div className="card">
              <FeaturedProjects
                type="Featured Project"
                title="Crypto Screener Application"
                summary="Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo facere molestiae quisquam voluptas. Labore optio aliquid minima quo eaque vero! Qui, cum commodi id nostrum ipsum repellendus veniam debitis sint."
                img={fourth}
                link="https://google.com"
                github="https://google.com"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
