import { useFrame } from "@react-three/fiber";
import { useRef, useState } from "react"
import { MathUtils } from "three"

const Cube = () => {

    const [toggle, setToggle] = useState(true)
    const color = toggle ? 0xff0000 : 0x00ff00;
    const position = toggle ? [0,0,0] : [0,0,2];
    const cubeRef = useRef();

    useFrame(() => {
        cubeRef.current.rotation.x += 0.01;
        cubeRef.current.rotation.y += 0.01;
        cubeRef.current.rotation.z += 0.01;
    })
    return (
    <mesh 
    onClick={() => setToggle(!toggle)}
    position={position} 
    rotation={[MathUtils.degToRad(45),0,0]} 
    ref={cubeRef}
    >
        <boxGeometry args={[1, 1, 1]} />
        <meshNormalMaterial
        color={color} 
        opacity={0.5}
        transparent={true}
        wireframe={true}
        
        />
    </mesh>)
}

export default Cube