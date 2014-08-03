(function() {
	var isReady = false;
  Polymer('arcgis-map', {
    lat: -56.049,
		long: 38.485,
		map: {},
		ready: function() {
      var c = this;

      require([
        "esri/map",
      ], function(Map) {

        c.map = new Map(c.$.mapDiv, {
          center: [c.lat, c.long],
          zoom: 3,
          basemap: "streets"
        });
      });
    },

		centerAt: function(lat, long){
			var c = this;
			c.lat=lat;
			c.long=long;

			require([
			  "esri/geometry/Point"
			], function(Point) {
			  c.map.centerAt(new Point(c.lat, c.long));
			});
		}
  });

})();
