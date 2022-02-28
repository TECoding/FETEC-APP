import brands from "../data/brands";

// Function to filter the brands by categories selected
export const getBrandsByCategories = (
    categories: { val: string; isChecked: boolean }[],
    array = brands
) => {
    return array.filter((brand) =>
        categories.some(
            (cat) => cat["val"] === brand.category && cat["isChecked"] === true
        )
    );
};
