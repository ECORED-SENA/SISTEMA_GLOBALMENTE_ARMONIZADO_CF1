<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal
      .titulo-principal__numero
        .h3 1
      .h3 Características de los productos químicos

    figure.mb-4
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)      

    p.mb-4 Bienvenido al curso Aplicación del Sistema Globalmente Armonizado (SGA) en el manejo de productos químicos. Este curso tiene como propósito brindar los conceptos básicos y fundamentales para la comprensión del manejo de productos químicos de acuerdo con los lineamientos de SGA. 
    p.mb-5 Al finalizar el curso se estará en capacidad de tomar decisiones sobre el manejo seguro de los productos químicos basados en la adecuada interpretación de la información que ofrece el Sistema Globalmente Armonizado. Adicionalmente, (SGA) se refuerzan muchos conceptos que permiten hacer una lectura eficiente de las Hojas de Datos de Seguridad (HDS), lo permitirá tomar las medidas de prevención y de protección que sean necesarias.

    hr 
    br
    #t_1_1.titulo-segundo
      .h4 1.1 Definición de productos químicos

    p.mb-4 Para iniciar, se muestran cuatro (4) figuras que se deben observar cuidadosamente y responder la siguiente pregunta:
    
    .row.mb-4 
      .col-4.d-flex.align-items-center.justify-content-center
        .div
          h4 ¿En cuál o en cuáles de esas imagenes hay productos químicos?
          p Seguramente la respuesta es que en tres (3) hay productos químicos; sin embargo, la respuesta correcta sería en las cuatro (4) figuras.<br><br> Es de recordar que el agua es el producto final de una reacción química, H2O, y esta aparece en grandes cantidades en la figura 3, incluso los seres vivos que aparecen allí están compuestos por sustancias químicas.
      .col-8
        #carouselExampleIndicators.carousel.slide.mb-5(data-bs-ride='carousel')
          .carousel-indicators
            button.active(type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide-to='0' aria-current='true' aria-label='Slide 1')
            button(type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide-to='1' aria-label='Slide 2')
            button(type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide-to='2' aria-label='Slide 3')
          .carousel-inner
            .carousel-item.active
              figure
                img(src='@/assets/curso/tema1/img01.png', alt='Texto que describa la imagen')          
            .carousel-item
              figure
                img(src='@/assets/curso/tema1/img02.png', alt='Texto que describa la imagen')           
            .carousel-item
              figure
                img(src='@/assets/curso/tema1/img03.png', alt='Texto que describa la imagen')         
            .carousel-item
              figure
                img(src='@/assets/curso/tema1/img04.png', alt='Texto que describa la imagen')                      
          
          button.carousel-control-prev(type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide='prev')
            span.carousel-control-prev-icon(aria-hidden='true')
            span.visually-hidden Previous
          button.carousel-control-next(type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide='next')
            span.carousel-control-next-icon(aria-hidden='true')
            span.visually-hidden Next
       

    

    p.mb-4 A continuación, se presentan definiciones y conceptos que permitirán tener más claridad sobre este tema.

    p.mb-4 
      strong Una definición básica de producto químico es:

    p.mb-4 Toda materia viva o inanimada está constituida por sustancias formadas por diferentes combinaciones de más de 100 elementos que se encuentran en el mundo, tales como los dos principales componentes del aire que se respira: nitrógeno (~80 %) y oxígeno (~20 %). Dicho de manera simple, un producto químico puede ser o un elemento o un compuesto formado por la combinación de elementos.

    p.mb-4 En los productos químicos se encuentran:
    br
    .row
      .col-lg-1
      .col-lg-10
        .tarjeta-Avatar-b.mb-5
          img(src='@/assets/curso/tema1/img05.svg' alt='img05')
          .tarjeta.color-primario.p-4
            .h4 Los orgánicos
            p Los cuales contienen carbono. Aunque se encuentran presentes por lo general en organismos vivos (por ejemplo, DNA, hormonas, proteínas, grasas), la industria ha producido cientos de miles de compuestos orgánicos sintéticos (por ejemplo, el insecticida DDT, el polímero cloruro de polivinilo o PVC).
      .col-lg-1
    .row
      .col-lg-1
      .col-lg-10
        .tarjeta-Avatar-b.mb-5
          img(src='@/assets/curso/tema1/img06.svg' alt='img05')
          .tarjeta.color-primario.p-4
            .h4 Los inorgánicos
            p Los cuales no contienen carbono. Existen miles de productos químicos naturales, sintéticos (por ejemplo, bórax, cloro, ácido sulfúrico) y compuestos metálicos (por ejemplo, cloruro de sodio, más conocido como sal de mesa).
      .col-lg-1
    .row.mb-4
      .col-lg-1
      .col-lg-10
        .tarjeta-Avatar-b.mb-5
          img(src='@/assets/curso/tema1/img07.svg' alt='img05')
          .tarjeta.color-primario.p-4
            .h4 Los compuestos organometálicos 
            p Son los que contienen tanto metales como carbono (por ejemplo, el tetraetilo de plomo se utilizó ampliamente como mejorador de octano en la gasolina para motores) (Pnuma, 2013). 
      .col-lg-1 
    p.mb-4 Esto significa que todo lo que está y rodea la Tierra, materialmente, se clasifica como producto químico, en virtud de su composición. 

    p.mb-4 Al observar los objetos que se encuentran alrededor, se pueden identificar las sustancias químicas que los componen. En algunos casos no se conocen los nombres científicos de los productos químicos que constituyen cada uno de esos objetos, pero aun así se identifican grandes grupos, por ejemplo, plásticos, comestibles, medicamentos, varios tipos telas, madera, aire y muchos más.

    p.mb-5 Son diferentes unos de otros en su apariencia física, pero también son diferentes en su forma de presentación, en su utilidad e incluso en el daño que puedan ocasionar.

    hr

    #t_1_2.titulo-segundo
      .h4 1.2  Estado físico

    p Cuando se habla de diferencias en la presentación de un objeto o producto, en realidad se está refiriendo al estado de la materia. 
    p.mb-4 Los principales estados de la materia son:  

    .row.mb-4
      .col-lg-2        
      .col-lg-2
        figure.mb-4
          img(src='@/assets/curso/tema1/img08.svg', alt='Solido')   
        h5.text-center Sólido       
      .col-lg-1
      .col-lg-2
        figure.mb-4
          img(src='@/assets/curso/tema1/img09.svg', alt='Liquido')    
        h5.text-center Líquido 
      .col-lg-1
      .col-lg-2
        figure.mb-4
          img(src='@/assets/curso/tema1/img10.svg', alt='Gaseoso')    
        h5.text-center Gaseoso
      .col-lg-2

    p.mb-4 El estado de la materia se relaciona con la proximidad que tienen las partículas que componen un producto químico entre sí. Esa proximidad se facilita con las fuerzas de cohesión entre las partículas, con su densidad y su respuesta a la fuerza de gravedad.

    p.mb-4.text-center 
      strong A continuación, se analizará cada uno de estos estados:

    .row
      .col-1
      .col-10
        TabsB.mb-4
          .py-4.py-md-5(titulo="Sólido" :icono="require('@/assets/curso/tema1/img12.svg')")
            .row
              .col-md-6.mb-4.mb-md-0
                .h4 Estado sólido
                p Se refiere a una estructura física muy bien definida. Esto ocurre debido a las fuerzas de cohesión entre las partículas responsables de mantener estables la forma y el volumen del sólido, y de otorgarle cierto margen de dureza y de resistencia. Lo anterior quiere decir que los productos sólidos mantienen su forma independientemente de la forma del contenedor o del espacio en el que se encuentren. Algunos ejemplos de productos sólidos son las rocas, la madera, las telas, el papel y el polvo (Raffino, 2020).
              .col-md-6
                figure
                  img(src='@/assets/curso/tema1/img11.svg', alt='Sólido')              

          .py-4.py-md-5(titulo="Líquido" :icono="require('@/assets/curso/tema1/img13.svg')")
            .row
              .col-md-6.mb-4.mb-md-0
                .h4 Estado líquido
                p Se refiere a las partículas que están más separadas que las de un compuesto sólido, pero más juntas que las de un compuesto gaseoso. Por esta razón los compuestos sólidos son rígidos y los gases son dispersos.
                br
                p Los productos líquidos se depositan en el fondo del contenedor que los retenga y adoptan la forma de ese contenedor desde abajo hacia arriba. 
                br
                p El ejemplo más usado para los líquidos es el agua, pero también se puede referir a otros como la gasolina, el aceite lubricante e, incluso, a alimentos como los jugos.
              .col-md-6
                figure
                  img(src='@/assets/curso/tema1/img16.svg', alt='Líquido')              

          .py-4.py-md-5(titulo="Gaseoso" :icono="require('@/assets/curso/tema1/img14.svg')")
            .row
              .col-md-6.mb-4.mb-md-0
                .h4 Estado gaseoso
                p Se refiere a los productos químicos que se caracterizan por tener sus partículas constitutivas poco unidas entre sí, o sea, expandidas a lo largo del contenedor donde se encuentren, hasta ocupar el máximo espacio disponible.
                br
                p Las propiedades mencionadas anteriormente, se deben a que las partículas que componen a los gases presentan entre sí una fuerza de atracción muy leve, y por esta razón no tienen forma ni ocupan un volumen definido en el espacio. Por otra parte, la densidad de los gases es mucho menor que la de los sólidos y los líquidos, y tienen, además, muy poca respuesta a la gravedad.
                br
                p Debido a la poca interacción entre las partículas, los gases, se encuentran suspendidos con muy poca influencia de la gravedad (se puede decir que “flotan”). 
                br
                p Además, a pesar de su cohesión casi nula, los gases presentan una enorme capacidad para ser comprimidos, lo que a menudo se lleva a cabo durante su tratamiento industrial para el transporte.
                br
                p Uno de los ejemplos más utilizados es el mismo aire, pero también se encuentran muchos gases que industrialmente son comprimidos para poderlos transportar, como el argón, el acetileno, el oxígeno o el propano

              .col-md-6
                figure
                  img(src='@/assets/curso/tema1/img15.svg', alt='Gaseoso')              
      .col-1

    p.mb-4 Los productos químicos pueden cambiar su estado de materia, es decir, pueden pasar de estado líquido a estado sólido o gaseoso. 
    p Se debe tener en cuenta que cada cambio de estado requiere unas condiciones especiales de temperatura.
    p.mb-4 En la figura se pueden observar estos cambios de estado. 

    .row.mb-5
      .col-md-5
        figure
          img(src='@/assets/curso/tema1/img17.svg', alt='')
      .col-md-1
      .col-md-6.d-flex.align-items-center
        div
          p Los cambios de estado que requieren aumento en la temperatura, son:
          br
          ul.lista-ul.mb-4
            li 
              i.fas.fa-angle-right
              p 
                strong La fusión: 
                | es el cambio de un estado sólido a líquido de la misma materia. 
            li 
              i.fas.fa-angle-right
              p 
                strong  La vaporización: 
                | es el cambio de estado líquido a gaseoso.
            li 
              i.fas.fa-angle-right
              p 
                strong  La volatización o sublimación progresiva: 
                |es el cambio de estado sólido a gaseoso.
          
          p Ahora, los cambios de estado que requieren disminución de la temperatura, son:
          br
          ul.lista-ul.mb-4
            li 
              i.fas.fa-angle-right
              p 
                strong La condensación: 
                | se presenta cuando un gas pasa a estado líquido.
            li 
              i.fas.fa-angle-right
              p 
                strong La solidificación: 
                | sucede cuando un líquido pasa a estado sólido. Cuando un gas pasa a estado sólido se presenta una sublimación regresiva.
    hr.mb-5

    #t_1_3.titulo-segundo
      .h4 1.3 Productos químicos peligrosos
    
    p.mb-4 Hay que tener presente que un producto químico también puede ser peligroso, y al respecto una de las definiciones más conocidas es la publicada por el Instituto Nacional de Seguridad y Salud en el Trabajo de España (Insst), la cual dice:
 
    .row.mb-4
      .col-md-1
      .col-md-6.d-flex.align-items-center.borde1
        p Un producto químico, en forma de sustancia o en forma de mezcla (formada por dos o más sustancias), puede presentar un riesgo para la seguridad y salud de los trabajadores o para el medio ambiente debido a sus propiedades fisicoquímicas, químicas o toxicológica o a la forma en la que se utiliza o se encuentra presente en el lugar de trabajo (Insst, 2013).
      .col-md-3
        figure
          img(src='@/assets/curso/tema1/img18.svg', alt='')
      .col-md-2
    br
    hr.mb-5

    #t_1_4.titulo-segundo
      .h4 1.4 Condiciones de concentración

    p.mb-4 Para ilustrar esta parte, se debe analizar el siguiente caso de la vida cotidiana, donde la química tiene aplicación:
 
    .row.mb-4
      .col-md-3.d-flex.align-items-center
        figure
          img(src='@/assets/curso/tema1/img19.svg', alt='')  
      .col-md-9.d-flex.align-items-center
        div
          p.mb-4 Cuando ofrecen una taza de café y quien lo toma dice que está muy “cargado”, lo lógico es que solicite “rebajarlo” un poco, agregando agua.           
          p.mb-4 Cuando se dice que el café está cargado en realidad se está hablando de una alta concentración de café en la taza y cuando se agrega agua a la taza se está bajando la concentración, es decir, se está diluyendo el café. Entonces, un tinto es una solución de café y azúcar en agua.             
          p.mb-4 Algunas personas, prefieren una solución concentrada (cargado) y otras lo prefieren diluido (clarito). De esta manera, la proporción de café, azúcar y agua hacen de cada tinto un café diferente.           
          p.mb-4 En este ejemplo, el café y el azúcar son llamados solutos y el agua se denomina solvente.          

    p.mb-4 El ejemplo anterior muestra que una solución es una mezcla homogénea cuyos componentes, llamados soluto y solvente, no pueden ser separados por métodos mecánicos simples (filtración, decantación y centrifugación).    
    p.mb-4 Las soluciones verdaderas constan de un solvente y uno o varios solutos, cuyas proporciones varían de una solución a otra:

    .row.mb-4
      .col-md-5
        figure.mb-4
          img(src='@/assets/curso/tema1/img20.svg', alt='')          
        h4.text-center Solución = Solvente + Soluto
      .col-md-1
      .col-md-6.d-flex.align-items-center
        div
          p.mb-4 Por definición, el solvente es la especie que se encuentra en mayor proporción y el soluto es la especie en menor proporción.           
          p.mb-4 En las soluciones pueden darse diferentes combinaciones en las que sólidos, líquidos o gases actúan como solutos o como solventes. La clase más común es aquella en la que el solvente es un líquido, por ejemplo, el agua de mar es una solución acuosa de muchas sales y algunos gases.
          p.mb-4 Algunas soluciones comunes en los lugares de trabajo son: el hipoclorito de sodio, en muchos casos la soda cáustica, el ácido muriático, etc. (UFT, s.f.).

    hr   

    .h5 Tipos de solución química
    p.mb-4 Dependiendo de la proporción del soluto en una solución, existen los siguientes tipos de solución, de acuerdo con Raffino (2020):

    .row.mb-4
      .col-md-3
        div
          figure
            img(src='@/assets/curso/tema1/img21.svg', alt='')   
        div.color-primario.d-flex.align-items-center.justify-content-center.mb-4         
          h6.text-center.my-2 Diluidas
        p.text-center Cuando la cantidad de soluto respecto al solvente es muy pequeña. Por ejemplo: 1 gramo de azúcar en 100 gramos de agua.
      .col-md-3
        div
          figure
            img(src='@/assets/curso/tema1/img22.svg', alt='')            
        div.color-secundario.d-flex.align-items-center.justify-content-center.mb-4         
          h6.my-2 Concentradas
        p.text-center Cuando la cantidad de soluto respecto al solvente es grande. Por ejemplo: 25 gramos de azúcar en 100 gramos de agua.
      .col-md-3
        div
          figure
            img(src='@/assets/curso/tema1/img23.svg', alt='')            
        div.color-acento-botones.d-flex.align-items-center.justify-content-center.mb-4        
          h6.my-2 Saturadas        
        p.text-center Cuando el solvente no acepta ya más soluto a una determinada temperatura. Por ejemplo: 36 gramos de azúcar en 100 gramos de agua a 20 °C.      
      .col-md-3
        div
          figure
            img(src='@/assets/curso/tema1/img24.svg', alt='')    
        div.color-acento-contenido.d-flex.align-items-center.justify-content-center.mb-4         
          h6.my-2 Sobresaturadas          
        p.text-center Como la saturación tiene que ver con la temperatura, si se incrementa la temperatura, se puede forzar al solvente a tomar más soluto del que ordinariamente puede, obteniendo una solución sobresaturada (saturada en exceso). Así, sometida a un calentamiento, la solución tomará mucho más soluto del que ordinariamente podría contener (Raffino, 2020). 
    br
    a.anexo.mb-4.mb-lg-0.milink(href="http://quimicabiologianutricional.blogspot.com/2016/10/usos-y-aplicaciones-de-las-soluciones.html" target="_blank")
      .anexo__icono
        img(src="@/assets/curso/tema1/icono-link.svg")
      .anexo__texto
        strong Para ampliar la información se recomienda consultar el siguiente enlace 
        p Biología, (2016). Usos y aplicaciones de las soluciones farmacéuticas.
    
    br
    p.mb-4 Siguiendo a Raffino (2020), también se pueden clasificar por el estado de agregación o estado físico.

    TabsB.mb-4
      .py-0.py-md-5(titulo="Sólidas" :icono="require('@/assets/curso/tema1/img25.svg')")
        .row
          .col-md-1
          .col-md-6.mb-4.mb-md-0.d-flex.align-items-center            
            div                    
              .h4 Sólidas          
              ul.lista-ul--color
                li 
                  i.lista-ul__vineta
                  p 
                    strong Sólido en sólido: 
                    | los dos componentes de la solución están en estado sólido, es decir, tanto el soluto como el disolvente se encuentran en estado sólido. Por ejemplo: las aleaciones como el latón (cobre y zinc, ).
                li 
                  i.lista-ul__vineta
                  p 
                    strong  Gas en sólido: 
                    | en este caso el soluto es un gas y el disolvente es un sólido. Por ejemplo: hidrógeno en paladio, polvo volcánico, entre otros.
                li 
                  i.lista-ul__vineta
                  p 
                    strong  Líquido en sólido: 
                    | en este caso el soluto es un líquido y el disolvente es un sólido. Por ejemplo: las amalgamas (mercurio y plata).

          .col-md-1
          .col-md-3.d-flex.align-items-center     
            figure
              img(src='@/assets/curso/tema1/img28.svg', alt='Sólido')              
          .col-md-1

      .py-4.py-md-5(titulo="Líquidas" :icono="require('@/assets/curso/tema1/img26.svg')")
        .row
          .col-md-1
          .col-md-6.mb-4.mb-md-0.d-flex.align-items-center            
            div                    
              .h4 Líquidas
              ul.lista-ul--color
                li 
                  i.lista-ul__vineta
                  p 
                    strong Sólido en líquido: 
                    | este es el caso más conocido y en él, por lo general, se disuelven pequeñas cantidades de sólido (soluto) en un líquido (disolvente). Por ejemplo: azúcar disuelto en agua.
                li 
                  i.lista-ul__vineta
                  p 
                    strong Gas en líquido: 
                    | en este caso se disuelve un gas (soluto) en un líquido (disolvente). Por ejemplo: el oxígeno disuelto en el agua de mar, que es responsable de la vida acuática en el planeta
                li 
                  i.lista-ul__vineta
                  p 
                    strongg Líquido en líquido: 
                    | tanto el soluto como el disolvente son líquidos. Por ejemplo: las amalgamas (mercurio y plata).                  
          .col-md-1
          .col-md-3.d-flex.align-items-center        
              figure
                img(src='@/assets/curso/tema1/img30.svg', alt='Líquido')              
          .col-md-1

      .py-4.py-md-5(titulo="Gaseosas" :icono="require('@/assets/curso/tema1/img27.svg')")
        .row
          .col-md-1
          .col-md-6.mb-4.mb-md-0.d-flex.align-items-center            
            div                    
              .h4 Gaseosas
              ul.lista-ul--color
                li 
                  i.lista-ul__vineta
                  p 
                    strong Sólido en gas: 
                    | en este caso el soluto es un gas y el disolvente es un sólido. Por ejemplo: polvo disuelto en aire. La cantidad de polvo disuelta en el aire es tomada como referencia en la evaluación de contaminación ambiental                  
                li 
                  i.lista-ul__vineta
                  p 
                    strong Gas en gas: 
                    | tanto el soluto como el disolvente son gases. En muchas ocasiones estas disoluciones se asumen como mezclas debido a las débiles interacciones entre las partículas de los gases. Por ejemplo: oxígeno en aire.                                  
                li 
                  i.lista-ul__vineta
                  p 
                    strong Líquido en gas: 
                    | aquí el soluto es un líquido y el disolvente es un gas. Por ejemplo: vapor de agua en el aire (Raffino, 2020).
                  
          .col-md-1
          .col-md-3.d-flex.align-items-center     
            figure
              img(src='@/assets/curso/tema1/img29.svg', alt='Líquido')              
          .col-md-1
    
    .row
      .col-md-8.d-flex.align-items-center  
        div          
          h5 Concentración de una solución química
          p.mb-4 Volviendo al ejemplo del tinto, en el que se explicaba que la concentración es la cantidad de soluto (café y azúcar) en el solvente (agua), si se mide la cantidad de café o la cantidad de azúcar que se utiliza para un volumen específico de agua, se podrá determinar la concentración de cada uno de los solutos. Es decir, medir la cantidad de cada componente en la solución, es conocer su concentración.
          p.mb-4 Se puede decir, entonces, que la concentración es una magnitud que describe la proporción de soluto respecto al solvente en una disolución. 
          p.mb-4 Esta magnitud se expresa en dos tipos distintos de unidades:
      .col-md-4.px-5
        figure
          img(src='@/assets/curso/tema1/img31.svg', alt='Café')              

    .row.mb-5
      .col-lg-4.d-flex
        .cajon.color-primario.p-4.mb-4
          .h5 Unidades físicas          
          p.mb-4 Son aquellas que se expresan en relación al peso y al volumen de la solución, en forma porcentual (se multiplican por 100). 
          div                                  
            ul.lista-ul--color
              li 
                i.lista-ul__vineta                                 
                | % peso/peso. Se expresa en gramos de soluto sobre gramos de solución.
              li.mb-4 
                i.lista-ul__vineta                  
                | % volumen/volumen. Se expresa en centímetros cúbicos (cc) de soluto sobre cc de solución.
              li.mb-4 
                i.lista-ul__vineta                  
                | % peso/volumen. Combina las dos anteriores: gramos de soluto sobre cc de solución.
      .col-lg-8.d-flex
        .cajon.color-secundario.p-4.mb-4
          .h5 Unidades químicas
          p.mb-4 Son aquellas que se expresan en sistemas de unidades químicas. Por ejemplo:
          div                                  
            ul.lista-ul--color
              li 
                i.lista-ul__vineta         
                div         
                  p.mb-4  Molaridad (M). Se expresa en número de moles de soluto sobre un litro de solución o un kilogramo de solución. Se calcula de la siguiente manera:                
                  div.d-flex.justify-content-center
                    figure.w-50.mb-4 
                      img(src='@/assets/curso/tema1/img32.svg', alt='Molaridad') 
                  p.mb-4  Donde n(X) es la cantidad de moles del componente X y Vdisolución es el volumen de la disolución. La molaridad se expresa en moles/L de solución.
              li
                i.lista-ul__vineta         
                div                   
                  p.mb-4  Molalidad (m). Es la proporción entre el número de moles de cualquier soluto disuelto por kilogramos de disolvente. Se calcula de la siguiente manera:                  
                  div.d-flex.justify-content-center
                    figure.w-50.mb-4 
                      img(src='@/assets/curso/tema1/img33.svg', alt='Molalidad')              
                  p Donde m(X) es la molalidad de X, n(X) es el número de moles de X y masa (disolvente) es la masa de disolvente expresada en kg. Es importante aclarar que la molaridad se expresa por kg (1.000g) de disolvente. Se expresa en unidades de mol/kg (Raffino, 2020).
    hr.mb-5
    #t_1_5.titulo-segundo
      .h4 1.5 Temperatura y presión según el estado
    
    .row.mb-5
      .col-lg-8  
        p.mb-4 Los productos químicos se ven afectados por factores externos a su propia constitución y dentro de esos factores externos, los más importantes son la presión y temperatura. Por ejemplo, en las características que tiene un litro de agua, se nota que es muy diferente cuando este se encuentra a temperatura ambiente a cuando el mismo litro de agua, se encuentra en ebullición (hirviendo). Por esta razón, es necesario tener una idea general de los cambios que puede presentar la materia en virtud de la temperatura a la que está expuesta.
        p La temperatura es una magnitud escalar que se define como la cantidad de energía cinética de las partículas de una masa gaseosa, líquida o sólida; así que cuanto mayor es la velocidad de las partículas, mayor es la temperatura y viceversa.
      .col-lg-4.d-flex.justify-content-center        
        figure.w-50
          img(src='@/assets/curso/tema1/img34.svg', alt='Temperatura')              

    h5.mb-4 Concentración de una solución química
    p.mb-4 Una magnitud escalar es aquella que queda completamente determinada con un número y sus correspondientes unidades, y una magnitud vectorial es aquella a la que, además de un valor numérico y sus unidades (módulo), se debe especificar su dirección y sentido.
    p.mb-4 La medición de la temperatura está relacionada con la noción de frío (menor temperatura) y de calor (mayor temperatura), que se puede percibir de manera instintiva. Además, la temperatura actúa como un valor de referencia para determinar el calor normal del cuerpo humano, información que sirve para estimar estados de salud. El calor también se utiliza para los procesos químicos, industriales y metalúrgicos (Raffino, 2020).
    p.mb-4 Dentro de las escalas para medir temperatura, las más usadas son la Celsius, también conocida como “escala centígrada” y la escala Fahrenheit, pero también existen otras; ahora se analizará cada una de ellas (Raffino, 2020):

    .row.mb-4
      .col-lg-6.d-flex.align-items-center    
        div                                  
          ul.lista-ul--color
            li.mb-4 
              i.lista-ul__vineta                  
              | En la escala Celsius, el punto de congelación del agua equivale a 0 °C (cero grados centígrados) y su punto de ebullición a 100 °C.
            li.mb-4 
              i.lista-ul__vineta                  
              | La escala Fahrenheit es la medida utilizada en la mayoría de los países de habla inglesa. En esta escala, el punto de congelación del agua ocurre a los 32 °F y su punto de ebullición a los 212 °F.
            li.mb-4 
              i.lista-ul__vineta                  
              | La escala Kelvin es la medida que suele utilizarse en ciencia y establece el “cero absoluto” como punto cero, lo que supone que el objeto no desprende calor alguno y equivale a -273,15 °C (grados centígrados).
            li.mb-4 
              i.lista-ul__vineta                  
              | La escala Rankine es la medida usada comúnmente en Estados Unidos para la medición de temperatura termodinámica y se define al medir los grados Fahrenheit sobre el cero absoluto, por lo que carece de valores negativos o bajo cero (Raffino, 2020).

      .col-lg-6.d-flex.justify-content-center        
        figure.w-85
          img(src='@/assets/curso/tema1/img35.svg', alt='Concentracion')              

    br
    p.mb-4 Teniendo clara la variable temperatura, se continúa con el estudio de la variable presión y cómo afecta las características de los productos químicos. 
    p.mb-4 Raffino (2020), indica que la presión es una magnitud escalar representada con el símbolo p, que designa una proyección de fuerza ejercida de manera perpendicular sobre una superficie, por unidad de superficie.
    p.mb-4 La presión relaciona una fuerza de acción continua y una superficie sobre la cual actúa, por lo cual se mide en el Sistema Internacional (SI) en pascales (Pa), equivalentes cada uno a un newton (N) de fuerza actuando sobre un metro cuadrado (m2) de superficie. En el sistema inglés, en cambio, se prefiere la medida de libras (pounds) por pulgadas (inches).
    br

    .row.mb-4    
      .col-lg-4
      .col-lg-4.d-flex.align-items-center    
        figure.w-90
          img(src='@/assets/curso/tema1/img36.svg', alt='Presion')                        
      .col-lg-4
    br
    p.mb-4 Los productos químicos comúnmente están sometidos a distintas formas de presión. Por ejemplo, un gas dentro de un recipiente que lo contenga, ejercerá mayor presión si se aumenta la temperatura. En general, los cambios de presión a los que se somete la materia pueden obligarla a cambiar de estado de agregación.
    p.mb-4 Otras unidades de medición de la presión incluyen el bar (10 N/cm3), la atm o atmósfera (equivalente a unos 101.325 pa), el Torr (equivalente a 133,32 pa), y los milímetros de mercurio (mmHg). 
    br

    .row.mb-4   
      .col-lg-1
      .col-lg-10
        .tabla-b.color-primario
          .tabla-b__header
            .h6.mb-0 UNIDADES DE PRESIÓN
          table
            caption.blanco.m-0.pt-3.px-1 
              strong Nota. 
              | Tomada de María (s.f).            
            thead.celda-verde2.text-center
              tr
                th.w-25 Unidad
                th Símbolo
                th.w-65 Equivalencia
            tbody.text-center.border
              tr.border
                td.celda-azul1 Atmósfera
                td.border atm
                td 1 atm = 1 kgf/cm2
              tr.border
                td.celda-azul1 Pascal
                td.border Pa
                td 1 Pa = 1 N/m²
              tr.border
                td.celda-azul1 Bar
                td.border bar
                td 1 bar =105  Pa = 105  N/m² = 0,987 atm = 750 mmHg
              tr.border
                td.celda-azul1.m-2 Milímetro de mercurio
                td.border mmHg
                td 1 mmHg = 01.0013 bar 
                
      .col-lg-1
    br
    p.mb-4 Existen diferentes tipos de presión, las cuales se han clasificado de la siguiente manera, según Raffino (2020):
    br
    .row.mb-4
      .col-lg-6.d-flex.align-items-center
        div
          ul.lista-ul--color
            li.mb-4 
              i.lista-ul__vineta                  
              | Presión absoluta: es la que se ejerce sobre un cuerpo por la acción de algún elemento, más la presión atmosférica que sufre (todos cuerpos en el planeta están sometidos a la presión atmosférica).
            li.mb-4 
              i.lista-ul__vineta                  
              | Presión absoluta: es la que se ejerce sobre un cuerpo por la acción de algún elemento, más la presión atmosférica que sufre (todos cuerpos en el planeta están sometidos a la presión atmosférica).
            li.mb-4 
              i.lista-ul__vineta                  
              | Presión manométrica: existe por sobre el valor de presión atmosférica. También llamada presión relativa, su valor corresponde a la diferencia entre el de la presión absoluta y el de la presión atmosférica. La presión relativa se mide utilizando un manómetro (de allí su nombre) y es la que más se utiliza en la vida cotidiana.
            li 
              i.lista-ul__vineta                  
              | Presión hidrostática o hidrodinámica: es la que experimentan los fluidos, tanto debido al peso del propio fluido en reposo (hidrostática), como en constante movimiento (hidrodinámica). Usualmente se calcula una presión media entre las dos (Raffino, 2020).

      .col-lg-6.d-flex.justify-content-center.align-items-center
        figure.w-65
          img(src='@/assets/curso/tema1/img38.svg', alt='Presion')              
    br
    p.mb-4 La presión y la temperatura están íntimamente conectadas. Cuando una sustancia compresible (como un líquido o, mejor aún, un gas) se somete a grandes presiones que obligan a sus partículas (ordinariamente dispersas) a aproximarse las unas a las otras y a vibrar con mayor velocidad, se produce una acumulación de energía que se suele libera como calor. En efecto, a mayor velocidad de las partículas, mayor temperatura (Raffino, 2020).
    p.mb-4 Esta relación está descrita por la Ley de Gay-Lussac, que establece una proporción directa entre la presión de un volumen fijo de un gas ideal y su temperatura, según la fórmula:

    .row.mb-4    
      .col-lg-3
      .col-lg-6.d-flex.align-items-center.justify-content-center
        div
          h4.text-center P/T = k        
          figure
            img(src='@/assets/curso/tema1/img39.svg', alt='p/t')                        
      .col-lg-3
    br
    p.mb-4  La presión de un volumen fijo de gas, es directamente proporcional a su temperatura, es decir que, al aumentar la temperatura, las moléculas del gas se mueven más rápidamente y por tanto aumenta el número de choques contra las paredes, es decir aumenta la presión ya que el recipiente es de paredes fijas y su volumen no puede cambiar.
    p Donde 
      strong P 
      | es presión, 
      strong T 
      | es temperatura y 
      strong k 
      | es una constante (Raffino, 2020).

</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass" scoped></style>
