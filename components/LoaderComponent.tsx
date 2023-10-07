import { Html, Loader } from "@react-three/drei";

const LoaderComponent = () => {
  return (
    <Html className="animate-pulse">
        <Loader dataStyles={{"fontSize": "0.7em"}} />
    </Html>
  )
}

export default LoaderComponent
