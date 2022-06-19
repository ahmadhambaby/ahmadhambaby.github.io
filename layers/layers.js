var wms_layers = [];


        var lyr_hybrid_0 = new ol.layer.Tile({
            'title': 'hybrid',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://mt0.google.com/vt/lyrs=y&hl=en&x={x}&y={y}&z={z}'
            })
        });
var format_Daerah_Irigasi_Aknop_1 = new ol.format.GeoJSON();
var features_Daerah_Irigasi_Aknop_1 = format_Daerah_Irigasi_Aknop_1.readFeatures(json_Daerah_Irigasi_Aknop_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Daerah_Irigasi_Aknop_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Daerah_Irigasi_Aknop_1.addFeatures(features_Daerah_Irigasi_Aknop_1);
var lyr_Daerah_Irigasi_Aknop_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Daerah_Irigasi_Aknop_1, 
                style: style_Daerah_Irigasi_Aknop_1,
                interactive: true,
                title: '<img src="styles/legend/Daerah_Irigasi_Aknop_1.png" /> Daerah_Irigasi_Aknop'
            });
var format_WS_JABAR_2 = new ol.format.GeoJSON();
var features_WS_JABAR_2 = format_WS_JABAR_2.readFeatures(json_WS_JABAR_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_WS_JABAR_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WS_JABAR_2.addFeatures(features_WS_JABAR_2);
var lyr_WS_JABAR_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_WS_JABAR_2, 
                style: style_WS_JABAR_2,
                interactive: true,
                title: '<img src="styles/legend/WS_JABAR_2.png" /> WS_JABAR'
            });
var format_WS_Citarum_3 = new ol.format.GeoJSON();
var features_WS_Citarum_3 = format_WS_Citarum_3.readFeatures(json_WS_Citarum_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_WS_Citarum_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WS_Citarum_3.addFeatures(features_WS_Citarum_3);
var lyr_WS_Citarum_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_WS_Citarum_3, 
                style: style_WS_Citarum_3,
                interactive: true,
                title: '<img src="styles/legend/WS_Citarum_3.png" /> WS_Citarum'
            });
var format_Area_Irigasi_Pusat_4 = new ol.format.GeoJSON();
var features_Area_Irigasi_Pusat_4 = format_Area_Irigasi_Pusat_4.readFeatures(json_Area_Irigasi_Pusat_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Area_Irigasi_Pusat_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Area_Irigasi_Pusat_4.addFeatures(features_Area_Irigasi_Pusat_4);
var lyr_Area_Irigasi_Pusat_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Area_Irigasi_Pusat_4, 
                style: style_Area_Irigasi_Pusat_4,
                interactive: true,
                title: '<img src="styles/legend/Area_Irigasi_Pusat_4.png" /> Area_Irigasi_Pusat'
            });
var format_Daerah_Irigasi_WS_Citarum_5 = new ol.format.GeoJSON();
var features_Daerah_Irigasi_WS_Citarum_5 = format_Daerah_Irigasi_WS_Citarum_5.readFeatures(json_Daerah_Irigasi_WS_Citarum_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Daerah_Irigasi_WS_Citarum_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Daerah_Irigasi_WS_Citarum_5.addFeatures(features_Daerah_Irigasi_WS_Citarum_5);
var lyr_Daerah_Irigasi_WS_Citarum_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Daerah_Irigasi_WS_Citarum_5, 
                style: style_Daerah_Irigasi_WS_Citarum_5,
                interactive: true,
                title: '<img src="styles/legend/Daerah_Irigasi_WS_Citarum_5.png" /> Daerah_Irigasi_WS_Citarum'
            });
var format_DIKewenanganPusatWSCitarum_6 = new ol.format.GeoJSON();
var features_DIKewenanganPusatWSCitarum_6 = format_DIKewenanganPusatWSCitarum_6.readFeatures(json_DIKewenanganPusatWSCitarum_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DIKewenanganPusatWSCitarum_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DIKewenanganPusatWSCitarum_6.addFeatures(features_DIKewenanganPusatWSCitarum_6);
var lyr_DIKewenanganPusatWSCitarum_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_DIKewenanganPusatWSCitarum_6, 
                style: style_DIKewenanganPusatWSCitarum_6,
                interactive: true,
                title: '<img src="styles/legend/DIKewenanganPusatWSCitarum_6.png" /> DI Kewenangan Pusat WS Citarum'
            });
var format_Daerah_Irigasi_Pusat_7 = new ol.format.GeoJSON();
var features_Daerah_Irigasi_Pusat_7 = format_Daerah_Irigasi_Pusat_7.readFeatures(json_Daerah_Irigasi_Pusat_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Daerah_Irigasi_Pusat_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Daerah_Irigasi_Pusat_7.addFeatures(features_Daerah_Irigasi_Pusat_7);
var lyr_Daerah_Irigasi_Pusat_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Daerah_Irigasi_Pusat_7, 
                style: style_Daerah_Irigasi_Pusat_7,
                interactive: true,
                title: '<img src="styles/legend/Daerah_Irigasi_Pusat_7.png" /> Daerah_Irigasi_Pusat'
            });

