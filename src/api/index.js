const API_URL = 'http://localhost:3001'

// Obtener Todos los libros
export const getLibros = async () => {
  const response = await fetch(`${API_URL}/libro`)

  return response.json()
}

// Obtener Solo un libro
export const getLibro = async (id) => {
  const response = await fetch(`${API_URL}/libro/${id}`)

  return response.json()
}