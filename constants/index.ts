type CountryCoordinates = {
    id: string;
    text: string;
    country: string;
    lat: number;
    lng: number;
}

type CountriesDetails = {
    coordinates: CountryCoordinates[]
}


// for globe.gl S & W are -
export const countries: CountriesDetails = {
    coordinates: [
        {
            id: 'label', 
            text: 'AE', 
            country: 'United Arab Emirates', 
            lat: 23.4241, 
            lng: 53.8478
        }, 
        {
            id: 'label', 
            text: 'BW', 
            country: 'Botswana', 
            lat: -22.3285, 
            lng: 24.6849
        }, 
        {
            id: 'label', 
            text: 'CD', 
            country: 'Congo [DRC]', 
            lat: -4.0383, 
            lng: 21.7587
        }, 
        {
            id: 'label', 
            text: 'CI', 
            country: "Côte d'Ivoire", 
            lat: 7.54, 
            lng: -5.5471
        }, 
        {
            id: 'label', 
            text: 'CM', 
            country: 'Cameroon', 
            lat: 7.3697, 
            lng: 12.3547
        }, 
        {
            id: 'label', 
            text: 'DZ', 
            country: 'Algeria', 
            lat: 28.0339, 
            lng: 1.6596
        }, 
        {
            id: 'label', 
            text: 'GH', 
            country: 'Ghana', 
            lat: 7.9465, 
            lng: -1.0232
        }, 
        {
            id: 'label', 
            text: 'IN', 
            country: 'India', 
            lat: 20.5937, 
            lng: 78.9629
        }, 
        {
            id: 'label', 
            text: 'KE', 
            country: 'Kenya', 
            lat: -0.0236, 
            lng: 37.9062
        }, 
        {
            id: 'label', 
            text: 'LR', 
            country: 'Liberia', 
            lat: 6.4281, 
            lng: -9.4295
        }, 
        {
            id: 'label', 
            text: 'LY', 
            country: 'Libya', 
            lat: 26.3351, 
            lng: 17.2283
        }, 
        {
            id: 'label', 
            text: 'MA', 
            country: 'Morocco', 
            lat: 31.7917, 
            lng: -7.0926
        }, 
        {
            id: 'label', 
            text: 'MU', 
            country: 'Mauritius', 
            lat: -20.3484, 
            lng: 57.5522
        }, 
        {
            id: 'label', 
            text: 'MW', 
            country: 'Malawi', 
            lat: -13.2543, 
            lng: 34.3015
        }, 
        {
            id: 'label', 
            text: 'MZ', 
            country: 'Mozambique', 
            lat: -18.6657, 
            lng: 35.5296
        }, 
        {
            id: 'label', 
            text: 'NA', 
            country: 'Namibia', 
            lat: -22.9576, 
            lng: 18.4904
        }, 
        {
            id: 'label', 
            text: 'NG', 
            country: 'Nigeria', 
            lat: 9.082, 
            lng: 8.6753
        }, 
        {
            id: 'label', 
            text: 'OM', 
            country: 'Oman', 
            lat: 21.5126, 
            lng: 55.9233
        }, 
        {
            id: 'label', 
            text: 'QA', 
            country: 'Qatar', 
            lat: 25.3548, 
            lng: 51.1839
        }, 
        {
            id: 'label', 
            text: 'SA', 
            country: 'Saudi Arabia', 
            lat: 23.8859, 
            lng: 45.0792
        }, 
        {
            id: 'label', 
            text: 'TG', 
            country: 'Togo', 
            lat: 8.6195, 
            lng: 0.8248
        }, 
        {
            id: 'label', 
            text: 'TZ', 
            country: 'Tanzania', 
            lat: -6.369, 
            lng: 34.8888
        }, 
        {
            id: 'label', 
            text: 'UG', 
            country: 'Uganda', 
            lat: 1.3733, 
            lng: 32.2903
        }, 
        {
            id: 'label', 
            text: 'ZA', 
            country: 'South Africa', 
            lat: -28.1902,
            lng: 26.1720,
        }, 
        {
            id: 'label', 
            text: 'ZM', 
            country: 'Zambia', 
            lat: -13.1339, 
            lng: 27.8493
        }
    ]
}

