import "../Assets/CSS/App.css";
import axios from "axios";
import ISuperHeroData from "../Types/SuperHero"
function CallAll(){
    let re:Array<ISuperHeroData>;
    return axios
      .request<any>({ url: "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/all.json" })
      .then((response) => {
        // `response` is of type `AxiosResponse<ServerData>`
         re = response.data
        return re
        // `data` is of type ServerData, correctly inferred
      });
}


async function CallAPI() {  
  return await CallAll();
}

export default CallAPI;
