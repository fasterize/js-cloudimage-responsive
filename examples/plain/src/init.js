window.ciResponsive = new window.CIResponsive({
  // baseURL: "/demo/",
  // params: "org_if_sml=1&version=16.04.2020",
  // lazyLoadOffset: 100,
  // // apiVersion: "v7",
  // lazyLoading: true,
  // exactSize: false,
  // limitFactor: 10,
  doNotReplaceURL: true,
  imgSelector: "data-frz-src",
  // { query, widthQ, heightQ, restParamsQ, processOnlyWidth, devicePixelRatio, service }
  processQueryString: function (params) {
    return [
      params.widthQ ? `frz-w=${params.widthQ}` : "",
      params.heightQ && !params.processOnlyWidth
        ? (params.widthQ ? "&" : "") + `frz-h=${params.heightQ}`
        : "",
      params.restParamsQ ? "&" + params.restParamsQ : "",
    ].join("");
  },
});

window.lazySizes.init();
