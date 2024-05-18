import storage from "./storage.js";

class Store {
    constructor(storage) {
        if (!storage) throw "no storage";
        this.storage = storage;
    }

    /**
     * 데이터 세트에서 키워드를 사용하여 검색
     * @param {string} keyword 
     * @param {string} dataSetName 데이터 세트 이름 ('userData' 또는 'countriesData')
     * @returns 검색 결과 데이터 배열
     */
    search(keyword, dataSetName) {
        return this.storage[dataSetName].filter((item) =>
            Object.values(item).some((value) => 
                typeof value === "string" && value.includes(keyword)
            )
        );
    }
}

const store = new Store(storage);
export default store;