import Title from 'antd/lib/typography/Title'
import React from 'react'
import { CopyrightStyles, Ticker } from "react-ts-tradingview-widgets";
import { MarketData } from "react-ts-tradingview-widgets";

const SectionFour = () => {
  const styles: CopyrightStyles = {
    parent: {
      fontSize: "0px",
      color: "transparent",
    },
    link: {
      textDecoration: "line-trough",
    },
    span: {
      color: "transparent",
    },
  };
  return (
    <div className='container-fluid main' style={{ backgroundColor: '#F2F2F2', minHeight: '100%', width:'100%', display: 'flex', justifyContent: 'center', alignItems: 'center', paddingTop: '50px' }}>
      <div className='row'>
        <div className='col-12' style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }} >
          <Title style={{ marginTop: 0, textAlign: 'center' }} level={1}>Conozca las tendencias del mercado</Title>
          <div style={{width:'50%'}}>
          <p className='text-center p-one' style={{fontSize:'22px'}}>
            No pierda la proxima oportunidad para ganar comprando y vendiendo criptomonedas en nuestro exchange.
          </p>
          </div>
          

          <div style={{ width: '100%', alignSelf: 'center' }}>

            
            <MarketData locale='es' width={1200} height={400} copyrightStyles={styles}></MarketData>
          </div>








        </div>

      </div>

    </div>
  )
}

export default SectionFour