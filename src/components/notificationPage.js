import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


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
                padding: '40px',
                'font-size': '20px',
                'font-family': 'monospace'
            }}>Latest Contest</div>
            <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '20px',
                'text-decoration': 'underline',
                'text-size-adjust': '20px',
                'font-size': '20px',
                'font-family': 'monospace'
            }}>
                LeetCode
            </div>
            <div style={{
                padding: '40px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }}>
                {/* <Button variant="primary">Notify Me</Button>{' '} */}
                <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
                <div style={{
                    margin: '50px'
                }}>

                </div>
                {/* <Button variant="primary">Notify Me</Button>{' '} */}
                <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
            </div>

            <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '20px',
                'text-decoration': 'underline',
                'text-size-adjust': '20px',
                'font-size': '20px',
                'font-family': 'monospace'
            }}>
                Codechef
            </div>
            <div style={{
                padding: '40px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }}>
                {/* <Button variant="primary">Notify Me</Button>{' '} */}
                <Card style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>
                <div style={{
                    margin: '50px'
                }}>

                </div>
                {/* <Button variant="primary">Notify Me</Button>{' '} */}
                <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
            </div>

            {/* <div style={{ padding: '50px' }} class="row" >
                <div class="col-sm-4">.col-sm-4</div>
                <div class="col-sm-4">.col-sm-4</div>
                <div class="col-sm-4">.col-sm-4</div>
            </div> */}

        </>

    )

}

export default NotificationPage;