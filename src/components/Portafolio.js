import React from 'react'
import { trabajos } from '../data/Trabajos'
import { Link } from 'react-router-dom'
import { ListadoTrabajos } from './ListadoTrabajos'

export const Portafolio = () => {
  return (
    <div className='page'>
      <h1 className='heading'>Portfolio</h1>
      <ListadoTrabajos limite='10' />
    </div>
  )
}
