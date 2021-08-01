import { useState } from 'react'
import '../css/Profile.css'
import Private from './ProfileSubComponents/Private';
import Public from './ProfileSubComponents/Public'
import Scroes from './ProfileSubComponents/Scroes';
const Profile = () => {
    const [step1, setStep1] = useState(true);
    const [step2, setStep2] = useState(false);
    const [step3, setStep3] = useState(false);
    return (
        <div style={{ backgroundColor: "#CDD3DF" }}>
            <div className="profileSwitchDiv">
                <button
                    style={{ borderRadius: "10px 0 0 10px" }}
                    className="profileBtns"
                    onClick={() => {
                        setStep1(true);
                        setStep2(false);
                        setStep3(false);
                    }}
                >Public
                </button>
                <button
                    className="profileBtns"
                    onClick={() => {
                        setStep1(false);
                        setStep2(true);
                        setStep3(false);
                    }}
                >Private
                </button>
                <button
                    style={{ borderRadius: "0 10px 10px 0" }}
                    className="profileBtns"
                    onClick={() => {
                        setStep1(false);
                        setStep2(false);
                        setStep3(true);
                    }}
                >Scroes
                </button>
            </div>
            <div className="profileComponentsDiv">
                {step1 && <Public />}
                {step2 && <Private />}
                {step3 && <Scroes />}
            </div>
        </div>
    )
}
export default Profile;