import '../../css/Profile.css';
import axios from 'axios';
import { useEffect, useState } from 'react'
import diaryImage from '../../assest/diary.PNG'
const Public = () => {
    const [data, setData] = useState();
    const [loader, setLoder] = useState(false);
    useEffect(() => {
        axios.get("http://localhost:9002/creatediary").then((res) => {
            // console.log(res.data);
            setData(res.data.item)
            setLoder(false);
            // setCreatedDiaryData(res.data.diary);
            //   setShowLogin(false);
        });
        setLoder(true);
    }, [])
    return (
        <div className="publicMain">
            {
                loader ? "loading.." : data?.map(diary => {
                    if (diary.category === "Public") {
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
export default Public;