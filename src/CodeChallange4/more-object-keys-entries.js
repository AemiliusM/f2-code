export function getHouses(obj) {
    return Object.values(obj).map(obj => obj.house);
}