import IApperanceData from "./appearance"
import IBiographyData from "./biography"
import IConnectionsData from "./connections"
import IImagesData from "./images"
import IPowerData from "./powerstats"
import IWorkData from "./work"
export default interface ISuperHeroData {
    appereance: IApperanceData,
    biography: IBiographyData,
    connections:IConnectionsData,
    id: number,
    images:IImagesData,
    name: string,
    powerstats: IPowerData,
    slug: string,
    work: IWorkData,
  }