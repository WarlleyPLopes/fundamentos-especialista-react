import React, { useState } from 'react'

export default function Form() {
  const [form, setForm] = useState({
    name: '',
    lastname: '',
    email: '',
    password: '',
    passwordConfirm: '',
  })

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    console.log(form)
  }

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }


  return <form onSubmit={handleSubmit}>
    <input
      placeholder="Nome"
      type="text"
      name="name"
      value={form.name}
      onChange={handleInputChange}
    />
    <input
      placeholder="Sobrenome"
      type="text"
      name="lastName"
      value={form.lastname}
      onChange={handleInputChange}
    />
    <input
      placeholder="E-mail"
      type="email"
      name="email"
      value={form.email}
      onChange={handleInputChange}
    />
    <input
      placeholder="Senha"
      type="password"
      name="password"
      value={form.password}
      onChange={handleInputChange}
    />
    <input
      placeholder="Confirme sua senha"
      type="passwordConfirm"
      name="passwordConfirm"
      value={form.passwordConfirm}
      onChange={handleInputChange}
    />

    <button type='submit'>
      Enviar formulario
    </button>

  </form>
}