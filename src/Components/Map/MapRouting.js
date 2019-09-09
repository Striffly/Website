import { MapLayer } from "react-leaflet";
import L from "leaflet";
import "leaflet-routing-machine";
import { withLeaflet } from "react-leaflet";
//import './leafletRoutingMachine.scss'; override css with custom css
import 'leaflet-routing-machine/dist/leaflet-routing-machine.css';


class MapRouting extends MapLayer {

    createLeafletElement() {

        const { map, routeFrom, routeTo} = this.props;
        const waypoints = [routeFrom, routeTo];

        let leafletElement = L.Routing.control({
            waypoints,
            showAlternatives: true,
            lineOptions: {
                styles: [{color: 'red', opacity: 0.5, weight: 6 }]
            },
            altLineOptions: {
                styles: [{color: '#000', opacity: 0.4, weight: 4}] },
            addWaypoints: true,
            draggableWaypoints: true,
            plan: L.Routing.plan(waypoints, {
                createMarker: function(i, wp) {
                    return L.marker(wp.latLng, {
                        draggable: true,
                    });
                },
                routeWhileDragging: true
            }),
        }).addTo(map.leafletElement);

        return leafletElement.getPlan();
    }
}
export default withLeaflet(MapRouting);