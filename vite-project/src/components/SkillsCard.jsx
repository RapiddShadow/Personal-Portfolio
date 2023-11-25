import * as THREE from 'three'
import cardBack from "../assets/cardFront.jpg"
import { Sparkles } from '@react-three/drei'
import skillsCar from "../assets/skillsCar.jpg"

const Card = () => {
    let texture =  new THREE.TextureLoader().load(skillsCar)
    let tex=  new THREE.TextureLoader().load(cardBack)
    let colors = ["#0201FF","#E10031","#B000E1","#E88D0B","#66E80B","#0BD4E8","#0BE88D","#FF5466", "#FF9754","#FFED54"]
    let index = Math.floor(Math.random()*colors.length)
    return (
        <>
        <Sparkles count={150} color={"white"} scale={[5, 5, 5]} opacity={8} noise={3}/>
        <ambientLight intensity={0} />
        <pointLight color={"orange"} position={[-2,0,1.5]} intensity={15}/>
        <pointLight color={"orange"} position={[1.5,0,-2]} intensity={15}/>
        <mesh position={[0,0,0.01]}>    
            <boxGeometry args={[3, 4, 0.1]}/>
            <meshPhongMaterial map={texture}/>
               
            
        </mesh>
        <ambientLight intensity={2} />
        <mesh position={[0,0,-0.09]} rotation={[0,Math.PI,0]}>    
            <boxGeometry args={[3, 4, 0.1]}/>
            <meshPhongMaterial map={tex}/>  
        </mesh>
        
        </>
    )
}

export default Card