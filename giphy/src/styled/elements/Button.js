import styled from "@emotion/styled";

const Button = styled.button((props) => ({
    color: "white",
    // backgroundColor: props.theme.primary,
    backgroundColor: props.primary ? props.theme.primary : props.theme.secondary
}))

export default Button;