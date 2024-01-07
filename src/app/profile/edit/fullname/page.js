import Image from 'next/image';
import chevronleft from '@icons/icon-fi-chevron left.svg';

function EditName() {

    return (
        <div className="container">

        <div className="row mt-3 mb-3 mx-auto custom-header">     
            <div className="col-2 col-md-2 col-lg-3 custom-text-align-center">
                <a href="/profile/edit">
                <Image src={chevronleft} width="24" alt="chevronleft"/>
                </a>
            </div>
            <div className="col-8 col-md-8 col-lg-6 custom-text-align-center">
            Change Name
            </div>
            <div className="col-2 col-md-2 col-lg-2 custom-text-align-right ">
                <a className="custom-lbl custom-link">Save</a>
            </div>
        </div>

        <div className="row mb-3">
            <div className="col-12 mx-auto">
            <form>
                <div className="form-group custom-input">
                <input type="text" className="form-control" id="newfullname"/>
                </div>
            </form>
            </div>
        </div>

        </div>
    );
};

export default EditName;

