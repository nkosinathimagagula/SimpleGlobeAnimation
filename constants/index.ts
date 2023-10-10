// for globe.gl S is -
export const cities = {
    coordinates: [
        {
            text: "CPT",
            size: 0.1,
            country: "South Africa",
            city: "Cape Town",
            lat: -33.9249,
            lng: 18.4241
        },
        {
            text: "PTA",
            size: 0.1,
            country: "South Africa",
            city: "Pretoria",
            lat: -25.7479,
            lng: 28.2293
        },
        {
            text: "AMB",
            size: 0.1,
            country: "Madagascar",
            city: "Amborompotsy",
            lat: -20.6431,
            lng: 46.2289
        }
    ]
}

export const lines = {
    pulls: [
        {
            type: "pull",
            order: 0.9,
            from: "CPT",
            to: "PTA",
            startLat: -33.9249,
            startLng: 18.4241,
            endLat: -25.7479,
            endLng: 28.2293
        },
        {
            type: "pull",
            order: 0.7,
            from: "CPT",
            to: "AMB",
            startLat: -33.9249,
            startLng: 18.4241, 
            endLat: -20.6431,
            endLng: 46.2289
        },
        // {
        //     type: "pull",
        //     order: 1,
        //     from: "PTA",
        //     to: "AMB",
        //     startLat: -25.7479,
        //     startLng: 28.2293,
        //     endLat: -20.6431,
        //     endLng: 46.2289
        // }
    ]
}
