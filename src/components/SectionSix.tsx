import { Button } from 'antd'
import Title from 'antd/lib/typography/Title'
import React from 'react'
import FooterSocial from '../assets/icons/FooterSocial'

import './index.css'

const SectionSix = () => {
  return (
    <div className='container' style={{ backgroundColor: 'white', minHeight: '600px', display: 'flex', justifyContent: 'center', width: '100%' }}>
      <div className='row' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%' }}>
        <div className='col-12' style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }} >
          <Title className='title-blue'>Cripto exchange para todos!</Title>
          <Title style={{ marginTop: 0, textAlign: 'center', fontSize:'38px' }} level={1}>Una comunidad con alcance mundial</Title>
          <p className='text-center p-one' style={{fontSize:'35px'}}>
            Kii Exchange opera a nivel global, ahora mismo estamos creando nuestra comunidad cripto a nivel mundial, si quieres rodearte de personas con tu misma pasion por las criptomonedas, solo debes crear una cuenta y unirte a todas nuestras redes sociales
          </p>

          <FooterSocial />

          <Button className='btnRegistrarSix'>
            Registrese ahora!
          </Button>


        </div>
       
      </div>
      

    </div>
  )
}

export default SectionSix