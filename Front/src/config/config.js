function env() {
    const _DEFAULT = {
        url: "",
        webAPI: "AKfycbwgVIScdFRncfGNACfBixqwveHchctpxTK0j-63Ci1BfMWV31uCuN64pgQ1GSQtuC3i",
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
  