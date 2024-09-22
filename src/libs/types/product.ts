import {ObjectId} from "mongoose";
import {
  ProductCollection,
  ProductSize,
  ProductStatus,
} from "../enums/product.enum";


export interface Product {
  _id: ObjectId;
  productStatus: ProductStatus;
  productCollection: ProductCollection;
  productName: ProductName;
  productPrice: number;
  productLeftCount: number;
  productSize?: ProductSize;
  productVolume?: number;
  productDesc?: string;
  productImages?: string[];
  productViews?: number;
}

export interface ProductInput {
  productStatus: ProductStatus;
  productCollection: ProductCollection;
  productName: ProductName;
  productPrice: number;
  productLeftCount: number;
  productSize?: ProductSize;
  productVolume?: number;
  productDesc?: string;
  productImages?: string[];
  productViews?: number;
}
