// external import
import { useEffect } from 'react'
import { Row, Col } from 'react-bootstrap'
import { useSelector } from 'react-redux'

// internal import
import '../result.scss'

const FinalResult = () => {

    const Room = useSelector(state => state.draggable_img)
    const PeanutGallery = useSelector(state => state.peanut_gallery_img)
    const Outside = useSelector(state => state.removed_draggable_img)

    function showPrintPDF() {
        window.print()
    }

    useEffect(() => {
        console.log('Load')
        window.onload = showPrintPDF()
    })
    return (
        <div className="FinalResult">
            <h1 className="text-center">Result</h1>
            <br />
            <Row>
                <Col>
                    <h2>IN ROOM</h2>
                    {Room.map(item => (
                        <div className='d-flex flex-row' key={item.draggable_id}>
                            <img src={`/${item.folder_name}/${item.src}`} />
                            <div className="d-flex flex-column justify-content-center align-content-center">
                                <span>{item.name}</span>
                                <span>{item.role}</span>
                                <span>{item.description}</span>
                            </div>
                        </div>
                    ))}
                </Col>
                <Col>
                    <h2>PEANUT GALLERY</h2>
                    {PeanutGallery.map(item => (
                        <div className='d-flex flex-row' key={item.draggable_id}>
                            <img src={`/${item.folder_name}/${item.src}`} />
                            <div className="d-flex flex-column justify-content-center align-content-center">
                                <span>{item.name}</span>
                                <span>{item.role}</span>
                                <span>{item.description}</span>
                            </div>
                        </div>
                    ))}
                </Col>
                <Col md={12}>
                    <h2>OUTSIDE</h2>
                    {Outside.map(item => (
                        <div className='d-flex flex-row' key={item.draggable_id}>
                            <img src={`/${item.folder_name}/${item.src}`} />
                            <div className="d-flex flex-column justify-content-center align-content-center">
                                <span>{item.name}</span>
                                <span>{item.role}</span>
                                <span>{item.description}</span>
                            </div>
                        </div>
                    ))}
                </Col>
            </Row>
        </div>
    )
}
export default FinalResult