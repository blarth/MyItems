import {BallTriangle} from 'react-loader-spinner';
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import api from "../../services/api";
import styled from 'styled-components'
import {  Form, Input, Button } from "../../components/formsComponents";

export default function SignUp() {

    const navigate = useNavigate();
    const [formData, setFormData] = useState({ firstname: '', lastname: '', email: '', password: '', confirmpassword: '' });
    const [isLoading, setIsLoading] = useState(false);

    function handleChange(e) {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      }
    
      async function handleSubmit(e) {
        
        e.preventDefault();
        if(formData.password !== formData.confirmpassword){
            alert("Passwords should match")
            return
        }
        setFormData({...formData, confirmpassword : "" })
        delete formData.confirmpassword
        
        try {
            setIsLoading(true);
            const promise = await api.signUp({
              ...formData
            }).then(() => {
                setIsLoading(false);
                navigate("/sign-in");
              })
            
        } catch (error) {
            
            setIsLoading(false);
            alert('Error, try again');
        }
    
        
      }

  return (
    <>
    <ContainerSignUp>
        <h4>Create Account</h4>
        <Form onSubmit={handleSubmit}>
        <div className='wrapperLabel'>
            <Label>First Name</Label>
           </div>
          <Input
            type="text"
            placeholder="Jorge"
            name="firstname"
            onChange={handleChange}
            value={formData.name}
            disabled={isLoading}
            required
          />
          <div className='wrapperLabel'>
            <Label>Last Name</Label>
             </div>
          <Input
            type="text"
            placeholder="da Silva"
            name="lastname"
            onChange={handleChange}
            value={formData.name}
            disabled={isLoading}
            required
          />
          <div className='wrapperLabel'>
          <Label>E-mail</Label>
             </div>
        <Input
          type="email"
          placeholder="example@email.com"
          name="email"
          onChange={handleChange}
          value={formData.email}
          disabled={isLoading}
          required
        />
        <div className='wrapperLabel'>
        <Label>Password</Label>
           </div>
        <Input
          type="password"
          placeholder="******"
          name="password"
          onChange={handleChange}
          value={formData.password}
          disabled={isLoading}
          required
        />
        <div className='wrapperLabel'>

        <Label>Confirm Password</Label>
        </div>
        <Input
          type="password"
          placeholder="Confirm the ***"
          name="confirmpassword"
          onChange={handleChange}
          value={formData.confirmpassword}
          disabled={isLoading}
          required
        />

        <Button type="submit" disabled={isLoading}>
          {
            isLoading
              ? <BallTriangle color="#FFFFFF" height={30} width={30} />
              : "Sign-up"
          }
        </Button>
      </Form>

    </ContainerSignUp>
    </>
  )
}

const ContainerSignUp = styled.div`
display: flex;
flex: 1 1 auto;
padding: 1.25rem 1.25rem;
position: relative;
flex-direction: column;
word-wrap: break-word;
background : #1D1720;
border: 1px solid rgba(81, 88, 94, .12);
box-shadow: 0 0.05rem 0.2rem rgb(0 0 0 / 3%);
border-radius: 0.35rem;
justify-content: center;
align-items: center;

h4{
    margin-top: 0;
    margin-bottom: .3rem;
    font-weight: 600;
    line-height: 1.25;
    color: #FFFFFF;
}

.wrapperLabel {
  display: flex;
  width: 100%;
  justify-content: flex-start;
}
`;

const Label = styled.span`
    margin-bottom: .15rem;
    text-align: left;
    color: #ffffff;
    
`;