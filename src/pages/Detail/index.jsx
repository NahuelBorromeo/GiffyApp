import { Gif } from "../../components/Gif";
import useGlobalGifs from '../../hooks/useGlobalGifs';

export const Detail = ({ params }) => {
    const gifs = useGlobalGifs()

    const gif = gifs.find(gif =>
        gif.id === params.id
    )

    return <Gif {...gif} />

};
