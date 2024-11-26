function env() {
    const _DEFAULT = {
        url: "",
        webAPI: "AKfycbzUl4MvUtfKg6BUUsGcjN3kELeZkpC-EBL1Iof_XN957vwsd-333uwMfvCIv5cz-Dm9",
        loadStyle: ['https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css'],
        loadScript: []
    };
    const Location = "mhrbot.zeabur";
    try {
      _DEFAULT.url = Location ? "https://script.google.com/" : "";
    } catch (e) {
      console.log(`Config url Error: ${e}`);
    }
    // console.log(_DEFAULT);
    return _DEFAULT;
  }
  window["env"] = env();
  