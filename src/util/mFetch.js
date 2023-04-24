import c1 from '../assets/img/c1.jpg'
import c2 from '../assets/img/c2.jpg'
import c3 from '../assets/img/c3.jpg'
import c4 from '../assets/img/c4.jpg'
import c5 from '../assets/img/c5.jpg'
import d1 from '../assets/img/d1.jpg'
import d2 from '../assets/img/d2.jpg'
import d3 from '../assets/img/d3.jpg'
import d4 from '../assets/img/d4.jpg'
import d5 from '../assets/img/d5.jpg'
import ac1 from '../assets/img/ac1.jpg'
import ac2 from '../assets/img/ac2.jpg'
import ac3 from '../assets/img/ac3.jpg'
import ac4 from '../assets/img/ac4.jpg'
import ac5 from '../assets/img/ac5.jpg'

let products = [
  {id:'1', category:'Clasico', name:'Classic One', price: 37900, stock:20, picture: c1, detail:"Los anteojos clásicos de la marca Tom Ford tienen un marco de acetato marrón con detalles de metal y lentes degradadas."},
  {id:'2', category:'Clasico', name:'Classic Two', price: 47900, stock:0, picture: c2, detail: "Los anteojos Ray-Ban Aviator tienen un marco de metal dorado y lentes de cristal verde G-15."},
  {id:'3', category:'Clasico', name:'Classic Three', price: 47900, stock:10, picture: c3, detail:"Los anteojos clásicos de la marca Oakley tienen un marco de plástico negro y lentes de policarbonato resistente a los impactos."},
  {id:'4', category:'Clasico', name:'Classic For', price: 47900, stock:7, picture: c4, detail:"Los anteojos clásicos de la marca Gucci tienen un marco de acetato negro con patillas doradas y lentes de cristal gris."},
  {id:'5', category:'Clasico', name:'Classic Five', price: 47900, stock:12, picture: c5, detail:"Los anteojos de la marca Persol tienen un marco de acetato marrón y lentes polarizadas."},
  {id:'6', category:'Diseño', name:'NewModel One', price: 47900, stock:14, picture: d1, detail:"Los anteojos de la marca Bulgari tienen un marco de acetato negro con detalles dorados y lentes polarizadas marrones."},
  {id:'7', category:'Diseño', name:'NewModel Two', price: 47900, stock:9, picture: d2, detail:"Los anteojos de la marca Dior tienen un marco de acetato blanco y dorado con lentes espejadas plateadas."},
  {id:'8', category:'Diseño', name:'NewModel Three', price: 47900, stock:22, picture: d3, detail:"Los anteojos de la marca Versace tienen un marco de metal dorado con detalles de medusa y lentes degradadas."},
  {id:'9', category:'Diseño', name:'NewModel For', price: 47900, stock:1, picture: d4, detail:"Los anteojos de la marca Oliver Peoples tienen un marco de acetato negro con detalles dorados y lentes polarizadas."},
  {id:'10', category:'Diseño', name:'NewModel Five', price: 47900, stock:3, picture: d5, detail:"Los anteojos de la marca Prada tienen un marco de metal plateado con patillas de acetato y lentes de cristal azul."},
  {id:'11', category:'Accesorios', name:'Accesory One', price: 47900, stock:14, picture: ac1, detail:"Las cadenas deportivas de neopreno están hechas para un ajuste seguro y cómodo durante actividades físicas como correr o hacer deportes acuáticos."},
  {id:'12', category:'Accesorios', name:'Accesory Two', price: 47900, stock:16, picture: ac2, detail:"Las cadenas deportivas de silicona son duraderas y resistentes al agua, ideales para actividades al aire libre."},
  {id:'13', category:'Accesorios', name:'Accesory Three', price: 47900, stock:56, picture: ac3, detail:"Las cadenas deportivas de nylon son ligeras y cómodas, y se ajustan a cualquier tipo de anteojos."},
  {id:'14', category:'Accesorios', name:'Accesory For', price: 47900, stock:7, picture: ac4, detail:"Las cadenas de diseño pueden estar hechas de materiales como cuero o perlas, y pueden ser personalizadas con detalles como iniciales o charms."},
  {id:'15', category:'Accesorios', name:'Accesory Five', price: 47900, stock:0, picture: ac5, detail:"Las cadenas de diseño pueden tener un estilo elegante y sofisticado, como una cadena de oro o plata con detalles de diamantes o piedras preciosas."}
]
  export const mFetch = () =>{
    return new Promise((resolve, reject) => {
    setTimeout( ()=>{
      resolve(products)
    },3000 )
  })
  }