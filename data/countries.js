// location := [latitude, longitude]
var colors = [
{ color: 'blue',
	countries: [
	// Asia - 7
	{ name: 'Korea',
		code: 'kor',
		cities: [
			{ location: [37.57, 127.98], name: 'Seoul' },
			{ location: [35.43, 127.41], name: 'Jeonju' },
			{ location: [35.18, 129.08], name: 'Busan' },
			{ location: [33.30, 126.32], name: 'Jeju' }
		] },
	{ name: 'Japan',
		code: 'jap',
		cities: [
			{ location: [35.69, 139.69], name: 'Tokyo' },
			{ location: [35.44, 139.64], name: 'Yokohama' },
			{ location: [34.69, 135.50], name: 'Osaka' },
			{ location: [33.59, 130.40], name: 'Fukuoka' },
			{ location: [33.13, 130.06], name: 'Ureshino' },
			{ location: [43.06, 141.35], name: 'Sapporo' },
			{ location: [43.19, 140.99], name: 'Otaru' },
			{ location: [43.59, 142.47], name: 'Biei' }
		] },
	{ name: 'Cambodia',
		code: 'khm',
		cities: [
			{ location: [11.54, 104.89], name: 'Phnom Penh' }
		] },
	{ name: 'China',
		code: 'chn',
		cities: [
			{ location: [22.40, 114.11], name: 'Hong Kong' },
			{ location: [22.19, 113.54], name: 'Macau' }
		] },
	{ name: 'Mongolia',
		code: 'mng',
		cities: [
			{ location: [47.89, 106.91], name: 'Ulaanbaatar' }
		] },
	{ name: 'Nepal',
		code: 'npl',
		cities: [
			{ location: [27.72, 85.32], name: 'Katmandu' }
		] },
	{ name: 'North Korea',
		code: 'prk',
		cities: [
			{ location: [38.49, 128.02], name: 'Mt. Kumgang' }
		] },
	{ name: 'Taiwan',
		code: 'twn',
		cities: [
			{ location: [25.03, 121.57], name: 'Taipei' }
		] },
	{ name: 'Philippines',
		code: 'phl',
		cities: [
			{ location: [11.98, 121.92], name: 'Boracay' }
		] },
	{ name: 'Qatar',
		code: 'qat',
		cities: [
			{ location: [25.29, 51.53], name: 'Doha' },
			{ location: [24.90, 51.51], name: 'Sealine Beach' }
		] },

	// Oceania -2
	{ name: 'Australia',
		code: 'aus',
		cities: [
			{ location: [-33.87, 151.21], name: 'Sydney' },
			{ location: [-37.81, 144.96], name: 'Melbourne' },
			{ location: [-31.95, 115.86], name: 'Perth' }
		] },
	{ name: 'New Zealand',
		code: 'nzl',
		cities: [
			{ location: [-36.85, 174.76], name: 'Auckland' }
		] },

	// Europe - 17
	{ name: 'Austria',
		code: 'aut',
		cities: [
			{ location: [48.21, 16.37], name: 'Vienna' },
			{ location: [47.81, 13.06], name: 'Salzburg' }
		] },
	{ name: 'Belgium',
		code: 'bel',
		cities: [
			{ location: [50.85, 4.35], name: 'Brussels' },
			{ location: [51.21, 3.22], name: 'Brugge' }
		] },
	{ name: 'Croatia',
		code: 'hrv',
		cities: [
			{ location: [45.82, 15.97], name: 'Zagreb' },
			{ location: [44.53, 15.37], name: 'Plitvice' },
			{ location: [43.51, 16.44], name: 'Split' },
			{ location: [42.65, 18.09], name: 'Dubrovnik' }
		] },
	{ name: 'Czech',
		code: 'cze',
		cities: [
			{ location: [50.08, 14.44], name: 'Prague' }
		] },
	{ name: 'Germany',
		code: 'deu',
		cities: [
			{ location: [48.14, 11.58], name: 'Munich' },
			{ location: [47.57, 10.70], name: 'Fussen' }
		] },
	{ name: 'Estonia',
		code: 'est',
		cities: [
			{ location: [59.43, 24.75], name: 'Tallinn' }
		] },
	{ name: 'Finland',
		code: 'fin',
		cities: [
			{ location: [60.17, 24.94], name: 'Helsinki' }
		] },
	{ name: 'France',
		code: 'fra',
		cities: [
			{ location: [48.86, 2.35], name: 'Paris' },
			{ location: [47.32, 5.04], name: 'Dijon' },
			{ location: [45.76, 4.84], name: 'Lyon' },
			{ location: [43.29, 5.37], name: 'Marseille' },
			{ location: [43.71, 7.26], name: 'Nice' } // + Arles, Avignon, Aix-en-provence
		] },
	{ name: 'Italy',
		code: 'ita',
		cities: [
			{ location: [41.90, 12.50], name: 'Rome' },
			{ location: [43.77, 11.26], name: 'Florence' },
			{ location: [45.44, 12.32], name: 'Venice' }
		] },
	{ name: 'Latvia',
		code: 'lva',
		cities: [
			{ location: [56.95, 24.11], name: 'Riga' }
		] },
	{ name: 'Luxemburg',
		code: 'lux',
		cities: [
			{ location: [49.82, 6.13], name: 'Luxemburg City' }
		] },
	{ name: 'Monaco',
		code: 'mco',
		cities: [
			{ location: [43.74, 7.42], name: 'Monaco' }
		] },
	{ name: 'Netherlands',
		code: 'nld',
		cities: [
			{ location: [52.37, 4.90], name: 'Amsterdam' }
		] },
	{ name: 'Russia',
		code: 'rus',
		cities: [
			{ location: [55.76, 37.62], name: 'Moscow' },
			{ location: [56.30, 43.94], name: 'Nizhny Novogorod' },
			{ location: [47.24, 39.70], name: 'Rostov-on-Don' },
			{ location: [55.83, 49.07], name: 'Kazan' },
			{ location: [59.93, 30.34], name: 'Saint Petersburg' }
		] },
	{ name: 'Spain',
		code: 'esp',
		cities: [
			{ location: [41.39, 2.17], name: 'Barcelona' }
		] },
	{ name: 'Sweden',
		code: 'swe',
		cities: [
			{ location: [59.33, 18.07], name: 'Stockholm' }
		] },
	{ name: 'Switzerland',
		code: 'che',
		cities: [
			{ location: [46.69, 7.86], name: 'Interlaken' },
			{ location: [46.20, 6.14], name: 'Geneva' }
		] },
	{ name: 'UK',
		code: 'gbr',
		cities: [
			{ location: [51.51, 0.13], name: 'London' }
		] },
	
	// Africa - 5 
	{ name: 'Botswana',
		code: 'bwa',
		cities: [
			{ location: [-18.67, 24.50], name: 'Chobe National Park' }
		] },
	{ name: 'Morocco',
		code: 'mar',
		cities: [
			{ location: [33.97, -6.85], name: 'Rabat' },
			{ location: [33.57, -7.59], name: 'Casablanca' }
		] },
	{ name: 'South Africa',
		code: 'zaf',
		cities: [
			{ location: [-33.92, 18.42], name: 'Cape Town' },
			{ location: [-34.36, 18.47], name: 'Cape of Good Hope' }
		] },
	{ name: 'Zambia',
		code: 'zmb',
		cities: [
			{ location: [-17.85, 25.83], name: 'Livingstone' }
		] },
	{ name: 'Zimbabwe',
		code: 'zwe',
		cities: [
			{ location: [-17.92, 25.86], name: 'Victoria Falls' }
		] },
	
	// North America - 2
	{ name: 'Canada',
		code: 'can',
		cities: [
			{ location: [49.28, -123.12], name: 'Vancouver' },
			{ location: [46.81, -71.21], name: 'Quebec' },
			{ location: [43.65, -79.38], name: 'Toronto' },
			{ location: [45.42, -75.70], name: 'Ottawa' },
		] },
	{ name: 'USA',
		code: 'usa',
		cities: [
			{ location: [37.77, -122.42], name: 'San Francisco' },
			{ location: [37.34, -121.89], name: 'San Jose' }, // + Monterey
			{ location: [34.05, -118.24], name: 'Los Angeles' },
			{ location: [32.72, -117.16], name: 'San Diego' },
			{ location: [39.10, -120.03], name: 'Tahoe' },
			{ location: [47.61, -122.33], name: 'Seattle' },
			{ location: [36.17, -115.14], name: 'Las Vegas' },
			{ location: [40.71, -74.01], name: 'New York' },
			{ location: [42.36, -71.06], name: 'Boston' },
			{ location: [39.95, -75.17], name: 'Philadelphia' },
		] },
	
	// South America - 5
	{ name: 'Argentina',
		code: 'arg',
		cities: [
			{ location: [-34.60, -58.38], name: 'Buenos Aires' },
			{ location: [-54.80, -68.30], name: 'Ushuaia' }
		] },
	{ name: 'Bolivia',
		code: 'bol',
		cities: [
			{ location: [-16.49, -68.12], name: 'La Paz' },
			{ location: [-16.17, -69.09], name: 'Copacabana' },
			{ location: [-20.13, -67.49], name: 'Salar de Uyuni' }
		] },
	{ name: 'Brazil',
		code: 'bra',
		cities: [
			{ location: [-22.91, -43.17], name: 'Rio de Janeiro' },
			{ location: [-25.70, -54.44], name: 'Iguazu Falls' }
		] },
	{ name: 'Chile',
		code: 'chl',
		cities: [
			{ location: [-33.45, -70.67], name: 'Santiago' },
			{ location: [-23.86, -69.13], name: 'Atacama' }
		] },
	{ name: 'Peru',
		code: 'per',
		cities: [
			{ location: [-12.05, -77.04], name: 'Lima' },
			{ location: [-15.84, -70.02], name: 'Puno' },
			{ location: [-13.16, -72.55], name: 'Machu Picchu' },
			{ location: [-14.74, -75.13], name: 'Nazca Lines' },
		] },

	{ name: 'Dummy',
		cities: [
		] }
	]
},
{ color: 'FireBrick',
	countries: [
	// Asia
	/*
	{ name: 'Singapore',
		cities: [
			{ location: [1.35, 103.82], name: 'Singapore' }
		] },
	*/
	{ name: 'Dummy',
		cities: [
		] }
	]
}
];

