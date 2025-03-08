import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { resetPassword, clearAuthError } from '../../actions/userActions';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

export default function ResetPassword() {
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const dispatch = useDispatch();
    const { isAuthenticated, error } = useSelector(state => state.authState);
    const navigate = useNavigate();
    const { token } = useParams();

    const submitHandler  = (e) => {
        e.preventDefault();
        
        if (!password || !confirmPassword) {
            return toast.error("Both fields are required");
        }
        
        if (password !== confirmPassword) {
            return toast.error("Passwords do not match");
        }

        const formData = { password, confirmPassword };
        dispatch(resetPassword(formData, token));

        // ✅ Show success message immediately after clicking
        toast.info("Setting new password, please wait...", {
            position: toast.POSITION.BOTTOM_CENTER
        });
    };

    useEffect(() => {
        if (isAuthenticated) {
            toast.success('Password has been set successfully!', {
                position: toast.POSITION.BOTTOM_CENTER
            });

            setTimeout(() => {
                navigate('/login'); // Redirect to login page after success
            }, 2000);
        }

        if (error) {
            toast.error(error, {
                position: toast.POSITION.BOTTOM_CENTER
            });

            dispatch(clearAuthError());
        }
    }, [isAuthenticated, error, dispatch, navigate]);

    return (
        <div className="row wrapper">
            <div className="col-10 col-lg-5">
                <form onSubmit={submitHandler} className="shadow-lg">
                    <h1 className="mb-3">New Password</h1>

                    <div className="form-group">
                        <label htmlFor="password_field">Password</label>
                        <input
                            type="password"
                            id="password_field"
                            className="form-control"
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="confirm_password_field">Confirm Password</label>
                        <input
                            type="password"
                            id="confirm_password_field"
                            className="form-control"
                            value={confirmPassword}
                            onChange={e => setConfirmPassword(e.target.value)}
                            required
                        />
                    </div>

                    <button
                        id="new_password_button"
                        type="submit"
                        className="btn btn-block py-3"
                    >
                        Set Password
                    </button>

                </form>
            </div>
        </div>
    );
}
