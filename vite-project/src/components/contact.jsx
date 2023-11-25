import * as THREE from 'three'
import card from "../assets/cardBackground.jpg"
import { Sparkles } from '@react-three/drei'

const ContactCard = () =>{
   
    let texture =  new THREE.TextureLoader().load(card)

    return(
        <>
        <ambientLight intensity={1} />
        <Sparkles count={150} color={"white"} scale={[5, 5, 5]} opacity={8} noise={3}/>
        <pointLight color={"orange"} position={[-3,0,3]} intensity={15}/>
        <pointLight color={"orange"} position={[3,0,-3]} intensity={15}/>

            <mesh position={[0,0,0.01]}>    
                <boxGeometry args={[5, 3, 0.1]}/>
                <meshPhongMaterial map={texture}/>
            
            </mesh>
        </>
    )
}

export default ContactCard