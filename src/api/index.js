import data from "../data.json";

export const api = {
    getData: () => new Promise(resolve => {
        setTimeout(() => resolve(data), 2200)
    })
};

