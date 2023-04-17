import styled from '@emotion/styled'

const Button = styled.button`
color: white;
background-color: ${props => (props.primary ? 'blue' : 'green')};
font-size: 1.1rem;
width: 100px;
height: 50px;

`

export default Button;