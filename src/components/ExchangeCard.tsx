import { Button, Card, Col, Row, Typography } from 'antd'
import React, { useState } from 'react'
import ArrowRigth from '../assets/icons/ArrowRigth'
import './index.css'

interface IProps {
        icon: (color: any) => React.ReactNode,
        title: string,
        description: string,
        colorText: string,
        colorBody: string
}
const ExchangeCard = ({ colorBody, colorText, description, icon, title }: IProps) => {
        const [color, setColor] = useState('#0F4DCC')
        return (
                <Card style={{
                        borderRadius: '60px',
                        width: '400px',
                        height: '400px',
                        //backgroundColor:/* '#0F4DCC' */colorBody,
                        padding: '10px',
                        margin: '5px'
                }}
                        className='cards'
                        hoverable
                        headStyle={{ border: '0px', paddingBottom: '0px', marginBottom: '-20px' }}

                        bodyStyle={{ height: '100%', paddingTop: '0px', marginTop: '0px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}
                        onMouseOver={() => { setColor('white') }}
                        onMouseLeave={() => setColor('#0F4DCC')
                        }
                >
                        <Row style={{ height: '100%' }}>
                                <Col style={{ height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }} span={24}>
                                        <div style={{ alignSelf: 'start' }}>{icon(color)}</div>
                                        <Typography style={{ fontWeight: 'BOLD', fontSize: '30px', color: color == 'white' ? 'white' : 'black', marginTop: '15px', alignSelf: 'start' }}> {title}</Typography>
                                        <p style={{ fontSize: '20PX' }}>
                                                {description}
                                        </p>
                                </Col>
                        </Row>

                        <Row style={{ width: '90%', display: 'flex', justifyContent: 'end' }}>
                                <Col style={{ height: '90%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }} span={24}>
                                        <Button icon={<ArrowRigth color={color} heigth='45px' width='45px' />} style={{ backgroundColor: 'transparent', border: '0px', alignSelf: 'end' }}></Button>
                                </Col>
                        </Row>

                </Card>
        )
}

export default ExchangeCard