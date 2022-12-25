import GifsContext from '../context/GifsContext'
import React, { useContext } from 'react'

export default function useGlobalGifs() {
    return useContext(GifsContext).gifs
}

