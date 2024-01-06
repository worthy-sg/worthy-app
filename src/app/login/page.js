'use client'
import { useRouter } from "next/navigation"; 
import Image from 'next/image';
import worthy_img from '@images/worthy_img.png';

const Login = () => {
  const router = useRouter();

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-lg-6 text-center mx-auto">
          <Image src={worthy_img} alt="worthy" />
        </div>
      </div>

      <div className="row mt-5 mb-5">
        <div className="col-lg-6 text-center fw-bold mx-auto">
          <h1 className="custom-title">Worthy</h1>
        </div>
      </div>

      <div className="row mb-4">
        <div className="col-10 col-lg-6 mx-auto">
          <form>
            <div className="form-group">
              <label htmlFor="txtPhoneNumber">Phone Number</label>
              <input
                type="text"
                className="form-control custom-form"
                id="txtPhoneNumber"
              />
            </div>
          </form>
        </div>
      </div>

      <div className="row mb-4">
        <div className="col-10 col-lg-6 mx-auto">
          <form>
            <div className="form-group">
              <label htmlFor="txtPassword">Password</label>
              <input
                type="password"
                className="form-control custom-form"
                id="txtPassword"
              />
              <div className="custom-forgot-password">
                Forgot password?
              </div>
            </div>
          </form>
        </div>
      </div>

      <div className="row mb-3">
        <div className="col-10 col-lg-6 text-center mx-auto">
          <form>
            <div className="form-group">
              <button
                type="button"
                className="btn btn-primary col-12 custom-btn"
                onClick={() => router.push("/home")}>
                Login
              </button>
            </div>
          </form>
        </div>
      </div>

      <div className="row">
        <div className="col-12 col-lg-6 text-center mx-auto">
          <form>
            <div className="form-group custom-font-size-small">
              <label className="text-secondary fw-bold me-1">
                Don't have an account?
              </label>
              <a
                href="/register"
                className="text-secondary fw-bold custom-lbl custom-link"
              >
                Create a new account
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
