<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal
      .titulo-principal__numero
        .h3 2
      .h3 Peligros y riesgos
    
    #t_2_1.titulo-segundo
      .h4 2.1  Definición de peligros y riesgo
    
    p.mb-4 Antes de estudiar las definiciones de peligro y riesgo, se recomienda realizar el siguiente ejercicio:    
    .row.mb-4
      .col-lg-2
      .col-lg-5.d-flex.align-items-end.justify-content-center
        div
          .cajon.color-primario.p-4
            p Escribir si cree que los dos términos significan lo mismo o si son diferentes.
          br
          .cajon.color-primario.p-4
            p Si considera que son diferentes, ¿cuáles son esas diferencias?
      .col-lg-3.d-flex.align-items-center.justify-content-center
        figure
          img(src='@/assets/curso/tema2/img01.svg', alt='Peligro')          
      .col-lg-2

    .row.mb-4
      .col-lg-2
      .col-lg-8.d-flex.align-items-end.justify-content-center
        p.text-center Ahora, se debe observar la imagen y escribir cuál es el peligro y cuál es el riesgo.             
      .col-lg-2
    

    br
    
    .row.mb-4
      .col-2
      .col-8
        figure.mb-4
          img(src='@/assets/curso/tema2/img02.svg', alt='Peligro2')          
        p.mb-4 Existen muchas definiciones, y aunque la mayoría de ellas busca dar claridad en el uso diferenciado de estos términos, es frecuente que se generen confusiones y usos inadecuados. 
        p.mb-4 Por lo anterior, se utilizan las definiciones de varias fuentes con el fin de apropiar las características de cada término.
      .col-2
      

    .row.mb-4
      .col-2
      .col-8
        .tarjeta--container.row.mb-5      
          .col-md.tarjeta.color-acento-contenido.text-white.p-5
            .row.justify-content-center.mb-4
              .col-6
                figure
                  img(src='@/assets//curso/tema2/img03.svg', alt='Texto que describa la imagen')          
            .h4.text-center En el caso del término “peligro”, este se identifica como:
            div
              ul.lista-ul--color
                li.mb-4 
                  i.lista-ul__vineta                  
                  | Fuente, situación o acto con potencial de daño en términos de enfermedad o lesión a las personas o una combinación de esto (NTC-Ohsas 18001). 
                li.mb-4 
                  i.lista-ul__vineta                  
                  | Fuente, situación o acto con potencial de causar daño en la salud de los trabajadores, en los equipos o en las instalaciones (Decreto 1443 de 2014).
                li.mb-4 
                  i.lista-ul__vineta                  
                  | Un peligro es una fuente, situación o acto con potencial para causar daño humano, deterioro de la salud, daños físicos o una combinación de estos (Norma ISO 45001).
          
          .col-md.tarjeta.color-primario.text-white.p-5
            .row.justify-content-center.mb-4
              .col-6
                figure
                  img(src='@/assets//curso/tema2/img04.svg', alt='Texto que describa la imagen')
              
            .h4.text-center Para el término “riesgo”, se presentan las siguientes definiciones:
            div
              ul.lista-ul--color
                li.mb-4 
                  i.lista-ul__vineta                  
                  | Es la combinación de la probabilidad de que ocurra(n) un (os) evento(s) o exposición peligrosa, y la severidad de la lesión o enfermedad que puede ser causado por el (los) evento(s) o la(s) exposición (es) (NTC-Ohsas 18001).
                li.mb-4 
                  i.lista-ul__vineta                  
                  | Combinación de la probabilidad de que ocurran una o más exposiciones o eventos peligrosos y la severidad del daño que puede ser causada por estos (Decreto 1443 de 2014).
                li.mb-4 
                  i.lista-ul__vineta                  
                  | Es la combinación de la probabilidad de que suceda algo peligroso por la gravedad del daño que podría ocasionar dicho suceso. La definición de riesgo se puede calcular con una fórmula matemática: Riesgo es igual a la probabilidad de que ocurra un suceso peligroso por la gravedad del daño que podría causar para la salud. R (riesgo) = P (probabilidad) x S (severidad) (Norma ISO 45001).
      .col-2
    
    hr

    #t_2_2.titulo-segundo
      .h4 2.2 Concepto de dosis

    p.mb-4 Teniendo claros los conceptos de peligro y riesgo, ahora se estudiará el concepto de dosis, el cual es uno de los más importantes y de mayor utilidad en el manejo seguro de sustancias químicas. Sin embargo, en muchos casos, los manipuladores de sustancias químicas ignoran este concepto y cuando lo conocen no lo aplican apropiadamente. 
    p.mb-4 Con el fin de facilitar la apropiación del concepto, se plantea un caso de la cotidianidad:

    .mb-4.div-color-sistema-c      
      .row.mb-4.pt-4      
        .col-1
        .col-md-5.d-flex.align-items-center.justify-content-center
          div
            p “Una persona se lastimó una mano y el médico le ha pedido que se tome unas radiografías. El paciente se dirige a la sección de radiología y allí se encuentra en un espacio totalmente cerrado, las paredes están forradas en una capa de plomo. El radiólogo que sale a atenderlo trae un delantal muy grueso y pesado, también trae guantes y una careta de protección. 
        .col-md-4.d-flex.align-items-center.justify-content-center
          figure
            img(src='@/assets/curso/tema2/img05.svg', alt='docis1')  
        .col-2

      .row.mb-4      
        .col-1
        .col-md-10.d-flex.align-items-center.justify-content-center
          p Acomoda la mano del paciente para tomar la radiografía y se refugia en un cuarto también protegido de la radiación, desde donde acciona el mecanismo y toma la radiografía. Luego de eso sale y vuelve a acomodar al paciente y se vuelve a proteger. En ese momento el paciente se cuestiona, sobre la razón por la cual el radiólogo, teniendo tanta protección y un refugio para la radiación, lo expone a él como paciente”.
        .col-1

      .row.mb-4      
        .col-1
        .col-md-10.d-flex.align-items-center
            div.w-100.div-color-primario.text-center.p-3 
              h5.div-color-primario.m-1 ¿Cuál será la razón?
        .col-1

      .row.mb-4      
        .col-1
        .col-md-8.d-flex.align-items-center.justify-content-center
          div
            p.mb-4 Efectivamente, la razón por la cual el radiólogo extrema sus medidas de protección es porque comprende que estaría expuesto muchas veces al día y durante muchos días de su vida a la radiación, lo cual incrementaría considerablemente la dosis a la que se expone; también entiende que la dosis a la que se expondrá el paciente es muy baja y esporádica. 
            p.mb-4 Comprender, entonces, que el número de exposiciones, la concentración y la frecuencia de las exposiciones a un producto químico aumentan considerablemente la aparición de efectos, es vital para todos los manipuladores de productos químicos. 

        .col-md-2.d-flex.align-items-center.justify-content-center
          figure.w-85
            img(src='@/assets/curso/tema2/img06.svg', alt='docis2')  
        .col-1

      .row.mb-4      
        .col-1
        .col-md-10.d-flex.d-flex.align-items-center.justify-content-center
            div.w-90.div-color-acento-botones.p-2.d-flex.align-items-center.justify-content-center
              div.w-90 
                strong Para recordar: 
                | cuanto mayor sea la frecuencia de uso, las cantidades y las concentraciones, mayores deben ser las medidas de prevención y protección que debe usar el manipulador.
        .col-1

      br
    p.mb-4 Es así como se puede definir qué dosis es la cantidad de una sustancia a la que se expone una persona durante un período de tiempo; es decir, que es la expresión de una cantidad X en función del tiempo de exposición (x/t). La dosis es una medida de la exposición y cuanto mayor es la dosis, mayor es la probabilidad de un efecto.
    p.mb-4 El concepto de dosis es atribuido al químico Paracelso, quien aseguró que: 

    .row.mb-5
      .col-2
      .col-lg-8.mb-5.mb-lg-0.px-5
        .bloque-texto-b.transparente.p-4
          .bloque-texto-b__texto
            i.fas.fa-quote-left
            span.h4.mb-0 Toda sustancia es tóxica, no hay ninguna que no sea tóxica; es la DOSIS la que hace la diferencia entre una sustancia tóxica y una no tóxica
            i.fas.fa-quote-right
      .col-2
    
    .row.mb-5
      .col-1
      .col-10.d-flex.d-flex.align-items-center.justify-content-center
        .bloque-texto-a.color-secundario.p-4.mb-5 
          .row.m-0.align-items-center.justify-content-between
            .col-lg-4.mb-4.mb-lg-0
              figure
                img(src='@/assets/curso/tema2/img07.png', alt='docis2')  
            .col-lg-8
              .bloque-texto-a__texto.p-4
                h5 Es así como:
                ul.lista-ul--color
                  li.mb-4 
                    i.lista-ul__vineta.vineta-verde                  
                    | Una “dosis de exposición” es la cantidad de una sustancia que se encuentra en el medioambiente. 
                  li.mb-4 
                    i.lista-ul__vineta.vineta-verde                     
                    | Una “dosis absorbida” es la cantidad de sustancia que ha entrado realmente en el cuerpo a través de los ojos, la piel, el estómago, los intestinos o los pulmones.
      .col-1
    hr    
    br
    #t_2_3.titulo-segundo
      .h4 2.3 Vías de ingreso

    p.mb-4 Cada una de estas sustancias o productos químicos pueden ingresar al organismo a través de cuatro vías:

    .row.mb-5
      .col-1
      .col-10
        TabsB
          .py-0.py-md-5(titulo="Vía respiratoria" :icono="require('@/assets/curso/tema2/img08.svg')")
            .row
              .col-md-1
              .col-md-6.mb-4.mb-md-0.d-flex.align-items-center            
                div                    
                  .h4 Vía respiratoria        
                  p.mb-4 Es la principal vía de ingreso de los productos químicos en el organismo, por eso son tan importantes los controles de exposición de esta vía (Vías respiratorias).
                  p.mb-4 El sistema respiratorio está formado por nariz, boca, laringe, bronquios, bronquiolos y alvéolos pulmonares. Esta es la vía de penetración de sustancias tóxicas más importante en el ámbito laboral. 
                  p.mb-4 Cualquier sustancia suspendida en el ambiente puede ser inhalada, pero solo las partículas que posean un tamaño adecuado llegarán a los alvéolos. También influirá su solubilidad en los fluidos del sistema respiratorio en los que se deposita. 
                  p.mb-4 La cantidad total de un contaminante absorbida por vía respiratoria está en función de la concentración en el ambiente, del tiempo de exposición y de la ventilación pulmonar.
              .col-md-1
              .col-md-3.d-flex.align-items-center  
                figure
                  img(src='@/assets/curso/tema2/img09.svg', alt='Sólido') 
                  figcaption Vías respiratorias              
              .col-md-1

          .py-0.py-md-5(titulo="Vía dérmica" :icono="require('@/assets/curso/tema2/img10.svg')")
            .row
              .col-md-1
              .col-md-6.mb-4.mb-md-0.d-flex.align-items-center            
                div                    
                  .h4 Vía dérmica        
                  p.mb-4 Muchas sustancias son capaces de atravesar la piel en estado normal, alcanzar los capilares sanguíneos e incorporarse a la sangre, para ser distribuidas, de este modo, por todo el cuerpo (figura 6).
                  p.mb-4 Es de anotar que la temperatura, la sudoración y la integridad de la piel pueden influir en la absorción de tóxicos a través de la piel.
                  p.mb-4 En este caso es muy importante resaltar que los contactos con sustancias químicas se deben prevenir usando ropas aislantes como overoles, delantales, guantes y otros tipos de protección adicionales a las medidas de control de ingeniería.
                  p.mb-4 Existen sustancias para las cuales la piel es permeable como: n-butanol, 2-butoxietanol, tolueno.
              .col-md-1
              .col-md-3.d-flex.align-items-center  
                figure
                  img(src='@/assets/curso/tema2/img11.svg', alt='Sólido')              
              .col-md-1

          .py-0.py-md-5(titulo="Vía parenteral" :icono="require('@/assets/curso/tema2/img12.svg')")
            .row
              .col-md-1
              .col-md-6.mb-4.mb-md-0.d-flex.align-items-center            
                div                    
                  .h4 Vía parenteral         
                  p.mb-4 Se debe tener en cuenta que la penetración directa de una sustancia química en el organismo puede ser a través de una discontinuidad de la piel (herida o punción, figura 7). Esta se presenta generalmente por manipulación de sustancia sin los Elementos de Protección Personal (EPP) o por el uso inadecuado.
                  p.mb-4 Esta vía de ingreso, aunque no es la más frecuente en los ambientes laborales, sí debe considerarse como una de las más nocivas, debido a que las discontinuidades de la piel permiten que los productos químicos pasen directamente al torrente sanguíneo, donde es transportado por la sangre a todo el cuerpo y alcanza con mayor rapidez órganos blandos.
              .col-md-1
              .col-md-3.d-flex.align-items-center  
                figure
                  img(src='@/assets/curso/tema2/img13.svg', alt='Sólido')              
              .col-md-1

          .py-0.py-md-5(titulo="Vía digestiva" :icono="require('@/assets/curso/tema2/img14.svg')")
            .row
              .col-md-1
              .col-md-6.mb-4.mb-md-0.d-flex.align-items-center            
                div                    
                  .h4 Vía digestiva        
                  p.mb-4 El sistema digestivo está formado por boca, estómago e intestinos (figura 8). Aunque esta vía de ingreso pareciera de poca importancia, en higiene industrial es frecuente en operarios que tienen el hábito de comer y beber en el puesto de trabajo.
                  p.mb-4 Como medida de prevención al ingreso de sustancias químicas por esta vía, se recomienda establecer políticas de no consumo de alimentos en los lugares de trabajo, no usar las neveras para reactivos o los cuartos fríos de productos químicos para refrigerar alimentos y mantener un frecuente lavado de manos, especialmente antes de tomar los alimentos.
              .col-md-1
              .col-md-3.d-flex.align-items-center  
                figure
                  img(src='@/assets/curso/tema2/img15.svg', alt='Sólido')              
              .col-md-1
      
    br

    #t_2_4.titulo-segundo
      .h4 2.4 Exposición a productos químicos

    p.mb-4 Las exposiciones a productos químicos tienen diversos efectos, sin embargo, los efectos que no se evidencian inmediatamente después de la exposición suelen ser subestimados, dado que no son percibidos como peligrosos por los individuos expuestos y porque se desconoce su carácter acumulativo.
    p.mb-4 En lo que se refiere a una sustancia potencialmente tóxica, dependiendo de la exposición puede establecerse un gradiente en el cual se observa que si no hay exposición (cero dosis) no hay efecto. A medida que se incrementa la dosis pueden empezar a aparecer efectos bioquímicos, los cuales se transforman en efectos fisiológicos si esta sigue aumentando; sin embargo, ambos efectos pueden pasar desapercibidos si no se cuenta con técnicas y equipos que permitan ponerlos de manifiesto.

    .row.mb-4
      .col-md-2
      .col-md-8.d-flex.align-items-center  
        .div
          figure.mb-4
            img(src='@/assets/curso/tema2/img16.svg', alt='Sólido')    
          p.text-center 
            strong Nota. 
            | Tomada de Inecc (2007).           
      .col-md-2

    p.mb-4 En la figura de gradiente de toxicidad, se observa que si no hay exposición (cero dosis) no hay efecto, a medida que se incrementa la dosis pueden empezar a aparecer efectos bioquímicos, los cuales se transforman en efectos fisiológicos si se sigue aumentando la dosis; sin embargo, ambos efectos pueden pasar desapercibidos si no se cuenta con técnicas y equipos que permitan ponerlos de manifiesto.
    p.mb-4 Cuando la dosis alcanza niveles significativos, que varían de una sustancia a otra, pueden aparecer signos y síntomas clínicos que revelan la producción de efectos adversos que darían lugar a estados patológicos o enfermedades diversas; si la dosis es excesiva puede ocurrir la muerte.
    p.mb-5 Para ilustrar lo antes expuesto, se puede citar el caso del plomo que, en una cierta dosis, interfiere con la fijación del hierro en la hemoglobina (cambio bioquímico), al elevar la dosis produce anemia (cambio fisiológico) y de seguir incrementándose la exposición puede causar nefropatía o encefalopatía (manifestaciones patológicas), finalmente, si se aumenta más la dosis puede provocar la muerte (Inecc, 2007).

    hr
    br
    #t_2_5.titulo-segundo
      .h4 2.5 Efectos crónicos y agudos

    p.mb-4 Para los propósitos del manejo seguro de las sustancias químicas, se debe de tener en cuenta dos clasificaciones de “exposición y efecto”.

    .tarjeta-Avatar-b.mb-4
          img.mb-5(src='@/assets/curso/tema2/img17.svg' alt='img05')
          .tarjeta.fondo-celeste.p-4
            .h4 Exposición aguda 
            p.mb-4 Una exposición aguda es aquella que produce alteraciones en la salud de manera inmediata o en muy corto tiempo después de la exposición. Por ejemplo, un contacto de la piel con soda cáustica, produce una lesión que se siente casi inmediatamente después y genera un dolor intenso, dependiendo de la cantidad de sustancia, el área de la piel afectada y la concentración del producto químico. También se puede apreciar la necrosis de la piel, el desprendimiento de vapores, calor en la parte afectada y, en términos generales, la lesión es muy notoria y el dolor intenso.
            p.mb-4 Las exposiciones agudas en el medio laboral se enmarcan dentro de los accidentes de trabajo, toda vez que, como en todo accidente, los efectos son adversos, evidentes y producen efectos sobre la salud del trabajador en el desarrollo de sus actividades.
    br
    br
    .tarjeta-Avatar-b.mb-5
          img(src='@/assets/curso/tema2/img18.svg' alt='img05')
          .tarjeta.fondo-celeste.p-4
            .h4 Exposiciones crónicas  
            p.mb-4 De otro lado, las exposiciones crónicas son aquellas en las que la exposición se da en bajas dosis, pero en repetidas ocasiones y, por lo general, en largos periodos de trabajo. Por ejemplo, la exposición a fibras de asbesto de un trabajador no produce efectos inmediatos, pero sí acumulativos. Esto quiere decir que la enfermedad producida por la exposición a fibras de asbesto, se manifestará en trabajadores que llevan algunos años de exposición.

    hr
    br   

    #t_2_6.titulo-segundo
      .h4 2.6 Concepto TLV
    br
    figure.mb-4
      img(src='@/assets/curso/tema2/img19.png', alt='Sólido')     
    br
    p.mb-4 Conociendo que las exposiciones crónicas generan efectos adversos sobre los trabajadores, es necesario establecer un límite máximo, que no se pueda sobrepasar a fin de garantizar que la exposición no será nociva para el trabajador. Con este propósito, varias instituciones del mundo hacen investigaciones sobre los límites de exposición a productos químicos. 
    p.mb-4 La ACGIH es la Conferencia Estadounidense de Higienistas Industriales Gubernamentales y uno de sus objetivos es promover la protección de los trabajadores proporcionando información científica oportuna y objetiva a los profesionales de la salud ocupacional y ambiental. Dentro de sus actividades la ACGIH publica anualmente una relación de los valores permisibles en el ambiente de trabajo conocidos como Valores Límite Umbral (TLV, del inglés Threshold Limit Values) para agentes físicos. Estos valores son solo unos límites recomendables y como tales deben ser interpretados y aplicados. 

    .row.mb-4
      .col-md-2
      .col-md-8.d-flex.align-items-center  
        .div
          figure.mb-4
            img(src='@/assets/curso/tema2/img20.svg', alt='Sólido')                      
      .col-md-2

    p.mb-4 Los TLV para agentes químicos, expresan concentraciones en aire de diversas sustancias por debajo de las cuales la mayoría de los trabajadores puede exponerse sin sufrir efectos adversos. Se admite que, dada la variabilidad de respuestas individuales, un porcentaje de trabajadores pueda experimentar ligeras molestias ante ciertas sustancias en estas concentraciones o por debajo de ellas, incluso en casos raros, puedan verse afectados por agravamiento de dolencias previas o por la aparición de enfermedades profesionales. Debido a los variados efectos que los productos químicos pueden provocar en las personas expuestas, se definen diferentes tipos de valores TLV.
    
    div.mb-4.w-100.fondo-verder.text-center.p-3 
      h5.fondo-verder.m-1 Tipos de valores TLV
    
    .row.mb-4
      .col-md-4.d-flex
        .cajon.color-primario.p-4
          strong TLV-TW: 
          | Concentración media ponderada en el tiempo, para una jornada normal de 8 horas y 40 horas semanales, a la cual la mayoría de los trabajadores pueden estar expuestos repetidamente día tras día sin sufrir efectos adversos. Este es el tipo más característico, al que se hace referencia habitualmente cuando se cita un valor TLV.        
      .col-md-3.d-flex
        .cajon.color-secundario.p-4
          strong TLV-C: 
          | Valor techo: concentración que no debería ser sobrepasada en ningún instante. La práctica habitual de la higiene admite para su valoración muestreos de 15 minutos excepto para aquellos casos de sustancias que puedan causar irritación inmediata con exposiciones muy cortas.
      .col-md-5.d-flex
        .cajon.color-acento-botones.p-4
          strong TLV-STEL: 
          | Límites de exposición para cortos periodos de tiempo y concentración a la que pueden estar expuestos los trabajadores durante un corto espacio de tiempo sin sufrir irritación, daño crónico o irreversible en los tejidos o narcosis importante. No es un límite de exposición separado e independiente, sino un complemento de la media ponderada en el tiempo (TWA). Se define como la exposición media ponderada en el tiempo durante 15 minutos que no debe sobrepasarse en ningún momento de la jornada, aunque la media ponderada en el tiempo durante las ocho horas sea inferior al TLVTWA. (INSHT, s.f).

    a.mb-4.m-0.mb-5.anexo.mb-4.mb-lg-0.milink(href="https://www.insst.es/documents/94886/327166/ntp_244.pdf/b853aaf2-955b-41d7-b021-7bd702ecdd9d" target="_blank")
        .anexo__icono
          img(src="@/assets/curso/tema1/icono-link.svg")
        .anexo__texto
          strong Para ampliar la información se recomienda consultar el siguiente material complementario:
          p Instituto Nacional de Seguridad e Higiene en el Trabajo. (s.f.). NTP 244: criterios de valoración en higiene industrial.
           
    hr
    br

    #t_2_7.titulo-segundo
      .h4 2.7 Ciclo de vida de un producto químico

    p.mb-4 Los efectos colaterales de los productos químicos no se limitan solamente a probables exposiciones a las que se ve enfrentado un trabajador en el momento de usar el producto químico. Los efectos se dan en todos los momentos en los que el producto es activo, es decir, en todo su ciclo de vida.
    p.mb-4 La idea de “ciclo de vida” se introdujo para evaluar las características ambientales de los productos químicos, y considera cinco etapas básicas: premanufactura, manufactura, envío del producto, uso y fin de su vida útil.

    figure.mb-4
      .video
        iframe(width="1255" height="706" src="https://www.youtube.com/embed/fdZTopMiBUA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)      

    p.mb-4 Dicha evaluación permite contar con productos con menores impactos ambientales, pero sin que se omitan las características deseadas en la productividad. El reto para los profesionales de la química sería, entonces, el desarrollo de nuevos productos, procesos y servicios que cumplan con los requerimientos sociales, económicos y ambientales.
    p.mb-4 Para esto, se requiere reducir el consumo de materiales y energía en los procesos, minimizar la emisión al ambiente de sustancias químicas peligrosas, maximizar el uso de recursos renovables y extender la durabilidad y el reciclaje de los productos (Global, 2011).

    a.mb-4.m-0.mb-5.anexo.mb-4.mb-lg-0.milink(href="https://quimicoglobal.mx/ciclo-de-vida-productos-quimicos/#:~:text=El%20concepto%20de%20ciclo%20de,fin%20de%20su%20vida%20%C3%BAtil" target="_blank")
        .anexo__icono
          img(src="@/assets/curso/tema1/icono-link.svg")
        .anexo__texto
          strong Para ampliar la información se recomienda consultar el siguiente material complementario:
          p Corporativo Químico Global S.A. (2011). Ciclo de vida de productos químicos.

    br 

    .row.mb-4.color-primario.py-5
      .col-5.d-flex.align-items-center
        .div
          p.mb-4 Los productos químicos pueden causar riesgos inaceptables a la salud humana o al medio ambiente, porque algunos productos químicos poseen una combinación de propiedades físicas y químicas tal, que una vez liberados en el medio ambiente, se degradan muy lentamente y permanecen en los medios y organismos ambientales durante años o decenios, e incluso cuando se liberan en cantidades relativamente pequeñas, se dice entonces que estos productos químicos son persistentes. 
          p Estos productos químicos pueden propagarse mediante procesos ambientales naturales a largas distancias, provocando la contaminación a escala regional y mundial de los medios ambientales, los alimentos, la fauna, la flora y los seres humanos.
      .col-7.d-flex.align-items-center.justify-content-center
        .div
          figure.mb-4
            img(src='@/assets/curso/tema2/img22.svg', alt='')
          a.w-80.anexo.mb-4(:href="('https://quimicoglobal.mx/ciclo-de-vida-productos-quimicos/#:~:text=El%20concepto%20de%20ciclo%20de,fin%20de%20su%20vida%20%C3%BAtil')" target="_blank")
            .anexo__icono
              img(src="@/assets/curso/tema2/icono-pdf.svg")
            .anexo__texto
              strong Ver Anexo 1. 
              | Contaminantes orgánicos persistentes COP
               
    .mb-4 Existe otro grupo de contaminantes ambientales que pueden ser tomados del agua o de los alimentos y son retenidos por la fauna, la flora o los seres humanos en sus cuerpos y acumularse en concentraciones mayores que las contenidas en sus alimentos y el agua. Se dice, entonces, que estos productos químicos son bioacumulativos y pueden causar efectos perjudiciales cuando alcanzan niveles suficientemente elevados.          
    br
    .row.mb-5
      .col-5.d-flex.align-items-center
        .div
          p.mb-4 La <strong>biomagnificación</strong> se da cuando los depredadores ubicados en los niveles superiores de la cadena alimentaria consumen fauna o flora contaminada y adquieren cargas corporales muy altas de ciertos productos químicos que pueden causarles serios daños, incluidos defectos congénitos y disfunciones reproductivas.
          p Es por esta situación que en los últimos decenios se ha prestado cada vez mayor atención al tratamiento de los riesgos que entrañan las sustancias persistentes, bioacumulativos y tóxicas debido a que la amplia exposición a dichas sustancias puede ocurrir durante largos períodos –afectando generaciones de seres humanos– y causar efectos tóxicos. Ejemplos de estos productos químicos son los Contaminantes Orgánicos Persistentes (COP) y ciertos compuestos de metales como el mercurio.
      .col-7.d-flex.align-items-center.justify-content-center
        .div
          figure.mb-4
            img(src='@/assets/curso/tema2/img23.svg', alt='Sólido')
          
    p.mb-4 Sin embargo, no todas las afecciones de los productos químicos se producen directamente en la fauna, la flora o los seres humanos, otros pueden ocasionar cambios en el medio ambiente y representan riesgos. Algunos ejemplos de ello son los productos químicos orgánicos volátiles y los óxidos de nitrógeno, los cuales dan lugar al ozono troposférico (o “smog”), y los clorofluorocarbonos (CFC), que degradan las capas de ozono estratosféricas y hacen que una mayor radiación ultravioleta incida sobre la superficie de la Tierra.
    
    .row.mb-4
      .col-2      
      .col-8.d-flex.align-items-center.justify-content-center
        .div
          figure.mb-4
            img(src='@/assets/curso/tema2/img24.svg', alt='')
      .col-2

    p.mb-5 Finalmente, también existen algunos contaminantes ambientales en cuyo caso la ciencia no ha podido demostrar su nivel de “no efecto” sobre los seres humanos (por ejemplo, partículas de sulfato en el aire, niveles de plomo en la sangre de niños) (Pnuma, 2013). 
</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass" scoped></style>
