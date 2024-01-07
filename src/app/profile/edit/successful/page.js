import Image from 'next/image';
import chevronleft from '@icons/icon-fi-chevron left.svg';

function Successful() {

    return (
    <div className="container"> 
        <div className="row mt-4 mx-auto">
            <div className="col-2 col-md-2 col-lg-3 custom-text-align-center">
                <a href="/profile/edit">
                <Image src={chevronleft} width="24" alt="chevronleft"/>
                </a>
            </div>
        </div>
        <div className="custom-icon-lg-container">

            <div className="custom-text-align-center ">
                <i className="bi bi-shield-check custom-icon-lg"/>
                <div><p><strong>Password Changed Successfully!</strong></p></div>
                <div><p>Your password has been changed successfully.</p></div>
            </div>

        </div>
    </div>
    );
};

export default Successful;

