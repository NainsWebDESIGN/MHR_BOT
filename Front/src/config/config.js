function env() {
    const _DEFAULT = {
        webAPI: "AKfycbwgVIScdFRncfGNACfBixqwveHchctpxTK0j-63Ci1BfMWV31uCuN64pgQ1GSQtuC3i"
    };
    const Location = "mhrbot.zeabur";
    try {
      _DEFAULT.url = Location ? "https://script.google.com/" : "";
    } catch (e) {
      console.log(`Config url Error: ${e}`);
    }
    console.log(_DEFAULT);
    return _DEFAULT;
  }
  window["env"] = env();
  