import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { forgotPassword, clearAuthError} from "../../actions/userActions";


export default function ForgotPassword() {
    const [email, setEmail] = useState("");
    const dispatch = useDispatch();
    const { error, message } = useSelector(state => state.authState);

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(forgotPassword({ email }));
    };

    useEffect(() => {
        if (message) {
            toast.success(message, {
                position: toast.POSITION.BOTTOM_CENTER
            });
            setEmail("");
        }

        if (error) {
            toast.error(error, {
                position: toast.POSITION.BOTTOM_CENTER,
                onClose: () => dispatch(clearAuthError())
            });
        }
    }, [message, error, dispatch]);

    return (
        <div className="row wrapper">
            <div className="col-10 col-lg-5">
                <form onSubmit={submitHandler} className="shadow-lg">
                    <h1 className="mb-3">Forgot Password</h1>
                    <div className="form-group">
                        <label htmlFor="email_field">Enter Email</label>
                        <input
                            type="email"
                            id="email_field"
                            className="form-control"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>

                    <button
                        id="forgot_password_button"
                        type="submit"
                        className="btn btn-block py-3">
                        Send Email
                    </button>
                </form>
            </div>
        </div>
    );
}
