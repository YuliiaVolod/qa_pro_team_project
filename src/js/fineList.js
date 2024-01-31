"use strict";
window.fineList = {
    searchFines: searchFines
}

let DB = data.finesData;

function searchFines(searchKey) {
    const re = /\d{3}/;
    return DB.filter((item) => re.test(searchKey)? item.номер === searchKey: item.тип === searchKey);
}

