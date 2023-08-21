
import './trend.css'
import Trend from "./Trend";

const List = (props) => {

  return (
    <Trend data={props.list} isLoading={props.isLoading}/>
  )
}
export default List