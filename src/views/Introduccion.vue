<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    .row.justify-content-center.mb-5
      .col-md-7.order-xs-last.order-md-first
        p Apreciado aprendiz, bienvenido a este componente formativo, donde aprenderá sobre la preparación del entorno de trabajo, teniendo en cuenta la información de los equipos, desde el inicio, incluyendo la hoja de vida, área de trabajo, condiciones y herramientas necesarias y requeridas para el funcionamiento junto con los manuales de operación, seguridad y toda la normativa vigente, para desempeñar la labor. Cada etapa aporta lo preciso, para comprender los requerimientos que tienen los mantenimientos electrónicos, iniciando con la gestión documental que apoya el diligenciamiento de los formatos y documentos que se requieren, como también la adecuada utilización e interpretación de los manuales de los equipos. 

        p En el siguiente video conocerá de forma general, la temática que estudiará a lo largo del componente formativo.

      .col-md-5
        figure
          img(src="@/assets/curso/temas/if1.png", alt="Imagen relacionada")

    figure
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/k1AlrSw69rA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
