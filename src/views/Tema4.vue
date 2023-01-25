<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Documentación técnica

    p Son documentos que brindan información técnica relevante sobre los equipos; generalmente, son proporcionados por los fabricantes y, en algunos casos, son construidos por las organizaciones, basándose en sus necesidades; veamos a continuación, los manuales:
    
    .row.align-items-center.justify-content-center
      .col-md-9.order-sm-last.order-sm-first
        TabsA.color-acento-contenido
          .tarjeta.color-acento-botones.fcab15.p-4(titulo="Manual de usuario")
            p El propósito de este documento es brindar la información necesaria para el adecuado uso de un equipo, enseñando a los usuarios a utilizar las funciones y procesos de una forma correcta y efectiva, deben de ser entendibles y de fácil consulta. En su elaboración, suele incluir ilustraciones y gráficos, con instrucciones sencillas.
          .tarjeta.color-acento-botones.fcab15.p-4(titulo="Manual de fabricante")
            p También conocido como manual de instrucciones, dado que debe de cumplir con 
              b todas 
              | las recomendaciones proporcionadas por el fabricante para evitar fallos y averías en los equipos y así, hacer el mejor uso de estos. Brinda información relevante acerca del empaque, transporte, cuidados especiales, así como de instalación.
      .col-md-3.order-sm-first.order-md-last(data-aos="flip-left")
        figure
          img(src="@/assets/curso/temas/t4/img1.svg", alt="persona leyendo un manual")

</template>

<script>
export default {
  name: 'Tema4',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
