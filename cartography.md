## State level

Following Bostock tutorial: https://medium.com/@mbostock/command-line-cartography-part-1-897aa8f8ca2c

`geoproject 'd3.geoAlbersUsa()' < states.json > states-albers.json`

Then:

`geo2svg -w 960 -h 960 < ca-albers.json > ca-albers.svg`

---

State population chloropleth tutorial:

http://leafletjs.com/examples/choropleth/

* Added states data - provided by Mike Bostock - linked in the above Leaflet tutorial.
* Picked colourscheme with http://colorbrewer2.org/
* Generated map access tokens with https://www.mapbox.com/studio/account/apps/
