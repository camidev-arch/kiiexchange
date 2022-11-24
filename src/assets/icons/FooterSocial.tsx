import shadows from '@mui/material/styles/shadows'
import { Button } from 'antd'
import React from 'react'
import FBFooter from './FBFooter'
import IGFooter from './IGFooter'
import LKFooter from './LKFooter'
import TGFooter from './TGFooter'
import TWFooter from './TWFooter'

const FooterSocial = () => {
  return (
    <div style={{display:'flex', borderRadius:'20px', backgroundColor:'#E4E4E4', height:'90px', justifyContent:'center'}}>
        <Button style={{height:'70px', width:'70px', borderRadius:'100px', margin:'10px', boxShadow:'1px 1px 1px gray'}} >
            <FBFooter width={30} height={30} />
        </Button>
        <Button style={{height:'70px', width:'70px', borderRadius:'100px', margin:'10px', boxShadow:'1px 1px 1px gray'}} >
            <TWFooter />
        </Button>
        <Button style={{height:'70px', width:'70px', borderRadius:'100px', margin:'10px', boxShadow:'1px 1px 1px gray'}} >
            <IGFooter />
        </Button>
        <Button style={{height:'70px', width:'70px', borderRadius:'100px', margin:'10px', boxShadow:'1px 1px 1px gray'}}>
            <LKFooter />
        </Button>
        <Button style={{height:'70px', width:'70px', borderRadius:'100px', margin:'10px', boxShadow:'1px 1px 1px gray'}}>
            <TGFooter />
        </Button>
    </div>
  )
}

export default FooterSocial