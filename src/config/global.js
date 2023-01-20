export default {
  global: {
    componenteFormativo: 'Preparación del entorno de trabajo',
    descripcionCurso:
      'Un entorno de trabajo adecuado es más importante y necesario de lo que se piensa, debe brindar una sensación de limpieza, orden, seguridad y tranquilidad. El propósito de esta preparación debe ser prioritario en cualquier ambiente de trabajo y de aprendizaje, convirtiéndose en un hábito para el desarrollo de todas sus labores.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-img.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/banner-bg.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/decorativo-3.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Gestión de la información',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Entorno de trabajo',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Herramientas, equipos e instrumentos',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Documentación técnica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema5',
        icono: 'far fa-file-alt',
        numero: '5',
        titulo: 'Seguridad y salud en el trabajo',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema6',
        icono: 'far fa-file-alt',
        numero: '6',
        titulo: 'Atención al cliente',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Atención al cliente',
      referencia:
        'Ecosistema de Recursos Educativos Digitales SENA. (2022, 28 junio). <em>Atención al cliente</em>. [Vídeo]. YouTube. ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=Z9zSnDD46IU',
    },
    {
      tema: 'Condiciones de trabajo',
      referencia:
        'Organización Internacional del Trabajo (2022). <em>Metas de los ODS pertinentes vinculados con las condiciones de trabajo.</em>',
      tipo: 'Página web',
      link:
        'https://www.ilo.org/global/topics/dw4sd/themes/working-conditions/WCMS_620657/lang--es/index.htm',
    },
    {
      tema: 'Herramientas',
      referencia:
        'Herramundo (2022). <em>Herramientas de Electrónica. Características, Historia, Tipos e Importancia.</em>',
      tipo: 'Página web',
      link: 'https://herramientas.tv/electronica/',
    },
    {
      tema: 'Seguridad y salud en el trabajo (SST)',
      referencia:
        'Ecosistema de Recursos Educativos Digitales SENA. (2022, 20 mayo). <em>Seguridad y salud en el trabajo (SST).</em> [Vídeo]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=87fQFljT7OQ',
    },
  ],
  glosario: [
    {
      termino: 'Ambiente de aprendizaje',
      significado:
        'es un término propio del SENA. Se refiere al espacio donde el aprendiz desarrolla sus habilidades, el cual puede estar dotado o no de tecnologías específicas o simplemente de mobiliarios comunes.',
    },
    {
      termino: 'Administración',
      significado:
        'es la disciplina que estudia el uso óptimo de los recursos en una organización, empresa o negocio.',
    },
    {
      termino: 'Convergencia',
      significado: 'unión de varias líneas en un punto.',
    },
    {
      termino: 'Ergonomía',
      significado:
        'estudia la relación que existe de un objeto, vehículo o herramientas con las condiciones y características físicas, anatómicas y psicológicas del que las va a usar.',
    },
    {
      termino: 'Código',
      significado:
        'es la combinación de diferentes símbolos, por lo general, son alfanuméricos, organizados de una forma determinada.',
    },
    {
      termino: 'Componente electrónico',
      significado:
        'es un dispositivo que compone un circuito electrónico, son de materiales y aplicaciones específicas.',
    },
    {
      termino: 'Herramientas',
      significado:
        'son instrumentos necesarios para la ejecución adecuada de cualquier montaje o reparación de los dispositivos. ',
    },
    {
      termino: 'Laboratorio',
      significado:
        'lugar en el cual se pueden desarrollar diferentes tipos de trabajos científicos, enfocado a la investigación y experimentación, porque está dotado de equipos e instrumentos destinados para áreas específicas.',
    },
    {
      termino: 'Manual',
      significado:
        'es un compilado de aspectos que tratan sobre algún aparato o dispositivo.',
    },
    {
      termino: 'Osciloscopio',
      significado:
        'es un instrumento que realiza mediciones electrónicas, representadas en una gráfica en dos dimensiones de amplitud (Eje Y) vs tiempo (Eje X), presentando los valores en forma de coordenadas cartesianas en una pantalla en una gráfica llamada oscilograma. ',
    },
    {
      termino: 'Servicio al cliente',
      significado:
        'agregado que se da en cada producto que ofrece la organización, haciendo que los usuarios se sientan atendidos y considerados en sus necesidades.',
    },
    {
      termino: '<em>Stock</em>',
      significado:
        'almacenamiento de productos solicitados para una posible reparación.',
    },
    {
      termino: 'Taller',
      significado:
        'lugar donde se desarrolla algún tipo de labor, por lo general, de tipo manual o artesanal.',
    },
  ],
  referencias: [
    {
      referencia:
        'Escuela de diseño de Madrid. (s/f). <em>¿Qué es el diseño de arquitectura?</em>',
      link: 'https://esdima.com/que-es-el-diseno-de-arquitectura/',
    },
    {
      referencia:
        'Way, M. (1991). <em>Dibujo con perspectivas, utilización de uno y más puntos de fuga</em>. Ediciones Omega.',
      link: '',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
