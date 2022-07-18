var wms_layers = [];


        var lyr_roadmap_0 = new ol.layer.Tile({
            'title': 'roadmap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://mt0.google.com/vt/lyrs=m&hl=en&x={x}&y={y}&z={z}'
            })
        });
var format_DIKewenanganPusatWSCitarum_1 = new ol.format.GeoJSON();
var features_DIKewenanganPusatWSCitarum_1 = format_DIKewenanganPusatWSCitarum_1.readFeatures(json_DIKewenanganPusatWSCitarum_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DIKewenanganPusatWSCitarum_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DIKewenanganPusatWSCitarum_1.addFeatures(features_DIKewenanganPusatWSCitarum_1);
var lyr_DIKewenanganPusatWSCitarum_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_DIKewenanganPusatWSCitarum_1, 
                style: style_DIKewenanganPusatWSCitarum_1,
                interactive: true,
                title: '<img src="styles/legend/DIKewenanganPusatWSCitarum_1.png" /> DI Kewenangan Pusat WS Citarum'
            });
var format_Daerah_Irigasi_WS_Citarum_2 = new ol.format.GeoJSON();
var features_Daerah_Irigasi_WS_Citarum_2 = format_Daerah_Irigasi_WS_Citarum_2.readFeatures(json_Daerah_Irigasi_WS_Citarum_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Daerah_Irigasi_WS_Citarum_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Daerah_Irigasi_WS_Citarum_2.addFeatures(features_Daerah_Irigasi_WS_Citarum_2);
var lyr_Daerah_Irigasi_WS_Citarum_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Daerah_Irigasi_WS_Citarum_2, 
                style: style_Daerah_Irigasi_WS_Citarum_2,
                interactive: true,
                title: '<img src="styles/legend/Daerah_Irigasi_WS_Citarum_2.png" /> Daerah_Irigasi_WS_Citarum'
            });

lyr_roadmap_0.setVisible(true);lyr_DIKewenanganPusatWSCitarum_1.setVisible(true);lyr_Daerah_Irigasi_WS_Citarum_2.setVisible(true);
var layersList = [lyr_roadmap_0,lyr_DIKewenanganPusatWSCitarum_1,lyr_Daerah_Irigasi_WS_Citarum_2];
lyr_DIKewenanganPusatWSCitarum_1.set('fieldAliases', {'Id': 'Id', 'Nama_DI': 'Nama_DI', 'Seksi': 'Seksi', 'x': 'x', 'y': 'y', });
lyr_Daerah_Irigasi_WS_Citarum_2.set('fieldAliases', {'DI': 'DI', 'Luas_ha': 'Luas_ha', });
lyr_DIKewenanganPusatWSCitarum_1.set('fieldImages', {'Id': '', 'Nama_DI': '', 'Seksi': '', 'x': '', 'y': '', });
lyr_Daerah_Irigasi_WS_Citarum_2.set('fieldImages', {'DI': '', 'Luas_ha': '', });
lyr_DIKewenanganPusatWSCitarum_1.set('fieldLabels', {'Id': 'no label', 'Nama_DI': 'header label', 'Seksi': 'inline label', 'x': 'inline label', 'y': 'inline label', });
lyr_Daerah_Irigasi_WS_Citarum_2.set('fieldLabels', {'DI': 'header label', 'Luas_ha': 'inline label', });
lyr_Daerah_Irigasi_WS_Citarum_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});