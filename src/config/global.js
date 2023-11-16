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
        'Se refiere al espacio donde el aprendiz desarrolla sus habilidades, el cual puede estar dotado o no de tecnologías específicas o simplemente de mobiliarios comunes.',
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
        'ABI Electronics Ltd. (2022). <em>BoardMaster</em> 19" Rack [Imagen].',
      link:
        'https://www.abielectronics.co.uk/Products/images/BoardMaster8000PLUS.png.',
    },
    {
      referencia:
        'Arango, N. (2019). <em>La Ley 1480 de 2011 y su impacto en la estructura obligacional de las entidades fiduciarias como voceras de las fiducias de administración y pagos, también llamadas fiducias completas en desarrollos inmobiliarios:  hacia un cambio de paradigma</em>. Bogotá: Universidad Externado de Colombia.',
      link:
        'https://bdigital.uexternado.edu.co/entities/publication/fd8708c1-7f31-4c0f-9387-ffaed440dad1',
    },
    {
      referencia:
        'Blanco, L., & Sánchez, Á. (2002). <em>“Equipos Electrónicos. Mantenimiento.” Mantenimiento de equipos electrónicos</em> (pp. [1]-13). Paraninfo.',
      link:
        'https://link.gale.com/apps/doc/CX2190100007/GVRL?u=sena&sid=bookmark-GVRL&xid=08458c9c ',
    },
    {
      referencia:
        'Carrasco, M. A., García, L. M., & Núñez, J. (2012). <em>Instalaciones eléctricas básicas</em>. Editorial Paraninfo.',
      link: '',
    },
    {
      referencia:
        'García, S. (2019). <em>Ingeniería del mantenimiento: manual práctico para la gestión eficaz del mantenimiento</em>. Editorial Renovetec.',
      link: '',
    },
    {
      referencia:
        'Garrido, S. G. (2010). <em>Organización y gestión integral de mantenimiento<em>. Ediciones Diaz de Santos.',
      link: '',
    },
    {
      referencia:
        'Hernández, A., Pablo, M., Medina Peña, D. & Suárez Fragas, Y. (2015). Sistema automatizado para la gestión del mantenimiento de equipos (módulos administración y solicitud de servicio). <em>Revista Ciencias Técnicas Agropecuarias, 24</em>, p.85-90ISSN: 1010-2760.',
      link: 'https://www.redalyc.org/articulo.oa?id=93243475015',
    },
    {
      referencia:
        'Kosow, I. L. (1979). <em>Control de máquinas eléctricas</em>. Reverté.',
      link: '',
    },
    {
      referencia:
        'Nuevo, A. (2020). <em>Montaje y mantenimiento eléctrico-electrónico</em>. Editorial Paraninfo.',
      link: '',
    },
    {
      referencia:
        'Vahos, J., Pino, A., & Castro, J. (2019). Desarrollo de una herramienta de software para la gestión del mantenimiento de infraestructura en el SENA regional Antioquia. <em>Revista CINTEX, 24</em>(1), p. 13-19.',
      link:
        'https://revistas.pascualbravo.edu.co/index.php/cintex/article/view/331',
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
