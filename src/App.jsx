import { useState, useEffect } from "react";
import Header from "./components/Header.js";
import Table from "./components/Table.js";
import store from "./Store.js";

const App = () => {
    const defaultSearchKeyword = "";
    const [searchResult, setSearchResult] = useState([]);

    const search = (keyword) => {
        const searchResult = store.search(keyword);
        setSearchResult(searchResult);
    }

    // App 컴포넌트가 렌더링될 때 초기 검색 실행
    useEffect(() => {
        search(defaultSearchKeyword);
    }, []);

    return (
        <>
            <Header title="헤더" />
            <Table data={searchResult}/>
        </>
    );
}

export default App;