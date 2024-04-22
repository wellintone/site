import React from "react";
import FeaturedProjects from "../projects/FeaturedProjects";
import first from "../../../../public/img/bachelor.jpg";
import Article from "./Article";

const page = () => {
  return (
    <div className="articles">
      <div className="articles__wrapper">
        <h1 className="h1 about__title">Words Can Change The World!</h1>
        <div className="articles__content">
          <div className="container">
            <div className="card">
              <FeaturedProjects
                title="Crypto Screener Application"
                summary="Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo facere molestiae quisquam voluptas. Labore optio aliquid minima quo eaque vero! Qui, cum commodi id nostrum ipsum repellendus veniam debitis sint."
                img={first}
                link="https://google.com"
                time="11 min read"
              />
            </div>
            <div className="card">
              <FeaturedProjects
                title="Crypto Screener Application"
                summary="Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo facere molestiae quisquam voluptas. Labore optio aliquid minima quo eaque vero! Qui, cum commodi id nostrum ipsum repellendus veniam debitis sint."
                img={first}
                link="https://google.com"
                time="9 min read"
              />
            </div>
          </div>

          <h2 className="articles__content--all-title">All Articles</h2>
          <ul className="article__list">
            <Article
              link="https://google.com"
              title="Lorem ipsum dolor sit amet consectetur adipisicing elit."
              date="Marzo 22, 2024"
            ></Article>
            <Article
              link="https://google.com"
              title="Lorem ipsum dolor sit amet consectetur adipisicing elit."
              date="Marzo 22, 2024"
            ></Article>
            <Article
              link="https://google.com"
              title="Lorem ipsum dolor sit amet consectetur adipisicing elit."
              date="Marzo 22, 2024"
            ></Article>
            <Article
              link="https://google.com"
              title="Lorem ipsum dolor sit amet consectetur adipisicing elit."
              date="Marzo 22, 2024"
            ></Article>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default page;
