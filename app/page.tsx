"use client"
import { useState } from "react";

import BasicContent from "@/components/BasicContent"
import CanvasComponent from "@/components/CanvasComponent"

export default function Home() {
  const [buttonClick, setButtonClick] = useState<boolean>(false)

  return (
    <main className="w-full h-screen">
      <BasicContent setButtonClick={setButtonClick} />
      <CanvasComponent buttonClick={buttonClick} setButtonClick={setButtonClick} />
    </main>
  )
}
