let myJSON = [{
    lat: 62.099878450686795, 
    lon: 26.231053268320135,
    demographic: ['finland']
    
  },
  {
    lat: 55.6560764771091, 
    lon: 10.197835692569614,
    demographic: ['finland', 'Denmark']
  },

  {
    lat: 62.02404362314949, 
    lon: 9.916173592646178,
    demographic: ['finland', 'Norway']
  },
  
  {
    lat: 65.0110256149086, 
    lon: -18.677376887789862,
    demographic: ['finland', 'Iceland']
  },

  {
    lat: 52.19845809907435, 
    lon: 5.628915067743896,
    demographic: ['finland', 'Netherlands']
  },

  {
    lat: -32.76237815215791, 
    lon: -56.083393131061534,
    demographic: ['cbLowest']
  },

  {
    lat: -8.350545104353778, 
    lon: -55.69038372020487,
    demographic: ['cbLowest', 'Brazil']
  },

  {
    lat: 8.501776250773867, 
    lon: -80.10973155008129 ,
    demographic: ['cbLowest', 'Panama']
  },
  
  {
    lat: 39.588203610550316, 
    lon: -3.0064404655894914,
    demographic: ['cbLowest', 'spain']
  },

  {
    lat: 25.320004407139873, 
    lon: 51.17288414629061  ,
    demographic: ['cbLowest', 'Quatar']
  },
  
  {
    lat: 39.588203610550316, 
    lon: -3.0064404655894914, 
    demographic: ['cbSeniors', 'spain']
  },

  {
    lat: 46.53466286420665, 
    lon: 2.8180411847753715 ,
    demographic: ['cbSeniors', 'france']
  },

  {
    lat: 60.53260954986369, 
    lon: -112.34527865445088 ,
    demographic: ['cbSeniors', 'canada']
  },

  {
    lat: 46.83637720859695, 
    lon: 7.980071239186062 ,
    demographic: ['cbSeniors', 'switz']
  },

  {
    lat: 1.3565566196095695, 
    lon: 103.86758090675134  ,
    demographic: ['cbSeniors', 'singapore']
  },

  {
    lat: 15.700805142086235, 
    lon:  -90.37083688103066 ,
    demographic: ['cbWomen', 'Guatemala']
  },
  {
    lat: 23.75437677350633, 
    lon: 45.524521570938425, 
    demographic: ['cbWomen', 'Saudi_Arabia']
  },
 
  {
    lat: -8.350545104353778, 
    lon: -55.1630399544714,
    demographic: ['cbWomen', 'Brazil']
  },
 
  {
    lat: 23.94887783848547, 
    lon: 54.10953694557463,
    demographic: ['cbWomen', 'UAE']
  },
 
  {
    lat: 23.89688282759758, 
    lon: -102.87444176531051  ,
    demographic: ['cbWomen', 'Mexico']
  },
 
 
]

