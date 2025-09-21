import { useSelector, useDispatch } from 'react-redux'
import type { RootState } from '../store'
import { toggleTheme } from '../store/themeReducer'

export default function ThemeToggle() {
    const isDarkMode = useSelector((state: RootState) => state.theme.isDarkMode);
    const dispatch = useDispatch();

    const handleToggleTheme = () => {
        dispatch(toggleTheme());
    };

    return (
        <div style={{
            padding: '20px',
            border: '1px solid #ccc',
            borderRadius: '8px',
            margin: '20px',
            fontFamily: 'Arial, sans-serif',
            backgroundColor: isDarkMode ? '#333' : '#f9f9f9',
            color: isDarkMode ? 'white' : '#333',
            transition: 'all 0.3s ease'
        }}>
            <h2 style={{
                textAlign: 'center',
                marginBottom: '30px',
                color: isDarkMode ? 'white' : '#333'
            }}>
                🎨 Theme Control
            </h2>

            {/* Chế độ sáng */}
            <div style={{
                padding: '20px',
                border: '1px solid #ddd',
                borderRadius: '8px',
                marginBottom: '20px',
                backgroundColor: isDarkMode ? '#555' : 'white',
                display: 'flex',
                alignItems: 'center',
                gap: '15px'
            }}>
                <input
                    type="checkbox"
                    id="lightMode"
                    checked={!isDarkMode}
                    onChange={handleToggleTheme}
                    style={{
                        width: '20px',
                        height: '20px',
                        cursor: 'pointer'
                    }}
                />
                <label
                    htmlFor="lightMode"
                    style={{
                        fontSize: '16px',
                        cursor: 'pointer',
                        color: isDarkMode ? 'white' : '#333'
                    }}
                >
                    Sáng
                </label>
            </div>

            {/* Chế độ tối */}
            <div style={{
                padding: '20px',
                border: '1px solid #ddd',
                borderRadius: '8px',
                backgroundColor: isDarkMode ? '#000' : '#f5f5f5',
                display: 'flex',
                alignItems: 'center',
                gap: '15px'
            }}>
                <input
                    type="checkbox"
                    id="darkMode"
                    checked={isDarkMode}
                    onChange={handleToggleTheme}
                    style={{
                        width: '20px',
                        height: '20px',
                        cursor: 'pointer'
                    }}
                />
                <label
                    htmlFor="darkMode"
                    style={{
                        fontSize: '16px',
                        cursor: 'pointer',
                        color: isDarkMode ? '#4fc3f7' : '#333'
                    }}
                >
                    Tối
                </label>
            </div>

        </div>
    )
}