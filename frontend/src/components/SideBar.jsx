// enternal import
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { format } from "date-fns";

// internal import 
import CharactersListItem from "./CharacterListItem";
import { fetchAllCharacters } from "../Store/Slices/CharacterImgSlice.js";
import { fetchAllTables } from "../Store/Slices/TableImgSlice.js";
import { setStopGameTime } from "../Store/Slices/SessionSlice.js";
import { Button } from "react-bootstrap";
import { toast } from "react-toastify";

const SideBar = ({ setSideBarScrollPosition }) => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const allCharacters = useSelector(state => state.character_img.data);
    const draggable_imgs = useSelector(state => state.draggable_img);

    const [scrollTop, setScrollTop] = useState(0)

    const MenuListItem = () => (

        allCharacters.map((item) => (
            <CharactersListItem
                key={item.id}
                id={item.id}
                name={item.name}
                role={item.role}
                imgFilename={item.filename}
                folderName={item.folder_name}
                description={item.description}
            />
        ))
    );

    function handleEndGame() {
        if (!draggable_imgs.length) return toast.info("At least make one Ally");
        dispatch(setStopGameTime(format(new Date(), "HH:mm:SS")));
        navigate('/result');
    }

    function handleOnScroll(event) {
        setScrollTop(event.currentTarget.scrollTop)
    }

    useEffect(() => {
        setSideBarScrollPosition(scrollTop)
     },[scrollTop, setSideBarScrollPosition])

    useEffect(() => {
        dispatch(fetchAllCharacters());
        dispatch(fetchAllTables());
    }, [dispatch]);

    return (
        <menu
            className="SideBar text-center d-flex flex-column me-4"
            style={{ display: allCharacters.length != 0 ? 'flex' : "none" }}>

            <Button className="my-4" variant="success" onClick={() => handleEndGame()}>
                End Game
            </Button>

            <div className="MenuList" onScroll={handleOnScroll}>

                <MenuListItem />

            </div>
        </menu>
    );
};
export default SideBar;