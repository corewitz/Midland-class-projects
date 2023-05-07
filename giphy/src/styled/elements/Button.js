import styled from "@emotion/styled";
/*
const Button = styled.button((props) => ({
    color: "white",
    // backgroundColor: props.theme.primary,
    backgroundColor: props.primary ? props.theme.primary : props.theme.secondary,
    

}))
*/


const Button = styled.button((props) => ({
  boxShadow: "0px -1px 6px 0px #f0f7fa",
  background: "linear-gradient(to bottom, #33bdef 5%, #019ad2 100%)",
  backgroundColor: "#33bdef",
  borderRadius: "6px",
  border: "1px solid #057fd0",
  display: "inline-block",
  cursor: "pointer",
  color: "#ffffff",
  fontFamily: "Arial",
  fontSize: "15px",
  fontWeight: "bold",
  padding: "13px 58px",
  textDecoration: "none",
  textShadow: "1px 3px 7px #5b6178",
  "&:hover": {
    backgroundColor: "white",
  }
}));

export default Button;
