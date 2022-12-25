import { useState } from 'react';
import { Link, useLocation } from 'wouter'
import { ListOfGifs } from '../../components/ListOfGifs';
import { useGifs } from '../../hooks/useGifs';

const POPULAR_GIFS = ["Matrix", "DragonBall", "Inuyasha", "Naruto"]

export const Home = () => {
    const [keyword, setKeyword] = useState('')
    const [path, pushLocation] = useLocation()

    const { loading, gifs } = useGifs()


    const handleSubmit = evt => {
        evt.preventDefault()
        // navegar a otra ruta
        pushLocation(`/search/${keyword}`)
    }

    const handleChange = evt => {
        setKeyword(evt.target.value)
    }


    return (
        <>
            <form onSubmit={handleSubmit}>
                <input placeholder='Search a gif here...' type='text' value={keyword} onChange={handleChange} />
                <button>Buscar</button>
            </form>
            <h3 className='App-title'>Últimas búsquedas</h3>
            <ListOfGifs gifs={gifs} />
            <h3 className='App-title'>Los gifs más populares</h3>
            <ul>
                {POPULAR_GIFS.map((popularGif) => (
                    <li key={popularGif}>
                        <Link to={`/search/${popularGif}`}>Gifs de {popularGif}</Link>
                    </li>
                ))}
            </ul>
        </>
    )
};
