import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"

// internal import
import { fetchSaveTableThunk } from "../../Store/Slices/SaveTableSlice"


const TablePlace = () => {


  const tableFileName = useSelector(state => state.save_table[0]?.filename)
  const apiPath = import.meta.env.VITE_API
  const dispatch = useDispatch()


  useEffect(() => {
    dispatch(fetchSaveTableThunk())
  }, [dispatch])

  return (
    <div className="TablePlace">
      {tableFileName &&
        <img src={`${apiPath}/tables/${tableFileName}`} /> 
      }
    </div>
  )
}
export default TablePlace
