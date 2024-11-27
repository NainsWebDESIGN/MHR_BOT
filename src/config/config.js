function env() {
    const _DEFAULT = {
        url: "",
        webAPI: "AKfycbxqv-Sv_sYq5XuIOf-Ji5O6NWSVexFulFnMgDBb7e7tlznpAgemerfA_tZP4GQgo4xr",
        loadStyle: ['https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css'],
        loadScript: ['https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js']
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
  