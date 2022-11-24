import { Button, Card, Col, Image, Input, Row } from 'antd'

import fondo from '../assets/backgrounds/mobiles.png'
import Title from 'antd/lib/typography/Title'
import AppStoreIcon from '../assets/icons/AppStoreIcon'
import GoogleStoreIcon from '../assets/icons/GoogleStoreIcon'
import QrIcon from '../assets/icons/QrIcon'
import ApiIcon from '../assets/icons/ApiIcon'
import RSTG from '../assets/icons/RSTG'
import RSLK from '../assets/icons/RSLK'
import RSTW from '../assets/icons/RSTW'
import RSIG from '../assets/icons/RSIG'
import RSFB from './RSFB'
import RSWS from '../assets/icons/RSWS'

const SectionOne = () => {
    return (
        <Row className='main-row-one' style={{ paddingRight: '200px', paddingLeft: '200px' }}>
            <Col className='column-one-one' xs={24} md={12} lg={12} span={12} >
                <Card className='card-style' bodyStyle={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }} style={{}}>
                   
                    <Title className='title-black' level={2}>Compra y vende criptomonedas de la manera mas rapida y segura</Title>
                    <p className='p-one' style={{}}>
                        Procesa tus remesas y pagos internacionales por menos de 1% y en el mismo día!
                    </p>
                    <Row style={{ width: '100%', justifyContent: 'right' }}>
                        <Col style={{ margin: '5px' }} xs={24} md={15} lg={15}>
                            <Input className='input-one' placeholder={'Email / Teléfono'}></Input>
                        </Col>
                        <Col style={{ margin: '5px' }} xs={24} md={8} lg={8}>
                            <Button className='boton-one'>Comenzar</Button>
                        </Col>
                    </Row>
                    <Row style={{ width: '100%', justifyContent: 'left', margin: '10px' }}>
                        <div style={{ backgroundColor: '#E6E6E6', borderRadius: '100px', margin: '5px', width: '48px', height: '48px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <AppStoreIcon width='38px' height='38px' color={'#B3B3B3'} />
                        </div>
                        <div style={{ backgroundColor: '#E6E6E6', borderRadius: '100px', margin: '5px', width: '48px', height: '48px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <GoogleStoreIcon width='38px' height='38px' color={'#B3B3B3'} />
                        </div>
                        <div style={{ backgroundColor: '#E6E6E6', borderRadius: '100px', margin: '5px', width: '48px', height: '48px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <QrIcon width='38px' height='38px' color={'#B3B3B3'} />
                        </div>
                        <div style={{ backgroundColor: '#E6E6E6', borderRadius: '100px', margin: '5px', width: '48px', height: '48px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <ApiIcon width='30px' height='30px' color={'#B3B3B3'} />
                        </div>

                    </Row>
                </Card>
            </Col>
            <Col className='align-center' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} xs={24} md={10} lg={10} span={10}>

                <Image src={fondo} preview={false}>
                </Image>

            </Col>
            <Col style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} xs={24} md={2} lg={2} span={2}>

                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', backgroundColor: '#E6E6E6', padding: '5px', borderRadius: '100px' }}>
                    <div style={{ margin: '5px' }}>
                        <RSTG color='#B3B3B3'/>
                    </div>
                    <div style={{ margin: '5px' }}>

                    </div>
                    <div style={{ margin: '5px' }}>

                        <RSLK color='#B3B3B3' />
                    </div>
                    <div style={{ margin: '5px' }}>
                        <RSTW color='#B3B3B3' />
                    </div>
                    <div style={{ margin: '5px' }}>
                        <RSIG  color='#B3B3B3'/>
                    </div>
                    <div style={{ margin: '5px' }}>
                        <RSFB color='#B3B3B3'/>
                    </div>
                    <div style={{ margin: '5px' }}>
                        <RSWS color='#B3B3B3'/>
                    </div>






                </div>

            </Col>
        </Row>
    )
}

export default SectionOne