<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal
      .titulo-principal__numero
        .h3
          i.fas.fa-info
      .h3 Introducción
    
    .row.mb-4
      .col-2
      .col-8
        figure
          img(src='@/assets/curso/introduccion/img01.svg', alt='Introduccion')
      .col-2
    
    p.mb-4 Los productos químicos en la vida actual juegan un importante papel en las actividades cotidianas, es por eso que hacer un uso adecuado y seguro de ellos es cada día más necesario. 
    p.mb-4 En este componente formativo se hace una introducción a los conceptos generales necesarios, para hacer una buena apropiación de saberes respecto del manejo seguro de dichos productos enmarcados en el Sistema Globalmente Armonizado (SGA) de clasificación y etiquetado de productos químicos, cubriendo todas las fases del ciclo de vida. Los términos y conceptos que este apartado presenta son herramienta fundamental para darle una utilidad práctica a los lineamientos del SGA, que ha sido adoptado en Colombia como sistema de comunicación de peligros químicos a través del Decreto 1496 de 2018.

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass" scoped>
.introduccion
</style>
