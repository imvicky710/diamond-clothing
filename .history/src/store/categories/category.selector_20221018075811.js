export const selectCategoriesMap = (state) => {
    consoe
    return state.categories.categories
        .reduce((acc, category) => {
            const { title, items } = category;
            acc[title.toLowerCase()] = items;
            return acc;
        }, {});
}