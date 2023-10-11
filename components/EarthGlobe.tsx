import { MutableRefObject, useEffect, useRef } from "react";
import Globe, { GlobeMethods } from "react-globe.gl";
import { MeshStandardMaterial } from "three";

import { countries, lines } from "@/constants";
import map from '../public/map/custom.geo.json';
import { generateStars } from "@/utils";


const EarthGlobe = () => {
  const globeRef = useRef() as MutableRefObject<GlobeMethods>

  useEffect(() => {
    globeRef.current.pointOfView({lat: 2.5, lng: 25, altitude: 1.4 })
    globeRef.current.controls().autoRotate = true
    globeRef.current.controls().autoRotateSpeed = - 0.1
    globeRef.current.controls().enableZoom = false
    globeRef.current.controls().enableDamping = true

    const scene = globeRef.current.scene()

    const stars = generateStars(500, 10000)

    scene.add(stars)

    setTimeout(() => {
      const directionalLight = globeRef.current.scene().children.find((object) => object.type === "DirectionalLight")

      if (directionalLight) {
        directionalLight.position.set(10, 13, 10)
      }

    }, 1)
  }, [])

  return (
    <>
      <Globe
          rendererConfig={{alpha: true}}

          // globeImageUrl={'/textures/earth/earth_map.jpg'}
          globeMaterial={new MeshStandardMaterial({color: '#040f15'})}
          waitForGlobeReady={true}
          animateIn={true}
          backgroundColor="#00000000"
          showAtmosphere={true}
          atmosphereColor="#308F8E"

          ref={globeRef}

          arcsData={lines.pulls}
          arcColor={() => "#00c3b1"}
          arcDashLength={1}
          arcDashGap={1}
          arcDashAnimateTime={1500}
          arcAltitudeAutoScale={0.4}
          arcDashInitialGap={(e: any) => e.order * 4}
          arcStroke={0.4}

          labelsData={countries.coordinates}
          labelText={"lat"}
          labelDotRadius={0.4}
          labelColor={() => "#c3fcf2"}
          

          hexPolygonsData={map.features}
          hexPolygonColor={() => "#d5eade"}
          hexPolygonMargin={0.6}

          // polygonsData={custom_map.features}
          // polygonCapColor={() => "#818589"}
          // polygonAltitude={0.2}
          // polygonSideColor={() => "transparent"}

          htmlElementsData={countries.coordinates}
          htmlElement={(e: any) => {
            const element = document.createElement("div")
            element.innerHTML = e.country
            element.className = "label"

            return element;
          }}
        />
    </>
  )
}

export default EarthGlobe
