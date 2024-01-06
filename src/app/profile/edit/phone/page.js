import Image from 'next/image';
import chevronleft from '@icons/icon-fi-chevron left.svg';

function EditPhone() {

    return (
        <div className="container">

        <div className="row mt-3 mb-3 mx-auto custom-header">     
            <div className="col-2 col-md-2 col-lg-3 custom-text-align-center">
                <a href="/profile/edit">
                <Image src={chevronleft} width="24" alt="chevronleft"/>
                </a>
            </div>
            <div className="col-8 col-md-8 col-lg-6 custom-text-align-center">
            Change New Phone 
            </div>
            <div className="col-2 col-md-2 col-lg-2 custom-text-align-right ">
                <a className="custom-lbl custom-link">Save</a>
            </div>
        </div>

        <div className="row mb-3">
            <div className="col-12 mx-auto">
            <form>
                <div className="form-group custom-input">
                <input type="text" className="form-control" id="newphone"/>
                </div>
            </form>
            </div>
        </div>

        <div className="row row-cols-1 row-cols-sm-10 row-cols-md-12 mb-3 custom-tab-container">
            <div className="col-12 p-1">
                <button className="btn btn-primary custom-btn">
                    Edit Profile
                </button>
            </div>
        </div>



        </div>
    );
};

export default EditPhone;

