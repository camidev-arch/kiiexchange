import { Button, Col, Row } from 'antd'
import Title from 'antd/lib/typography/Title'
import React from 'react'
import './index.css'
import logo from '../assets/backgrounds/background.png'

const SectionTwo = () => {
  return (
    <Row className='main-row-two' style={{paddingRight:'200px',paddingLeft:'200px',backgroundImage:`url(${logo})`, backgroundSize:'cover', backgroundRepeat:'no-repeat'}}>
    <Col xs={24}md={12} lg={12} span={12} className='col-one-two'>
        <Title className='title-col-one-two'>
            La mejor experiencia de trading con Kii-X Cripto Exchange
        </Title>
    </Col>
    <Col xs={24} md={12} lg={12} span={12} className='col-two-two'>
    <Title className='title-col-two-two' >
            Comienza ahora mismo!
        </Title>
        <Button  style={{backgroundColor:'white', height:'50px', borderRadius:'40px', color:'#0F4DCC', width:'230px', fontWeight:'bold', fontSize:'20px',margin:'10px'}}>Comenzar</Button>
    </Col>
</Row>
  )
}

export default SectionTwo