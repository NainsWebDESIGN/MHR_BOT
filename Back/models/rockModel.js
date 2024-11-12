
export default class ApiModel {
    constructor() { }
    final = async (el) => {
      return el
        ? await this.GETALL()
        : JSON.stringify({
          status: "Error",
          Msg: el.message,
        });
    };
  
    //取得全部
    GETALL() {
      return mysql("SELECT * FROM rocks")
        .then((res) => res)
        .catch((err) => console.log("err", err));
    }
}