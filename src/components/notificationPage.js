import React from "react";

const NotificationPage = () => {

    return (
        <>
            <div
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '20px',
                    'text-size-adjust': '20px',
                    'font-size': '26px',
                    'font-family': 'monospace'
                }}>
                One Stop hub for all the Coders
            </div>
            <div style={{
                padding: '50px',
                'font-size': '20px',
                'font-family': 'monospace'
            }}>Latest Contest</div>
            <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '20px',
                'text-size-adjust': '20px',
                'font-size': '20px',
                'font-family': 'monospace'
            }}>
                LeetCode
            </div>
            <div style={{ padding: '50px' }}class="row" >
                <div class="col-sm-4">.col-sm-4</div>
                <div class="col-sm-4">.col-sm-4</div>
                <div class="col-sm-4">.col-sm-4</div>
            </div>
        </>

    )

}

export default NotificationPage;