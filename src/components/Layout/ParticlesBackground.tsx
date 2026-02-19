import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { type ISourceOptions } from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";

export const ParticlesBackground = () => {
    const [init, setInit] = useState(false);

    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadSlim(engine);
        }).then(() => {
            setInit(true);
        });
    }, []);

    const options: ISourceOptions = {
        background: {
            color: {
                value: "transparent",
            },
        },
        fpsLimit: 60,
        interactivity: {
            events: {
                onClick: {
                    enable: false,
                    mode: "repulse",
                },
                onHover: {
                    enable: true,
                    mode: "bubble",
                },
            },
            modes: {
                bubble: {
                    distance: 100,
                    duration: 2,
                    opacity: 0.6,
                    size: 6,
                },
            },
        },
        particles: {
            color: {
                value: "#ffffff",
            },
            move: {
                direction: "none",
                enable: true,
                outModes: {
                    default: "out",
                },
                random: true,
                speed: 0.4,
                straight: false,
            },
            number: {
                density: {
                    enable: true,
                },
                value: 120,
            },
            opacity: {
                value: { min: 0.1, max: 1 },
                animation: {
                    enable: true,
                    speed: 1,
                    sync: false
                }
            },
            shape: {
                type: "circle",
            },
            size: {
                value: { min: 0.3, max: 3 },
            },
        },
        detectRetina: true,
    };

    if (!init) return null;

    return (
        <Particles
            id="tsparticles"
            options={options}
            className="absolute inset-0 z-0 pointer-events-auto"
        />
    );
};
