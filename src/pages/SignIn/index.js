import {BallTriangle} from 'react-loader-spinner';
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import api from "../../services/api";
import useAuth from "../../hooks/useAuth";
import ContainerSignIn from './style';
import {  Form, Input, Button, Label } from "../../components/formsComponents";

export default function SignIn() {
    const {login} = useAuth()
    const navigate = useNavigate();
    const [formData, setFormData] = useState({ email: '', password: '' });
    const [isLoading, setIsLoading] = useState(false);

    function handleChange(e) {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      }
    
    async function handleSubmit(e) {
        e.preventDefault();
        
        
        try {
            setIsLoading(true);
            const promise = await api.signIn({
              ...formData
            }).then((response) => {
                setIsLoading(false);
                login(response.data)
                console.log(response.data)
                navigate("/");
              })
            
        } catch (error) {
            
            setIsLoading(false);
            alert('Error, try again');
        }
    
        
      }
  
    return (
        <>
        <ContainerSignIn>
            <h4>Login</h4>
            <Form onSubmit={handleSubmit}>
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
            
    
            <Button type="submit" disabled={isLoading}>
              {
                isLoading
                  ? <BallTriangle color="#FFFFFF" height={30} width={30} />
                  : "Sign-In"
              }
            </Button>
          </Form>
    
        </ContainerSignIn>
        </>
      )
    }
    
    
    
  