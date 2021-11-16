import React,{useState} from 'react'
import {useHistory} from 'react-router-dom'


export default function Login() {

    let history =useHistory()
const [registeredEmail, setRegisteredEmail] = useState('narendramodi@gmail.com')
const [registeredPassword, setRegisteredPassword] = useState('merabharathmahaan')



const onLoginClick=async()=>
{
  let dataToSend = new FormData()
  dataToSend.append("registeredEmail",registeredEmail)
  dataToSend.append("registeredPassword",registeredPassword)
  dataToSend.append("funcName","verifyLogin")


    let data = await fetch("https://pulse.brninfotech.com/pulse/modules/admin/ValidateLogin.php",{method:"post",body:dataToSend})
    let convertedData =await data.json()
    console.log(convertedData)
if(convertedData.loggedIn==="yes") 
{
   //history.push("/dashboard")
   history.push({pathname:"/dashboard",state:{data:convertedData}})
}else
{
    alert(convertedData.msg)
}


}

    return (
        <div>
            <label>UserName</label>
            <input type="text" value={registeredEmail} onChange={(e)=>setRegisteredEmail(e.target.value)}/>
            <label>Password</label>
            <input type="password" value={registeredPassword} onChange={(e)=>setRegisteredPassword(e.target.value)}/>
            <button onClick={onLoginClick} >Login</button>
            
        </div>
    )
}
