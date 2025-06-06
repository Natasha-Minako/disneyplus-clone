import styled from "styled-components";

const Login = (props) => {
  return (
    <Container>
      <Content>
        <CTA>
          <CTALogoOne src="/images/cta-logo-one.svg" alt="Image One" />
          <SignUp>GET ALL THERE</SignUp>
          <Description>
            Get Premier Access to Raya and the Last Dragon for an additional fee
            with a Disney+ subscription. As of 03/26/21, the price of Disney+ and
            The Disney Bundle will increase by $1.
          </Description>
          <CTALogoTwo src="/images/cta-logo-two.png" alt="Image Two" />
        </CTA>
        <BgImage />
      </Content>
    </Container>
  );
};

const Container = styled.section`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  text-align: center;
  height: 100vh;
`;

const Content = styled.div`
  /* removido margin-bottom 100vw */
  width: 100%;
  position: relative;
  min-height: 100vh;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 80px 40px;
  height: 100%;

  @media (max-width: 768px) {
    padding: 40px 20px;
  }
`;

const BgImage = styled.div`
  height: 100%;
  background-position: top;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url("/images/login-background.jpg");
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  z-index: -1;
`;

const CTA = styled.div`
  max-width: 650px;
  display: flex;
  flex-direction: column;
  width: 100%;

  @media (max-width: 768px) {
    max-width: 90%;
  }
`;

const CTALogoOne = styled.img`
  margin-bottom: 12px;
  max-width: 600px;
  min-height: 1px;
  display: block;
  width: 100%;

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

const SignUp = styled.button`
  font-weight: bold;
  color: #f9f9f9;
  background-color: #0063e5;
  margin-bottom: 12px;
  width: 100%;
  letter-spacing: 1.5px;
  font-size: 18px;
  padding: 16.5px 0px;
  border: none;
  border-radius: 4px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0483ee;
    cursor: pointer;
  }
`;

const Description = styled.p`
  color: #f9f9f9;
  font-size: 11px;
  margin: 0 0 24px;
  line-height: 1.5;
  letter-spacing: 1.5px;

  @media (max-width: 768px) {
    font-size: 13px;
  }
`;

const CTALogoTwo = styled.img`
  max-width: 600px;
  margin-bottom: 20px;
  display: inline-block;
  vertical-align: bottom;
  width: 100%;

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

export default Login;

loginScreen.classList.remove('fade-in'); // se houver
loginScreen.classList.add('fade-out');

setTimeout(() => {
  loginScreen.style.display = 'none';
  // mostra o app
}, 1000);

app.classList.remove('fade-in');
app.classList.add('fade-out');

setTimeout(() => {
  app.style.display = 'none';
  // mostra loginScreen
}, 1000);
