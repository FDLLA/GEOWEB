var config = {
    style: 'mapbox://styles/mapbox/satellite-v9',
    accessToken: 'pk.eyJ1IjoiZ2lzbWFzdGVybTIiLCJhIjoiY2plZHhubTQxMTNoYzMza3Rqa3kxYTdrOCJ9.53B1E6mKD_EQOVb2Y0-SsA',
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
            alignment: 'left',
            hidden: false,
            title: 'PICO PERICO, MONTERREY, MÉXICO',
            image: 'images/PICOPERICO.jpg',
            description: 'Fue mi primera experiencia de cumbre, se encuentra en el cerro de Las Mitras y fue un recorrido de 10 horas totales',
            location: {
                center: [-100.4195393, 25.711085],
                zoom: 13.5,
                pitch: 60,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
                {
                //     layer: 'layer-name',
                //     opacity: 1,
            duration: 500
                }
            ],
            onChapterExit: [
                {
                    duration: 500
                //     layer: 'layer-name',
                //     opacity: 0
                }

                
            ]
        },{
            id: 'monta2',
            alignment: 'right',
            hidden: false,
            title: 'LAS NIEVES, ARTEAGA, MÉXICO',
            image: 'images/LAS_NIEVES.jpeg',
            description: 'Se encuentra en la zona norte del país y es de los picos más altos de la región, alcanzando una altura mayor a los 3,000 msnm',
            location: {
                center: [-100.379565,25.200860],
                zoom: 14.5,
                pitch: 60,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },{
            id: 'monta3',
            alignment: 'left',
            hidden: false,
            title: 'MONTAÑA DE LOS SIETE COLORES, WINICUNCA, PERÚ',
            image: 'images/7COLORES.jpg',
            description: 'Es la cumbre más alta que me ha tocado experimentar, en la cima llegamos a estar a una altura superior a los 5,200 msnm" allowfullscreen></iframe>',
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
            description: 'Dentro de la maravillosa y extendida ciudad Petra, se puede hacer un recorrido por montaña para llegar a uno de los monumentos tallados en piedra más grandes del mundo',
            location: {
                center: [35.430632,30.337995],
                zoom: 14.5,
                pitch: 60,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
    ]
};