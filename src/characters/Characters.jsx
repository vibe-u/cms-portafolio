import { useEffect, useState } from 'react';
import './Characters.css';

const Memes = () => {
    const [memes, setMemes] = useState([]);

    useEffect(() => {
        fetch('https://api.imgflip.com/get_memes')
            .then(response => response.json())
            .then(data => setMemes(data.data.memes)) 
            .catch(error => console.error('Error al obtener los memes:', error));
    }, []);

    return (
        <section className="ocio__card-container">
            {memes.slice(0, 6).map((meme) => (
                <div className="ocio__card" key={meme.id}>
                    <img
                        className="ocio__card-image"
                        src={meme.url}
                        alt={meme.name}
                    />
                    <h3 className="ocio__card-title">{meme.name}</h3>
                </div>
            ))}
        </section>
    );
};

export default Memes;

