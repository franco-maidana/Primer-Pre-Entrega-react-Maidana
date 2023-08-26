const products = [
  {
    id: "1",
    nombre: "Lupulo Cascade",
    precio: "400",
    imagen: "https://acdn.mitiendanube.com/stores/852/895/products/cascade-11-2648b98475ae004f0516505660189365-320-0.webp",
  },
  {
    id: "2",
    nombre: "Lupulo Nugget",
    precio: "400",
    imagen: "https://acdn.mitiendanube.com/stores/852/895/products/nugget-11-78c01ac7090d4e707116505660541593-320-0.webp",
  },
  {
    id: "3",
    nombre: "Lupulo Mapuche",
    precio: "490",
    imagen: "https://acdn.mitiendanube.com/stores/852/895/products/mapuche-11-fee29dd20bb030ecec16505661384662-320-0.webp",
  },
  {
    id: "4",
    nombre: "Lupulo Victoria",
    precio: "490",
    imagen: "https://acdn.mitiendanube.com/stores/852/895/products/victoria-11-8f35aecbd6a794055916505660851140-320-0.webp",
  },
]

export const getproduct = () => {
  return new Promise((resolve) => {
    //tiempo de retraso 
    setTimeout(() => {
      resolve(products)
    }, 1000)
  })
}