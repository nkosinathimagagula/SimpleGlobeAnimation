"use client"
import dynamic from "next/dynamic";

const EarthGlobe = dynamic(() => import('../components/EarthGlobe').then((mod) => mod.default), { ssr: false })

export default function Home() {

  return (
    <main className="w-full h-screen">
      <EarthGlobe />
    </main>
  )
}
