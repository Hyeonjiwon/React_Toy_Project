import { useState, useEffect } from "react";
import store from "./Store.js";
import Header from "./components/Header.js";
import Table from "./components/Table.js";

const App = () => {
    const defaultSearchKeyword = "";
    const [userData, setUserData] = useState([]);
    const [countriesData, setCountriesData] = useState([]);

    const searchUserData = (defaultSearchKeyword) => {
        const userData = store.search(defaultSearchKeyword, "userData");
        setUserData(userData);
    }

    const searchCountriesData = (defaultSearchKeyword) => {
        const countriesData = store.search(defaultSearchKeyword, "countriesData");
        setCountriesData(countriesData);
    }

    // App 컴포넌트가 렌더링될 때 초기 검색을 실행
    useEffect(() => {
        searchUserData(defaultSearchKeyword);
        searchCountriesData(defaultSearchKeyword);
    }, []);

    return (
        <>
            <Header title="헤더" />
            <Table title="User" data={userData}/>
            <Table title="Country" data={countriesData}/>
        </>
    );
}

export default App;