function env() {
    const _DEFAULT = {
        url: "",
        webAPI: "AKfycbzYzWxr0G6n9Jb1r5LKZvEIBSHufVgihy6IpyLUmjoAewHHI3Wl1UyxCpf_et1ElzRr",
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
  