<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Entorno de trabajo

    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/t2/f1.png')})`}", data-aos="fade-right"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Los entornos de trabajo, sin importar la labor que se desempeñe en este, deben garantizar, desde su diseño, unas condiciones mínimas de seguridad para el personal que lo ocupa como dispositivos y/o de elementos de protección que estén diseñados para este fin.

    Separador

    #t_2_1.titulo-segundo.color-acento-contenido
      h2 2.1 Área de trabajo

    p El área de trabajo debe disponer de un ambiente de aprendizaje convencional y de un ambiente de taller para el mantenimiento, con un área mínima de 400 m
      span.text-small(style="position: relative;bottom: 5px;") 2
      |.

    .row.justify-content-around.mb-5
      .col-md-5(data-aos="zoom-in")
        img(src="@/assets/curso/temas/t2/f2.png", alt="Ambiente de aprendizaje")
      .col-md-5(data-aos="zoom-in")
        img(src="@/assets/curso/temas/t2/f3.png", alt="Ambiente de taller")

    Separador

    #t_2_2.titulo-segundo.color-acento-contenido
      h2 2.2 Equipos

    p Existen diferentes tipos de equipos para la ejecución de las tareas de mantenimiento y ensamble electrónico. A continuación, se presentan algunos de ellos:

    .tarjeta.bg_slide_1.p-4.mb-5
      SlyderA(tipo="b")
        .row.align-items-center.justify-content-around
          .col-md-6.mb-4.mb-md-0
            h4 Equipo de diagnóstico avanzado de tarjetas electrónicas
            p Aunque suelen ser equipos poco conocidos por su alto costo, así como por la experiencia requerida para el manejo correcto por el personal que lo opere, es un equipo que permite diagnosticar por medio de un software los fallos presentados en cada módulo de las tarjetas.
          .col-md-4(data-aos="fade-up-right")
            figure
              img(src='@/assets/curso/temas/t2/f4.png', alt='imagen relacionada')
        .row.align-items-center.justify-content-around
          .col-md-6.mb-4.mb-md-0
            h4 Osciloscopio
            p Es un instrumento que realiza mediciones electrónicas, representadas en una gráfica en dos dimensiones de amplitud (Eje Y) vs. tiempo (Eje X), presentando los valores en forma de coordenadas cartesianas en una pantalla en una gráfica llamada oscilograma. Estos equipos pueden ser análogos o digitales.
          .col-md-4(data-aos="fade-up-left")
            figure
              img(src='@/assets/curso/temas/t2/f5.png', alt='imagen relacionada')
        .row.align-items-center.justify-content-around
          .col-md-6.mb-4.mb-md-0
            h4 Generadores de señal
            p Dispositivo electrónico utilizado en los laboratorios, el cual genera patrones de diferentes señales periódicas o no periódicas, que pueden ser análogas o digitales.
          .col-md-4(data-aos="fade-down-right")
            figure
              img(src='@/assets/curso/temas/t2/f6.png', alt='imagen relacionada')
        .row.align-items-center.justify-content-around
          .col-md-6.mb-4.mb-md-0
            h4 Fuente de voltaje
            p Son aquellos dispositivos que suministran energía a todo el sistema, se pueden encontrar fuentes de tensión o de corriente (la corriente puede ser alterna o directa).
          .col-md-4(data-aos="fade-down-left")
            figure
              img(src='@/assets/curso/temas/t2/f7.png', alt='imagen relacionada')

    Separador

    #t_2_3.titulo-segundo.color-acento-contenido.mb-5
      h2 2.3 Herramientas

    p Las herramientas son instrumentos necesarios para la ejecución adecuada de cualquier montaje o reparación de los dispositivos. Existen de diversos tipos. A continuación, se presentan dos de ellos, las manuales y las especializadas. 

    h3 Herramientas manuales 

    p Un taller electrónico debe de tener unas buenas herramientas manuales, utilizadas en todas las reparaciones, entre los más comunes están:

    .col-md-10.mx-auto.mb-5
      .titulo-sexto.color-acento-contenido
        p.mb-0 
          b Figura 1.
          br
          em Herramientas manuales
      figure(data-aos="zoom-in")
        img(src="@/assets/curso/temas/t2/f8.svg", alt="Herramientas manuales").mb-4
        figcaption Fuente. Elaboración propia

    h3 Herramientas especializadas

    p Dentro de las herramientas utilizadas se requieren algunas que son más especializadas, para realizar trabajos muy específicos.

    TabsB.color-acento-botones.mb-5.tabs_bg_1
      .py-4.py-md-5(titulo="Estado de soldadura electrónica" :icono="require('@/assets/curso/temas/t2/f9.svg')")
        .row.align-items-center.px-4
          .col-md-7.mb-4.mb-md-0
            p Este tipo de herramientas son utilizadas por personas expertas en montajes y reparaciones para soldar componentes electrónicos, que son bastante delicados y las partes son muy pequeñas. Dentro de las reparaciones más comunes se encuentran los smartphones, consolas de video, computadores y electrodomésticos.
          .col-md-5(data-aos="zoom-in-right")
            figure
              img(src='@/assets/curso/temas/t2/f12.png', alt='imagen relacionada')
      .py-4.py-md-5(titulo="Multímetros digitales" :icono="require('@/assets/curso/temas/t2/f10.svg')")
        .row.align-items-center.px-4
          .col-md-7.mb-4.mb-md-0
            p También conocido como Tester, es un instrumento de medición y comprobación que permite realizar diferentes tomas de parámetros y magnitudes eléctricas, entre las más comunes están el voltaje, amperaje y la corriente.
          .col-md-5(data-aos="zoom-out-left")
            figure
              img(src='@/assets/curso/temas/t2/f13.png', alt='imagen relacionada')
      .py-4.py-md-5(titulo="Pinzas voltiamperimétricas" :icono="require('@/assets/curso/temas/t2/f11.svg')")
        .row.align-items-center.px-4
          .col-md-7.mb-4.mb-md-0
            p Es una herramienta muy utilizada en el campo de la electrónica, por ser una combinación entre un multímetro digital y un sensor de corriente, el cual es medido por una pinza. Los cables o sondas son las encargadas de medir la tensión.
          .col-md-5(data-aos="zoom-out-right")
            figure
              img(src='@/assets/curso/temas/t2/f14.png', alt='imagen relacionada')

    Separador

    #t_2_4.titulo-segundo.color-acento-contenido
      h2 2.4 Elementos de trabajo

    p Se requieren los siguientes elementos para el desempeño óptimo de las labores.

    TabsC.color-acento-botones.mb-5
      .py-3.py-md-4(titulo="Muebles colaborativos")
        .row.justify-content-around.align-items-center
          .col-md-6(data-aos="fade-right")
            figure
              img(src='@/assets/curso/temas/t2/f15.png', alt='Texto que describa la imagen')
          .col-md-6.mb-4.mb-md-0
            p Los elementos mínimos necesarios para el desempeño correcto de las labores son: 1 tablero acrílico, 30 sillas, 3 gabinetes con entrepaños, 12 mesas y 1 escritorio.
        
      .py-3.py-md-4(titulo="Tecnologías de la Información y comunicación")
        .row.justify-content-around.align-items-center
          .col-md-6
            p Se requiere 1 televisor de mínimo 55- 4 k, 30 computadores portátiles o de escritorio con especificaciones informáticas actuales y conectividad a Internet 16 GB RAM.
          .col-md-6.mb-4.mb-md-0(data-aos="fade-left")
            figure
              img(src='@/assets/curso/temas/t2/f16.png', alt='Texto que describa la imagen')

    Separador

    #t_2_5.titulo-segundo.color-acento-contenido
      h2 2.5 Condiciones técnicas, térmicas y atmosféricas

    p Las condiciones técnicas, térmicas y atmosféricas hacen referencia a las condiciones específicas que deben tener los elementos de trabajo para el desempeño correcto de la labor asignada, teniendo en cuenta la especificidad y el lugar de trabajo. El video que se presenta a continuación presenta de manera gráfica cada una de ellas:

    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    Separador

    #t_2_6.titulo-segundo.color-acento-contenido.mb-5
      h2 2.6 Aprovisionamiento y solicitud

    p El aprovisionamiento y solicitud es muy particular para cada organización, estos se realizan de acuerdo con sus necesidades y procesos.

    TabsC.color-acento-botones.mb-5
      .py-3.py-md-4(titulo="Manejo de proveedores")
        .row.justify-content-around.align-items-center
          .col-md-6(data-aos="fade-right")
            figure
              img(src='@/assets/curso/temas/t2/f17.png', alt='Texto que describa la imagen')
          .col-md-6.mb-4.mb-md-0
            p Cada organización tiene políticas de posibles proveedores, tanto para insumos de producción o provisión de repuestos y mantenimiento. No existe normatividad que le exija a la compañía realizar algún tipo de contratación.
        
      .py-3.py-md-4(titulo="Manual de Instrucciones")
        .row.justify-content-around.align-items-center
          .col-md-6
            p Las necesidades de las empresas determinan la compra de los repuestos más críticos para el proceso. Para piezas o partes específicas que deben ser importadas, se debe tener presente los tiempos que implica este proceso, por ello, es importante conocer las fechas de vencimiento y el costo de las partes que se tengan en 
              em stock.
          .col-md-6.mb-4.mb-md-0(data-aos="fade-left")
            figure
              img(src='@/assets/curso/temas/t2/f18.png', alt='Texto que describa la imagen')

</template>

<script>
export default {
  name: 'Tema2',
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
