import ConexText from "./conectText"
import SvgComponent from "./svgcomponent"
import MisionAndVision2030 from "./MisionAndVision"
import "bootstrap/dist/css/bootstrap.min.css";
function Conexion2030() {
    return (
        <article className="" style={{ 'background': "url('/public/images/bg-tel-white.jpg')", }}>
            <div className="father-2030 pt-8" style={{ background: '#d9def2ac' }}>
                <div className="children-20-30">
                    <SvgComponent />
                    <ConexText />
                </div>
                <MisionAndVision2030/>
            </div>
        </article>
    )
}

export default Conexion2030