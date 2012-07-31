function processMapXML(data) {
    $(data).each(function() {
        var pm_group = this;

        if (pm_group.latitude && pm_group.longitude && pm_group.status == 'active') {

            var myLatlng = new google.maps.LatLng(pm_group.latitude, pm_group.longitude);

            var marker = new google.maps.Marker({
                position: myLatlng,
                map: PM.map,
                title: pm_group.name
            });

            var msg = "<h3>";
            msg = msg + "<a href='" + pm_group.web + "'>" + pm_group.name + "</a><br/>";
            msg = msg + "</h3>";

            var infowindow = new google.maps.InfoWindow({
                content: msg
            });

            google.maps.event.addListener(marker, 'click',
            function() {
                infowindow.open(PM.map, marker);
            });
        }
    });
};