enyo.kind({
    name: "MapView",
    components: [
        { name: "mapContainer", 
	  style: "height: 100%; " }, 
    ],
    published: {
    },
    events: {
        onReady: ''
    },
    initMap: function() {
        // set up the map
        map = new L.Map(this.$.mapContainer.getId(), { });
        // create the tile layer with correct attribution
        var osmUrl = 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
        var osmAttrib = 'Map data © OpenStreetMap contributors';
        osm = new L.TileLayer(osmUrl, {maxZoom: 12, attribution: osmAttrib});		
        map.setView(new L.LatLng(51.3, 0.7), 4);
        map.addLayer(osm);
        this.doReady({map: this.map});
    }, 
    rendered: function() {
        this.initMap();
    },
    
});
