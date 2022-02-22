import brands from "../data/brands";

// Function to filter the brands by name
export const getBrandsByName = (name = "", array = brands) => {
    if (name.length === 0) {
        return [];
    }
    name = name.toLowerCase();
    return array.filter((brand) => brand.name.toLowerCase().includes(name));
};
