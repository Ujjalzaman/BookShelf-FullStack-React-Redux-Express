export interface IBooks {
    _id?:number;
    title: string;
    author: string;
    genre: string;
    publicationDate?:string | undefined;
    reviews?: string;
    image?:string;
}