const productos = [
    {
      id: '01',
      name: 'Atrapa sueños',
      category: 'nuevos',
      description:
        'Algunas personas le otorgan propiedades mágicas relacionadas con los sueños, y los usan como amuleto o talismán de protección',
      price: 2000,
      img: './img/atrapa.png',
      stock: 100,
    },
    {
      id: '02',
      name: 'Amatista Pulida',
      category: 'nuevos',
      description:
        '¿Qué es y para qué sirve la amatista? La amatista nos aporta serenidad emocional, sentido común, potencia la motivación y la memoria',
      img: './img/amatistapulida.png',
      price: 100,
      stock: 200,
    },
    {
      id: '03',
      name: 'Agelita en Bruto',
      category: 'nuevos',
      description:
        'La angelita se conoce por ser una piedra de inspiración para la paz y la hermandad.  En cristaloterapia suele usarse para equilibrar el chakra',
      price: 300,
      img: './img/angelitaenbruto.png',
      stock: 200,
    },
    {
      id: '04',
      name: 'Aromanza Organico',
      category: 'ofertas',
      description:
        'Con hojas naturales. Al encender un Sahumerio emprendemos un camino que nos dispone a ser agradecidos y apreciar cada detalle de la vida.',
      price: 500,
      img: './img/aromanzaorganico.png',
      stock: 300,
    },
    {
      id: '05',
      name: 'Buda Siddartha',
      category: 'ofertas',
      description:
        'Los significados de las estatuas de Buda difieren dependiendo de la postura de las manos. De todas maneras todas hacen referencia a la protección, la armonía, la enseñanza, la invocación y la meditación.',
      price: 3000,
      img: './img/budasiddartha.png',
      stock: 20,
    },
    {
      id: '06',
      name: 'Porta sahumerio',
      category: 'ofertas',
      description:
        'Especificaciones: Marca: Iluminarte. Tipo: Porta Sahumerios. Cantidad: 1 Unidad. Medidas: 25 cms x 3.5 cms.',
      price: 50,
      img: './img/portasahumerio.png',
      stock: 1000,
    },
    {
      id: '07',
      name: 'Buda',
      category: 'mas vendidos',
      description:
        'Los significados de las estatuas de Buda difieren dependiendo de la postura de las manos. De todas maneras todas hacen referencia a la protección, la armonía, la enseñanza, la invocación y la meditación.',
      price: 3000,
      img: './img/buda.png',
      stock: 20,
    },
    {
      id: '08',
      name: 'Sahumerio 7 Chakras',
      category: 'mas vendidos',
      description:
        'Los chakras son vórtices energéticos de nuestro cuerpo a través de los cuales fluye nuestra energía vital. Cada uno de los siete chakras está relacionado con un aspecto de nuestro ser ',
      price: 300,
      img: './img/sahumerio7chakra.png',
      stock: 200,
    },
    {
      id: '09',
      name: 'Sahumerios Dhoops Liberty',
      category: 'mas vendidos',
      description: 'Llegaron los sahumerios Dhoops Liberty!!! Consultar stock de fragancia. Cont. Neto 25gr. 10 sahumerios dhoops + base.',
      price: 300,
      img: './img/dhoopsliberty.png',
      stock: 300,
    },
    {
      id: '10',
      name: 'Velas de miel',
      category: 'mas vendidos',
      description:
        'Novenas de miel de los Santos. Paquete con 9 velas de miel para hacer una novena a tu santo.',
      price: 200,
      img: './img/velasdemiel.png',
      stock: 1000,
    },
  ];
  

  
  export const getProducts = () => {
    let error = false;
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (!error) {
          resolve(productos);
        } else {
          reject('Hubo un error intente mas tarde');
        }
      }, 2000);
    });
  };
  