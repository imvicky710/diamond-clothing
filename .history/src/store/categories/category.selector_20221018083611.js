import { createSelector } from "reselect";

const selectCategoryReducer = (state) => state.categories;

export const selectCategories = createSelector(
    [selectCategoryReducer],
    (categoriesSlice) => categoriesSlice.categories
)

export const selectCategoriesMap = createSelect(
    [selectCategories],
    (categories) => 
    )(state) => {
    console.log('Category selector fired');
    return state.categories.categories
        
}