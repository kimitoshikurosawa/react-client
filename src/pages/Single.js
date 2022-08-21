import React from "react"
import {useLocation, Link} from "react-router-dom";
import {useAppContext} from "../context";


export default function Single() {
    const {stores} = useAppContext();
    const params = useLocation();

    const store = stores.find(store => store.id === params?.state?.id );
    return(<>
        <Link to={`/`}>Back</Link>
        <h1>{store?.title}</h1>
        <p>{store?.description}</p>
    </>)
}