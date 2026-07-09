import React from 'react'
import { Link } from 'react-router-dom'
import { ListadoTrabajos } from './ListadoTrabajos'

export const Inicio = () => {
  return (
    <div className='home'>
      <h1>
        Hi, I'm <strong>Francisco Sanz</strong>. I work as a Web Developer and offer my <strong>programming</strong> and <strong>development services</strong> for all kinds of web projects.
      </h1>

      <h2 className='title'>
        I help you create your website or web application, gain more visibility, and increase your relevance on the internet. <Link to='/contact' >Get in touch with me.</Link>
      </h2>

      <section className='last-works'>
        <h2 className='heading'>Some of the companies I worked for</h2>
        <p>These are some of my professional experience.</p>
        <ListadoTrabajos limite="3" />
      </section>
    </div>
  )
}
