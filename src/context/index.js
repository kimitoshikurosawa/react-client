import {createContext, useContext, useMemo, useState} from "react";
import {getStores, sendCotation } from "../service";

const AppContext = createContext();
const { Provider } = AppContext;

const AppProvider = ({children}) => {
    const [stores, setStores] = useState([]);
    const [responses, setResponse] = useState([]);
    const fetchStores = () => {
        getStores().then(setStores)
    }
    const addCotation = (body) => {
        sendCotation(body).then(setResponse)
    }
    const value = useMemo(() => {
        return {
            stores,
            responses,
            fetchStores,
            addCotation
        }
    },[stores,responses,fetchStores, addCotation])
    return <Provider value={value}>{children}</Provider>
}
export const useAppContext = () => {
    return useContext(AppContext);
}

export default AppProvider;
