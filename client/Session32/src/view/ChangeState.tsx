import { useSelector, useDispatch } from 'react-redux'
import type { RootState } from '../store'
import { changeCompanyName } from '../store/companyReducer'

export default function ChangeState() {
    const companyName = useSelector((state: RootState) => state.company.name);
    const dispatch = useDispatch();

    const handleChangeState = () => {
        dispatch(changeCompanyName());
    };

    return (
        <div style={{
            padding: '40px',
            fontFamily: 'Arial, sans-serif',
            textAlign: 'center',
            borderRadius: '8px',
            margin: '20px',
            backgroundColor: '#f9f9f9'
        }}>
            {/* Hiển thị tên company */}
            <h1 style={{
                fontSize: '48px',
                fontWeight: 'bold',
                color: '#333',
                marginBottom: '30px',
                fontFamily: 'Arial, sans-serif'
            }}>
                {companyName}
            </h1>

            {/* Button Change state */}
            <button
                onClick={handleChangeState}
                style={{
                    padding: '12px 24px',
                    fontSize: '16px',
                    backgroundColor: 'white',
                    color: '#666',
                    border: '2px solid #ccc',
                    borderRadius: '4px',
                    cursor: 'pointer',
                    fontFamily: 'Arial, sans-serif'
                }}
            >
                Change state
            </button>
        </div>
    )
}