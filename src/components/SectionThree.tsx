import { Col, Row } from 'antd'
import Title from 'antd/lib/typography/Title'
import React from 'react'
import './index.css'
import ExchangeCard from './ExchangeCard'
import SafeStorage from '../assets/icons/SafeStorage'
import CompraVende from '../assets/icons/CompraVende'
import UserXP from '../assets/icons/UserXP'
import { TransaccionEficaz } from '../assets/icons/TransaccionEficaz'
import ComunidadGlobal from '../assets/icons/ComunidadGlobal'
import Soporte from '../assets/icons/Soporte'

const CARDS = [
    {title:'Almacenamiento Seguro',
    description:'Todos los activos digitales están protegido, puede estar tranquilo, su dinero esta seguro',
    icon:(color:string)=><SafeStorage color={color} />},
    {
        title:'Compra y vende!',
        description:'Más de 20 monedas fiat mediante transferencias bancarias y tarjetas débito o crédito',
        icon:(color:string)=><CompraVende color={color}/>
    },
    {
        title:'Experiencia de Usuario',
        description:'Creamos la mejor aplicacion de uso facil, con ella podras comprar y vender todas las criptos en pocos segundos',
        icon:(color:string)=><UserXP color={color} />
    },
    {
        title:'Transacciones Eficaces',
        description:'Operaciones ultrarápidas, confiables y seguras, gracias al desarrollo con tecnologia de ultima generación',
        icon:(color:string)=><TransaccionEficaz color={color}/>
    },
    {
        title:'Comunidad Global',
        description:'Puede hacer parte activa de nuestra inmensa comunidad por medio de las diferentes redes sociales, únete ahora!',
        icon:(color:string)=> <ComunidadGlobal color={color}/>    
    },
    {
        title:'Soporte Técnico',
        description:'Nuestro equipo de soporte está aquí 24/7/365 a través de los canales de soporte de nuestras aplicaciones.',
        icon:(color:string)=><Soporte color={color}/>
    }

]

const SectionThree = () => {
    return (
        <>
            <Row className='row-center main-row-three' style={{}} >
                <Col span={12}>
                    <Title>
                        El exchange más facil de usar!
                    </Title>
                    <p className='p-one'>
                        Hemos desarrollado un exchange pensando en los usuarios, somos la plataforma ideal para comenzar a comprar y vender criptomonedas
                    </p>
                </Col>
            </Row>
            <Row className='wrap-cards' style={{backgroundColor:'#F2F2F2'}}>
                <Col className='wrap-column' span={24}>
                   {CARDS.map((card)=>{
                        return <ExchangeCard colorBody='white' colorText='#0F4DCC' description={card.description} title={card.title} icon={card.icon} />
                    })}
                </Col>
            </Row>
        </>
    )
}

export default SectionThree