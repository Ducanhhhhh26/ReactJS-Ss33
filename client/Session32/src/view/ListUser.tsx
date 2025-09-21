import { useSelector } from 'react-redux'
import type { RootState } from '../store'

export default function ListUser() {
    const users = useSelector((state: RootState) => state.user.users);

    return (
        <div style={{
            padding: '20px',
            fontFamily: 'Arial, sans-serif'
        }}>
            <h2 style={{
                color: '#333',
                marginBottom: '20px',
                textAlign: 'center'
            }}>📋 Danh sách User</h2>

            <table style={{
                width: '100%',
                borderCollapse: 'collapse',
                backgroundColor: 'white',
                boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                borderRadius: '8px',
                overflow: 'hidden'
            }}>
                <thead>
                    <tr style={{ backgroundColor: '#f8f9fa' }}>
                        <th style={{
                            padding: '12px',
                            border: '1px solid #dee2e6',
                            textAlign: 'center',
                            fontWeight: 'bold',
                            color: '#495057'
                        }}>Id</th>
                        <th style={{
                            padding: '12px',
                            border: '1px solid #dee2e6',
                            textAlign: 'center',
                            fontWeight: 'bold',
                            color: '#495057'
                        }}>Tên</th>
                        <th style={{
                            padding: '12px',
                            border: '1px solid #dee2e6',
                            textAlign: 'center',
                            fontWeight: 'bold',
                            color: '#495057'
                        }}>Giới tính</th>
                        <th style={{
                            padding: '12px',
                            border: '1px solid #dee2e6',
                            textAlign: 'center',
                            fontWeight: 'bold',
                            color: '#495057'
                        }}>Ngày sinh</th>
                        <th style={{
                            padding: '12px',
                            border: '1px solid #dee2e6',
                            textAlign: 'center',
                            fontWeight: 'bold',
                            color: '#495057'
                        }}>Địa chỉ</th>
                        <th style={{
                            padding: '12px',
                            border: '1px solid #dee2e6',
                            textAlign: 'center',
                            fontWeight: 'bold',
                            color: '#495057'
                        }}>Chức năng</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user) => (
                        <tr key={user.id}>
                            <td style={{
                                padding: '12px',
                                border: '1px solid #dee2e6',
                                textAlign: 'center'
                            }}>{user.id}</td>
                            <td style={{
                                padding: '12px',
                                border: '1px solid #dee2e6',
                                textAlign: 'left'
                            }}>{user.userName}</td>
                            <td style={{
                                padding: '12px',
                                border: '1px solid #dee2e6',
                                textAlign: 'center'
                            }}>{user.gender}</td>
                            <td style={{
                                padding: '12px',
                                border: '1px solid #dee2e6',
                                textAlign: 'center'
                            }}>{user.dateBirth}</td>
                            <td style={{
                                padding: '12px',
                                border: '1px solid #dee2e6',
                                textAlign: 'left'
                            }}>{user.address}</td>
                            <td style={{
                                padding: '12px',
                                border: '1px solid #dee2e6',
                                textAlign: 'center'
                            }}>
                                <div style={{ display: 'flex', gap: '8px', justifyContent: 'center' }}>
                                    <button
                                        style={{
                                            padding: '6px 12px',
                                            backgroundColor: '#007bff',
                                            color: 'white',
                                            border: 'none',
                                            borderRadius: '4px',
                                            cursor: 'pointer',
                                            fontSize: '12px'
                                        }}
                                    >
                                        Sửa
                                    </button>
                                    <button
                                        style={{
                                            padding: '6px 12px',
                                            backgroundColor: '#dc3545',
                                            color: 'white',
                                            border: 'none',
                                            borderRadius: '4px',
                                            cursor: 'pointer',
                                            fontSize: '12px'
                                        }}
                                    >
                                        Xóa
                                    </button>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {users.length === 0 && (
                <div style={{
                    textAlign: 'center',
                    padding: '40px',
                    color: '#6c757d',
                    fontStyle: 'italic'
                }}>
                    Không có user nào trong danh sách
                </div>
            )}
        </div>
    )
}