var greenIcon = new L.Icon({
  iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

var redIcon = new L.Icon({
  iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

var yellowIcon = new L.Icon({
  iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-yellow.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

var blackIcon = new L.Icon({
  iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-black.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

let map = L.map('map').setView([40, 0], 1);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);


let myMarkers = L.featureGroup().addTo(map);

filter();
btnForm.onclick = () => filter();

function filter() {

  myMarkers.clearLayers();

  let myJSONcopy = JSON.parse(JSON.stringify(myJSON));

  let categories = [];

  if (cbLowest.checked) {
    categories.push('cbLowest');
    L.marker([-32.76237815215791, -56.083393131061534], {icon: redIcon}).addTo(map).bindTooltip('Uruguay',{offset: [0, -30]});
    L.circle([-32.76237815215791, -56.083393131061534], 300000, {
      color: 'red',
      fillColor: '#f03',
      fillOpacity: 0.5
    }).addTo(map);

    L.marker([-8.350545104353778, -55.69038372020487], {icon: redIcon}).addTo(map).bindTooltip('Brazil',{offset: [0, -30]});
    L.circle([-8.350545104353778, -55.69038372020487], 300000, {
      color: 'red',
      fillColor: '#f03',
      fillOpacity: 0.5
    }).addTo(map);

    L.marker([8.501776250773867, -80.10973155008129], {icon: redIcon}).addTo(map).addTo(map).bindTooltip('Panama',{offset: [0, -30]});
    L.circle([8.501776250773867, -80.10973155008129], 300000, {
      color: 'red',
      fillColor: '#f03',
      fillOpacity: 0.5
    }).addTo(map);

    L.marker([39.588203610550316, -3.0064404655894914], {icon: redIcon}).addTo(map).addTo(map).bindTooltip('Spain',{offset: [0, -30]});
    L.circle([39.588203610550316, -3.0064404655894914], 300000, {
      color: 'red',
      fillColor: '#f03',
      fillOpacity: 0.5
    }).addTo(map);

    L.marker([25.320004407139873, 51.17288414629061], {icon: redIcon}).addTo(map).addTo(map).bindTooltip('Quatar',{offset: [0, -30]});
    L.circle([25.320004407139873, 51.17288414629061], 300000, {
      color: 'red',
      fillColor: '#f03',
      fillOpacity: 0.5
    }).addTo(map);

  }
  if (cbFinland.checked) {
    categories.push('finland')
    L.marker([62.099878450686795, 26.231053268320135], {icon: greenIcon}).addTo(map).addTo(map).bindTooltip('Finland',{offset: [0, -30]});
    L.circle([62.099878450686795, 26.231053268320135], 300000, {
      color: 'green',
      fillColor: '#19ab55',
      fillOpacity: 0.5
    }).addTo(map);
	
    L.marker([55.6560764771091, 10.197835692569614], {icon: greenIcon}).addTo(map).addTo(map).bindTooltip('Denmark',{offset: [0, -30]});
    L.circle([55.6560764771091, 10.197835692569614], 300000, {
      color: 'green',
      fillColor: '#19ab55',
      fillOpacity: 0.5
    }).addTo(map);
		
    L.marker([62.02404362314949, 9.916173592646178], {icon: greenIcon}).addTo(map).addTo(map).bindTooltip('Norway',{offset: [0, -30]});
    L.circle([62.02404362314949, 9.916173592646178], 300000, {
      color: 'green',
      fillColor: '#19ab55',
      fillOpacity: 0.5
    }).addTo(map);

    L.marker([65.0110256149086, -18.677376887789862], {icon: greenIcon}).addTo(map).addTo(map).bindTooltip('Iceland',{offset: [0, -30]});;
    L.circle([65.0110256149086, -18.677376887789862], 300000, {
      color: 'green',
      fillColor: '#19ab55',
      fillOpacity: 0.5
    }).addTo(map);

    L.marker([52.19845809907435, 5.628915067743896], {icon: greenIcon}).addTo(map).addTo(map).bindTooltip('Netherlands',{offset: [0, -30]});;
    L.circle([52.19845809907435, 5.628915067743896], 300000, {
      color: 'green',
      fillColor: '#19ab55',
      fillOpacity: 0.5
    }).addTo(map);

  


  
    
    
  }
  if (cbSeniors.checked) {
    categories.push('cbSeniors')
    L.marker([39.588203610550316, -3.0064404655894914], {icon: yellowIcon}).addTo(map).addTo(map).bindTooltip('Spain',{offset: [0, -30]});;
    L.circle([39.588203610550316, -3.0064404655894914], 300000, {
      color: 'yellown',
      fillColor: '#FFFF00',
      fillOpacity: 0.5
    }).addTo(map);

    L.marker([46.53466286420665, 2.8180411847753715 ], {icon: yellowIcon}).addTo(map).addTo(map).bindTooltip('France',{offset: [0, -30]});;
    L.circle([46.53466286420665, 2.8180411847753715 ], 300000, {
      color: 'yellow',
      fillColor: '#FFFF00',
      fillOpacity: 0.5
    }).addTo(map);

    L.marker([60.53260954986369, -112.34527865445088], {icon: yellowIcon}).addTo(map).addTo(map).bindTooltip('Canada',{offset: [0, -30]});;
    L.circle([60.53260954986369, -112.34527865445088], 300000, {
      color: 'yellow',
      fillColor: '#FFFF00',
      fillOpacity: 0.5
    }).addTo(map);

    L.marker([46.83637720859695, 7.980071239186062], {icon: yellowIcon}).addTo(map).addTo(map).bindTooltip('Switzerland',{offset: [0, -30]});;
    L.circle([46.83637720859695, 7.980071239186062], 300000, {
      color: 'yellow',
      fillColor: '#FFFF00',
      fillOpacity: 0.5
    }).addTo(map);

    L.marker([1.3565566196095695, 103.86758090675134], {icon: yellowIcon}).addTo(map).addTo(map).bindTooltip('Singapore',{offset: [0, -30]});;
    L.circle([1.3565566196095695, 103.86758090675134], 300000, {
      color: 'yellow',
      fillColor: '#FFFF00',
      fillOpacity: 0.5
    }).addTo(map);

  }
  if (cbMen.checked) {
    categories.push('men');
    
  }
  if (cbWomen.checked) {
    categories.push('cbWomen');
    L.marker([15.700805142086235, -90.37083688103066], {icon: blackIcon}).addTo(map).addTo(map).bindTooltip('Guatemela',{offset: [0, -30]});;
    L.circle([15.700805142086235, -90.37083688103066], 300000, {
      color: 'black',
      fillColor: '#	000000',
      fillOpacity: 0.5
    }).addTo(map);
    L.marker([23.75437677350633, 45.524521570938425], {icon: blackIcon}).addTo(map).addTo(map).bindTooltip('Saudi Arabia',{offset: [0, -30]});;
    L.circle([23.75437677350633, 45.524521570938425], 300000, {
      color: 'black',
      fillColor: '#	000000',
      fillOpacity: 0.5
    }).addTo(map);
    L.marker([-8.350545104353778, -55.1630399544714], {icon: blackIcon}).addTo(map).addTo(map).bindTooltip('Brazil',{offset: [0, -30]});;
    L.circle([-8.350545104353778, -55.1630399544714], 300000, {
      color: 'black',
      fillColor: '#	000000',
      fillOpacity: 0.5
    }).addTo(map);
    L.marker([23.94887783848547, 54.10953694557463], {icon: blackIcon}).addTo(map).addTo(map).bindTooltip('UAE',{offset: [0, -30]});;
    L.circle([23.94887783848547, 54.10953694557463], 300000, {
      color: 'black',
      fillColor: '#	000000',
      fillOpacity: 0.5
    }).addTo(map);
    L.marker([23.89688282759758, -102.87444176531051], {icon: blackIcon}).addTo(map).addTo(map).bindTooltip('Mexico',{offset: [0, -30]});;
    L.circle([23.89688282759758, -102.87444176531051], 300000, {
      color: 'black',
      fillColor: '#	000000',
      fillOpacity: 0.5
    }).addTo(map);
  }


  for (let i = 0; i < myJSONcopy.length; i++) {
    for (let j = 0; j < categories.length; j++) {
      for (let k = 0; k < myJSONcopy[i].demographic.length; k++)
        if (categories[j] == myJSONcopy[i].demographic[k] && !myJSONcopy[i].added) {
          L.circleMarker([myJSONcopy[i].lat, myJSONcopy[i].lon]).addTo(myMarkers);
          myJSONcopy[i].added = true;
          break;
        }
    }
  }
}
