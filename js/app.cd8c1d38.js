(function(e){function o(o){for(var i,n,c=o[0],s=o[1],l=o[2],u=0,d=[];u<c.length;u++)n=c[u],Object.prototype.hasOwnProperty.call(t,n)&&t[n]&&d.push(t[n][0]),t[n]=0;for(i in s)Object.prototype.hasOwnProperty.call(s,i)&&(e[i]=s[i]);m&&m(o);while(d.length)d.shift()();return r.push.apply(r,l||[]),a()}function a(){for(var e,o=0;o<r.length;o++){for(var a=r[o],i=!0,n=1;n<a.length;n++){var c=a[n];0!==t[c]&&(i=!1)}i&&(r.splice(o--,1),e=s(s.s=a[0]))}return e}var i={},n={app:0},t={app:0},r=[];function c(e){return s.p+"js/"+({actividad:"actividad",comple:"comple",creditos:"creditos",glosario:"glosario",intro:"intro",referencias:"referencias",tema1:"tema1",tema2:"tema2",tema3:"tema3"}[e]||e)+"."+{actividad:"bc5a4499","chunk-0206bfa0":"b8721a40","chunk-0cfca828":"d9c52e68","chunk-13303073":"6937ccd5","chunk-1479a341":"5be31296","chunk-1fb07a61":"ee471ffb","chunk-2c06842c":"106169d8","chunk-2d0dad62":"76fac372","chunk-2d208d90":"87230754","chunk-2d21d0e2":"dd53d1f6","chunk-2d22c123":"28af088c","chunk-2e80bb9a":"e2e9f7f8","chunk-515a8379":"2e1f58f7","chunk-522cec8c":"91f1a301","chunk-59974754":"7e022146","chunk-5a6377df":"153a9e0a","chunk-7432e4d4":"c6dbc754","chunk-766a929b":"12e1737d","chunk-c796899c":"a84c59f7",comple:"11930fe0",creditos:"a9c165a0",glosario:"3d668944",intro:"8d15a591",referencias:"e3321997",tema1:"51fba35b",tema2:"3b7823f3",tema3:"0a2a54fe"}[e]+".js"}function s(o){if(i[o])return i[o].exports;var a=i[o]={i:o,l:!1,exports:{}};return e[o].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.e=function(e){var o=[],a={"chunk-0cfca828":1,"chunk-13303073":1,"chunk-1479a341":1,"chunk-1fb07a61":1,"chunk-515a8379":1,"chunk-522cec8c":1,"chunk-59974754":1,"chunk-5a6377df":1,"chunk-7432e4d4":1,"chunk-766a929b":1,comple:1,creditos:1,glosario:1,intro:1,referencias:1};n[e]?o.push(n[e]):0!==n[e]&&a[e]&&o.push(n[e]=new Promise((function(o,a){for(var i="css/"+({actividad:"actividad",comple:"comple",creditos:"creditos",glosario:"glosario",intro:"intro",referencias:"referencias",tema1:"tema1",tema2:"tema2",tema3:"tema3"}[e]||e)+"."+{actividad:"31d6cfe0","chunk-0206bfa0":"31d6cfe0","chunk-0cfca828":"99a35118","chunk-13303073":"99a35118","chunk-1479a341":"99a35118","chunk-1fb07a61":"99a35118","chunk-2c06842c":"31d6cfe0","chunk-2d0dad62":"31d6cfe0","chunk-2d208d90":"31d6cfe0","chunk-2d21d0e2":"31d6cfe0","chunk-2d22c123":"31d6cfe0","chunk-2e80bb9a":"31d6cfe0","chunk-515a8379":"54d789c7","chunk-522cec8c":"99a35118","chunk-59974754":"70ade3f9","chunk-5a6377df":"eecfadba","chunk-7432e4d4":"99a35118","chunk-766a929b":"37f0c8d3","chunk-c796899c":"31d6cfe0",comple:"1487a140",creditos:"54d789c7",glosario:"02d55402",intro:"0e433876",referencias:"dd16a102",tema1:"31d6cfe0",tema2:"31d6cfe0",tema3:"31d6cfe0"}[e]+".css",t=s.p+i,r=document.getElementsByTagName("link"),c=0;c<r.length;c++){var l=r[c],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===i||u===t))return o()}var d=document.getElementsByTagName("style");for(c=0;c<d.length;c++){l=d[c],u=l.getAttribute("data-href");if(u===i||u===t)return o()}var m=document.createElement("link");m.rel="stylesheet",m.type="text/css",m.onload=o,m.onerror=function(o){var i=o&&o.target&&o.target.src||t,r=new Error("Loading CSS chunk "+e+" failed.\n("+i+")");r.code="CSS_CHUNK_LOAD_FAILED",r.request=i,delete n[e],m.parentNode.removeChild(m),a(r)},m.href=t;var p=document.getElementsByTagName("head")[0];p.appendChild(m)})).then((function(){n[e]=0})));var i=t[e];if(0!==i)if(i)o.push(i[2]);else{var r=new Promise((function(o,a){i=t[e]=[o,a]}));o.push(i[2]=r);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,s.nc&&u.setAttribute("nonce",s.nc),u.src=c(e);var d=new Error;l=function(o){u.onerror=u.onload=null,clearTimeout(m);var a=t[e];if(0!==a){if(a){var i=o&&("load"===o.type?"missing":o.type),n=o&&o.target&&o.target.src;d.message="Loading chunk "+e+" failed.\n("+i+": "+n+")",d.name="ChunkLoadError",d.type=i,d.request=n,a[1](d)}t[e]=void 0}};var m=setTimeout((function(){l({type:"timeout",target:u})}),12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(o)},s.m=e,s.c=i,s.d=function(e,o,a){s.o(e,o)||Object.defineProperty(e,o,{enumerable:!0,get:a})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,o){if(1&o&&(e=s(e)),8&o)return e;if(4&o&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&o&&"string"!=typeof e)for(var i in e)s.d(a,i,function(o){return e[o]}.bind(null,i));return a},s.n=function(e){var o=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(o,"a",o),o},s.o=function(e,o){return Object.prototype.hasOwnProperty.call(e,o)},s.p="",s.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=o,l=l.slice();for(var d=0;d<l.length;d++)o(l[d]);var m=u;r.push([0,"chunk-vendors"]),a()})({0:function(e,o,a){e.exports=a("56d7")},"52e5":function(e,o,a){e.exports=a.p+"img/cc.58a75e32.svg"},"56d7":function(e,o,a){"use strict";a.r(o);a("e260"),a("e6cf"),a("cca6"),a("a79d");var i=a("2b0e"),n=function(){var e=this,o=e.$createElement,a=e._self._c||o;return a("div",{staticClass:"app",attrs:{id:"app"}},[a("Header"),a("div",{staticClass:"contenedor-principal"},[a("AsideMenu"),a("section",{staticClass:"seccion-principal",class:{"seccion-principal--barra-avance-open":!e.menuState}},[a("router-view"),a("footer")],1)],1),a("BarraAvance")],1)},t=[],r={name:"App",data:function(){return{menuOpen:!1}},computed:{menuState:function(){return this.$store.getters.isMenuOpen}}},c=r,s=(a("cf25"),a("2877")),l=Object(s["a"])(c,n,t,!1,null,null,null),u=l.exports,d=(a("d3b7"),a("3ca3"),a("ddb0"),a("b0c0"),a("8c4f")),m=a("ae58"),p=a("7e58");i["a"].use(d["a"]);var f=new d["a"]({routes:[{path:"/",name:"inicio",component:m["a"]},{path:"/introduccion",name:"introduccion",component:function(){return a.e("intro").then(a.bind(null,"5167"))}},{path:"/curso",name:"curso",component:p["a"],redirect:{name:"tema1"},children:[{path:"tema1",name:"tema1",component:function(){return a.e("tema1").then(a.bind(null,"02c8"))}},{path:"tema2",name:"tema2",component:function(){return a.e("tema2").then(a.bind(null,"fd11"))}},{path:"tema3",name:"tema3",component:function(){return a.e("tema3").then(a.bind(null,"eb46"))}}]},{path:"/actividad",name:"actividad",component:function(){return a.e("actividad").then(a.bind(null,"4298"))}},{path:"/glosario",name:"glosario",component:function(){return a.e("glosario").then(a.bind(null,"69a7"))}},{path:"/complementario",name:"complementario",component:function(){return a.e("comple").then(a.bind(null,"dd8c"))}},{path:"/referencias",name:"referencias",component:function(){return a.e("referencias").then(a.bind(null,"64ef"))}},{path:"/creditos",name:"creditos",component:function(){return a.e("creditos").then(a.bind(null,"2e81"))}}],scrollBehavior:function(e,o){if(e.hash){var a={selector:e.hash,offset:{y:100},behavior:"smooth"};return e.name===o.name?a:new Promise((function(e){setTimeout((function(){e(a)}),500)}))}setTimeout((function(){window.scrollTo({left:0,top:0,behavior:"auto"})}),100)}}),g=f,h=a("1c2c"),b=(a("becf"),a("7b17"),a("ab8b"),a("a3a0"),a("4bc7"),a("78df"),{global:{componenteFormativo:"Productos químicos                             ",descripcionCurso:"Los productos químicos en la vida actual juegan un importante papel en las actividades cotidianas, es por eso que hacer un uso adecuado y seguro de ellos es cada día más necesario. <br> En este componente formativo se hace una introducción a los conceptos generales necesarios, para hacer una buena apropiación de saberes respecto del manejo seguro de dichos productos enmarcados en el Sistema Globalmente Armonizado (SGA) de clasificación y etiquetado de productos químicos, cubriendo todas las fases del ciclo de vida. Los términos y conceptos que este apartado presenta son herramienta fundamental para darle una utilidad práctica a los lineamientos del SGA, que ha sido adoptado en Colombia como sistema de comunicación de peligros químicos a través del Decreto 1496 de 2018.",imagenBannerPrincipal:a("ae0a"),fondoBannerPrincipal:a("e6b0")},menuPrincipal:{menu:[{nombreRuta:"inicio",icono:"fas fa-home",titulo:"Volver al inicio"},{nombreRuta:"introduccion",icono:"fas fa-info",titulo:"Introducción",desarrolloContenidos:!0},{nombreRuta:"tema1",icono:"far fa-file-alt",numero:"1",titulo:"Características de los productos químicos",desarrolloContenidos:!0,subMenu:[{icono:"far fa-file-alt",numero:"1.1",titulo:"Definición de productos químicos",hash:"t_1_1"},{icono:"far fa-file-alt",numero:"1.2",titulo:"Estado físico",hash:"t_1_2"},{icono:"far fa-file-alt",numero:"1.3",titulo:"Productos químicos peligrosos",hash:"t_1_3"},{icono:"far fa-file-alt",numero:"1.4",titulo:"Condiciones de concentración",hash:"t_1_4"},{icono:"far fa-file-alt",numero:"1.5",titulo:"Temperatura y presión según el estado",hash:"t_1_5"}]},{nombreRuta:"tema2",icono:"far fa-file-alt",numero:"2",titulo:"Peligros y riesgos",desarrolloContenidos:!0,subMenu:[{icono:"far fa-file-alt",numero:"2.1",titulo:"Definición de peligros y riesgo",hash:"t_2_1"},{icono:"far fa-file-alt",numero:"2.2",titulo:"Concepto de dosis",hash:"t_2_2"},{icono:"far fa-file-alt",numero:"2.3",titulo:"Vías de ingreso",hash:"t_2_3"},{icono:"far fa-file-alt",numero:"2.4",titulo:"Exposición a productos químicos",hash:"t_2_4"},{icono:"far fa-file-alt",numero:"2.5",titulo:"Efectos crónicos y agudos",hash:"t_2_5"},{icono:"far fa-file-alt",numero:"2.6",titulo:"Concepto TLV",hash:"t_2_6"},{icono:"far fa-file-alt",numero:"2.7",titulo:"Ciclo de vida de un producto químico",hash:"t_2_7"}]}],subMenu:[{nombreRuta:"glosario",icono:"fas fa-sort-alpha-down",titulo:"Glosario"},{nombreRuta:"complementario",icono:"far fa-folder-open",titulo:"Material complementario"},{icono:"fas fa-book",titulo:"Referencias bibliográficas",nombreRuta:"referencias"},{icono:"fas fa-download",titulo:"Descargar material",download:"downloads/material.zip"},{icono:"far fa-registered",titulo:"Créditos",nombreRuta:"creditos"}]},creditos:{liderEquipo:{nombre:"Maria Camila Garcia Santamaria",cargo:"Líder del equipo"},contenidoInstruccional:[{nombre:"Rafael Neftalí Lizcano Reyes",cargo:"Asesor metodológico y pedagógico",centro:"Centro Industrial del Diseño y la Manufactura",regional:"Regional Santander"},{nombre:"Marta Lucía Hernández",cargo:"Instructora",centro:"Centro Textil y de Gestión Industrial"},{nombre:"Luis Eugenio Ramírez Duarte",cargo:"Experto técnico",centro:"ONUDI"},{nombre:"Sergio Arturo Medina Castillo",cargo:"Diseñador Instruccional ",centro:"Centro para la Industria de la Comunicación Gráfica"},{nombre:"Ana Catalina Córdoba Sus",cargo:"Revisión metodológica y pedagógica",centro:"Centro para la Industria de la Comunicación Gráfica",regional:"Regional Distrito Capital"},{nombre:"Julia Isabel Roberto",cargo:"Diseñadora y evaluadora instruccional",centro:"Centro para la Industria de la Comunicación Gráfica ",regional:"Regional Distrito Capital"},{nombre:"Miroslava González Hernández",cargo:"Diseñador y evaluador instruccional",centro:"Centro de Gestión Industrial"},{nombre:"José Gabriel Ortiz Abella",cargo:"Corrector de estilo",centro:"Centro para la Industria de la Comunicación Gráfica",regional:"Regional Distrito Capital"}],desarrolloProducto:[{nombre:"Francisco José Lizcano Reyes",cargo:"Responsable del equipo"},{nombre:"Leyson Fabian Castaño Perez",cargo:"Soporte organizacional"},{nombre:"Oscar Julian Marquez Sanabria",cargo:"Diseño web"},{nombre:["Andrés Herrera","Gilberto Junior Rodríguez Rodríguez","Jose Tang","Laura Murcia Pardo","María Carolina Tamayo López","Oleg Litvin","Victor Cardenas","Wilson Andrés Arenales Cáceres","Zuleidy Maria Ruiz Torres"],cargo:"Producción audiovisual"},{nombre:"Edgar Mauricio Cortes García",cargo:"Desarrollo front-end"},{nombre:"Edward Leonardo Pico Cabra",cargo:"Desarrollo front-end"},{nombre:"Yuli Marcela Gómez Tarazona",cargo:"Validación de diseño y contenido"},{centro:"Centro Industrial del Diseño y la Manufactura",regional:"Regional Santander"}],gestoresRepositorio:[{nombre:"Milady Tatiana Villamil Castellanos",cargo:"Validación y vinculacion en plataforma LMS",centro:"Centro de Comercio y Servicios",regional:"Regional Tolima"}]},referencias:[{referencia:"Biología. (2016). Usos y aplicaciones de las soluciones farmacéuticas: ",link:"http://quimicabiologianutricional.blogspot.com/2016/10/usos-y-aplicaciones-de-las-soluciones.html"},{referencia:"Blogger. (2016). Ley de Gay Lussac: ",link:"http://termo4to.blogspot.com/2016/03/ley-de-gay-lussac.html?m"},{referencia:"Ciencias en el CIC. (2011). Bioacumulación: ",link:"http://cienciascic.blogspot.com/2011/03/bioacumulacion.html"},{referencia:"Corporativo Químico Global. (2011). Ciclo de vida de un producto químico: ",link:""},{referencia:"Decreto 1443 de 2014. [Presidencia de la República]. Por el cual se dictan disposiciones para la implementación del Sistema de Gestión de la Seguridad y Salud en el Trabajo (SG-SST). Colombia. 31 de Julio de 2014."},{referencia:"Estévez, R. (2015). Impactos ambientales: agotamiento de la capa de ozono. Ecointeligencia: ",link:"https://www.google.com.co/search?q=Efecto+de+los+CFC+sobre+el+ozono+estratosf%C3%A9rico&tbm=isch&ved=2ahUKEwiJvfX7zPjsAhXI2VkKHRgwD5QQ2-cCegQIABAA&oq=Efecto+de+los+CFC+sobre+el+ozono+estratosf%C3%A9rico&gs_lcp=CgNpbWcQAzoCCAA6BAgAEENQwGpYw3dg_H1oAHAAeAOAAZACiAGBD5IBBjAuMTEuMpgBAKABAaoBC2d3cy13aXotaW1nsAEAwAEB&sclient=img&ei=N9uqX8nFJciz5wKY4LygCQ&authuser=0&bih=657&biw=1366&hl=es#imgrc=IX6-jDYNM-SbGM"},{referencia:"Instituto Nacional de Ecología y Cambio Climático. (2007). Peligrosidad de las sustancias químicas. Ciudad de México: ",link:"http://www2.inecc.gob.mx/publicaciones2/libros/131/peligrosidad.html"},{referencia:"Instituto Nacional de Seguridad y Salud y Salud en el Trabajo - Insst. (s.f). ¿Qué es un producto químico? Insst: ",link:"https://www.insst.es/-/-que-es-un-producto-quimico-peligroso-"},{referencia:"Instituto Nacional de Seguridad e Higiene en el Trabajo. (s.f.). NTP 244: criterios de valoración en higiene industrial. Instituto Nacional de Seguridad e Higiene en el Trabajo."},{referencia:"ISO Tools Excellence. (2018). Norma ISO 45001: ¿Qué diferencias existen entre los peligros y riesgos?: ",link:"https://www.isotools.org/2018/07/26/norma-iso-45001-diferencias-entre-peligros-y-riesgos/#:~:text=Definici%C3%B3n%20peligro,o%20una%20combinaci%C3%B3n%20de%20estos."},{referencia:"María. (s.f). Unidades de presión: ",link:"https://www.google.com/search?q=unidades+de+presi%C3%B3n&tbm=isch&ved=2ahUKEwid1oTfufjsAhW3cDABHetsDRQQ2-cCegQIABAA&oq=unidades+de+presi%C3%B3n&gs_lcp=CgNpbWcQAzICCAAyAggAMgIIADICCAAyAggAMgIIADICCAAyAggAMgIIADICCAA6BQgAELEDOgcIABCxAxBDUJgOWOonYJQqaABwAHgAgAGyAogBlxeSAQgwLjE4LjAuMZgBAKABAaoBC2d3cy13aXotaW1nwAEB&sclient=img&ei=DseqX52XL7fhwbkP69m1oAE&bih=912&biw=1920&rlz=1C1OKWM_esCO796CO796#imgrc=RM1Ghw_uOlQ28M"},{referencia:"Martínez, J. (2020). La calidad del aire en Bogotá se verá afectada nuevamente. Caracol Radio: ",link:"https://caracol.com.co/emisora/2020/06/24/bogota/1593019353_934370.html"},{referencia:"Ministerio de Ambiente de Ecuador. (s.f). Contaminantes Orgánicos Persistentes COP."},{referencia:"Ministerio de Trabajo y Asuntos Sociales de España. (s. f). Criterios de valoración en higiene industrial. Ministerio de Trabajo y Asuntos Sociales de España.",link:"https://www.insst.es/documents/94886/327166/ntp_244.pdf/b853aaf2-955b-41d7-b021-7bd702ecdd9d#:~:text=En%20Higiene%20Industrial%20se%20entiende,salud%20puede%20entra%C3%B1ar%20el%20mismo"},{referencia:"Nueva ISO-45001. (2016). Identificación y clasificación de riesgos con OHSAS 18001: ",link:"https://www.nueva-iso-45001.com/2016/01/riesgos-ohsas-18001/"},{referencia:"Organización Internacional de Estandarización. (2018). Sistemas de gestión de la seguridad y salud en el trabajo - Requisitos con orientación para su uso: ",link:"https://www.iso.org/obp/ui/#iso:std:iso:45001:ed-1:v1:es"},{referencia:"Pnuma. (2013). Breve panorama sobre el ciclo de vida de los productos químicos: ",link:"https://docplayer.es/20767339-Breve-panorama-sobre-el-ciclo-de-vida-de-los-productos-quimicos.html"},{referencia:"Querespuesta.com. (s.f). ¿Cuál es la diferencia entre la presión absoluta y la presión relativa? ",link:"https://www.google.com/search?q=presi%C3%B3n+absoluta&tbm=isch&ved=2ahUKEwjiqrSTuvjsAhXPx1kKHZSDBzsQ2-cCegQIABAA&oq=presi%C3%B3n+absoluta&gs_lcp=CgNpbWcQAzICCAAyAggAMgIIADICCAAyAggAMgIIADICCAAyAggAMgIIADICCAA6BAgAEEM6BQgAELEDOgcIABCxAxBDUJEOWP8rYOswaABwAHgAgAGlAYgB7xGSAQQwLjE2mAEAoAEBqgELZ3dzLXdpei1pbWfAAQE&sclient=img&ei=fMeqX-L8JM-P5wKUh57YAw&bih=912&biw=1920&rlz=1C1OKWM_esCO796CO796#imgrc=tlk073SYDLP7nM"},{referencia:"Raffino, M. (2020). Estado gaseoso: ",link:"https://concepto.de/estado-gaseoso/#ixzz6alpD2H00"},{referencia:"Raffino, M. (2020). Estado líquido: ",link:"https://concepto.de/estado-liquido/#ixzz6aQJpFjBO"},{referencia:"Raffino, M. (2020). Estado sólido: ",link:"https://concepto.de/estado-solido/#ixzz6aQI3dzDO"},{referencia:"Raffino, M. (2020). Presión: ",link:"https://concepto.de/presion-2/#ixzz6axfmGRkQ"},{referencia:"Raffino, M. (2020). Solución química: ",link:"https://concepto.de/solucion-quimica/#ixzz6at1ubs7D"},{referencia:"Raffino, M. (2020). Temperatura: ",link:"https://concepto.de/temperatura/#ixzz6axEA3id2"},{referencia:"ResearhGate. (s.f.).Ciclo de vida de un producto químico: ",link:"https://www.researchgate.net/figure/Ciclo-de-vida-de-las-sustancias-quimicas_fig1_320771708"},{referencia:"Testo. (s.f). Fundamentos físicos: ",link:"https://www.testo.com/es-CL/servicio/knowledgebase-pressure-physical-principles"},{referencia:"UFT.cl (s.f). Disoluciones químicas: ",link:"https://uft.cl/images/futuros_alumnos/profesores_orientadores/material-pedagogico/Guia_5_Soluciones.pdf"}],glosario:[{termino:"Biomagnificación",significado:"Tendencia de algunos productos químicos a acumularse a lo largo de la cadena trófica, exhibiendo concentraciones sucesivamente mayores al ascender el nivel trófico. La concentración del producto en el organismo consumidor es mayor que la concentración del mismo producto en el organismo consumido."},{termino:"Concentración química",significado:"Cantidad en la que se encuentran las sustancias que se disuelven (soluto) en relación con la o las sustancias que lo disuelven (solvente). En este sentido, la cantidad de soluto siempre será menor al solvente para que se considere una solución."},{termino:"Exposición aguda",significado:"Contacto hecho entre un agente químico, físico, o biológico y un organismo, durante un período corto de tiempo (normalmente menos de un día)."},{termino:"Exposición crónica",significado:"Contacto hecho entre un agente químico, físico o biológico y un organismo, habitualmente por un largo período de tiempo (normalmente más de un año)."},{termino:"Peligro",significado:"Fuente, situación o acto con potencial de causar daño en la salud de los trabajadores, en los equipos o en las instalaciones."},{termino:"Presión",significado:"La presión es una magnitud que mide el efecto deformador o capacidad de penetración de una fuerza y se define como la fuerza ejercida por unidad de superficie. Se expresa como: P=F/S."},{termino:"Riesgo",significado:"Posibilidad de que algo desagradable acontezca. Se asocia generalmente a una decisión que conlleva a una exposición o a un tipo de peligro."},{termino:"Solución química",significado:"Mezcla homogénea cuyos componentes, llamados soluto y solvente, no pueden ser separados por métodos mecánicos simples (filtración, decantación y centrifugación)."},{termino:"Temperatura",significado:"Magnitud física que indica la energía interna de un cuerpo, de un objeto o del medio ambiente en general, medida por un termómetro."}],complementario:[{texto:"Biología. (2016). Usos y aplicaciones de las soluciones farmacéuticas. ",tipo:"Blog",link:"http://quimicabiologianutricional.blogspot.com/2016/10/usos-y-aplicaciones-de-las-soluciones.html"},{texto:"Rafino, M. (2020). Solución química.",tipo:"Página web",link:"https://concepto.de/solucion-quimica/#ixzz6au4gDxxt"},{texto:"Instituto Nacional de Seguridad e Higiene en el Trabajo (s.f.): NTP 244: Criterios de valoración en higiene industrial.",tipo:"PDF",link:"https://www.insst.es/documents/94886/327166/ntp_244.pdf/b853aaf2-955b-41d7-b021-7bd702ecdd9d"},{texto:"Corporativo Químico Global S.A. (2011). Ciclo de vida de productos químicos. ",tipo:"Blog",link:"https://quimicoglobal.mx/ciclo-de-vida-productos-quimicos/#:~:text=El%20concepto%20de%20ciclo%20de,fin%20de%20su%20vida%20%C3%BAtil"}]});i["a"].prototype.$config=b;var v=a("9224");i["a"].prototype.$package=v,i["a"].config.productionTip=!1,new i["a"]({router:g,store:h["a"],render:function(e){return e(u)}}).$mount("#app")},9224:function(e){e.exports=JSON.parse('{"name":"sena-base-2021","version":"3.0.0","private":true,"scripts":{"serve":"vue-cli-service serve","build":"vue-cli-service build","lint":"vue-cli-service lint"},"dependencies":{"@fortawesome/fontawesome-free":"^5.15.3","@popperjs/core":"^2.9.1","bootstrap":"^5.0.0-beta3","core-js":"^3.6.5","ecored-base-pkg":"2.0.0","vue":"^2.6.11","vue-router":"^3.2.0","vuex":"^3.4.0"},"devDependencies":{"@vue/cli-plugin-babel":"^4.5.12","@vue/cli-plugin-eslint":"^4.5.12","@vue/cli-plugin-router":"^4.5.12","@vue/cli-plugin-vuex":"^4.5.12","@vue/cli-service":"^4.5.12","@vue/eslint-config-prettier":"^6.0.0","babel-eslint":"^10.1.0","eslint":"^6.7.2","eslint-plugin-prettier":"^3.1.3","eslint-plugin-vue":"^6.2.2","node-sass":"^4.12.0","prettier":"^1.19.1","sass-loader":"^8.0.2","vue-cli-plugin-pug":"^2.0.0","vue-template-compiler":"^2.6.11"}}')},a3a0:function(e,o,a){},ae0a:function(e,o,a){e.exports=a.p+"img/banner-princiapal.91dd16d5.svg"},cf25:function(e,o,a){"use strict";a("fea6")},e6b0:function(e,o,a){e.exports=a.p+"img/fondo-banner-principal.f3c7819d.png"},fea6:function(e,o,a){}});
//# sourceMappingURL=app.cd8c1d38.js.map