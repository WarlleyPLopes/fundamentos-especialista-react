import { useState } from 'react'

export default function Person() {
  const [person, setPerson] = useState(['Warley', 'Warlley'])

  setTimeout(() => {
    setPerson((state) => {
      return [...state]
    })
  }, 2000)

  return <div>
    <h1>Perfil</h1>
    <p>Este é o perfil de {person}</p>
  </div>
}