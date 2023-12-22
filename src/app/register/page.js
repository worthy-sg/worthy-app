'use client'
import { useRouter } from "next/navigation";
import Image from 'next/image';
import worthy_img from '../../../public/assets/images/worthy_img.png';

const CreateAccount = () => {
  const router = useRouter();

  return (
    <div className="container">
      <div className="row mt-5 mb-3">
        <div className="col-lg-6 text-center mx-auto">
          <Image src={worthy_img} className="w-1" alt="Logo"/>
        </div>
      </div>

      <div className="row mt-4 mb-3">
        <div className="col-lg-6 text-center mx-auto">
          <h1 className="custom-title">Create Account</h1>
        </div>
      </div>

      <div className="row mt-5 mb-3">
        <div className="col-10 col-lg-6 mx-auto">
          <form>
            <div className="form-group">
              <label htmlFor="txtFullName">Full Name</label>
              <input
                type="text"
                className="form-control custom-form"
                id="txtFullName"
              />
            </div>
          </form>
        </div>
      </div>

      <div className="row mt-5 mb-3">
        <div className="col-10 col-lg-6 mx-auto">
          <form>
            <div className="form-group">
              <label htmlFor="txtFullName">Username</label>
              <input
                type="text"
                className="form-control custom-form"
                id="txtUserName"
              />
            </div>
          </form>
        </div>
      </div>

      <div className="row mt-5 mb-3">
        <div className="col-10 col-lg-6 mx-auto">
          <form>
            <div className="form-group">
              <label htmlFor="txtFullName">Email</label>
              <input
                type="email"
                className="form-control custom-form"
                id="txtEmail"
              />
            </div>
          </form>
        </div>
      </div>

      <div className="row mt-5 mb-3">
        <div className="col-10 col-lg-6 mx-auto">
          <form>
            <div className="form-group">
              <label htmlFor="txtFullName">Phone Number</label>
              <input
                type="tel"
                className="form-control custom-form"
                id="txtPhoneNumber"
              />
            </div>
          </form>
        </div>
      </div>

      <div className="row mt-5 mb-3">
        <div className="col-10 col-lg-6 mx-auto">
          <form>
            <div className="form-group">
              <label htmlFor="txtFullName">Nearest MRT Station</label>
              <input
                type="text"
                className="form-control custom-form"
                id="txtMRTStation"
              />
            </div>
          </form>
        </div>
      </div>

      <div className="row mt-5 mb-3">
        <div className="col-10 col-lg-6 mx-auto">
          <form>
            <div className="form-group">
              <label htmlFor="txtFullName">Password</label>
              <input
                type="password"
                className="form-control custom-form"
                id="txtPassword"
              />
            </div>
          </form>
        </div>
      </div>

      <div className="row mt-5 mb-3">
        <div className="col-10 col-lg-6 mx-auto">
          <form>
            <div className="form-group">
              <label htmlFor="txtFullName">Confirm Password</label>
              <input
                type="password"
                className="form-control custom-form"
                id="txtConfirmPassword"
              />
            </div>
          </form>
        </div>
      </div>

      <div className="row mt-4 mb-3">
        <div className="col-10 col-lg-6 mx-auto">
          <form>
            <div className="form-group">
              <button
                type="button"
                className="btn btn-primary col-12 custom-btn"
                onClick={() => {/* Add your form submission logic here */}}
              >
                Create Account
              </button>
            </div>
          </form>
        </div>
      </div>

      <div className="row mb-4">
        <div className="col-12 col-lg-6 text-center mx-auto">
          <form>
            <div className="form-group custom-font-size-small">
              <label className="text-secondary ft-5 fw-bold me-1">
                Already have an account?
              </label>
              <a href='/login' className="text-secondary ft-5 fw-bold custom-lbl custom-link">
                Login
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateAccount;
