import router from "next/router";

export const waitToChange = (onClick: any, route: any) => {
  const el = document.getElementById("transP")?.children;

  if (el) {
    setTimeout(() => {
      onClick();
    }, 1400);
    for (let i = 0; i < el?.length; i++) {
      el[i]?.classList.remove(`transitionPageTest__${i + 1}`);
      el[i]?.classList.add(`animateTransitionPageTest__${i + 1}`);

      const newDiv = document.createElement("div");
      newDiv.classList.add("route");
      newDiv.innerHTML =
        route === "/" ? "home".toUpperCase() : route.substring(1).toUpperCase();

      el[2].appendChild(newDiv);

      setTimeout(() => {
        el[i]?.classList.add(`transitionPageTest__${i + 1}`);
        el[i]?.classList.remove(`animateTransitionPageTest__${i + 1}`);

        router.push(route);
      }, 1400);

      setTimeout(() => {
        document?.getElementsByClassName("route")[0]?.remove();
      }, 2800);
    }
  }
};
