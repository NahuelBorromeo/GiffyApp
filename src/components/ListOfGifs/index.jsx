import { Gif } from "../Gif";
import uuid from 'react-uuid';
import './styles.css'

export const ListOfGifs = ({ gifs }) => {
    return (
        <div className="ListOfGifs">
            {
                gifs.map(singleGif =>
                    <Gif
                        // title={singleGif.title}
                        // url={singleGif.url}
                        // id={singleGif.id}
                        {...singleGif}
                        key={uuid()}
                    />
                )
            }
        </div>
    )
};
