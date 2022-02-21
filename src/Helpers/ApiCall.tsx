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

const CallByID = (ID:number) =>{
  let re:ISuperHeroData;
  return axios
  .request<any>({ url: "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/id/"+ID+".json" })
  .then((response) => {
    // `response` is of type `AxiosResponse<ServerData>`
     re = response.data
     return re
    // `data` is of type ServerData, correctly inferred
  })
  .catch((error)=>{
    console.log(error)    
  });
} 




async function CallAPI() {  
  return await CallAll();
}


async function CallLiked(ID:Array<number>) {  
  return await CreateArray(ID);  
}

async function CreateArray(Liked:Array<number>) {  
  let Pog:any= []
  let Re:Array<ISuperHeroData>=[]
  Liked.map((id)=>{
    let helper = CallByID(id)
    Pog.push(helper)
  })
  return Promise.all(Pog).then((values) => {
    Re = values
    return Re; 
  });  
   
}


export {CallAPI,CallLiked};