export const lines = {
    pulls: [
        {
            type: 'pull', 
            order: Math.random(), 
            from: 'ZA', 
            to: 'AE', 
            startLat: -28.1902, 
            startLng: 26.172, 
            endLat: 23.4241, 
            endLng: 53.8478
        }, 
        {
            type: 'pull', 
            order: Math.random(), 
            from: 'ZA', 
            to: 'BW', 
            startLat: -28.1902, 
            startLng: 26.172, 
            endLat: -22.3285, 
            endLng: 24.6849
        }, 
        {
            type: 'pull', 
            order: Math.random(), 
            from: 'ZA', 
            to: 'CD', 
            startLat: -28.1902, 
            startLng: 26.172, 
            endLat: -4.0383, 
            endLng: 21.7587
        }, 
        {
            type: 'pull', 
            order: Math.random(), 
            from: 'ZA', 
            to: 'CI', 
            startLat: -28.1902, 
            startLng: 26.172, 
            endLat: 7.54, 
            endLng: -5.5471
        }, 
        {
            type: 'pull', 
            order: Math.random(), 
            from: 'ZA', 
            to: 'CM', 
            startLat: -28.1902, 
            startLng: 26.172, 
            endLat: 7.3697, 
            endLng: 12.3547
        }, 
        {
            type: 'pull', 
            order: Math.random(), 
            from: 'ZA', 
            to: 'DZ', 
            startLat: -28.1902, 
            startLng: 26.172, 
            endLat: 28.0339, 
            endLng: 1.6596
        }, 
        {
            type: 'pull', 
            order: Math.random(), 
            from: 'ZA', 
            to: 'GH', 
            startLat: -28.1902, 
            startLng: 26.172, 
            endLat: 7.9465, 
            endLng: -1.0232
        }, 
        {
            type: 'pull', 
            order: Math.random(), 
            from: 'ZA', 
            to: 'IN', 
            startLat: -28.1902, 
            startLng: 26.172, 
            endLat: 20.5937, 
            endLng: 78.9629
        }, 
        {
            type: 'pull', 
            order: Math.random(), 
            from: 'ZA', 
            to: 'KE', 
            startLat: -28.1902, 
            startLng: 26.172, 
            endLat: -0.0236, 
            endLng: 37.9062
        }, 
        {
            type: 'pull', 
            order: Math.random(), 
            from: 'ZA', 
            to: 'LR', 
            startLat: -28.1902, 
            startLng: 26.172, 
            endLat: 6.4281, 
            endLng: -9.4295
        }, 
        {
            type: 'pull', 
            order: Math.random(), 
            from: 'ZA', 
            to: 'LY', 
            startLat: -28.1902, 
            startLng: 26.172, 
            endLat: 26.3351, 
            endLng: 17.2283
        }, 
        {
            type: 'pull', 
            order: Math.random(), 
            from: 'ZA', 
            to: 'MA', 
            startLat: -28.1902, 
            startLng: 26.172, 
            endLat: 31.7917, 
            endLng: -7.0926
        }, 
        {
            type: 'pull', 
            order: Math.random(), 
            from: 'ZA', 
            to: 'MU', 
            startLat: -28.1902, 
            startLng: 26.172, 
            endLat: -20.3484, 
            endLng: 57.5522
        }, 
        {
            type: 'pull', 
            order: Math.random(), 
            from: 'ZA', 
            to: 'MW', 
            startLat: -28.1902, 
            startLng: 26.172, 
            endLat: -13.2543, 
            endLng: 34.3015
        }, 
        {
            type: 'pull', 
            order: Math.random(), 
            from: 'ZA', 
            to: 'MZ', 
            startLat: -28.1902, 
            startLng: 26.172, 
            endLat: -18.6657, 
            endLng: 35.5296
        }, 
        {
            type: 'pull', 
            order: Math.random(), 
            from: 'ZA', 
            to: 'NA', 
            startLat: -28.1902, 
            startLng: 26.172, 
            endLat: -22.9576, 
            endLng: 18.4904
        }, 
        {
            type: 'pull', 
            order: Math.random(), 
            from: 'ZA', 
            to: 'NG', 
            startLat: -28.1902, 
            startLng: 26.172, 
            endLat: 9.082, 
            endLng: 8.6753
        }, 
        {
            type: 'pull', 
            order: Math.random(), 
            from: 'ZA', 
            to: 'OM', 
            startLat: -28.1902, 
            startLng: 26.172, 
            endLat: 21.5126, 
            endLng: 55.9233
        }, 
        {
            type: 'pull', 
            order: Math.random(), 
            from: 'ZA', 
            to: 'QA', 
            startLat: -28.1902, 
            startLng: 26.172, 
            endLat: 25.3548, 
            endLng: 51.1839
        }, 
        {
            type: 'pull', 
            order: Math.random(), 
            from: 'ZA', 
            to: 'SA', 
            startLat: -28.1902, 
            startLng: 26.172, 
            endLat: 23.8859, 
            endLng: 45.0792
        }, 
        {
            type: 'pull', 
            order: Math.random(), 
            from: 'ZA', 
            to: 'TG', 
            startLat: -28.1902, 
            startLng: 26.172, 
            endLat: 8.6195, 
            endLng: 0.8248
        }, 
        {
            type: 'pull', 
            order: Math.random(), 
            from: 'ZA', 
            to: 'TZ', 
            startLat: -28.1902, 
            startLng: 26.172, 
            endLat: -6.369, 
            endLng: 34.8888
        }, 
        {
            type: 'pull', 
            order: Math.random(), 
            from: 'ZA', 
            to: 'UG', 
            startLat: -28.1902, 
            startLng: 26.172, 
            endLat: 1.3733, 
            endLng: 32.2903
        }, 
        {
            type: 'pull', 
            order: Math.random(), 
            from: 'ZA', 
            to: 'ZM', 
            startLat: -28.1902, 
            startLng: 26.172, 
            endLat: -13.1339, 
            endLng: 27.8493
        }
    ]
}
