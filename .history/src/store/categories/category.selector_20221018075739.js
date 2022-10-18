export const selectCategoriesMap = (state) => tate.categories.categories
    .reduce((acc, category) => {
        const { title, items } = category;
        acc[title.toLowerCase()] = items;
        return acc;
    }, {});