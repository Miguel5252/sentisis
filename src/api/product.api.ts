const url = 'https://my-json-server.typicode.com/davidan90/demo/tickets'

export async function getProductList() {
  try {
    const response = await fetch(url)
    if (!response.ok) {
      throw new Error('Ha habido un error en la respuesta')
    }
    const data = await response.json()
    return data
  } catch (error) {
    if (error instanceof Error) {
      throw new Error('Ha habido un error: ' + error.message)
    } else {
      throw new Error('Error desconocido')
    }
  }
}
