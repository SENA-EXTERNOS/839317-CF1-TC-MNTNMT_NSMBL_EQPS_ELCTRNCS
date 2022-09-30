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
        p Apreciado aprendiz, sea bienvenido a este recurso educativo, a continuación, aprenderá sobre la preparación del entorno de trabajo, teniendo en cuenta la información de los equipos desde su historia inicial con la hoja de vida, área de trabajo, condiciones y herramientas necesarias y requeridas hasta el funcionamiento, manuales de operación, seguridad y toda la normativa vigente para desempeñar la labor. Cada fase le permitirá comprender los requerimientos que tienen los mantenimientos electrónicos, iniciando con la gestión documental que apoya el diligenciamiento de los formatos y documentos que se requieran de forma correcta, así como la adecuada utilización e interpretación de manuales de los equipos. 
        p En el siguiente video conocerá de forma general, la temática que estudiará a lo largo del componente formativo.
        p ¡Éxitos en este proceso de aprendizaje! 
      .col-md-5
        figure
          img(src="@/assets/curso/temas/if1.png", alt="Imagen relacionada")

    figure
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    
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
