import { createContext } from "react";
import { IBasicPage } from "../../../entities";

interface IProductsContext extends IBasicPage {}

export const ProductsCardContext = createContext({} as IProductsContext);
