import '../../css/Profile.css';
import diary from '../../assest/diary.PNG'
const Private = () => {
    return (
        <div className="publicMain">
            <div className="publicCard">
                <img className="publicImg" src={diary} alt="img" />
                <div>
                    <h4>Profectionist</h4>
                    <p>Finish all lessons</p>
                </div>
            </div>
            <div className="publicCard">
                <img className="publicImg" src={diary} alt="img" />
                <div>
                    <h4>Profectionist</h4>
                    <p>Finish all lessons</p>
                </div>
            </div>
            <div className="publicCard">
                <img className="publicImg" src={diary} alt="img" />
                <div>
                    <h4>Profectionist</h4>
                    <p>Finish all lessons</p>
                </div>
            </div>
        </div>
    )
}
export default Private;