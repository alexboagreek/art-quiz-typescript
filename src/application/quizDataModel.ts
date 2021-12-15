import imagesDataUrl from '../assets/json/images.json';


interface IMultiLangString {
  ru: string,
  en: string
}


interface IPictureData {
  year: number,
  picture: number,
  author: IMultiLangString,
  name: IMultiLangString
}

interface IImageDto {
  year: string,
  picture: string,
  author: IMultiLangString,

}
type IImagesDto = Record<string, IImageDto>

export interface ICategoryData {
  name: string;
  picture: string;
  score?: Array<boolean> 

}


export class QuizDataModel {
  data: Array<IPictureData>;

  constructor() {
    
  }
  public async build() {
    this.data = await this.loadImagesData(imagesDataUrl);
    return this;
  }
  public getCategoriesData() {
    const questionsPerCategory = 10;
    const categoriesCount = Math.floor(this.data.length / questionsPerCategory);
    const categories: Array<ICategoryData> = [];
    for (let i = 0; i < categoriesCount; i++) {
      const pictureUrl = `./public/img/pictures/${i}.jpg`;
      const categoryData: ICategoryData = {
        name: i.toString(),
        picture: pictureUrl,
        score: new Array(categoriesCount).fill(false)
      }
      categories.push(categoryData);
    }
    return categories;
  }

  private loadImagesData(url:string): Promise<Array<IPictureData>>{
    return fetch(url).then(res => res.json()).then((imagesData: IImageDto) => {

      const modelData: Array<IPictureData> = Object.keys(imagesData).map(it => {
        const item = imagesData[it];
        const record: IPictureData = {
          year: Number(item.year),
          picture: Number(item.picture),
          author: item.author,
          name: item.name

        };
        return record;
      });
      return modelData;
    })
  }

}