import { useSelector, useDispatch } from 'react-redux'
import type { RootState } from '../store'
import { addRandomNumber } from '../store/randomNumberReducer'

export default function RandomNumber() {
    const numbers = useSelector((state: RootState) => state.randomNumber.numbers);
    const dispatch = useDispatch();

    const handleGenerateRandomNumber = () => {
        dispatch(addRandomNumber());
    };



    return (
        <div style={{
            padding: '20px',
            borderRadius: '8px',
            margin: '20px',
            fontFamily: 'Arial, sans-serif',
            textAlign: 'center'
        }}>
            <h2 style={{ color: '#333', marginBottom: '20px' }}>🎲 Random Number Generator</h2>

            {/* Hiển thị danh sách số ngẫu nhiên */}
            <div style={{
                fontSize: '24px',
                fontWeight: 'bold',
                marginBottom: '20px',
                color: '#007bff',
                minHeight: '40px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexWrap: 'wrap',
                gap: '10px'
            }}>
                {numbers.length === 0 ? (
                    <span style={{ color: '#6c757d', fontSize: '18px' }}>[]</span>
                ) : (
                    <span>[{numbers.join(', ')}]</span>
                )}
            </div>

            <div style={{ display: 'flex', gap: '10px', justifyContent: 'center', flexWrap: 'wrap' }}>
                <button
                    onClick={handleGenerateRandomNumber}
                    style={{
                        padding: '12px 24px',
                        backgroundColor: '#007bff',
                        color: 'white',
                        border: 'none',
                        borderRadius: '4px',
                        cursor: 'pointer',
                        fontSize: '16px',
                        fontWeight: 'bold'
                    }}
                >
                    Generate Random Number
                </button>


            </div>

            {numbers.length > 0 && (
                <div style={{
                    marginTop: '20px',
                    padding: '10px',
                    backgroundColor: '#f8f9fa',
                    borderRadius: '4px',
                    fontSize: '14px',
                    color: '#6c757d'
                }}>
                </div>
            )}
        </div>
    )
}