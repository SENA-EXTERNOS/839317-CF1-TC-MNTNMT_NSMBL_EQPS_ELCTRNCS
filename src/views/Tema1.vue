<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Gestión de la información

    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/t1/f1.png')})`}",data-aos="fade-right"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Hoy en día, la información se ha convertido en uno de los activos más valiosos para las organizaciones, es por ello, que debe dársele un manejo riguroso, ya que, entre otras cosas, es un insumo vital para la gestión del conocimiento, análisis y toma de decisiones con resultados tangibles en lo económicos y en la producción. De ahí la importancia de establecer la trazabilidad e historia de la información que podrá ser consultada, mediante los diferentes documentos que se plantean a lo largo de este apartado.
      
    Separador

    #t_1_1.titulo-segundo.color-acento-contenido 
      h2 1.1 Formatos y registros

    p El sistema de información se compone de diferentes documentos, formatos y registros, que son utilizados para llevar de una forma clara y ordenada la información y las intervenciones realizadas en los equipos.

    .row.justify-content-center.mb-5
      .col-md-5(data-aos="zoom-in")
        figure
          img(src="@/assets/curso/temas/t1/f2.png" alt="persona escribiendo en un laptop")
      .col-md-7
        AcordionA(tipo="a" clase-tarjeta="tarjeta fcp35")
          div(titulo="Listado de equipos")
            p.mb-0 Cada organización debe elaborar y tener a disposición un listado de sus equipos, esto le permitirá conocer cuáles son sus activos por cada uno de sus procesos. Este listado se debe organizar por zonas, sectores, producciones, etc.
          div(titulo="Sistema de codificación")
            p.mb-0 Esta es una actividad que debe realizar cada organización, dado que todas se identifican con diferentes procesos y zonas que son propias, para ello, pueden hacer uso de diferentes criterios de identificación tales como: ubicación, costos, producción, criticidad, histórico de fallos e intervenciones realizadas, entre otras; lo anterior, puede hacerse de una forma específica o no específica, empleando diferentes técnicas y siglas que pueden contener: nombres, secciones, letras, números o la combinación de ellas.

    Separador

    #t_1_2.titulo-segundo.color-acento-contenido
      h2 1.2 Documentación e información 

    .bloque-texto-a.color-secundario.gr1.p-4.p-md-5.mb-5 
      .row.m-0.align-items-center.justify-content-between
        .col-lg-8
          .bloque-texto-a__texto.p-4.fcacClarito
            p.mb-0 Todos los equipos de las organizaciones se constituyen en un bien tangible que representa parte de su riqueza y se deben de preservar de la mejor manera; una buena forma de hacerlo es recopilando la mayor cantidad de información que se pueda de los mismos y con el máximo detalle posible. Dentro de estos documentos, se encuentran los que son suministrados por el fabricante y otros, construidos por la organización con el fin de describir su uso y definir los procesos que podrán ser atendidos con cada uno.
        .col-lg-4.mb-4.mb-lg-0(data-aos="fade-left")

    Separador

    #t_1_3.titulo-segundo.color-acento-contenido
      h2 1.3 Hoja de vida de equipos

    .gr2.p-4.mb-5
      p La hoja de vida de los equipos es uno de los documentos más importantes que debe de tener toda organización, pero generalmente no se ha tomado de este modo. En este documento se debe incluir la información técnica propia del equipo y el registro de las intervenciones que ha tenido; de esta manera, se podrá tener un control minucioso de los mantenimientos, lubricantes, repuestos, costos y frecuencias.
      p.mb-0 Este documento debe estar al alcance del personal de mantenimiento y debe ser diligenciado por los responsables de las intervenciones de las diferentes órdenes. La hoja de vida de los equipos se compone de dos secciones:

    TabsB.color-acento-botones.tabs_bg_1
      .py-4.py-md-5(titulo="Ficha técnica" :icono="require('@/assets/curso/temas/t1/f4.svg')")
        .row.align-items-center.px-4
          .col-md-7.mb-4.mb-md-0
            p.mb-0 Cada equipo debe de tener este documento porque contiene datos únicos, algunos pueden ser código, información general, especificaciones técnicas y otros datos relevantes. La información se puede obtener de las placas de los fabricantes del equipo, manuales, catálogos e información recopilada por la empresa.
          .col-md-5(data-aos="flip-left", data-aos-easing="ease-out-cubic", data-aos-duration="2000")
            figure
              img(src='@/assets/curso/temas/t1/f6.png', alt='imagen relacionada')

      .py-4.py-md-5(titulo="Manual de instrucciones" :icono="require('@/assets/curso/temas/t1/f5.svg')")
        .row.align-items-center.px-4
          .col-md-7
            p Este manual debe describir todos los aspectos necesarios para la correcta operación de los equipos; contiene información indispensable para realizar el montaje, operar de forma correcta cada uno de los componentes, realizar los mantenimientos necesarios y con la frecuencia correcta, además de tener la información pertinente sobre aspectos de seguridad que garanticen la preservación de la integridad del usuario.
            p.mb-0 Este manual debe ser proporcionado por el fabricante o distribuidor del equipo y escrito en un idioma comprensible para el usuario, en lo posible el que maneje el país al que va dirigido.
          .col-md-5.mb-4.mb-md-0(data-aos="fade-left", data-aos-anchor="#example-anchor", data-aos-offset="500", data-aos-duration="500")
            figure
              img(src='@/assets/curso/temas/t1/f7.png', alt='imagen relacionada')

</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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
