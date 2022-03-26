import {useRouter} from "next/router";
import React, {useEffect, } from "react";



const Test = () => {
    const router = useRouter()


    useEffect(() => {
        if (router.isReady) {
            console.log(router.query.slug)
        }
    }, [router.isReady])

    return (
        <div>
            1
        </div>
    )
}

export default Test