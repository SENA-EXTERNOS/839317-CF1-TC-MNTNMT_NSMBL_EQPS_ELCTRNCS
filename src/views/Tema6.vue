<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 6
      h1 Atención al cliente

    .row.justify-content-center.mb-5
      .col-md-7.order-sm-last.order-md-first
        AcordionA(tipo="b" clase-tarjeta="tarjeta fcp35 fcab15")
          div(titulo="Servicio al cliente y atención al cliente")
            p.mb-0 Está relacionado directamente con el agregado que se da en cada producto que ofrece la organización, haciendo que los usuarios se sientan atendidos y considerados en sus necesidades. Existen diferencias entre el servicio al cliente y la atención al cliente; el servicio al cliente se basa en el manejo de las necesidades del usuario (el manejo de las quejas, sugerencias o reclamos), resolución de problemas (los cuales se pueden resolver de manera remota o presencial) y el soporte técnico (intervención de los elementos), mientras que la atención al cliente está relacionado con todo el proceso de las ventas, enfocados a brindar experiencias a los usuarios, buscando la satisfacción completa al adquirir los productos o servicios de calidad anticipando las posibles necesidades.
          div(titulo="Estatuto del consumidor")
            p.mb-0 Se rige por la normatividad vigente en el país y en Colombia hace sus veces la Ley 1480 de 2011, la cual busca proteger, promover y garantizar los derechos que tienen los consumidores, de igual manera, ampara el respeto a su dignidad y sus intereses económicos en temas como la salud y acceso a la información, entre otras.
          div(titulo="Garantía legal")
            p.mb-0 Es una obligación temporal, asumida por el comercializador del producto o servicio, está asociado directamente con la seguridad, pertinencia y calidad, esto representa un derecho que tienen los consumidores de recibir una atención adecuada, contemplada en la ley, este derecho no puede ser asumido por los productores o comercializadores a libre interpretación y atención.
          div(titulo="Normativa legal")
            p.mb-0 La normativa legal vigente actual en el país es la Ley 1480 de 2011, Estatuto del Consumidor, que busca la protección de los consumidores contra posibles riesgos de salud y seguridad, brindando una información adecuada y concreta, dando una posibilidad de educar a las personas con respeto a la correcta utilización del producto o servicio así como la oportunidad de ser escuchados por medio de organizaciones de consumidores que existan o que quieran ser creadas, contemplando una protección especial a los derechos de los niños contemplados en la Ley y de Infancia y Adolescencia.
      .col-md-5.order-sm-first.order-md-last(data-aod="fade-left")
        figure
          img(src="@/assets/curso/temas/t6/f1.png", alt="personas de servicio al cliente")

    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/t6/f2.png')})`}",data-aos="fade-right"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 
          b ¡Muy bien! 
          | Ha finalizado el estudio de este componente formativo a través del cual ha aprendido sobre la descripción y funcionamiento de equipos electrónicos. Ahora lo invitamos a estudiar la síntesis donde podrá recordar de forma general los saberes que se han desarrollado, a realizar la actividad de aprendizaje donde podrá colocar a prueba lo aprendido, consultar el material complementario que le servirá como refuerzo y profundización y estudiar el glosario

</template>

<script>
export default {
  name: 'Tema6',
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
