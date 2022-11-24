import { MenuOutlined } from '@ant-design/icons'
import { Button, Image, PageHeader, Typography } from 'antd'
import { Content } from 'antd/lib/layout/layout'
import React, { useState } from 'react'
import LOGO from '../assets/icons/Logo_kiiEx_provisional.svg'
import './index.css'
const HeaderKx = () => {
    const [nav, setnav] = useState(false)
    return (
        <PageHeader
            className="site-page-header"
            style={{ backgroundColor: 'white', position:'fixed', top:0, right:0,left:0, paddingRight:'200px', paddingLeft:'200px', zIndex:'100000' }}
            extra={[]}
        >
            <Content style={{ display: 'flex', justifyContent: 'center' }}>
                <Content>
                    <Content style={{ display: 'flex', justifyContent: 'start' }}>
                        <Image preview={false} style={{ width: '70px' }} src={LOGO}>
                        </Image>
                    </Content>
                </Content>
                <Content className='nav-bar' style={{ display: nav ? 'block' : 'none' }}>
                    <Content className='content-nav'>
                        <a><Typography className='menuItem' style={{ fontWeight: 'bold', padding: '10px', fontSize:'17px' }}>Inicio</Typography></a>
                        <a target='_blank' href='https://kiii.pages.dev/cuenta-de-empresa'><Typography className='menuItem' style={{ fontWeight: 'bold', padding: '10px', fontSize:'17px' }}>Cuenta de Empresa</Typography></a>
                        <a><Typography className='menuItem' style={{ fontWeight: 'bold', padding: '10px', fontSize:'17px' }}>Blog</Typography></a>
                        <a><Typography className='menuItem' style={{ fontWeight: 'bold', padding: '10px', fontSize:'17px' }}>Soporte</Typography></a>
                    </Content>
                    <Content className='login-nav'>
                        <Button className='btn-iniciar' style={{fontSize:'17px'}}>Iniciar Sesion</Button>
                        <Button className='btn-registrar' style={{fontSize:'17px',  height:'40px'}}>Registro</Button>
                    </Content>
                </Content>
                <Button className='btn-menu' style={{color:'blue'}} onClick={() => { setnav(!nav) }}><MenuOutlined /></Button>
            </Content>
        </PageHeader>
    )
}

export default HeaderKx