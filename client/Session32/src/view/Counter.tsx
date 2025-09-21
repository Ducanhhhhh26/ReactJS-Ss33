import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import type { RootState } from '../store'
import { increment, decrement } from '../store/counterReducer'

export default function Counter() {
    const count = useSelector((state: RootState) => state.counter.value);
    const dispatch = useDispatch();

    return (
        <div style={{
            padding: '20px',
            // border: '1px solid #ccc',
            borderRadius: '8px',
            margin: '20px',
            fontFamily: 'Arial, sans-serif',
            textAlign: 'center'
        }}>
            <h2 style={{ color: '#333', marginBottom: '20px' }}> Counter</h2>

            <div style={{
                fontSize: '24px',
                fontWeight: 'bold',
                marginBottom: '20px',
                color: '#007bff'
            }}>
                {count}
            </div>

            <div style={{ display: 'flex', gap: '10px', justifyContent: 'center' }}>
                <button
                    onClick={() => dispatch(increment())}
                    style={{
                        padding: '10px 20px',
                        backgroundColor: '#28a745',
                        color: 'white',
                        border: 'none',
                        borderRadius: '4px',
                        cursor: 'pointer',
                        fontSize: '16px'
                    }}
                >
                    + 1
                </button>

                <button
                    onClick={() => dispatch(decrement())}
                    style={{
                        padding: '10px 20px',
                        backgroundColor: '#dc3545',
                        color: 'white',
                        border: 'none',
                        borderRadius: '4px',
                        cursor: 'pointer',
                        fontSize: '16px'
                    }}
                >
                    - 1
                </button>
            </div>
        </div>
    )
}
