import { useState } from 'react'
import { Col, Layout, Row, Typography } from 'antd';
import HeaderKx from './components/HeaderKx';
import HeaderContent from './components/HeaderContent';
import SectionTwo from './components/SectionTwo';
import SectionOne from './components/SectionOne';
import ExchangeCard from './components/ExchangeCard';
import ArrowRigth from './assets/icons/ArrowRigth';
import SectionThree from './components/SectionThree';
import SectionFive from './components/SectionFive';
import { TransaccionEficaz } from './assets/icons/TransaccionEficaz';
import SectionSix from './components/SectionSix';
import { CopyrightStyles, CryptoCurrencyMarket } from "react-ts-tradingview-widgets";
import FBFooter from './assets/icons/FBFooter';
import IGFooter from './assets/icons/IGFooter';
import TGFooter from './assets/icons/TGFooter';
import TWFooter from './assets/icons/TWFooter';
import LKFooter from './assets/icons/LKFooter';
import { Container } from '@mui/material';
import SectionFour from './components/SectionFour';
import FooterM from './components/FooterM';
const { Header, Footer, Sider, Content } = Layout;
import { TickerTape } from "react-ts-tradingview-widgets";
function App() {

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
    <Layout style={{ width: '100vw', height: '100vh', backgroundColor: 'white', overflowX:'hidden' }}>

      <Content>
        <Row style={{marginBottom:'30px'}}>
          <Col span={24}>
           
          </Col>
        </Row>
        <Row >
          <Col style={{width:'100%', justifyContent:'center'}} span={24}>
            <div className='container-fluid main'>
            <HeaderContent />
            <SectionOne />
            <SectionTwo />
            <SectionThree />
            <SectionFour />
            <SectionFive />
            <SectionSix />
            <div style={{border:'0.5px solid gray', alignItems:'center', justifyContent:'center', width:'100%', minWidth:'100%', paddingTop:'35px'}}>
            <TickerTape showSymbolLogo  displayMode='compact' copyrightStyles={styles}></TickerTape>
            </div>
            
            <FooterM />
            </div>
            

          </Col>
        </Row>

       
      </Content>
  {/*      <Footer>Footer</Footer>  */}
    </Layout>
  )
}

export default App
