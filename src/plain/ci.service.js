import {
  addClass,
  destroyNodeImgSize,
  getBackgroundImageProps,
  getFreshCIElements,
  getImageProps,
  isLazy,
  setBackgroundSrc,
  setSrc,
  setSrcset
} from '../common/ci.utils';
import { determineContainerProps } from 'cloudimage-responsive-utils/dist/utils/determine-container-props';
import { getImgSRC } from 'cloudimage-responsive-utils/dist/utils/get-img-src';
import { generateURL } from 'cloudimage-responsive-utils/dist/utils/generate-url';
import { getBreakpoint } from 'cloudimage-responsive-utils/dist/utils/get-breakpoint';
import { isSupportedInBrowser } from 'cloudimage-responsive-utils/dist/utils/is-supported-in-browser';
import { getInitialConfigPlain } from './ci.config';
import { initImageClasses, loadBackgroundImage } from './ci.utils';
import { debounce } from 'throttle-debounce';


export default class CIResponsive {
  constructor(config) {
    this.config = getInitialConfigPlain(config);

    if (this.config.init) this.init();

    this.innerWidth = window.innerWidth;
  }

  init() {
    document.addEventListener('lazybeforeunveil', loadBackgroundImage);
    window.addEventListener('resize', debounce(100, this.onUpdateDimensions.bind(this)));

    this.process();
  }

  onUpdateDimensions() {
    this.process(true);

    if (this.innerWidth < window.innerWidth) {
      this.innerWidth = window.innerWidth;
    }
  }

  process(isUpdate, rootElement = document) {
    const { imgSelector, bgSelector } = this.config;
    const windowScreenBecomesBigger = this.innerWidth < window.innerWidth;
    let [images, backgroundImages] = getFreshCIElements(isUpdate, rootElement, imgSelector, bgSelector);

    if (images.length > -1) {
      images.forEach(imgNode => {
        this.getBasicInfo(imgNode, isUpdate, windowScreenBecomesBigger, 'image');
      });
    }

    if (backgroundImages.length > -1) {
      backgroundImages.forEach(imgNode => {
        this.getBasicInfo(imgNode, isUpdate, windowScreenBecomesBigger, 'background');
      });
    }
  }

  getBasicInfo = (imgNode, isUpdate, windowScreenBecomesBigger, type) => {
    const isImage = type === 'image';
    const { config } = this;
    const {
      baseURL, lazyLoading, presets, devicePixelRatioList, imgSelector, bgSelector, processURL, processQueryString
    } = config;
    const imgProps = isImage ?
        getImageProps(imgNode, imgSelector) : getBackgroundImageProps(imgNode, bgSelector);
    const { params, imgNodeSRC, isLazyCanceled, sizes, isAdaptive, preserveSize, minWindowWidth } = imgProps;

    if (!imgNodeSRC) return;

    const [src, isSVG] = getImgSRC(imgNodeSRC, baseURL);
    const lazy = isLazy(lazyLoading, isLazyCanceled, isUpdate);
    let size;

    if (!isSupportedInBrowser(true)) {
      if (isImage) {
        imgNode.src = src;
      } else {
        imgNode.style.backgroundImage = 'url(' + src + ')';
      }

      return;
    }

    if (window.innerWidth < minWindowWidth && !isImage) {
      imgNode.style.backgroundImage = 'none';
      return;
    }

    if (isAdaptive) {
      size = getBreakpoint(sizes, presets);
    } else {
      if (isUpdate && !windowScreenBecomesBigger) return;
    }

    const containerProps = determineContainerProps({ ...imgProps, size, imgNode, config });
    const service = {
      props: { imgNode, imgProps, config },
      methods: {}
    };
    const generateURLbyDPR = devicePixelRatio =>
        generateURL({ src, params, config, containerProps, devicePixelRatio, processURL, processQueryString, service });
    const cloudimageUrl = generateURLbyDPR();
    const cloudimageSrcset = devicePixelRatioList.map(dpr => ({ dpr: dpr.toString(), url: generateURLbyDPR(dpr) }));
    const props = { imgNode, isUpdate, imgProps, lazy, containerProps, isSVG, cloudimageUrl, src, preserveSize };

    if (isImage) {
      this.processImage({ ...props, cloudimageUrl: generateURLbyDPR(1), cloudimageSrcset });
    } else {
      this.processBackgroundImage(props);
    }
  }

  processImage(props) {
    const { imgNode, isUpdate, lazy, isSVG, cloudimageUrl, src, cloudimageSrcset } = props;
    const { config } = this;
    const { dataSrcAttr, onImageLoad } = config;

    if (!isUpdate) {
      initImageClasses({ imgNode, lazy });
    }

    if (config.destroyNodeImgSize) {
      destroyNodeImgSize(imgNode);
    }

    if (config.processOnlyWidth) {
      imgNode.removeAttribute("height");
    }

    imgNode.onload = () => {
      if (onImageLoad && typeof onImageLoad === 'function') {
        onImageLoad(imgNode);
      }
      addClass(imgNode, "frz-image-loaded");
    };

    setSrcset(
      imgNode,
      cloudimageSrcset,
      "data-frz-srcset",
      lazy,
      src,
      isSVG,
      dataSrcAttr
    );
    setSrc(
      imgNode,
      cloudimageUrl,
      "data-frz-src",
      lazy,
      src,
      isSVG,
      dataSrcAttr
    );
  }

  processBackgroundImage(props) {
    const { imgNode, isUpdate, lazy, isSVG, cloudimageUrl, src } = props;
    const { config } = this;
    const { dataSrcAttr } = config;

    if (!isUpdate) {
      imgNode.className = `${imgNode.className}${lazy ? ' lazyload' : ''}`;
    }

    setBackgroundSrc(imgNode, cloudimageUrl, lazy, src, isSVG, dataSrcAttr);
  }
}
