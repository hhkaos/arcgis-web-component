(function() {
	var isReady = false;
  Polymer('arcgis-map', {
    owner: "Daniel",
		ready: function() {
        var map;
        var elem = this.$.mapDiv;
        //var mapDiv = document.createElement("div");
        //document.body.appendChild(t);

        require([
          "esri/map",
          //"dojo/domReady!"
        ], function(Map) {
          //debugger
          //Eleme debería ser el ID no el elemento
          map = new Map(elem, {
            center: [-56.049, 38.485], //Latitud y longitud
            zoom: 3,
            basemap: "streets"
          });
        });
      }
    }
  );
})();
