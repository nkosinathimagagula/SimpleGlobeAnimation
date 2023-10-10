// for globe.gl S is -
export const cities = {
    coordinates: [
        // {
        //     text: "CPT",
        //     size: 0.1,
        //     country: "South Africa",
        //     city: "Cape Town",
        //     lat: -33.9249,
        //     lng: 18.4241
        // },
        // {
        //     text: "PTA",
        //     size: 0.1,
        //     country: "South Africa",
        //     city: "Pretoria",
        //     lat: -25.7479,
        //     lng: 28.2293
        // },
        // {
        //     text: "AMB",
        //     size: 0.1,
        //     country: "Madagascar",
        //     city: "Amborompotsy",
        //     lat: -20.6431,
        //     lng: 46.2289
        // },
        {
            id: "label",
            text: "SA",
            size: 0.1,
            country: "South Africa",
            city: "",
            lat: -28.1902,
            lng: 26.1720
        },
        {
            id: "label",
            text: "KNY",
            size: 0.1,
            country: "Kenya",
            city: "",
            lat: -0.0236,
            lng: 37.9062
        },
        {
            id: "label",
            text: "NGR",
            size: 0.1,
            country: "Nigeria",
            city: "",
            lat: 9.0820,
            lng: 8.6753
        },
        {
            id: "label",
            text: "GHN",
            size: 0.1,
            country: "Ghana",
            city: "",
            lat: 7.9465,
            lng: 1.0232
        },
    ]
}

export const lines = {
    pulls: [
        {
            type: "pull",
            order: 0.9,
            from: "SA",
            to: "GHN",
            startLat: -28.1902,
            startLng: 26.1720,
            endLat: 7.9465,
            endLng: 1.0232
        },
        {
            type: "pull",
            order: 0.2,
            from: "SA",
            to: "KNY",
            startLat: -28.1902,
            startLng: 26.1720, 
            endLat: -0.0236,
            endLng: 37.9062
        },
        {
            type: "pull",
            order: 0.5,
            from: "SA",
            to: "NGR",
            startLat: -28.1902,
            startLng: 26.1720, 
            endLat: 9.0820,
            endLng: 8.6753
        }
    ]
}
