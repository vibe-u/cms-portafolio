
import { useEffect, useState } from "react";
import { createClient } from "contentful";

const client = createClient({
    space: "aqcec86myqav",
    accessToken: "VV5yDYj1SkYCV6Zj0v9j7uAo8cGmt5FnUSY7APpFQMs",
});

const Habilidades = () => {
    const [habilidades, setHabilidades] = useState([]);

    useEffect(() => {
        client.getEntries({ content_type: "habilidades" }).then((res) => {
        const ordenadas = res.items.sort((a, b) => a.fields.orden - b.fields.orden);
        setHabilidades(ordenadas);
        });
    }, []);

    return (
        <div>
        <h1>Mis Habilidades</h1>
        {habilidades.map((item) => {
            const { titulo, descripcion, imagen } = item.fields;
            const imageUrl = imagen?.fields?.file?.url;

            return (
            <section key={item.sys.id} style={{ marginBottom: "2rem" }}>
                <h2>{titulo}</h2>
                <p>{descripcion}</p>
                {imageUrl && <img src={`https:${imageUrl}`} alt={titulo} width="300" />}
            </section>
            );
        })}
        </div>
    );
};

export default Habilidades;
