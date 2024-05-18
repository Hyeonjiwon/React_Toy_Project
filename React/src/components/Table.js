const Table = ({ title, data = [] }) => {
    // data 배열이 비어있는 경우를 대비하여 첫 번째 요소를 가져온 후, 
    // 그 객체의 키들을 열 이름으로 사용
    const columns = data.length > 0 ? Object.keys(data[0]) : [];

    const getColumnNames = () => {
        return (
            <>
                {columns.map((column, index) => (
                    <th key={index}>{column.toUpperCase()}</th>
                ))}
            </>
        );
    }

    const getTableData = () => {
        return (
            <>
                {data.map((item, rowIndex) => (
                    <tr key={rowIndex}>
                        {columns.map((column, colIndex) => (
                            <td key={colIndex}>{item[column]}</td>
                        ))}
                    </tr>
                ))}
            </>
        );
    }
    return (
        <>
            <div className="tableContainer">
                <div>{title}</div>
                <table>
                    <thead>
                        <tr>
                            {getColumnNames()}
                        </tr>
                    </thead>
                    <tbody>
                        {getTableData()}
                    </tbody>
                </table>
            </div>
        </>
    );
}

export default Table;