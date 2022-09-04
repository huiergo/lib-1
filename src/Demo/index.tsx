import React from 'react';
import ConfigProvider from '../ConfigProvider';
import './index.less'

function Demo() {
    return (
        // <ConfigProvider theme='orange'>
        <div className="container">
            <div className="content">
                <h3>描述文字</h3>
                <a href="#" className="demo-btn">read more</a>
            </div>
        </div>
        // </ConfigProvider>
    );
}

export default Demo;
