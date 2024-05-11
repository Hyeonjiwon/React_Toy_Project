import storage from "./storage.js";

class Store {
    constructor(storage) {
        if (!storage) throw "no storage";
        this.storage = storage;
    }

    /**
     * user 검색 메소드
     * @param {string} keyword 
     * @returns user 배열 데이터
     */
    search(keyword) {
        return this.storage.userData.filter((user) =>
          user.name.includes(keyword)
        );
    }
}

const store = new Store(storage);
export default store;