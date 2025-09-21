import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { registerUser, switchToLogin } from '../store/authReducer'

export default function Register() {
    const dispatch = useDispatch();
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        password: '',
        confirmPassword: ''
    });
    const [errors, setErrors] = useState<Record<string, string>>({});

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
        // Clear error when user starts typing
        if (errors[name]) {
            setErrors(prev => ({
                ...prev,
                [name]: ''
            }));
        }
    };

    const validateForm = () => {
        const newErrors: Record<string, string> = {};

        if (!formData.fullName.trim()) {
            newErrors.fullName = 'Họ tên không được để trống';
        }

        if (!formData.email.trim()) {
            newErrors.email = 'Email không được để trống';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Email không hợp lệ';
        }

        if (!formData.password) {
            newErrors.password = 'Mật khẩu không được để trống';
        } else if (formData.password.length < 6) {
            newErrors.password = 'Mật khẩu phải có ít nhất 6 ký tự';
        }

        if (formData.password !== formData.confirmPassword) {
            newErrors.confirmPassword = 'Mật khẩu xác nhận không khớp';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (validateForm()) {
            // Đăng ký thành công
            dispatch(registerUser({
                fullName: formData.fullName,
                email: formData.email,
                password: formData.password
            }));

            // Reset form
            setFormData({
                fullName: '',
                email: '',
                password: '',
                confirmPassword: ''
            });

            alert('Đăng ký thành công! Chuyển sang trang đăng nhập...');
        }
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
                📝 Đăng Ký Tài Khoản
            </h2>

            <form onSubmit={handleSubmit}>
                {/* Họ tên */}
                <div style={{ marginBottom: '20px' }}>
                    <label style={{
                        display: 'block',
                        marginBottom: '5px',
                        color: '#555',
                        fontWeight: 'bold'
                    }}>
                        Họ và tên *
                    </label>
                    <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleInputChange}
                        style={{
                            width: '100%',
                            padding: '12px',
                            border: errors.fullName ? '2px solid #dc3545' : '2px solid #ddd',
                            borderRadius: '5px',
                            fontSize: '16px',
                            boxSizing: 'border-box'
                        }}
                        placeholder="Nhập họ và tên"
                    />
                    {errors.fullName && (
                        <div style={{ color: '#dc3545', fontSize: '14px', marginTop: '5px' }}>
                            {errors.fullName}
                        </div>
                    )}
                </div>

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
                        value={formData.email}
                        onChange={handleInputChange}
                        style={{
                            width: '100%',
                            padding: '12px',
                            border: errors.email ? '2px solid #dc3545' : '2px solid #ddd',
                            borderRadius: '5px',
                            fontSize: '16px',
                            boxSizing: 'border-box'
                        }}
                        placeholder="Nhập email"
                    />
                    {errors.email && (
                        <div style={{ color: '#dc3545', fontSize: '14px', marginTop: '5px' }}>
                            {errors.email}
                        </div>
                    )}
                </div>

                {/* Mật khẩu */}
                <div style={{ marginBottom: '20px' }}>
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
                        value={formData.password}
                        onChange={handleInputChange}
                        style={{
                            width: '100%',
                            padding: '12px',
                            border: errors.password ? '2px solid #dc3545' : '2px solid #ddd',
                            borderRadius: '5px',
                            fontSize: '16px',
                            boxSizing: 'border-box'
                        }}
                        placeholder="Nhập mật khẩu"
                    />
                    {errors.password && (
                        <div style={{ color: '#dc3545', fontSize: '14px', marginTop: '5px' }}>
                            {errors.password}
                        </div>
                    )}
                </div>

                {/* Xác nhận mật khẩu */}
                <div style={{ marginBottom: '30px' }}>
                    <label style={{
                        display: 'block',
                        marginBottom: '5px',
                        color: '#555',
                        fontWeight: 'bold'
                    }}>
                        Xác nhận mật khẩu *
                    </label>
                    <input
                        type="password"
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={handleInputChange}
                        style={{
                            width: '100%',
                            padding: '12px',
                            border: errors.confirmPassword ? '2px solid #dc3545' : '2px solid #ddd',
                            borderRadius: '5px',
                            fontSize: '16px',
                            boxSizing: 'border-box'
                        }}
                        placeholder="Nhập lại mật khẩu"
                    />
                    {errors.confirmPassword && (
                        <div style={{ color: '#dc3545', fontSize: '14px', marginTop: '5px' }}>
                            {errors.confirmPassword}
                        </div>
                    )}
                </div>

                {/* Submit button */}
                <button
                    type="submit"
                    style={{
                        width: '100%',
                        padding: '12px',
                        backgroundColor: '#007bff',
                        color: 'white',
                        border: 'none',
                        borderRadius: '5px',
                        fontSize: '16px',
                        fontWeight: 'bold',
                        cursor: 'pointer',
                        marginBottom: '20px'
                    }}
                >
                    Đăng Ký
                </button>

                {/* Link to login */}
                <div style={{ textAlign: 'center' }}>
                    <span style={{ color: '#666' }}>Đã có tài khoản? </span>
                    <button
                        type="button"
                        onClick={() => dispatch(switchToLogin())}
                        style={{
                            background: 'none',
                            border: 'none',
                            color: '#007bff',
                            cursor: 'pointer',
                            textDecoration: 'underline',
                            fontSize: '16px'
                        }}
                    >
                        Đăng nhập ngay
                    </button>
                </div>
            </form>
        </div>
    )
}