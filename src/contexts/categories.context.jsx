import { createContext, useState, useEffect } from "react";
//import { addCollectionAndDocuments } from "../utils/firebase/firebase.utils.js";
//import SHOP_DATA from '../shop-data.js';
import { getCategoriesAndDocuments } from "../utils/firebase/firebase.utils";

export const CategoriesContext = createContext({
    categoriesMap: {},
});

export const CategoriesProvider = ({ children }) => {
    const [categoriesMap, setCategoriesMap] = useState({});
    /*
    useEffect(() => { addCollectionAndDocuments('categories', SHOP_DATA);}, []);
    // one off trigger to add collection of data for SHOP_DATA to firebase DB
    */

    useEffect(() => {
        const getCategoriesMap = async () => {
            const categoryMap = await getCategoriesAndDocuments();
            //console.log(categoryMap);
            setCategoriesMap(categoryMap);
        };
        
        getCategoriesMap();
    }, []);
    const value = { categoriesMap }
    return (
        <CategoriesContext.Provider value={value}> {children} </CategoriesContext.Provider>
    )
}