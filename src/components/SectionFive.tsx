import { Button} from 'antd'
import Title from 'antd/lib/typography/Title'
import React from 'react'
import StepOne from '../assets/icons/StepOne'
import StepThree from '../assets/icons/StepThree'
import StepTwo from '../assets/icons/StepTwo'
import logo from '../assets/icons/register.png'
import logo1 from '../assets/backgrounds/background2.png'


const SectionFive = () => {
    return (
 

        <div className='container-fluid'  style={{backgroundColor:'#0f4dcc', paddingRight:'100px',paddingLeft:'100px', backgroundImage:`url(${logo1})`, backgroundRepeat:'no-repeat', backgroundPosition:'center'}}>
            <div className='row'>
            <div className='col-12 col-sm-6 col-lg-6' style={{display:'flex',flexDirection:'column',alignItems:'center', justifyContent:'center'}} >
                    
                     
                     

                      <ol style={{listStyle:'none'}}>

                        <li>
                        <Title style={{color:'white'}} level={2}>
                          La forma más facil de comenzar a operar con criptomonedas 
                      </Title>
                        </li>
                        <li>
                        <Title style={{color:'#A9B5E4'}} level={3}>
                         <StepOne  /> Crea una cuenta gratuita en Kii Exchange 
                      </Title>
                        </li>
                        <li>
                        <Title  style={{color:'#A9B5E4'}} level={3}>
                         <StepTwo  /> Configura un metodo de pago
                      </Title>
                        </li>
                        <li>
                        <Title  style={{color:'#A9B5E4'}} level={3}>
                         <StepThree /> Compra y vende criptomonedas
                      </Title>
                        </li>
                        <li>
                        <Button style={{backgroundColor:'white', borderRadius:'20px', color:'#0F4DCC', width:'260px',height:'50px', fontWeight:'bold', fontSize:'20px', padding:'5px'}}>
                        Comience ahora mismo!
                      </Button>
                        </li>
                        
                      </ol>

      

                      
                </div>
                <div className='col-12 col-sm-6 col-lg-6' style={{display:'flex',flexDirection:'column',alignItems:'center', justifyContent:'center'}}>
                <img src={logo} style={{maxHeight:'600px'}} className='img-fluid' />
                </div>
            </div>

        </div>
    )
}

export default SectionFive