import {BallTriangle} from 'react-loader-spinner';
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import api from "../../services/api";
import styled from 'styled-components'
import {  Form, Input, Button, StyledLink } from "../../components/formsComponents";

export default function SignUp() {

    const navigate = useNavigate();
    const [formData, setFormData] = useState({ firstname: '', lastname: '', email: '', password: '', confirmpassword: '' });
    const [isLoading, setIsLoading] = useState(false);

    function handleChange(e) {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      }
    
      async function handleSubmit(e) {
          
        if(formData.password !== formData.confirmpassword){
            alert("Passwords should match")
            return
        }
        e.preventDefault();
        delete formData.confirmpassword
        
        try {
            setIsLoading(true);
            const promise = await api.signUp({
              ...formData
            }).then(() => {
                setIsLoading(false);
                navigate("/");
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
            <Label>First Name</Label>
          <Input
            type="text"
            placeholder="Jorge"
            name="firstname"
            onChange={handleChange}
            value={formData.name}
            disabled={isLoading}
            required
          />
            <Label>Last Name</Label>
          <Input
            type="text"
            placeholder="da Silva"
            name="lastname"
            onChange={handleChange}
            value={formData.name}
            disabled={isLoading}
            required
          />
          <Label>E-mail</Label>
        <Input
          type="email"
          placeholder="example@email.com"
          name="email"
          onChange={handleChange}
          value={formData.email}
          disabled={isLoading}
          required
        />
        <Label>Password</Label>
        <Input
          type="password"
          placeholder="******"
          name="password"
          onChange={handleChange}
          value={formData.password}
          disabled={isLoading}
          required
        />
        <Label>Confirm Password</Label>
        <Input
          type="password"
          placeholder="Confirme the ***"
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
              : "Cadastrar"
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
background-color: #fff;
border: 1px solid rgba(81, 88, 94, .12);
box-shadow: 0 0.05rem 0.2rem rgb(0 0 0 / 3%);
border-radius: 0.35rem;

h4{
    margin-top: 0;
    margin-bottom: .3rem;
    font-weight: 600;
    line-height: 1.25;
    color: #212529;
}
`;

const Label = styled.span`
    margin-bottom: .15rem;
    padding-right: 17rem;
    
`;