let productos = [
  {id:'1', category:'Clasico', name:'Classic One', price: 37900, stock:20, image: "/c1.jpg", detail:"Los anteojos clásicos de la marca Tom Ford tienen un marco de acetato marrón con detalles de metal y lentes degradadas."},
  {id:'2', category:'Clasico', name:'Classic Two', price: 47900, stock:0, image: "/c2.jpg", detail: "Los anteojos Ray-Ban Aviator tienen un marco de metal dorado y lentes de cristal verde G-15."},
  {id:'3', category:'Clasico', name:'Classic Three', price: 47900, stock:10, image: "/c3.jpg", detail:"Los anteojos clásicos de la marca Oakley tienen un marco de plástico negro y lentes de policarbonato resistente a los impactos."},
  {id:'4', category:'Clasico', name:'Classic For', price: 47900, stock:7, image: "/c4.jpg", detail:"Los anteojos clásicos de la marca Gucci tienen un marco de acetato negro con patillas doradas y lentes de cristal gris."},
  {id:'5', category:'Clasico', name:'Classic Five', price: 47900, stock:12, image: "/c5.jpg", detail:"Los anteojos de la marca Persol tienen un marco de acetato marrón y lentes polarizadas."},
  {id:'6', category:'Diseño', name:'NewModel One', price: 47900, stock:14, image: "/d1.jpg", detail:"Los anteojos de la marca Bulgari tienen un marco de acetato negro con detalles dorados y lentes polarizadas marrones."},
  {id:'7', category:'Diseño', name:'NewModel Two', price: 47900, stock:9, image: "/d2.jpg", detail:"Los anteojos de la marca Dior tienen un marco de acetato blanco y dorado con lentes espejadas plateadas."},
  {id:'8', category:'Diseño', name:'NewModel Three', price: 47900, stock:22, image: "/d3.jpg", detail:"Los anteojos de la marca Versace tienen un marco de metal dorado con detalles de medusa y lentes degradadas."},
  {id:'9', category:'Diseño', name:'NewModel For', price: 47900, stock:1, image: "/d4.jpg", detail:"Los anteojos de la marca Oliver Peoples tienen un marco de acetato negro con detalles dorados y lentes polarizadas."},
  {id:'10', category:'Diseño', name:'NewModel Five', price: 47900, stock:3, image: "/d5.jpg", detail:"Los anteojos de la marca Prada tienen un marco de metal plateado con patillas de acetato y lentes de cristal azul."},
  {id:'11', category:'Accesorios', name:'Accesory One', price: 47900, stock:14, image: "/ac1.jpg", detail:"Las cadenas deportivas de neopreno están hechas para un ajuste seguro y cómodo durante actividades físicas como correr o hacer deportes acuáticos."},
  {id:'12', category:'Accesorios', name:'Accesory Two', price: 47900, stock:16, image: "/ac2.jpg", detail:"Las cadenas deportivas de silicona son duraderas y resistentes al agua, ideales para actividades al aire libre."},
  {id:'13', category:'Accesorios', name:'Accesory Three', price: 47900, stock:56, image: "/ac3.jpg", detail:"Las cadenas deportivas de nylon son ligeras y cómodas, y se ajustan a cualquier tipo de anteojos."},
  {id:'14', category:'Accesorios', name:'Accesory For', price: 47900, stock:7, image: "/ac4.jpg", detail:"Las cadenas de diseño pueden estar hechas de materiales como cuero o perlas, y pueden ser personalizadas con detalles como iniciales o charms."},
  {id:'15', category:'Accesorios', name:'Accesory Five', price: 47900, stock:0, image: "/ac5.jpg", detail:"Las cadenas de diseño pueden tener un estilo elegante y sofisticado, como una cadena de oro o plata con detalles de diamantes o piedras preciosas."}
]
  export const mFetch = () =>{
    return new Promise((resolve, reject) => {
    setTimeout( ()=>{
      resolve(productos)
    },2000 )
  })
  }