import { MapLayer } from "react-leaflet";
import L from "leaflet";
import "leaflet-routing-machine";
import { withLeaflet } from "react-leaflet";
import './leafletRoutingMachine.scss';

class MapRouting extends MapLayer {

    createLeafletElement() {

        const { map, routeFrom, routeTo} = this.props;
        const waypoints = [routeFrom, routeTo];
        const icon = L.icon({
            iconUrl:
                "https://cdn0.iconfinder.com/data/icons/small-n-flat/24/678111-map-marker-512.png",
            iconSize: [40, 40]
        });

        let leafletElement = L.Routing.control({
            waypoints,
            lineOptions: {
                styles: [{ color: '#000', opacity: 0.5, weight: 4 }]
            },
            plan: L.Routing.plan(waypoints, {
                createMarker: function(i, wp) {
                    return L.marker(wp.latLng, {
                        draggable: true,
                        icon
                    });
                },
                routeWhileDragging: true
            }),
        }).addTo(map.leafletElement);

        return leafletElement.getPlan();
    }
}
export default withLeaflet(MapRouting);