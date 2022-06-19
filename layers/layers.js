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
var format_BJs1aBJs1akmz_1 = new ol.format.GeoJSON();
var features_BJs1aBJs1akmz_1 = format_BJs1aBJs1akmz_1.readFeatures(json_BJs1aBJs1akmz_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BJs1aBJs1akmz_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BJs1aBJs1akmz_1.addFeatures(features_BJs1aBJs1akmz_1);
var lyr_BJs1aBJs1akmz_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BJs1aBJs1akmz_1, 
                style: style_BJs1aBJs1akmz_1,
                interactive: true,
                title: 'B.Js.1a — B.Js.1a.kmz'
            });
var format_BMr7aBMr7akmz_2 = new ol.format.GeoJSON();
var features_BMr7aBMr7akmz_2 = format_BMr7aBMr7akmz_2.readFeatures(json_BMr7aBMr7akmz_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BMr7aBMr7akmz_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BMr7aBMr7akmz_2.addFeatures(features_BMr7aBMr7akmz_2);
var lyr_BMr7aBMr7akmz_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BMr7aBMr7akmz_2, 
                style: style_BMr7aBMr7akmz_2,
                interactive: true,
                title: 'B.Mr.7a — B.Mr.7a.kmz'
            });
var format_BW3BW3kmz_3 = new ol.format.GeoJSON();
var features_BW3BW3kmz_3 = format_BW3BW3kmz_3.readFeatures(json_BW3BW3kmz_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BW3BW3kmz_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BW3BW3kmz_3.addFeatures(features_BW3BW3kmz_3);
var lyr_BW3BW3kmz_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BW3BW3kmz_3, 
                style: style_BW3BW3kmz_3,
                interactive: true,
                title: 'B.W.3 — B.W.3.kmz'
            });
var format_BW7BW7kmz_4 = new ol.format.GeoJSON();
var features_BW7BW7kmz_4 = format_BW7BW7kmz_4.readFeatures(json_BW7BW7kmz_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BW7BW7kmz_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BW7BW7kmz_4.addFeatures(features_BW7BW7kmz_4);
var lyr_BW7BW7kmz_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BW7BW7kmz_4, 
                style: style_BW7BW7kmz_4,
                interactive: true,
                title: 'B.W.7 — B.W.7.kmz'
            });
var format_BW8BW8kmz_5 = new ol.format.GeoJSON();
var features_BW8BW8kmz_5 = format_BW8BW8kmz_5.readFeatures(json_BW8BW8kmz_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BW8BW8kmz_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BW8BW8kmz_5.addFeatures(features_BW8BW8kmz_5);
var lyr_BW8BW8kmz_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BW8BW8kmz_5, 
                style: style_BW8BW8kmz_5,
                interactive: true,
                title: 'B.W.8 — B.W.8.kmz'
            });
var format_BWln1aBWln1akmz_6 = new ol.format.GeoJSON();
var features_BWln1aBWln1akmz_6 = format_BWln1aBWln1akmz_6.readFeatures(json_BWln1aBWln1akmz_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BWln1aBWln1akmz_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BWln1aBWln1akmz_6.addFeatures(features_BWln1aBWln1akmz_6);
var lyr_BWln1aBWln1akmz_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BWln1aBWln1akmz_6, 
                style: style_BWln1aBWln1akmz_6,
                interactive: true,
                title: 'B.Wln.1a — B.Wln.1a.kmz'
            });

lyr_hybrid_0.setVisible(true);lyr_BJs1aBJs1akmz_1.setVisible(true);lyr_BMr7aBMr7akmz_2.setVisible(true);lyr_BW3BW3kmz_3.setVisible(true);lyr_BW7BW7kmz_4.setVisible(true);lyr_BW8BW8kmz_5.setVisible(true);lyr_BWln1aBWln1akmz_6.setVisible(true);
var layersList = [lyr_hybrid_0,lyr_BJs1aBJs1akmz_1,lyr_BMr7aBMr7akmz_2,lyr_BW3BW3kmz_3,lyr_BW7BW7kmz_4,lyr_BW8BW8kmz_5,lyr_BWln1aBWln1akmz_6];
lyr_BJs1aBJs1akmz_1.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_BMr7aBMr7akmz_2.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_BW3BW3kmz_3.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_BW7BW7kmz_4.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_BW8BW8kmz_5.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_BWln1aBWln1akmz_6.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_BJs1aBJs1akmz_1.set('fieldImages', {'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', });
lyr_BMr7aBMr7akmz_2.set('fieldImages', {'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', });
lyr_BW3BW3kmz_3.set('fieldImages', {'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', });
lyr_BW7BW7kmz_4.set('fieldImages', {'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', });
lyr_BW8BW8kmz_5.set('fieldImages', {'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', });
lyr_BWln1aBWln1akmz_6.set('fieldImages', {'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', });
lyr_BJs1aBJs1akmz_1.set('fieldLabels', {'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_BMr7aBMr7akmz_2.set('fieldLabels', {'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_BW3BW3kmz_3.set('fieldLabels', {'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_BW7BW7kmz_4.set('fieldLabels', {'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_BW8BW8kmz_5.set('fieldLabels', {'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_BWln1aBWln1akmz_6.set('fieldLabels', {'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_BWln1aBWln1akmz_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});