import React from "react"
import {Link} from "react-router-dom"
import { useAppContext } from "../context"

export default function List() {
    const {stores} = useAppContext()

    return(<div className="mt-5">
        {

            stores.map(store => {
                const title = store.title.split(" ").join("-");
                const content = `${store.description.substring(0, 100)} ...`
                return (<div key={store.id}>
                        <h3><Link to={`/post/${title}`} state={{id : store.id}}>{store.title}</Link></h3>
                        <p>{content}</p>
                    </div>

                )
            })
        }
    </div>)
}