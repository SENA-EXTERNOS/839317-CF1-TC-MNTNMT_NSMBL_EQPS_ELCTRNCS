<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 5
      h1 Seguridad y salud en el trabajo

    p La seguridad es una premisa para todos los seres humanos, cuidar la integridad de cada individuo de una organización debe ser responsabilidad de todos y cada uno de los miembros de estas. Es así como las instituciones encargadas de velar por la seguridad y salud en el trabajo han diseñado e implementado diferentes medidas y estrategias que permitan cumplir con esta premisa.
    p A continuación, se presentan los elementos que deben ser considerados para garantizar la seguridad y salud en el trabajo:
    
    ImagenInfografica.color-primario
      template(v-slot:imagen)
        img(src='@/assets/curso/temas/t5/f1.png', alt='Texto que describa la imagen')

      .tarjeta.color-acento-contenido.p-3(x="7.5%" y="80%" numero="+")
        h5 Elementos de protección
        p.mb-0.text-white Los elementos de protección personal, también conocidos como EPP, son utilizados dependiendo de cada actividad y su función es la protección ante los posibles riesgos o amenazas en seguridad que atenten contra la integridad del trabajador. Cada trabajador los debe portar de forma individual y personal, no deben ser compartidos, ni reutilizados después de su vida útil o deterioro. Los EPP más utilizados en el taller son: gafas de seguridad, guantes de nitrilo, tapabocas, de ser necesario, también pueden solicitarse botas de seguridad y protección auditiva.

      .tarjeta.color-acento-botones.p-3(x="21.5%" y="20%" numero="+")
        h5 Prevención de riesgos
        p.mb-0.text-white Las organizaciones realizan diferentes acciones encaminadas a la prevención de riesgos que puedan afectar la integridad de sus colaboradores, pero también de su infraestructura, la cual representa un patrimonio a proteger. Actualmente, es tan importante este aspecto, que los gobiernos han tomado medidas para que se cumplan con mandatos obligatorios y con condiciones diferentes para cada sector productivo. Esto debe estar acompañado de un plan de emergencias.

      .tarjeta.color-primario.p-3(x="34.8%" y="80%" numero="+")
        h5 Acondicionamiento del sitio de trabajo
        p.mb-0.text-white Cada dependencia debe estar con las condiciones ideales para ser utilizada, por medio de diferentes dispositivos o elementos, debe contar con iluminación acorde a la ubicación del área de trabajo, señalización de todo tipo, botiquín de primeros auxilios, camilla de emergencia y extintor multipropósito

      .tarjeta.color-acento-contenido.p-3(x="48.5%" y="20%" numero="+")
        h5 Señales de seguridad
        p.mb-0.text-white Son aquellas que indican de forma clara e ilustrada mensajes importantes respecto a los posibles riesgos que se pueden presentar en un espacio determinado; las señales pueden ser de prohibición, información o advertencia. Son de diferentes formas y colores con diferentes pictogramas (dibujos), cada una de estas características tiene un propósito y una información. Las rectangulares son informativas, las de prohibición son circulares y las de advertencia son triangulares.

      .tarjeta.color-acento-botones.p-3(x="62.4%" y="80%" numero="+")
        h5 Orden y aseo
        p.mb-0.text-white Es un hábito que se debe cultivar desde los inicios de cualquier profesión. Es una necesidad y una obligación de todos los trabajadores de cualquier organización mantener los ambientes de trabajo y de aprendizaje con orden y aseo, ubicando todos los elementos en los lugares designados para cada propósito.

      .tarjeta.color-primario.p-3(x="77%" y="20%" numero="+")
        h5 Alarmas en actividades de mantenimiento
        p.mb-0.text-white Se presentan en mantenimientos de tipo preventivo para la intervención del equipo, el cual esté próximo a su vencimiento. Para poder generar este tipo de alertas, es necesario tener configurado el equipo, así como las órdenes de trabajo para realizar la intervención y que quede el registro de la actividad ejecutada.

      .tarjeta.color-acento-botones.p-3(x="92.5%" y="80%" numero="+")
        h5 Normatividad
        p.mb-0.text-white Es el reglamento interno de cada ambiente de trabajo o aprendizaje, donde se evidencian las pautas comportamentales establecidas por las organizaciones para evitar accidentes, tener espacios de convivencia sana y realizar prácticas de procedimientos adecuados. Se apoyan en la señalización y educación de los usuarios. Algunas de las normas que se tienen en cuenta en el taller son de seguridad, comportamiento, orden y aseo.

</template>

<script>
export default {
  name: 'Tema5',
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