lyr_hybrid_0.setVisible(true);lyr_Daerah_Irigasi_Aknop_1.setVisible(true);lyr_WS_JABAR_2.setVisible(true);lyr_WS_Citarum_3.setVisible(true);lyr_Area_Irigasi_Pusat_4.setVisible(true);lyr_Daerah_Irigasi_WS_Citarum_5.setVisible(true);lyr_DIKewenanganPusatWSCitarum_6.setVisible(true);lyr_Daerah_Irigasi_Pusat_7.setVisible(true);
var layersList = [lyr_hybrid_0,lyr_Daerah_Irigasi_Aknop_1,lyr_WS_JABAR_2,lyr_WS_Citarum_3,lyr_Area_Irigasi_Pusat_4,lyr_Daerah_Irigasi_WS_Citarum_5,lyr_DIKewenanganPusatWSCitarum_6,lyr_Daerah_Irigasi_Pusat_7];
lyr_Daerah_Irigasi_Aknop_1.set('fieldAliases', {'NO': 'NO', 'X': 'X', 'Y': 'Y', 'NAMA_DAERA': 'NAMA_DAERA', 'KODE_WILAY': 'KODE_WILAY', 'NAMA_WILAY': 'NAMA_WILAY', 'NAMA_BENDU': 'NAMA_BENDU', 'JENIS_BEND': 'JENIS_BEND', 'SUMBER__AI': 'SUMBER__AI', 'LUAS__HEKT': 'LUAS__HEKT', 'KODE_PROVI': 'KODE_PROVI', 'PROVINSI': 'PROVINSI', 'KABUPATEN': 'KABUPATEN', 'KECAMATAN': 'KECAMATAN', 'DESA': 'DESA', 'PENGAMAT': 'PENGAMAT', 'POB': 'POB', 'STAFF': 'STAFF', 'OPR': 'OPR', 'PRASARANA': 'PRASARANA', });
lyr_WS_JABAR_2.set('fieldAliases', {'WS': 'WS', 'Id': 'Id', 'KODE_WS': 'KODE_WS', });
lyr_WS_Citarum_3.set('fieldAliases', {'WS': 'WS', 'Id': 'Id', 'KODE_WS': 'KODE_WS', });
lyr_Area_Irigasi_Pusat_4.set('fieldAliases', {'K_DI_LAMA': 'K_DI_LAMA', 'K_DI': 'K_DI', 'N_DI': 'N_DI', 'LUAS_HA': 'LUAS_HA', 'KECAMATAN': 'KECAMATAN', 'K_DAS': 'K_DAS', 'N_DAS': 'N_DAS', 'NAMA_DAS': 'NAMA_DAS', 'K_WS': 'K_WS', 'N_WS': 'N_WS', 'WS': 'WS', 'K_KAB': 'K_KAB', 'N_KAB': 'N_KAB', 'KABUPATEN': 'KABUPATEN', 'K_PROV': 'K_PROV', 'N_PROV': 'N_PROV', 'PROVINSI': 'PROVINSI', 'K_REGION': 'K_REGION', 'REGION': 'REGION', 'KODE': 'KODE', 'NAMA': 'NAMA', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'kode_stat': 'kode_stat', });
lyr_Daerah_Irigasi_WS_Citarum_5.set('fieldAliases', {'DI': 'DI', 'Luas_ha': 'Luas_ha', });
lyr_DIKewenanganPusatWSCitarum_6.set('fieldAliases', {'Id': 'Id', 'Nama_DI': 'Nama_DI', 'Seksi': 'Seksi', 'x': 'x', 'y': 'y', });
lyr_Daerah_Irigasi_Pusat_7.set('fieldAliases', {'NAME': 'NAME', 'LAYER': 'LAYER', 'point_id': 'point_id', 'id_excel': 'id_excel', 'nama_di': 'nama_di', 'bbws': 'bbws', 'propinsi': 'propinsi', 'pp': 'pp', 'kk': 'kk', 'wwng': 'wwng', 'kodewwng': 'kodewwng', 'stat': 'stat', 'kodestat': 'kodestat', 'stat2': 'stat2', 'kodestat2': 'kodestat2', 'keterangan': 'keterangan', 'label1': 'label1', 'label2': 'label2', 'label3': 'label3', 'label4': 'label4', 'label5': 'label5', 'label6': 'label6', 'label7': 'label7', 'label8': 'label8', 'Luasan': 'Luasan', 'noexcel': 'noexcel', 'kabupate_1': 'kabupate_1', 'x': 'x', 'y': 'y', });
lyr_Daerah_Irigasi_Aknop_1.set('fieldImages', {'NO': '', 'X': '', 'Y': '', 'NAMA_DAERA': '', 'KODE_WILAY': '', 'NAMA_WILAY': '', 'NAMA_BENDU': '', 'JENIS_BEND': '', 'SUMBER__AI': '', 'LUAS__HEKT': '', 'KODE_PROVI': '', 'PROVINSI': '', 'KABUPATEN': '', 'KECAMATAN': '', 'DESA': '', 'PENGAMAT': '', 'POB': '', 'STAFF': '', 'OPR': '', 'PRASARANA': '', });
lyr_WS_JABAR_2.set('fieldImages', {'WS': '', 'Id': '', 'KODE_WS': '', });
lyr_WS_Citarum_3.set('fieldImages', {'WS': '', 'Id': '', 'KODE_WS': '', });
lyr_Area_Irigasi_Pusat_4.set('fieldImages', {'K_DI_LAMA': '', 'K_DI': '', 'N_DI': '', 'LUAS_HA': '', 'KECAMATAN': '', 'K_DAS': '', 'N_DAS': '', 'NAMA_DAS': '', 'K_WS': '', 'N_WS': '', 'WS': '', 'K_KAB': '', 'N_KAB': '', 'KABUPATEN': '', 'K_PROV': '', 'N_PROV': '', 'PROVINSI': '', 'K_REGION': '', 'REGION': '', 'KODE': '', 'NAMA': '', 'Shape_Leng': '', 'Shape_Area': '', 'kode_stat': '', });
lyr_Daerah_Irigasi_WS_Citarum_5.set('fieldImages', {'DI': '', 'Luas_ha': '', });
lyr_DIKewenanganPusatWSCitarum_6.set('fieldImages', {'Id': '', 'Nama_DI': '', 'Seksi': '', 'x': '', 'y': '', });
lyr_Daerah_Irigasi_Pusat_7.set('fieldImages', {'NAME': '', 'LAYER': '', 'point_id': '', 'id_excel': '', 'nama_di': '', 'bbws': '', 'propinsi': '', 'pp': '', 'kk': '', 'wwng': '', 'kodewwng': '', 'stat': '', 'kodestat': '', 'stat2': '', 'kodestat2': '', 'keterangan': '', 'label1': '', 'label2': '', 'label3': '', 'label4': '', 'label5': '', 'label6': '', 'label7': '', 'label8': '', 'Luasan': '', 'noexcel': '', 'kabupate_1': '', 'x': '', 'y': '', });
lyr_Daerah_Irigasi_Aknop_1.set('fieldLabels', {'NO': 'no label', 'X': 'no label', 'Y': 'no label', 'NAMA_DAERA': 'no label', 'KODE_WILAY': 'no label', 'NAMA_WILAY': 'no label', 'NAMA_BENDU': 'no label', 'JENIS_BEND': 'no label', 'SUMBER__AI': 'no label', 'LUAS__HEKT': 'no label', 'KODE_PROVI': 'no label', 'PROVINSI': 'no label', 'KABUPATEN': 'no label', 'KECAMATAN': 'no label', 'DESA': 'no label', 'PENGAMAT': 'no label', 'POB': 'no label', 'STAFF': 'no label', 'OPR': 'no label', 'PRASARANA': 'no label', });
lyr_WS_JABAR_2.set('fieldLabels', {'WS': 'no label', 'Id': 'no label', 'KODE_WS': 'no label', });
lyr_WS_Citarum_3.set('fieldLabels', {'WS': 'no label', 'Id': 'no label', 'KODE_WS': 'no label', });
lyr_Area_Irigasi_Pusat_4.set('fieldLabels', {'K_DI_LAMA': 'no label', 'K_DI': 'no label', 'N_DI': 'no label', 'LUAS_HA': 'no label', 'KECAMATAN': 'no label', 'K_DAS': 'no label', 'N_DAS': 'no label', 'NAMA_DAS': 'no label', 'K_WS': 'no label', 'N_WS': 'no label', 'WS': 'no label', 'K_KAB': 'no label', 'N_KAB': 'no label', 'KABUPATEN': 'no label', 'K_PROV': 'no label', 'N_PROV': 'no label', 'PROVINSI': 'no label', 'K_REGION': 'no label', 'REGION': 'no label', 'KODE': 'no label', 'NAMA': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'kode_stat': 'no label', });
lyr_Daerah_Irigasi_WS_Citarum_5.set('fieldLabels', {'DI': 'no label', 'Luas_ha': 'no label', });
lyr_DIKewenanganPusatWSCitarum_6.set('fieldLabels', {'Id': 'no label', 'Nama_DI': 'no label', 'Seksi': 'no label', 'x': 'no label', 'y': 'no label', });
lyr_Daerah_Irigasi_Pusat_7.set('fieldLabels', {'NAME': 'no label', 'LAYER': 'no label', 'point_id': 'no label', 'id_excel': 'no label', 'nama_di': 'no label', 'bbws': 'no label', 'propinsi': 'no label', 'pp': 'no label', 'kk': 'no label', 'wwng': 'no label', 'kodewwng': 'no label', 'stat': 'no label', 'kodestat': 'no label', 'stat2': 'no label', 'kodestat2': 'no label', 'keterangan': 'no label', 'label1': 'no label', 'label2': 'no label', 'label3': 'no label', 'label4': 'no label', 'label5': 'no label', 'label6': 'no label', 'label7': 'no label', 'label8': 'no label', 'Luasan': 'no label', 'noexcel': 'no label', 'kabupate_1': 'no label', 'x': 'no label', 'y': 'no label', });
lyr_Daerah_Irigasi_Pusat_7.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});