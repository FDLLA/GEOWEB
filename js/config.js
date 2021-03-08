var config = {
    style: 'mapbox://styles/mapbox/satellite-v9',
    accessToken: 'pk.eyJ1IjoiZmRlbGxhbm84NiIsImEiOiJja2w5dnRtYnMzYjVxMm9wbGpsZ2xrejhhIn0.Lrjck1Y97khXRX_3bxQj7w',
    showMarkers: true,
    markerColor: '#021E8A',
    theme: 'dark',
    use3dTerrain: true,
    title: 'Cumbres emblemáticas',
    subtitle: 'Mis mejores experiencias de montaña',
    byline: 'FERNANDO DE LLANO AGUILAR ',
    footer: 'Elaboración propia, FDLLA',
    chapters: [
        {
            id: 'monta1',
            alignment: 'right',
            hidden: false,
            title: 'PICO PERICO, MONTERREY, MÉXICO',
            image: 'images/PICOPERICO.jpg',
            description: 'El ascenso a Pico Perico fue allá por 2015 y fue mi primer contacto con una cumbre en mi vida. Inicialmente lo hice por quedar bien con la que ahora es mi pareja de vida, Cristina, y puedo decir que fue una experiencia que revolucionó aspectos en mi cabeza. No es un ascenso sencillo para alguien sin experiencia como yo; ya que implica conocimiento técnico, condición física y determinación para terminar. Conforme iban pasando las horas más me cuestionaba mi decisión de haber ido. Dentro de ese mismo recorrido comprendí que cuando se sube una montaña, la cumbre es solo la mitad del camino, el regreso es casi tan tortuoso como la subida. Que no se malinterprete, lo disfruté mucho (a la distancia y por una ocasión) entendí que me estaba enamorando de Cristina ya que estaba dispuesto a decir que sí a todo. Fue un recorrido de 10 horas en donde subimos a 2,500 msnm y que me marcó en el buen sentido.',
            location: {
                center: [-100.4195393, 25.711085],
                zoom: 13.5,
                pitch: 60,
                bearing: 90
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }

                
            ]
        },{
            id: 'monta2',
            alignment: 'left',
            hidden: false,
            title: 'LAS NIEVES, ARTEAGA, MÉXICO',
            image: 'images/LAS_NIEVES.jpeg',
            description: 'El pico de las nieves fue unos años después, probablemente 2017 y fue mi reencuentro con el gusto de subir una montaña un domingo a las 5am. En el inter desde la primera cumbre y este, probablemente habré hecho unas 4 o 5 cumbres locales y sin algún fin específico de entrenamiento. Tengo presente esta cumbre ya que fue el día que decidí darle otra oportunidad a esta disciplina y me ayudó a recordar la gran satisfacción que representa el silencio que se percibe en la cima de la montaña. En aquellos días estábamos próximos a visitar una montaña en Perú donde la altura sería algo que no había experimentado antes y el temor por ese reto me impulsó a este recorrido que dentro de la región, representa uno de los puntos más altos, con 3,100 msnm. No recuerdo las horas de recorrido, pero habrán sido 7 u 8 horas.  ',
            location: {
                center: [-100.41792, 25.21246],
                zoom: 14.5,
                pitch: 60,
                bearing: 180
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },{
            id: 'monta3',
            alignment: 'right',
            hidden: false,
            title: 'MONTAÑA DE LOS SIETE COLORES, WINICUNCA, PERÚ',
            image: 'images/7COLORES.jpg',
            description: 'El reto de haber subido la montaña de Los Siete Colores en Perú, fue probablemente unas de las experiencias más bizarras que puedo relatar. En aquellos días, inicios de 2018 había recibido noticias de un tema del corazón que me llamaba a tener cuidados mayores en mi estilo de vida. Y existía una relación de temor-preocupación por hacer esta actividad, que junto con la visita a Machu Picchu era prácticamente la razón de la visita. Sin embargo al seguir unas cuantas recomendaciones médicas no representó problema. Después vino lo más interesante, que fue el tan mencionado mal de altura que te advierten desde que llegas a la ciudad. Es un recorrido borroso, que desde que uno comienza a ver los 3,900 msnm en los que inicia el recorrido, sabes que algo va a ser distinto a experiencias anteriores. Independientemente de las alpacas que comenzaron a querer hablar conmigo, los mareos por altura y alucinaciones que se provocaron en el camino; tengo un recuerdo particular en donde la gente del lugar empezaba a ofrecerte terminar el recorrido en burro o caballo, por una cantidad desorbitante de dinero. Los lugareños (que subían y bajaban como si fuera plano) fueron muy insistentes pero respetuosos, y cuando no veía la forma de llegar a la cima con sus 5,200 msnm, se acercó un chavo con un burro y en lugar de ofrecerme el servicio solo me dijo “ya te falta muy poco” por alguna razón eso me dio las fuerzas necesarias para encontrarme con Cristina en la cima y tener una de las mayores satisfacciones físicas en mi vida adulta',
            location: {
                center: [-71.302944,-13.870667],
                zoom: 14,
                pitch: 60,
                bearing: -43.2
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },{
            id: 'monta4',
            alignment: 'right',
            hidden: false,
            title: 'PETRA, WADI MUSA, JORDANIA',
            image: 'images/JORDANIA_.jpeg',
            description: 'Ese mismo año a finales de 2018, optamos por ir a un viaje en el medio oriente. Ambos habíamos tenido un año sumamente duro y cómo fue posible ahorramos y logramos adquirir servicios de bajo presupuesto para lograr nuestro paseo. El viaje fue extenso y con muchos retos, es una tierra complicada y no es tan abierta al turismo como otros sitios. Pero un gran recuerdo que tengo fue nuestra visita a la maravillosa ciudad de Petra en Jordania, nos tomó un día llegar ahí con todas sus restricciones y complicaciones y probablemente es el tour más caro que hemos pagado, pero valió la pena cada minuto. Uno tiene como referencia típica algunas imágenes de Hollywood, incluso grandes íconos como Indiana Jones que estuvieron ahí; pero nunca te muestran lo gigante y maravillosa que es la ciudad. Para llegar a uno de los templos tallados, te sugieren una caminata de dos horas con algunos guías locales que te dicen una serie de datos cuestionables, al llegar a la cima del recorrido te encuentras con un monumento tallado en piedra que tiene como apodo “El Monasterio” y del cual no se tiene tanta información como uno deseara. No se necesita mucho para admirarlo como la maravilla que es. Haber compartido esta experiencia con Cristina lo hizo aún más especial. ',
            location: {
                center: [35.430632,30.337995],
                zoom: 14.5,
                pitch: 60,
                bearing: 180
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
    ]
};

