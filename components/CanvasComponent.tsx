import { Dispatch, SetStateAction, Suspense } from "react";

import { Canvas } from "@react-three/fiber";

import Earth from "./Earth";


const CanvasComponent = (props: {buttonClick : boolean, setButtonClick: Dispatch<SetStateAction<boolean>>}) => {
  return (
    <Canvas className="w-full h-screen">
        <Suspense fallback={null} >
            <Earth buttonClick={props.buttonClick} setButtonClick={props.setButtonClick} />
        </Suspense>
    </Canvas>
  )
}

export default CanvasComponent