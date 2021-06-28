import { useDispatch, useSelector } from "react-redux"
import { useHistory } from "react-router-dom"

function Card(props) {
    const history = useHistory()
    const dispatch = useDispatch()

    return (
        <div className="lg:m-4 shadow-md hover:shadow-lg hover:bg-gray-100 rounded-2xl bg-white my-12 mx-8">
            {/* <!-- Card Image --> */}
            <img src={props.cemetery.image_url[0]} alt="" className="overflow-hidden" />
            {/* <!-- Card Content --> */}
            <div className="p-4">
                <h3 className="font-medium text-gray-600 text-lg my-2 uppercase">{props.cemetery.cemetaryName} (3.3 Km)</h3>
                <p className="text-justify">The be might what days revellers, which sought to a nor. Land from to suits his some. Saw him counsel begun mother though but. Ofttimes soils of since mighty pollution.</p>
                <div className="mt-5">
                    <a href="" className="hover:bg-gray-700 rounded-full py-2 px-3 font-semibold hover:text-white bg-gray-400 text-gray-100" onClick={()=>{history.push(`/detail/${props.cemetery._id}`)}}>DETAIL</a>
                </div>
            </div>
        </div>
    )
}

export default Card