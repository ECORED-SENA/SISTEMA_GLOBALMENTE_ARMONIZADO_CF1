export default {
  global: {
    componenteFormativo: 'Productos químicos                             ',
    descripcionCurso:
      'Los productos químicos en la vida actual juegan un importante papel en las actividades cotidianas, es por eso que hacer un uso adecuado y seguro de ellos es cada día más necesario. <br> En este componente formativo se hace una introducción a los conceptos generales necesarios, para hacer una buena apropiación de saberes respecto del manejo seguro de dichos productos enmarcados en el Sistema Globalmente Armonizado (SGA) de clasificación y etiquetado de productos químicos, cubriendo todas las fases del ciclo de vida. Los términos y conceptos que este apartado presenta son herramienta fundamental para darle una utilidad práctica a los lineamientos del SGA, que ha sido adoptado en Colombia como sistema de comunicación de peligros químicos a través del Decreto 1496 de 2018.',
    imagenBannerPrincipal: require('@/assets/curso/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.png'),
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
        titulo: 'Características de los productos químicos',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Definición de productos químicos',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Estado físico',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Productos químicos peligrosos',
            hash: 't_1_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.4',
            titulo: 'Condiciones de concentración',
            hash: 't_1_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.5',
            titulo: 'Temperatura y presión según el estado',
            hash: 't_1_5',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Peligros y riesgos',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Definición de peligros y riesgo',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Concepto de dosis',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Vías de ingreso',
            hash: 't_2_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.4',
            titulo: 'Exposición a productos químicos',
            hash: 't_2_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.5',
            titulo: 'Efectos crónicos y agudos',
            hash: 't_2_5',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.6',
            titulo: 'Concepto TLV',
            hash: 't_2_6',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.7',
            titulo: 'Ciclo de vida de un producto químico',
            hash: 't_2_7',
          },
        ],
      },
    ],
    subMenu: [
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
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  creditos: {
    liderEquipo: {
      nombre: 'Maria Camila Garcia Santamaria',
      cargo: 'Líder del equipo',
    },
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro: 'Centro Industrial del Diseño y la Manufactura',
        regional: 'Regional Santander',
      },
      {
        nombre: 'Marta Lucía Hernández',
        cargo: 'Instructora',
        centro: 'Centro Textil y de Gestión Industrial',
      },
      {
        nombre: 'Luis Eugenio Ramírez Duarte',
        cargo: 'Experto técnico',
        centro: 'ONUDI',
      },
      {
        nombre: 'Sergio Arturo Medina Castillo',
        cargo: 'Diseñador Instruccional ',
        centro: 'Centro para la Industria de la Comunicación Gráfica',
      },
      {
        nombre: 'Ana Catalina Córdoba Sus',
        cargo: 'Revisión metodológica y pedagógica',
        centro: 'Centro para la Industria de la Comunicación Gráfica',
        regional: 'Regional Distrito Capital',
      },
      {
        nombre: 'Julia Isabel Roberto',
        cargo: 'Diseñadora y evaluadora instruccional',
        centro: 'Centro para la Industria de la Comunicación Gráfica ',
        regional: 'Regional Distrito Capital',
      },
      {
        nombre: 'Miroslava González Hernández',
        cargo: 'Diseñador y evaluador instruccional',
        centro: 'Centro de Gestión Industrial',
      },
      {
        nombre: 'José Gabriel Ortiz Abella',
        cargo: 'Corrector de estilo',
        centro: 'Centro para la Industria de la Comunicación Gráfica',
        regional: 'Regional Distrito Capital',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
      },
      {
        nombre: 'Oscar Julian Marquez Sanabria',
        cargo: 'Diseño web',
      },
      {
        nombre: [
          'Andrés Herrera',
          'Gilberto Junior Rodríguez Rodríguez',
          'Jose Tang',
          'Laura Murcia Pardo',
          'María Carolina Tamayo López',
          'Oleg Litvin',
          'Victor Cardenas',
          'Wilson Andrés Arenales Cáceres',
          'Zuleidy Maria Ruiz Torres',
        ],
        cargo: 'Producción audiovisual',
      },
      {
        nombre: 'Edgar Mauricio Cortes García',
        cargo: 'Desarrollo front-end',
      },
      {
        nombre: 'Edward Leonardo Pico Cabra',
        cargo: 'Desarrollo front-end',
      },
      {
        nombre: 'Yuli Marcela Gómez Tarazona',
        cargo: 'Validación de diseño y contenido',
      },
      {
        centro: 'Centro Industrial del Diseño y la Manufactura',
        regional: 'Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculacion en plataforma LMS',
        centro: 'Centro de Comercio y Servicios',
        regional: 'Regional Tolima',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Biología. (2016). Usos y aplicaciones de las soluciones farmacéuticas: ',
      link:
        'http://quimicabiologianutricional.blogspot.com/2016/10/usos-y-aplicaciones-de-las-soluciones.html',
    },
    {
      referencia: 'Blogger. (2016). Ley de Gay Lussac: ',
      link: 'http://termo4to.blogspot.com/2016/03/ley-de-gay-lussac.html?m',
    },
    {
      referencia: 'Ciencias en el CIC. (2011). Bioacumulación: ',
      link: 'http://cienciascic.blogspot.com/2011/03/bioacumulacion.html',
    },
    {
      referencia:
        'Corporativo Químico Global. (2011). Ciclo de vida de un producto químico: ',
      link: '',
    },
    {
      referencia:
        'Decreto 1443 de 2014. [Presidencia de la República]. Por el cual se dictan disposiciones para la implementación del Sistema de Gestión de la Seguridad y Salud en el Trabajo (SG-SST). Colombia. 31 de Julio de 2014.',
    },
    {
      referencia:
        'Estévez, R. (2015). Impactos ambientales: agotamiento de la capa de ozono. Ecointeligencia: ',
      link:
        'https://www.google.com.co/search?q=Efecto+de+los+CFC+sobre+el+ozono+estratosf%C3%A9rico&tbm=isch&ved=2ahUKEwiJvfX7zPjsAhXI2VkKHRgwD5QQ2-cCegQIABAA&oq=Efecto+de+los+CFC+sobre+el+ozono+estratosf%C3%A9rico&gs_lcp=CgNpbWcQAzoCCAA6BAgAEENQwGpYw3dg_H1oAHAAeAOAAZACiAGBD5IBBjAuMTEuMpgBAKABAaoBC2d3cy13aXotaW1nsAEAwAEB&sclient=img&ei=N9uqX8nFJciz5wKY4LygCQ&authuser=0&bih=657&biw=1366&hl=es#imgrc=IX6-jDYNM-SbGM',
    },
    {
      referencia:
        'Instituto Nacional de Ecología y Cambio Climático. (2007). Peligrosidad de las sustancias químicas. Ciudad de México: ',
      link:
        'http://www2.inecc.gob.mx/publicaciones2/libros/131/peligrosidad.html',
    },
    {
      referencia:
        'Instituto Nacional de Seguridad y Salud y Salud en el Trabajo - Insst. (s.f). ¿Qué es un producto químico? Insst: ',
      link: 'https://www.insst.es/-/-que-es-un-producto-quimico-peligroso-',
    },
    {
      referencia:
        'Instituto Nacional de Seguridad e Higiene en el Trabajo. (s.f.). NTP 244: criterios de valoración en higiene industrial. Instituto Nacional de Seguridad e Higiene en el Trabajo.',
    },
    {
      referencia:
        'ISO Tools Excellence. (2018). Norma ISO 45001: ¿Qué diferencias existen entre los peligros y riesgos?: ',
      link:
        'https://www.isotools.org/2018/07/26/norma-iso-45001-diferencias-entre-peligros-y-riesgos/#:~:text=Definici%C3%B3n%20peligro,o%20una%20combinaci%C3%B3n%20de%20estos.',
    },
    {
      referencia: 'María. (s.f). Unidades de presión: ',
      link:
        'https://www.google.com/search?q=unidades+de+presi%C3%B3n&tbm=isch&ved=2ahUKEwid1oTfufjsAhW3cDABHetsDRQQ2-cCegQIABAA&oq=unidades+de+presi%C3%B3n&gs_lcp=CgNpbWcQAzICCAAyAggAMgIIADICCAAyAggAMgIIADICCAAyAggAMgIIADICCAA6BQgAELEDOgcIABCxAxBDUJgOWOonYJQqaABwAHgAgAGyAogBlxeSAQgwLjE4LjAuMZgBAKABAaoBC2d3cy13aXotaW1nwAEB&sclient=img&ei=DseqX52XL7fhwbkP69m1oAE&bih=912&biw=1920&rlz=1C1OKWM_esCO796CO796#imgrc=RM1Ghw_uOlQ28M',
    },
    {
      referencia:
        'Martínez, J. (2020). La calidad del aire en Bogotá se verá afectada nuevamente. Caracol Radio: ',
      link:
        'https://caracol.com.co/emisora/2020/06/24/bogota/1593019353_934370.html',
    },
    {
      referencia:
        'Ministerio de Ambiente de Ecuador. (s.f). Contaminantes Orgánicos Persistentes COP.',
    },
    {
      referencia:
        'Ministerio de Trabajo y Asuntos Sociales de España. (s. f). Criterios de valoración en higiene industrial. Ministerio de Trabajo y Asuntos Sociales de España.',
      link:
        'https://www.insst.es/documents/94886/327166/ntp_244.pdf/b853aaf2-955b-41d7-b021-7bd702ecdd9d#:~:text=En%20Higiene%20Industrial%20se%20entiende,salud%20puede%20entra%C3%B1ar%20el%20mismo',
    },
    {
      referencia:
        'Nueva ISO-45001. (2016). Identificación y clasificación de riesgos con OHSAS 18001: ',
      link: 'https://www.nueva-iso-45001.com/2016/01/riesgos-ohsas-18001/',
    },
    {
      referencia:
        'Organización Internacional de Estandarización. (2018). Sistemas de gestión de la seguridad y salud en el trabajo - Requisitos con orientación para su uso: ',
      link: 'https://www.iso.org/obp/ui/#iso:std:iso:45001:ed-1:v1:es',
    },
    {
      referencia:
        'Pnuma. (2013). Breve panorama sobre el ciclo de vida de los productos químicos: ',
      link:
        'https://docplayer.es/20767339-Breve-panorama-sobre-el-ciclo-de-vida-de-los-productos-quimicos.html',
    },
    {
      referencia:
        'Querespuesta.com. (s.f). ¿Cuál es la diferencia entre la presión absoluta y la presión relativa? ',
      link:
        'https://www.google.com/search?q=presi%C3%B3n+absoluta&tbm=isch&ved=2ahUKEwjiqrSTuvjsAhXPx1kKHZSDBzsQ2-cCegQIABAA&oq=presi%C3%B3n+absoluta&gs_lcp=CgNpbWcQAzICCAAyAggAMgIIADICCAAyAggAMgIIADICCAAyAggAMgIIADICCAA6BAgAEEM6BQgAELEDOgcIABCxAxBDUJEOWP8rYOswaABwAHgAgAGlAYgB7xGSAQQwLjE2mAEAoAEBqgELZ3dzLXdpei1pbWfAAQE&sclient=img&ei=fMeqX-L8JM-P5wKUh57YAw&bih=912&biw=1920&rlz=1C1OKWM_esCO796CO796#imgrc=tlk073SYDLP7nM',
    },
    {
      referencia: 'Raffino, M. (2020). Estado gaseoso: ',
      link: 'https://concepto.de/estado-gaseoso/#ixzz6alpD2H00',
    },
    {
      referencia: 'Raffino, M. (2020). Estado líquido: ',
      link: 'https://concepto.de/estado-liquido/#ixzz6aQJpFjBO',
    },
    {
      referencia: 'Raffino, M. (2020). Estado sólido: ',
      link: 'https://concepto.de/estado-solido/#ixzz6aQI3dzDO',
    },
    {
      referencia: 'Raffino, M. (2020). Presión: ',
      link: 'https://concepto.de/presion-2/#ixzz6axfmGRkQ',
    },
    {
      referencia: 'Raffino, M. (2020). Solución química: ',
      link: 'https://concepto.de/solucion-quimica/#ixzz6at1ubs7D',
    },
    {
      referencia: 'Raffino, M. (2020). Temperatura: ',
      link: 'https://concepto.de/temperatura/#ixzz6axEA3id2',
    },
    {
      referencia: 'ResearhGate. (s.f.).Ciclo de vida de un producto químico: ',
      link:
        'https://www.researchgate.net/figure/Ciclo-de-vida-de-las-sustancias-quimicas_fig1_320771708',
    },
    {
      referencia: 'Testo. (s.f). Fundamentos físicos: ',
      link:
        'https://www.testo.com/es-CL/servicio/knowledgebase-pressure-physical-principles',
    },
    {
      referencia: 'UFT.cl (s.f). Disoluciones químicas: ',
      link:
        'https://uft.cl/images/futuros_alumnos/profesores_orientadores/material-pedagogico/Guia_5_Soluciones.pdf',
    },
  ],
  glosario: [
    {
      termino: 'Biomagnificación',
      significado:
        'Tendencia de algunos productos químicos a acumularse a lo largo de la cadena trófica, exhibiendo concentraciones sucesivamente mayores al ascender el nivel trófico. La concentración del producto en el organismo consumidor es mayor que la concentración del mismo producto en el organismo consumido.',
    },
    {
      termino: 'Concentración química',
      significado:
        'Cantidad en la que se encuentran las sustancias que se disuelven (soluto) en relación con la o las sustancias que lo disuelven (solvente). En este sentido, la cantidad de soluto siempre será menor al solvente para que se considere una solución.',
    },
    {
      termino: 'Exposición aguda',
      significado:
        'Contacto hecho entre un agente químico, físico, o biológico y un organismo, durante un período corto de tiempo (normalmente menos de un día).',
    },
    {
      termino: 'Exposición crónica',
      significado:
        'Contacto hecho entre un agente químico, físico o biológico y un organismo, habitualmente por un largo período de tiempo (normalmente más de un año).',
    },
    {
      termino: 'Peligro',
      significado:
        'Fuente, situación o acto con potencial de causar daño en la salud de los trabajadores, en los equipos o en las instalaciones.',
    },
    {
      termino: 'Presión',
      significado:
        'La presión es una magnitud que mide el efecto deformador o capacidad de penetración de una fuerza y se define como la fuerza ejercida por unidad de superficie. Se expresa como: P=F/S.',
    },
    {
      termino: 'Riesgo',
      significado:
        'Posibilidad de que algo desagradable acontezca. Se asocia generalmente a una decisión que conlleva a una exposición o a un tipo de peligro.',
    },
    {
      termino: 'Solución química',
      significado:
        'Mezcla homogénea cuyos componentes, llamados soluto y solvente, no pueden ser separados por métodos mecánicos simples (filtración, decantación y centrifugación).',
    },
    {
      termino: 'Temperatura',
      significado:
        'Magnitud física que indica la energía interna de un cuerpo, de un objeto o del medio ambiente en general, medida por un termómetro.',
    },
  ],
  complementario: [
    {
      texto:
        'Biología. (2016). Usos y aplicaciones de las soluciones farmacéuticas. ',
      tipo: 'Blog',
      link:
        'http://quimicabiologianutricional.blogspot.com/2016/10/usos-y-aplicaciones-de-las-soluciones.html',
    },
    {
      texto: 'Rafino, M. (2020). Solución química.',
      tipo: 'Página web',
      link: 'https://concepto.de/solucion-quimica/#ixzz6au4gDxxt',
    },
    {
      texto:
        'Instituto Nacional de Seguridad e Higiene en el Trabajo (s.f.): NTP 244: Criterios de valoración en higiene industrial.',
      tipo: 'PDF',
      link:
        'https://www.insst.es/documents/94886/327166/ntp_244.pdf/b853aaf2-955b-41d7-b021-7bd702ecdd9d',
    },
    {
      texto:
        'Corporativo Químico Global S.A. (2011). Ciclo de vida de productos químicos. ',
      tipo: 'Blog',
      link:
        'https://quimicoglobal.mx/ciclo-de-vida-productos-quimicos/#:~:text=El%20concepto%20de%20ciclo%20de,fin%20de%20su%20vida%20%C3%BAtil',
    },
  ],
}
