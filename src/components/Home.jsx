import { useEffect, useState } from 'react'
import { createClient } from 'contentful'

const client = createClient({
    space: 'aqcec86myqav',
    accessToken: 'VV5yDYj1SkYCV6Zj0v9j7uAo8cGmt5FnUSY7APpFQMs'
})

function Home() {
    const [info, setInfo] = useState(null)

    useEffect(() => {
        client
        .getEntries({ content_type: 'infoPrincipal' })
        .then((response) => {setInfo(response.items[0].fields)})
    }, [])
    
    if (!info) return <p>Cargando...</p>
    const imageUrl = info.imagen?.fields?.file?.url

    return (
    <section>
        <h1>{info.titulo}</h1>
        <p>{info.descripcion}</p>
        {imageUrl ? (
            <img
                src={`https:${imageUrl}`}
                alt="Foto de perfil"
                style={{ width: '200px', borderRadius: '50%' }}
            />
        ) : (
            <>
                <p>No se encontró la imagen</p>
            </>
        )}
    </section>
    )
}

export default Home
