export interface IDiet{
    id?: number;
    imgUrl: string;
    name: string;
    description: string;
    numberOfCalories: number;
    isVege: boolean;
    price: number;
    photosUrls: string[];
}