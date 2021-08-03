import '../../css/Profile.css';
import axios from 'axios';
import { useEffect, useState } from 'react'
import diaryImage from '../../assest/diary.PNG'
const Private = () => {
    const [data, setData] = useState();
    const [loader, setLoder] = useState(false);
    useEffect(() => {
        axios.get("http://localhost:9002/creatediary").then((res) => {
            setData(res.data.item)
            setLoder(false);
        });
        setLoder(true);
    }, [])
    return (
        <div className="publicMain">
            {
                loader ? "loading.." : data?.map(diary => {
                    if (diary.category === "Private") {
                        return (
                            <div className="publicCard" key={diary._id}>
                                <img className="publicImg" src={diaryImage} alt="img" />
                                <div>
                                    <h4>{diary.title}</h4>
                                    <p>{diary.description}</p>
                                </div>
                            </div>
                        )
                    }
                })
            }
        </div>
    )
}
export default Private;