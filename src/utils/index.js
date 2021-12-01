export const addKey = (array, key = "defaultKey", defaultValue = null) => {
    return array.map(item => ({ ...item, [key]: defaultValue }));
}

export const calculateShipmentValue = (str) => {
    const value = str.split(",").reduce((acc, value) => acc + Number(value), 0).toFixed(1);
    return Math.ceil(value / 10);
}

export const checkIsValid = (value) => {
    return isNaN(value) ? "Invalid input" : value;
}