var wms_layers = [];

var format_AlbertaBoundary_0 = new ol.format.GeoJSON();
var features_AlbertaBoundary_0 = format_AlbertaBoundary_0.readFeatures(json_AlbertaBoundary_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AlbertaBoundary_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AlbertaBoundary_0.addFeatures(features_AlbertaBoundary_0);
var lyr_AlbertaBoundary_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AlbertaBoundary_0, 
                style: style_AlbertaBoundary_0,
                popuplayertitle: "AlbertaBoundary",
                interactive: false,
                title: '<img src="styles/legend/AlbertaBoundary_0.png" /> AlbertaBoundary'
            });
var format_ghy_000c11a_eshp_1 = new ol.format.GeoJSON();
var features_ghy_000c11a_eshp_1 = format_ghy_000c11a_eshp_1.readFeatures(json_ghy_000c11a_eshp_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ghy_000c11a_eshp_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ghy_000c11a_eshp_1.addFeatures(features_ghy_000c11a_eshp_1);
var lyr_ghy_000c11a_eshp_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ghy_000c11a_eshp_1, 
                style: style_ghy_000c11a_eshp_1,
                popuplayertitle: "ghy_000c11a_e.shp",
                interactive: false,
                title: '<img src="styles/legend/ghy_000c11a_eshp_1.png" /> ghy_000c11a_e.shp'
            });
var format_Fish_Stocking_Points_2 = new ol.format.GeoJSON();
var features_Fish_Stocking_Points_2 = format_Fish_Stocking_Points_2.readFeatures(json_Fish_Stocking_Points_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Fish_Stocking_Points_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Fish_Stocking_Points_2.addFeatures(features_Fish_Stocking_Points_2);
var lyr_Fish_Stocking_Points_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Fish_Stocking_Points_2, 
                style: style_Fish_Stocking_Points_2,
                popuplayertitle: "Fish_Stocking_Points",
                interactive: true,
    title: 'Fish_Stocking_Points<br />\
    <img src="styles/legend/Fish_Stocking_Points_2_0.png" /> 0 - 2550<br />\
    <img src="styles/legend/Fish_Stocking_Points_2_1.png" /> 2550 - 8120<br />\
    <img src="styles/legend/Fish_Stocking_Points_2_2.png" /> 8120 - 23500<br />\
    <img src="styles/legend/Fish_Stocking_Points_2_3.png" /> 23500 - 110000<br />\
    <img src="styles/legend/Fish_Stocking_Points_2_4.png" /> 110000 - 1613075<br />'
        });

lyr_AlbertaBoundary_0.setVisible(true);lyr_ghy_000c11a_eshp_1.setVisible(true);lyr_Fish_Stocking_Points_2.setVisible(true);
var layersList = [lyr_AlbertaBoundary_0,lyr_ghy_000c11a_eshp_1,lyr_Fish_Stocking_Points_2];
lyr_AlbertaBoundary_0.set('fieldAliases', {'PRUID': 'PRUID', 'DGUID': 'DGUID', 'PRNAME': 'PRNAME', 'PRENAME': 'PRENAME', 'PRFNAME': 'PRFNAME', 'PREABBR': 'PREABBR', 'PRFABBR': 'PRFABBR', 'LANDAREA': 'LANDAREA', });
lyr_ghy_000c11a_eshp_1.set('fieldAliases', {'HYDROUID': 'HYDROUID', 'NAME': 'NAME', 'RANK': 'RANK', 'PRUID': 'PRUID', });
lyr_Fish_Stocking_Points_2.set('fieldAliases', {'DISTRICT': 'DISTRICT', 'WATERBODY': 'WATERBODY', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'SPECIES': 'SPECIES', 'GENOTYPE': 'GENOTYPE', 'STOCKED -': 'STOCKED -', 'STOCKING N': 'STOCKING N', 'PLANNED ST': 'PLANNED ST', 'Map Author': 'Map Author', 'NumStock': 'NumStock', });
lyr_AlbertaBoundary_0.set('fieldImages', {'PRUID': 'TextEdit', 'DGUID': 'TextEdit', 'PRNAME': 'TextEdit', 'PRENAME': 'TextEdit', 'PRFNAME': 'TextEdit', 'PREABBR': 'TextEdit', 'PRFABBR': 'TextEdit', 'LANDAREA': 'TextEdit', });
lyr_ghy_000c11a_eshp_1.set('fieldImages', {'HYDROUID': 'TextEdit', 'NAME': 'TextEdit', 'RANK': 'Range', 'PRUID': 'TextEdit', });
lyr_Fish_Stocking_Points_2.set('fieldImages', {'DISTRICT': 'TextEdit', 'WATERBODY': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'SPECIES': 'TextEdit', 'GENOTYPE': 'TextEdit', 'STOCKED -': 'TextEdit', 'STOCKING N': 'TextEdit', 'PLANNED ST': 'TextEdit', 'Map Author': 'TextEdit', 'NumStock': 'Range', });
lyr_AlbertaBoundary_0.set('fieldLabels', {'PRUID': 'no label', 'DGUID': 'no label', 'PRNAME': 'no label', 'PRENAME': 'no label', 'PRFNAME': 'no label', 'PREABBR': 'no label', 'PRFABBR': 'no label', 'LANDAREA': 'no label', });
lyr_ghy_000c11a_eshp_1.set('fieldLabels', {'HYDROUID': 'no label', 'NAME': 'no label', 'RANK': 'no label', 'PRUID': 'no label', });
lyr_Fish_Stocking_Points_2.set('fieldLabels', {'DISTRICT': 'inline label - visible with data', 'WATERBODY': 'inline label - visible with data', 'Latitude': 'hidden field', 'Longitude': 'hidden field', 'SPECIES': 'inline label - visible with data', 'GENOTYPE': 'inline label - visible with data', 'STOCKED -': 'hidden field', 'STOCKING N': 'hidden field', 'PLANNED ST': 'hidden field', 'Map Author': 'header label - always visible', 'NumStock': 'inline label - always visible', });
lyr_Fish_Stocking_Points_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});