"use strict";
window.fineList = {
    searchFines : searchFines
}


//Ця зміна містить всі дані які в нас зберігаються у файлі data
let DB = data.finesData;

function searchFines(searchKey){

    const re = /\d{3}/;
    if (re.test(searchKey)){
        // відповідає шаблону ХХХ - шукаєм по номеру
        return DB.filter((item) => item.номер == searchKey);
    }else{
        // шукаєм по типу
        return DB.filter((item) => item.тип == searchKey);
    }
}



