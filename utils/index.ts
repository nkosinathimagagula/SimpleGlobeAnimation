export const getGlobeCoordinates = (latitude: number, longitude: number): GlobeCoordinates => {

    return {
        x: - (Math.sin(latitude) * Math.cos(longitude)),
        y: - Math.cos(latitude),
        z: Math.sin(latitude) * Math.sin(longitude)
    }
}
