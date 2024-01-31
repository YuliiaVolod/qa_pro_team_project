"use strict";
window.fineList = {
    searchFines: searchFines
}


//Ця зміна містить всі дані які в нас зберігаються у файлі data
let DB = data.finesData;

function searchFines(searchKey) {
    const re = /\d{3}/;
    return DB.filter((item) => re.test(searchKey) ? item.номер === searchKey : item.тип === searchKey);
}

