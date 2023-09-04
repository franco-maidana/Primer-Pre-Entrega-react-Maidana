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
  {
    id: "5",
    nombre: "levadura",
    marca: "Safale S-04",
    precio: "1100",
    imagen: "https://acdn.mitiendanube.com/stores/852/895/products/fermentis-safale-s-041-acd5adb5d0d391f8fe15858628131459-320-0.webp",
  },
  {
    id: "6",
    nombre: "levadura",
    marca: "Safale S-33",
    precio: "850",
    imagen: "https://acdn.mitiendanube.com/stores/852/895/products/fermentis-safale-s-331-d605b647f0d80b536f15858670333158-320-0.webp",
  },
  {
    id: "7",
    nombre: "levadura",
    marca: "Safale T-58",
    precio: "750",
    imagen: "https://acdn.mitiendanube.com/stores/852/895/products/fermentis-safale-t-581-d59d3fd1465455f48515858722881427-320-0.webp",
  },
  {
    id: "8",
    nombre: "levadura",
    marca: "Safale k-97",
    precio: "1100",
    imagen: "https://acdn.mitiendanube.com/stores/852/895/products/fermentis-safale-k-971-39925a630d55332ec015858684769510-320-0.webp",
  },
  {
    id: "9",
    nombre: "Malta Caramelo 60",
    marca: "BA-MALT",
    precio: "1100",
    imagen: "https://acdn.mitiendanube.com/stores/852/895/products/cara-60-ba-malt1-fe974462a4bf136aa815609750357702-320-0.webp",
  },
  {
    id: "10",
    nombre: "Malta Caramelo 120",
    marca: "BA-MALT",
    precio: "1100",
    imagen: "https://acdn.mitiendanube.com/stores/852/895/products/cara-120-ba-malt1-6e4601108cafdf875915609748974142-320-0.webp",
  },
  {
    id: "11",
    nombre: "Malta Pale Ale",
    marca: "UMA MALTA",
    precio: "1100",
    imagen: "https://acdn.mitiendanube.com/stores/852/895/products/pale-ale-uma-11-dfca1cccd858fd4c1216237870293918-320-0.webp",
  },
  {
    id: "12",
    nombre: "Malta Munich",
    marca: "UMA MALTA",
    precio: "1100",
    imagen: "https://acdn.mitiendanube.com/stores/852/895/products/munich-uma-11-6849c70eb09900334916237869343667-320-0.webp",
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

export const getProductById = (id) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products.find(prod => prod.id === id))
    }, 500)
  })
}

export const getProductsByCategory = (categoryId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products.filter(prod => prod.category === categoryId))
    }, 500)
  })
}