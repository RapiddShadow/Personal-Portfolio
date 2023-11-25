import Particles from "react-particles";
import { useCallback} from "react";
import { loadSlim } from "tsparticles-slim";

const ParticlesComp = () => {
    
    
    let colors = ["#0201FF","#E10031","#B000E1","#E88D0B","#66E80B","#0BD4E8","#0BE88D","#FF5466", "#FF9754","#FFED54"]
    let index = Math.floor(Math.random()*colors.length)
        
    
    const particlesin = useCallback( async engine => {
        await loadSlim(engine)
    }, []);

    

    return (
        <Particles
            id="tsparticles"
            className="particles"
            init={particlesin}
            options={{
                background: {
                    color: {
                        value: "#000000",
                    },
                },
                fpsLimit: 120,
                interactivity: {
                    events: {
                        onHover: {
                            enable: true,
                            mode: "repulse",
                        },
                        
                    },
                    modes: {
                        push: {
                            quantity: 10,
                        },
                        repulse: {
                            distance: 220,
                            duration: 0.4,
                        },
                    },
                },
                particles: {
                    color: {
                        value: colors[index],
                    },
                    links: {
                        color: colors[index],
                        distance: 150,
                        enable: true,
                        opacity: 0.8,
                        width: 1,
                    },
                    move: {
                        direction: "none",
                        enable: true,
                        outModes: {
                            default: "bounce",
                        },
                        random: false,
                        speed: 3,
                        straight: false,
                    },
                    number: {
                        density: {
                            enable: true,
                            area: 800,
                        },
                        value: 80,
                    },
                    opacity: {
                        value: 0.6,
                    },
                    shape: {
                        type: "circle",
                    },
                    size: {
                        value: { min: 1, max: 5 },
                    },
                },
            }}
        />
    );
}

export default ParticlesComp