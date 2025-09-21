import { useSelector } from 'react-redux'
import type { RootState } from '../store'

export default function Profile() {
    const users = useSelector((state: RootState) => state.user.users);
    const firstUser = users[0]; // Lấy user đầu tiên để hiển thị

    if (!firstUser) {
        return <div>Không có user nào</div>;
    }

    return (
        <div style={{
            padding: '20px',
            border: '1px solid #ccc',
            borderRadius: '8px',
            margin: '20px',
            fontFamily: 'Arial, sans-serif'
        }}>
            <h2 style={{ color: '#333', marginBottom: '20px' }}>👤 User Profile</h2>

            <div style={{ marginBottom: '15px' }}>
                <strong>🆔 ID:</strong>
                <span style={{ marginLeft: '10px', color: '#666' }}>{firstUser.id}</span>
            </div>

            <div style={{ marginBottom: '15px' }}>
                <strong>👨‍💼 User Name:</strong>
                <span style={{ marginLeft: '10px', color: '#666' }}>{firstUser.userName}</span>
            </div>

            <div style={{ marginBottom: '15px' }}>
                <strong>⚧ Gender:</strong>
                <span style={{ marginLeft: '10px', color: '#666' }}>{firstUser.gender}</span>
            </div>

            <div style={{ marginBottom: '15px' }}>
                <strong>📅 Date of Birth:</strong>
                <span style={{ marginLeft: '10px', color: '#666' }}>{firstUser.dateBirth}</span>
            </div>

            <div style={{ marginBottom: '15px' }}>
                <strong>🏠 Address:</strong>
                <span style={{ marginLeft: '10px', color: '#666' }}>{firstUser.address}</span>
            </div>
        </div>
    )
}