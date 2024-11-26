function env() {
    const _DEFAULT = {
        url: "",
        webAPI: "AKfycbxcbycCsB04sFczR4rgUee-HIj6XuJkfpLlrzm6rJZAZHxuyj2nd5JRyvWEV0bvRLz1",
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
  