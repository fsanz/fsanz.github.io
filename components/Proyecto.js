import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { trabajos } from '../data/Trabajos'
import { useState } from 'react'

export const Proyecto = () => {
    
    const [proyecto, setProyecto] = useState({})
    const params = useParams()

    useEffect(() => {
        let proyecto = trabajos.filter(trabajo => trabajo.id === params.id);
        setProyecto(proyecto[0])
    }, [])

    return (
        <div className='page page-work' >
            <div className='mask'>
                <img src={proyecto.image} />
            </div>
            <h1 className='heading'>Proyecto: {proyecto.nombre}</h1>
            <p>{proyecto.tecnologias}</p>
            <p>{proyecto.descripcion}</p>
            <a href={'https://'+proyecto.url} target='_blank'>Ir al proyecto</a>
        </div>
    )
}
