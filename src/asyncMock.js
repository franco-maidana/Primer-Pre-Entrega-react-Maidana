const products = [
  {
    id: "1",
    nombre: "Lupulo Cascade",
    precio: "400",
    imagen: "https://acdn.mitiendanube.com/stores/852/895/products/cascade-11-2648b98475ae004f0516505660189365-320-0.webp",
    description: "el lúpulo Cascade es una variedad de lúpulo ampliamente utilizada en la elaboración de cerveza artesanal. Se destaca por su característico aroma cítrico y floral, que aporta notas de pomelo y flores a las cervezas. Es especialmente popular en estilos como las American Pale Ales y las India Pale Ales (IPAs), donde su perfil aromático brinda un sabor y aroma distintivos a las cervezas.",
    tipo: "pale ale, ipa , american ipa",
  },
  {
    id: "2",
    nombre: "Lupulo Nugget",
    precio: "400",
    imagen: "https://acdn.mitiendanube.com/stores/852/895/products/nugget-11-78c01ac7090d4e707116505660541593-320-0.webp",
    description: "Es una variedad de lúpulo de Estados Unidos utilizado en la cerveza. Tiene un perfil de sabor y aroma terroso, picante y a veces cítrico. Se usa principalmente para dar amargor a la cerveza debido a su alto contenido de alfa ácidos (9%-14%). Es versátil y se cultiva en el noroeste del Pacífico. Puede sustituirse con lúpulos como Galena o Columbus.",
  },
  {
    id: "3",
    nombre: "Lupulo Mapuche",
    precio: "490",
    imagen: "https://acdn.mitiendanube.com/stores/852/895/products/mapuche-11-fee29dd20bb030ecec16505661384662-320-0.webp",
    description: " es una variedad de lúpulo autóctona de la región de la Araucanía en Chile. Se utiliza en la producción de cerveza artesanal y se caracteriza por su perfil de sabor y aroma únicos, con notas herbales y terrosas. Los cerveceros locales valoran el lúpulo mapuche por su conexión con la cultura indígena mapuche y su contribución a cervezas de calidad. Su cultivo es una parte importante de la preservación de la tradición y la diversidad de lúpulos en la región.",
  },
  {
    id: "4",
    nombre: "Lupulo Victoria",
    precio: "490",
    imagen: "https://acdn.mitiendanube.com/stores/852/895/products/victoria-11-8f35aecbd6a794055916505660851140-320-0.webp",
    description: "es una variedad de lúpulo originaria de Australia. Se distingue por sus características únicas de sabor y aroma, que incluyen notas de pino, tierra y frutos oscuros. Con un contenido moderado de alfa ácidos, generalmente alrededor del 5% al 6%, se utiliza tanto para el amargor como para el aroma en la producción de cerveza. Es una elección popular para cervezas estilo pale ale y IPA, aportando un perfil de sabor distintivo. El lúpulo Victoria ha ganado reconocimiento en la industria cervecera por su contribución a la creación de cervezas con sabores y aromas únicos.",
  },
  {
    id: "5",
    nombre: "levadura",
    marca: "Safale S-04",
    precio: "1100",
    imagen: "https://acdn.mitiendanube.com/stores/852/895/products/fermentis-safale-s-041-acd5adb5d0d391f8fe15858628131459-320-0.webp",
    description: "Safale S-04 es una levadura ale apreciada por su perfil de sabor frutal, que es ideal para cervezas británicas tradicionales. Puede fermentar a temperaturas más cálidas y tiene una buena tolerancia al alcohol, generalmente en el rango del 4% al 7% ABV. Su capacidad para aportar ésteres frutales la hace popular entre los cerveceros caseros y comerciales que buscan una complejidad de sabor en sus cervezas.",
  },
  {
    id: "6",
    nombre: "levadura",
    marca: "Safale S-33",
    precio: "850",
    imagen: "https://acdn.mitiendanube.com/stores/852/895/products/fermentis-safale-s-331-d605b647f0d80b536f15858670333158-320-0.webp",
    description: "Safale S-33 es una levadura ale versátil que fermenta a temperaturas más cálidas, produciendo cervezas con un perfil de sabor neutro y una buena tolerancia al alcohol. Es ideal para una variedad de estilos de cerveza y es altamente floculante, lo que facilita la clarificación. Esta levadura es una opción popular para cerveceros caseros y cervecerías comerciales que desean una levadura confiable y versátil para una amplia gama de cervezas ale.",
  },
  {
    id: "7",
    nombre: "levadura",
    marca: "Safale T-58",
    precio: "750",
    imagen: "https://acdn.mitiendanube.com/stores/852/895/products/fermentis-safale-t-581-d59d3fd1465455f48515858722881427-320-0.webp",
    description: "La levadura Safale T-58 es una cepa de levadura ale originaria de Bélgica. Se destaca por su capacidad para producir cervezas con perfiles de sabor complejos y una amplia gama de ésteres frutales y especiados. Es ideal para cervezas belgas, como las Belgian Dubbel, Tripel y Strong Golden Ale. T-58 tolera altas temperaturas de fermentación y suele tener un contenido de alcohol moderado, en el rango del 6% al 7% ABV. Es una elección popular entre los cerveceros que desean replicar estilos de cerveza belga tradicionales con notas de especias y frutas.",
  },
  {
    id: "8",
    nombre: "levadura",
    marca: "Safale k-97",
    precio: "1100",
    imagen: "https://acdn.mitiendanube.com/stores/852/895/products/fermentis-safale-k-971-39925a630d55332ec015858684769510-320-0.webp",
    description: "La levadura Safale K- 97 es una cepa ale que se originó en Alemania.Destaca por su perfil de sabor limpio y neutro, lo que la hace versátil para una variedad de estilos de cerveza, incluyendo lagers híbridas y ales.Es adecuada para fermentaciones a temperaturas más cálidas que las lagers tradicionales, generalmente entre 15°C y 20°C.",
  },
  {
    id: "9",
    nombre: "Malta Caramelo 60",
    marca: "BA-MALT",
    precio: "1100",
    imagen: "https://acdn.mitiendanube.com/stores/852/895/products/cara-60-ba-malt1-fe974462a4bf136aa815609750357702-320-0.webp",
    description: "La malta Caramelo 60 es un tipo de malta cristalizada utilizada en la elaboración de cerveza. Se caracteriza por su color dorado oscuro y su capacidad para agregar dulzura, color y sabores tostados y caramelo a la cerveza. Su número 60 hace referencia al nivel de color en grados Lovibond, lo que indica su tonalidad más oscura. Esta malta se emplea comúnmente en cervezas como las ambers, red ales y otras variedades que buscan un perfil de sabor y color más pronunciado. También contribuye a la retención de la espuma y la sensación en boca de la cerveza.",
  },
  {
    id: "10",
    nombre: "Malta Caramelo 120",
    marca: "BA-MALT",
    precio: "1100",
    imagen: "https://acdn.mitiendanube.com/stores/852/895/products/cara-120-ba-malt1-6e4601108cafdf875915609748974142-320-0.webp",
    description: "La malta Caramelo 120 es un tipo de malta cristalizada utilizada en la elaboración de cerveza. Se destaca por su color oscuro, que oscila entre el ámbar profundo y el marrón, y agrega intensos sabores a caramelo y tostados a la cerveza. Su número 120 se refiere al nivel de color en grados Lovibond, lo que indica su tonalidad muy oscura. Esta malta se emplea principalmente en cervezas robustas y oscuras, como las stouts, las porters y las cervezas belgas oscuras, para proporcionar un rico perfil de sabor y color. También contribuye a la dulzura residual y la complejidad del sabor.",
  },
  {
    id: "11",
    nombre: "Malta Pale Ale",
    marca: "UMA MALTA",
    precio: "1100",
    imagen: "https://acdn.mitiendanube.com/stores/852/895/products/pale-ale-uma-11-dfca1cccd858fd4c1216237870293918-320-0.webp",
    description: "La malta Pale Ale es un tipo de malta base utilizada en la producción de cerveza, especialmente en estilos de cerveza Pale Ale e IPA (India Pale Ale). Se caracteriza por su color pálido y su sabor y aroma suaves y neutros. Es una malta versátil que aporta un cuerpo ligero a la cerveza y permite que los sabores y aromas del lúpulo se destaquen. La malta Pale Ale se maltosea y tuesta a un nivel más bajo en comparación con las maltas caramelizadas, lo que la hace adecuada para estilos de cerveza más claros y equilibrados. Su uso es fundamental en la elaboración de muchas cervezas de alta calidad.",
  },
  {
    id: "12",
    nombre: "Malta Munich",
    marca: "UMA MALTA",
    precio: "1100",
    imagen: "https://acdn.mitiendanube.com/stores/852/895/products/munich-uma-11-6849c70eb09900334916237869343667-320-0.webp",
    description: "La malta Munich es una malta base utilizada en la producción de cerveza, originaria de la ciudad de Múnich en Alemania. Se caracteriza por su color dorado o ambarino y aporta sabores y aromas a malta tostada, con notas de pan, galletas y nueces. Es una malta versátil que se utiliza en una variedad de estilos de cerveza, como Märzen, Bock y algunas variedades de cervezas de trigo. La malta Munich añade cuerpo y una riqueza de sabor a la cerveza, además de contribuir a su color característico. Su uso es común en cervezas de alta calidad, especialmente en las tradicionales cervezas alemanas.",
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