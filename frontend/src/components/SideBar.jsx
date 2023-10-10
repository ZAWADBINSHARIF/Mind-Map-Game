// enternal import
import { useEffect } from "react"
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from "react-router-dom"

// internal import 
import CharactersListItem from "./CharacterListItem"
import { fetchAllCharacters } from "../Store/Slices/CharacterImgSlice.js"
import { fetchAllTables } from "../Store/Slices/TableImgSlice.js"
import { Button } from "react-bootstrap"

const SideBar = () => {

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const allCharacters = useSelector(state => state.character_img.data)

  const MenuListItem = () => (
    allCharacters.map((item) => (
      <CharactersListItem
        key={item.id}
        id={item.id}
        name={item.name}
        imgFilename={item.filename}
        folderName={item.folder_name}
      />
    ))
  )

  function handleEndGame() {
    navigate('/result')
  }

  useEffect(() => {
    dispatch(fetchAllCharacters())
    dispatch(fetchAllTables())
  }, [dispatch])

  return (
    <menu
      className="SideBar text-center"
      style={{ display: allCharacters.length != 0 ? 'flex' : "none" }}>

      <Button className="my-4" variant="secondary" onClick={()=> handleEndGame()}>
        End Game
      </Button>
      
      <div className="MenuList d-flex flex-column me-4">

        <MenuListItem />

      </div>
    </menu>
  )
}
export default SideBar