import styled from "styled-components"

function Footer(props){
    const Footer = styled.footer`
        margin-top:1rem;
        font-size: 0.8rem;
        margin-bottom : 1rem;
    `
    return(
        <Footer>
            Powered by NASA
        </Footer>
    )
}
export default Footer