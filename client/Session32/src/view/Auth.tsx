import { useSelector, useDispatch } from 'react-redux'
import type { RootState } from '../store'
import { logoutUser } from '../store/authReducer'
import Register from './Register'
import Login from './Login'

export default function Auth() {
    const dispatch = useDispatch();
    const { currentView, isLoggedIn, registeredAccount } = useSelector((state: RootState) => state.auth);

    // Nếu đã đăng nhập, hiển thị dashboard
    if (isLoggedIn && registeredAccount) {
        return (
            <div style={{
                maxWidth: '600px',
                margin: '50px auto',
                padding: '30px',
                backgroundColor: '#ffffff',
                borderRadius: '10px',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                fontFamily: 'Arial, sans-serif',
                textAlign: 'center'
            }}>
                <h2 style={{
                    color: '#28a745',
                    marginBottom: '20px',
                    fontSize: '28px'
                }}>
                    🎉 Chào mừng bạn đã đăng nhập!
                </h2>

                <div style={{
                    backgroundColor: '#d4edda',
                    border: '1px solid #c3e6cb',
                    borderRadius: '8px',
                    padding: '20px',
                    marginBottom: '30px'
                }}>
                    <h3 style={{ color: '#155724', marginBottom: '15px' }}>
                        Thông tin tài khoản
                    </h3>
                    <p style={{ margin: '8px 0', color: '#155724' }}>
                        <strong>Họ tên:</strong> {registeredAccount.fullName}
                    </p>
                    <p style={{ margin: '8px 0', color: '#155724' }}>
                        <strong>Email:</strong> {registeredAccount.email}
                    </p>
                </div>

                <button
                    onClick={() => dispatch(logoutUser())}
                    style={{
                        padding: '12px 30px',
                        backgroundColor: '#dc3545',
                        color: 'white',
                        border: 'none',
                        borderRadius: '5px',
                        fontSize: '16px',
                        fontWeight: 'bold',
                        cursor: 'pointer'
                    }}
                >
                    Đăng Xuất
                </button>

                <div style={{
                    marginTop: '30px',
                    padding: '20px',
                    backgroundColor: '#f8f9fa',
                    borderRadius: '8px',
                    color: '#6c757d'
                }}>
                    <h4>🚀 Demo hoàn thành!</h4>
                    <p>Hệ thống đăng ký/đăng nhập với Redux đã hoạt động thành công:</p>
                    <ul style={{ textAlign: 'left', display: 'inline-block' }}>
                        <li>✅ Đăng ký tài khoản với validation</li>
                        <li>✅ Auto-fill thông tin đăng nhập sau khi đăng ký</li>
                        <li>✅ Người dùng có thể thay đổi thông tin login</li>
                        <li>✅ Lưu trữ state bằng Redux</li>
                        <li>✅ Chuyển hướng và quản lý session</li>
                    </ul>
                </div>
            </div>
        );
    }

    // Hiển thị form dựa trên currentView
    return (
        <div>
            {currentView === 'register' ? <Register /> : <Login />}
        </div>
    );
}