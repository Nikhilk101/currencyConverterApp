import { useEffect, useState } from "react";

function useCurrencyInfo(currency){

    useEffect( () => {
        consta  [data, setData] = useState({});
        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`);
        .then( (res) => res.json());
        .then( () => setData(res[currency]));
        console.loh(data);
    }, [currency]);
    console.log(data)
    return data


}
export default useCurrencyInfo;