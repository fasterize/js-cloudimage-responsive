import { addClass } from "../common/ci.utils";

export const loadBackgroundImage = (event) => {
  const bgContainer = event.target;
  const bg = bgContainer.getAttribute("data-bg");

  if (bg) {
    let optimizedImage = new Image();

    optimizedImage.onload = () => {
      addClass(bgContainer, "frz-image-loaded");
      bgContainer.removeAttribute("data-bg");
      bgContainer.removeAttribute("frz-preview");
    };

    optimizedImage.src = bg;

    bgContainer.style.backgroundImage = "url(" + bg + ")";
  }
};

export const initImageClasses = ({ imgNode, lazy }) => {
  addClass(imgNode, "frz-image");

  if (lazy) {
    addClass(imgNode, "lazyfrz");
  }
};

export const initImageBackgroundClasses = ({ imgNode, lazy }) => {
  addClass(imgNode, "frz-bg");

  if (lazy) {
    addClass(imgNode, "lazyfrz");
  }
};
