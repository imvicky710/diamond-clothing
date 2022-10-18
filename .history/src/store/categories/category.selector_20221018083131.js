import { createSelector } from "reselect";

const selectCategoryReducer = (state) => state.categories;

export const selec

export const selectCategoriesMap = (state) => {
    console.log('Category selector fired');
    return state.categories.categories
        .reduce((acc, category) => {
            const { title, items } = category;
            acc[title.toLowerCase()] = items;
            return acc;
        }, {});
}