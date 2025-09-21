import { useSelector, useDispatch } from 'react-redux'
import type { RootState } from '../store'
import { updateLoginForm, clearLoginForm, loginUser, switchToRegister } from '../store/authReducer'

export default function Login() {
    const dispatch = useDispatch();
    const { loginForm, registeredAccount } = useSelector((state: RootState) => state.auth);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        dispatch(updateLoginForm({
            field: name as 'email' | 'password',
            value: value
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (!loginForm.email || !loginForm.password) {
            alert('Vui lòng nhập đầy đủ email và mật khẩu!');
            return;
        }

        // Kiểm tra thông tin đăng nhập
        if (registeredAccount &&
            loginForm.email === registeredAccount.email &&
            loginForm.password === registeredAccount.password) {

            dispatch(loginUser());
            alert(`Đăng nhập thành công! Chào mừng ${registeredAccount.fullName}`);
        } else {
            alert('Email hoặc mật khẩu không đúng!');
        }
    };

    const handleClearForm = () => {
        dispatch(clearLoginForm());
    };

    return (
        <div style={{
            maxWidth: '400px',
            margin: '50px auto',
            padding: '30px',
            backgroundColor: '#ffffff',
            borderRadius: '10px',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            fontFamily: 'Arial, sans-serif'
        }}>
            <h2 style={{
                textAlign: 'center',
                color: '#333',
                marginBottom: '30px',
                fontSize: '24px'
            }}>
                🔐 Đăng Nhập
            </h2>

            {/* Thông báo tài khoản đã đăng ký */}
            {registeredAccount && (
                <div style={{
                    backgroundColor: '#d4edda',
                    border: '1px solid #c3e6cb',
                    borderRadius: '5px',
                    padding: '10px',
                    marginBottom: '20px',
                    fontSize: '14px',
                    color: '#155724'
                }}>
                    ✅ Đã tự động điền thông tin cho tài khoản: <strong>{registeredAccount.fullName}</strong>
                    <br />
                    <small>Bạn có thể thay đổi thông tin nếu muốn đăng nhập bằng tài khoản khác.</small>
                </div>
            )}

            <form onSubmit={handleSubmit}>
                {/* Email */}
                <div style={{ marginBottom: '20px' }}>
                    <label style={{
                        display: 'block',
                        marginBottom: '5px',
                        color: '#555',
                        fontWeight: 'bold'
                    }}>
                        Email *
                    </label>
                    <input
                        type="email"
                        name="email"
                        value={loginForm.email}
                        onChange={handleInputChange}
                        style={{
                            width: '100%',
                            padding: '12px',
                            border: '2px solid #ddd',
                            borderRadius: '5px',
                            fontSize: '16px',
                            boxSizing: 'border-box'
                        }}
                        placeholder="Nhập email"
                    />
                </div>

                {/* Mật khẩu */}
                <div style={{ marginBottom: '30px' }}>
                    <label style={{
                        display: 'block',
                        marginBottom: '5px',
                        color: '#555',
                        fontWeight: 'bold'
                    }}>
                        Mật khẩu *
                    </label>
                    <input
                        type="password"
                        name="password"
                        value={loginForm.password}
                        onChange={handleInputChange}
                        style={{
                            width: '100%',
                            padding: '12px',
                            border: '2px solid #ddd',
                            borderRadius: '5px',
                            fontSize: '16px',
                            boxSizing: 'border-box'
                        }}
                        placeholder="Nhập mật khẩu"
                    />
                </div>

                {/* Buttons */}
                <div style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
                    <button
                        type="submit"
                        style={{
                            flex: 1,
                            padding: '12px',
                            backgroundColor: '#28a745',
                            color: 'white',
                            border: 'none',
                            borderRadius: '5px',
                            fontSize: '16px',
                            fontWeight: 'bold',
                            cursor: 'pointer'
                        }}
                    >
                        Đăng Nhập
                    </button>

                    <button
                        type="button"
                        onClick={handleClearForm}
                        style={{
                            flex: 1,
                            padding: '12px',
                            backgroundColor: '#6c757d',
                            color: 'white',
                            border: 'none',
                            borderRadius: '5px',
                            fontSize: '16px',
                            cursor: 'pointer'
                        }}
                    >
                        Xóa Form
                    </button>
                </div>

                {/* Link to register */}
                <div style={{ textAlign: 'center' }}>
                    <span style={{ color: '#666' }}>Chưa có tài khoản? </span>
                    <button
                        type="button"
                        onClick={() => dispatch(switchToRegister())}
                        style={{
                            background: 'none',
                            border: 'none',
                            color: '#007bff',
                            cursor: 'pointer',
                            textDecoration: 'underline',
                            fontSize: '16px'
                        }}
                    >
                        Đăng ký ngay
                    </button>
                </div>
            </form>

            {/* Debug info - có thể xóa trong production */}
            {registeredAccount && (
                <div style={{
                    marginTop: '20px',
                    padding: '10px',
                    backgroundColor: '#f8f9fa',
                    borderRadius: '5px',
                    fontSize: '12px',
                    color: '#6c757d'
                }}>
                    <strong>Thông tin tài khoản đã đăng ký:</strong>
                    <br />Email: {registeredAccount.email}
                    <br />Tên: {registeredAccount.fullName}
                </div>
            )}
        </div>
    )
}