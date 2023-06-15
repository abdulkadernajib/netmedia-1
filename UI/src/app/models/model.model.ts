import { Brand } from "./brand.model";

export class Model {
    _id: string;
    brandName: Brand;
    modelName: string;
    color: string;
    countryOfOrigin: string;
    asin: string;
    imei?: [string];
    closingStock: number;
    sellingPrice: number;
    createdOn?: string;
    lastUpdated?: string;


}
