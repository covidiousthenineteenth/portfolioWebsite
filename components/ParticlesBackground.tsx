"use client";  // Mark as Client Component

import Particles from "@tsparticles/react";
import { initParticlesEngine } from "@tsparticles/react";
import { loadStarsPreset } from "@tsparticles/preset-stars";
import type { Engine } from "@tsparticles/engine";
import { useEffect, useState } from "react";

export default function ParticlesBackground() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine: Engine) => {
      await loadStarsPreset(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  return init ? (
    <Particles
      id="tsparticles"
      options={{ preset: "stars" }}
      className="absolute inset-0 z-0"
    />
  ) : null;
}