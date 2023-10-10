import { MutableRefObject, useEffect, useRef } from "react";
import Globe, { GlobeMethods } from "react-globe.gl";

import { cities, lines } from "@/constants";
import map from '../public/map/custom.geo.json';
// import custom_map from '../public/map/custom.geo-filtered.json'
import { MeshStandardMaterial } from "three";
import { generateStars } from "@/utils";


const EarthGlobe = () => {
  const globeRef = useRef() as MutableRefObject<GlobeMethods>

  useEffect(() => {
    globeRef.current.pointOfView({lat: -25, lng: 20, altitude: 2 })
    globeRef.current.controls().autoRotate = true
    globeRef.current.controls().autoRotateSpeed = 0.1

    const scene = globeRef.current.scene()

    const stars = generateStars(500, 10000)

    scene.add(stars)
  }, [])

  return (
    <>
    <Globe 
      // globeImageUrl={'/textures/earth/earth_map.jpg'}
      globeMaterial={new MeshStandardMaterial({color: '#040404'})}
      waitForGlobeReady={true}
      animateIn={true}
      backgroundColor="#030303"
      showAtmosphere={true}
      atmosphereColor="#5B5B69"

      ref={globeRef}

      arcsData={lines.pulls}
      arcColor={() => "#a7a7c1"}
      arcLabel={() => "test arc label"}
      arcDashLength={1}
      arcDashGap={1}
      arcDashAnimateTime={1000}
      arcAltitudeAutoScale={0.4}
      arcDashInitialGap={(e: any) => e.order * 2}

      labelsData={cities.coordinates}
      labelText={"city"}
      labelSize={0.8}
      labelDotRadius={0.3}
      labelColor={() => "#afafcf"}

      hexPolygonsData={map.features}
      hexPolygonColor={() => "#818589"}
      hexPolygonMargin={0.7}

      // polygonsData={custom_map.features}
      // polygonCapColor={() => "#818589"}
      // polygonAltitude={0.2}
      // polygonSideColor={() => "transparent"}
    />
    </>
  )
}

export default EarthGlobe


//   return (
//     <Globe
//       height={500}
//       ref={globeEl}
//       backgroundColor="rgba(0,0,0,0)"
//       htmlElementsData={[{lat: "50.073658", lng: "14.418540", color: "white", size: "35", label: "Prague"}]}
//       // htmlElement={(d) => {
//       //   const el = document.createElement("div");
//       //   el.innerHTML = markerSvg;
//       //   el.style.color = d.color;
//       //   el.style.width = `${d.size}px`;

//       //   el.style["pointer-events"] = "auto";
//       //   el.style.cursor = "pointer";
//       //   el.onclick = () => globeEl.current.pointOfView({lat: d.lat, lng: d.lng}, 750);
//       //   return el;
//       // }}
//     />
// );
// }