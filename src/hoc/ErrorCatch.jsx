import { connect } from "react-redux"
// import { getError } from "../Selectors/AppSelecort"
import Error from '../components/common/Error' 
//import { setErrorAC } from "../reduxStore/appReducer"
import { useLocation} from 'react-router-dom' 
import { useEffect } from "react" 
const ErrorCatch = ({children,...props}) =>{
    const location = useLocation()  
    useEffect(() =>{ 

    },[location.pathname])



    if(props.isError){ 
        return <Error />
    } 
    return children
} 
const mapStateToProps = (state) =>{ 
    return{
    }
}
export default connect(mapStateToProps, )(ErrorCatch)