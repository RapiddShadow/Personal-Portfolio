import * as THREE from 'three'
import { Stars, useVideoTexture } from '@react-three/drei'
import video from "../assets/PlaneVideo.mp4"
import card from "../assets/projectsCard.jpg"



const ProjectCard = () => {

    const texture = useVideoTexture(video)
    const tex=  new THREE.TextureLoader().load(card)   
    return (
        <>
        <ambientLight intensity={0} />
        <Stars radius={250} depth={50} count={2000} factor={7} saturation={25}/>
        <mesh position={[0,0,0.01]}>    
            <boxGeometry args={[5, 3, 0.1]}/>
            <meshBasicMaterial map={texture} toneMapped={false}/>


        </mesh>
        <mesh position={[0,0,-0.09]}>    
            <boxGeometry args={[5, 3, -0.09]}/>
            <meshBasicMaterial map={tex} toneMapped={false}/>
        </mesh>
        </>
    )
}

export default ProjectCard