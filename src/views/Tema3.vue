<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Herramientas, equipos e instrumentos

    p A continuación, se describen algunos de los elementos que están asociados a las herramientas, equipos e instrumentos:

    .row
      .col-sm-6.col-xl-3.mb-4.mb-xl-0
        .tarjeta.tarjeta-slide.arriba.color-primario(@mouseover="indicadorTarjetaSlide = false")
          .indicador--hover(v-if="indicadorTarjetaSlide")
          .tarjeta-slide__contenedor
            .tarjeta-slide__contenido.p-4.p-xl-5
              h3.text-white.text-center Uso
              p.text-white.text-center.text-small Es de suma importancia que los usuarios de los ambientes (bien sea de aprendizaje o laboral), conozcan el funcionamiento de cada elemento que se encuentre allí y aprendan el modo correcto de operación; de esta manera, se podrán evitar maniobras que pongan en riesgo la integridad de quien lo manipula y de los demás usuarios. Es importante recalcar que el uso particular de cada dispositivo debe ser conforme a las recomendaciones suministradas por el proveedor o el encargado del taller.
            .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/temas/t3/f1.jpg')})`}")

      .col-sm-6.col-xl-3.mb-4.mb-xl-0
        .tarjeta.tarjeta-slide.abajo.color-secundario(@mouseover="indicadorTarjetaSlide = false")
          .tarjeta-slide__contenedor
            .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/temas/t3/f2.jpg')})`}")
            .tarjeta-slide__contenido.p-4.p-xl-5
              h3.text-white.text-center Funcionamiento
              p.text-white.text-center.text-small Antes de iniciar las operaciones con cada dispositivo, debe realizarse una inspección visual, en donde se compruebe su estado, para determinar si es pertinente o no su utilización, así el encargado del área podrá tomar las acciones necesarias para su reparación o la medida requerida. Es por ello que se deben seguir las recomendaciones generales y específicas de los fabricantes, sin minimizarlas u obviarlas, evitando así las malas prácticas; igualmente, se recomienda preservar y entregar los dispositivos del mismo modo que fueron recibidos, en caso de presentar algún tipo de afectación siempre se debe informar y documentar la novedad.

      .col-sm-6.col-xl-3.mb-4.mb-sm-0
        .tarjeta.tarjeta-slide.derecha.color-primario(@mouseover="indicadorTarjetaSlide = false")
          .tarjeta-slide__contenedor
            .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/temas/t3/f3.jpg')})`}")
            .tarjeta-slide__contenido.p-4.p-xl-5
              h3.text-white.text-center Calibración
              p.text-white.text-center.text-small Los equipos e instrumentos especializados requieren, a menudo, deben ser calibrados para tener mediciones confiables y conocer el estado de desgaste de cada uno de sus componentes. Este tipo de tarea se debe realizar con patrones y organizaciones certificadas, por lo cual es un proceso costoso y, en algunos casos, demorados. Cabe anotar que no todos los instrumentos y equipos deben ser calibrados, son exactos y con un grado alto de confiabilidad.

      .col-sm-6.col-xl-3
        .tarjeta.tarjeta-slide.izquierda.color-secundario(@mouseover="indicadorTarjetaSlide = false")
          .tarjeta-slide__contenedor
            .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/temas/t3/f4.jpg')})`}")
            .tarjeta-slide__contenido.p-4.p-xl-5
              h3.text-white.text-center Ajuste
              p.text-white.text-center.text-small Este proceso es muy necesario en las herramientas, equipos e instrumentos ya que puede evitar el deterioro y los fallos por el desgaste, independientemente si son pequeños o grandes, pero también por el descuido. Los ajustes deben realizarse con una periodicidad establecida, basado en el uso, frecuencia, velocidad, siendo algunos de los aspectos a tener en cuenta.

</template>

<script>
export default {
  name: 'Tema3',
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
