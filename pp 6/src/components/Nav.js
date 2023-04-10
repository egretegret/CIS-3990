import { useNavigate } from "react-router-dom";

import { BackArrow } from './BackArrow';

export default function Nav({ back, page }) {
    const navigate = useNavigate();
    return (
        <div className="nav-bar">
            {back ?
                <div className="back-arrow" onClick={() => {
                    navigate(-1);
                }} >
                    <BackArrow />
                </div>


                : <div></div>}
            {page}</div>
    );
}