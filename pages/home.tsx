import React from 'react'
import TestHooks from '../components/TestHooks';

const home = () => {
    const name: string = "hanh";
    return (
        <div>
            <TestHooks>
                Hi! Im testing props childrent in reactjs!
            </TestHooks>
        </div>
    )
}

export default home
