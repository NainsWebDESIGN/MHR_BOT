function env() {
    const _DEFAULT = {
        url: "",
        webAPI: "AKfycbxKbS3wYTy-JjRUqrfs8lcgFYJNYfM6D02hE8iI3GtUSQG-9D7z5dyZ3mss06N5Irpx",
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
  