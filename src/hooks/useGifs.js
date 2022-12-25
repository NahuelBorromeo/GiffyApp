import { useContext, useState, useEffect } from "react";
import getGifs from "../services/getGifs";
import GifsContext from '../context/GifsContext'

export const useGifs = ({ keyword } = { keyword: null }) => {

    const { gifs, setGifs } = useContext(GifsContext);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true)
        // recuperamos la keyword del localStorage
        const keywordToUse = keyword || localStorage.getItem('lastKeyword') || 'panda'

        getGifs({ keyword: keywordToUse })
            .then(gifs => {
                setGifs(gifs)
                setLoading(false)
                // guardamos la keyword en el local
                localStorage.setItem('lastKeyword', keywordToUse)
            })
    }, [keyword])

    return { loading, gifs }
}