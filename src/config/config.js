function env() {
    const _DEFAULT = {
        url: "",
        webAPI: "AKfycbxkwkLgNQqUUxC5lTrNYM9joL6ziNGh0-L0jFvm35tmjj12Qbd9nFP_U8KeBCa1aEdc",
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
  