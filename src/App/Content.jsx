import { OrbitControls, Stats } from "@react-three/drei";
import { useControls } from "leva";
import Cube from "./components/Cube";

const Content = () => {

    const {showStats} = useControls(
        "General",
        {
            showStats: {
                label: "stats",
                value: false,
            }
        }
    )

    const { showAxesHelper, showGridHelper } = useControls(
        "helpers",
        {
            showAxesHelper: {
                label: "Axes Helper",
                value: false
            },
            showGridHelper: {
                label: "Grid Helper",
                value: false
            }
        }
    )
    return (
    <>
    <OrbitControls 
    enableRotate={true}
    enablePan={true}
    enableZoom={true}/>
    {showAxesHelper && <axesHelper />}
    {showGridHelper && <gridHelper />}
    {showStats && <Stats />}
    <Cube />
    </>);
}

export default Content;