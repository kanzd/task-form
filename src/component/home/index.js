import React,{useState} from 'react'
import {Button,Checkbox,TextField,Fab,AppBar,Toolbar,Typography, Container,Modal,Box,InputLabel,Select,MenuItem,RadioGroup,Grid,FormControlLabel,Radio} from "@mui/material";
import { Add } from "@mui/icons-material";

export default function Index() {
    const [field, setfields] = useState([])
    const [preview,setpreview] = useState(false)
    const [popup,setpopup]= useState(false)
    const [popup2,setpopup2]= useState(false)
    const [currentVal,setCurrent]=useState("text")
    const [place,setplace]=useState("");
    const [vals,setVals]=useState([])
    const [temp,setTemp]=useState("");
     console.log(field);
    return (
        <>
         <Modal
      open={popup2}
      onClose={(e)=>{
          setpopup2(false);
      }}

      >
<Container align="center">
    <Box style={{backgroundColor:"white",marginTop:200,height:300}} align="center" >
    
    <TextField style={{marginTop:50}} placeholder="Add value" onChange={(e)=>{
        setTemp(e.target.value);
    }}></TextField>
    <div><Button onClick={(e)=>{
        let tempval=vals;
        tempval.push(temp);
        setVals(tempval);
        setpopup2(false);
    }}>Add</Button></div>
    
    </Box>
</Container>
      </Modal>
      <Modal
      open={popup}
      onClose={(e)=>{
          setpopup(false);
      }}

      >
<Container align="center">
    <Box style={{backgroundColor:"white",marginTop:200,height:300}} align="center" >
    <InputLabel id="demo-simple-select-label">Select Field Type</InputLabel>
  <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    value={currentVal}
    label="Select Field Type"
    onChange={(e)=>{
        console.log(e.target.value);
setCurrent(e.target.value);
    }}
  >
    <MenuItem value={"text"}>TextField</MenuItem>
    <MenuItem value={'area'}>TextArea</MenuItem>
    <MenuItem value={"check"}>Checkbox</MenuItem>
    <MenuItem value={"radio"}>Radio</MenuItem>
    
    
  </Select>
  {currentVal==="check"||currentVal==="radio"?vals.map((value,index)=>(
      <div>{value}</div>
  )):<></>}
  <div>
  {currentVal=="text"|| currentVal=="area" ?<TextField placeholder="add placeholder" onChange={(e)=>{
      setplace(e.target.value);
  }} />:<Fab variant="extended"   onClick={(e)=>{
      setpopup2(true);
  }}> <Add /> Add value </Fab>}
  </div>
  <div style={{marginTop:10,marginBottom:10}}>
  <Button variant="contained" onClick={(e)=>{
      let tempval=field;
      tempval.push({
          type:currentVal,
          data:{placeholder:place,
          value:vals
          }
      })
      setfields(tempval)
      setVals([]);
      setplace([]);
     
      setpopup(false);

  }}>Add</Button>
  </div>
  
    </Box>
</Container>
      </Modal>
        <AppBar style={{height:80,position:"relative"}}><Typography align="center" style={{marginTop:20,fontSize:30,fontWeight:"bold"}}> Forms </Typography></AppBar>
        
         
            <Container align="center" style={{marginTop:6}}>
            {preview?<></>:<Fab color="primary" aria-label="add" variant="extended" onClick={(e)=>{
setpopup(true);
            }}>
            
            <Add />
            <div style={{fontWeight:"bold"}}>Add Field</div>
            </Fab>}
            
            {field.map((value,index)=>{
                if(value.type==="text"){
                    return (
                        <div> <TextField placeholder={value.data.placeholder}></TextField></div>
                       
                        )
                }
                else if(value.type==="area"){

                    return (
                        <div>
                        <textarea placeholder={value.data.placeholder}></textarea>
                        </div>
                       
                        
                        )
                }
                else if (value.type==="check"){
                    return (
                        <Grid container justifyContent="center">
                        {value.data.value.map((value1,index)=>( <Grid item>   <FormControlLabel control={<Checkbox  />} label={value1} /></Grid>))}
                            
                        </Grid>
                     
                    )
                }
                else if(value.type==="radio"){
                    return (
                        <Container align="center">
                        <RadioGroup
                        style={{display:"inline"}}
    row 
    defaultValue={value.data.value[0]}
    name="radio-buttons-group"
  >
  {
    value.data.value.map((value1,index)=>( <FormControlLabel value={value1} control={<Radio />} label={value1} />))
  }
   
  </RadioGroup>
  </Container>
                    )
                }
            })}
            <Button  variant="contained" onClick={(e)=>{
                setpreview(!preview);
            }}>{preview?"Edit":"Preview"}</Button>
            </Container>
            
        
        </>
    )
}
