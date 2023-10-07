import { Html, useProgress } from "@react-three/drei"

const Loader = () => {
    const progress = useProgress()

    return (
        <Html>
            <p className="text-cyan-50 font-thin font-mono animate-bounce">
                {progress.total}%
            </p>
        </Html>
    )
}

export default Loader