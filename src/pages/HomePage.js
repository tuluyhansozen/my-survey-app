// src/pages/HomePage.js
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #e0f7fa;
  padding: 20px;
  min-height: 100vh;
  position: relative; // Ensure BackgroundEmoji is positioned correctly
`;

const HeroSection = styled.div`
  width: 100%;
  height: 40vh;
  background: #00796b url('your-image-url.jpg') no-repeat center center / cover; // Replace with your image URL
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.4);
  padding: 20px;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 48px;
  margin-bottom: 10px;
`;

const Description = styled.p`
  font-size: 20px;
  max-width: 600px;
  margin-bottom: 20px;
`;

const ButtonSection = styled.div`
  padding: 20px 20px;
  background: white;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
  width: 100%;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  padding: 20px 0;
`;

const Button = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #004d40;
  color: white;
  padding: 20px;
  width: 160px;
  height: 160px;
  border-radius: 10px;
  text-decoration: none;
  font-size: 20px;
  text-align: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: background 0.3s, transform 0.3s;

  &:hover {
    background: #002d25;
    transform: translateY(-2px);
  }
`;

const Emoji = styled.span`
  font-size: 48px;
  margin-bottom: 10px;
`;

const TestimonialsSection = styled.div`
  padding: 40px 20px;
  background: #f1f8e9;
  text-align: center;
  width: 100%;
`;

const Testimonial = styled.div`
  max-width: 600px;
  margin: 20px auto;
  font-size: 18px;
  line-height: 1.5;
`;

const Footer = styled.footer`
  padding: 20px;
  background: #00796b;
  color: white;
  text-align: center;
  width: 100%;
`;

const BackgroundEmoji = styled.div`
  position: absolute;
  font-size: 128px;
  opacity: 0.1;
  top: ${({ top }) => top}%;
  left: ${({ left }) => left}%;
`;

const HomePage = () => {
  return (
    <Container>
      <HeroSection>
        <Title>Discover Yourself!</Title>
        <Description>
          Uncover insights about your emotions and well-being.
        </Description>
      </HeroSection>
      <ButtonSection>
        <h2>Select a Test</h2>
        <ButtonContainer>
          <Button to="/test/anxiety" state={{ testName: 'anxiety' }}>
            <Emoji>😟</Emoji>
            Anxiety Test
          </Button>
          <Button to="/test/anger" state={{ testName: 'anger' }}>
            <Emoji>😡</Emoji>
            Anger Test
          </Button>
          <Button to="/test/self-esteem" state={{ testName: 'self-esteem' }}>
            <Emoji>😊</Emoji>
            Self-Esteem Test
          </Button>
          <Button to="/test/happiness" state={{ testName: 'happiness' }}>
            <Emoji>😃</Emoji>
            Happiness Test
          </Button>
          <Button to="/test/loneliness" state={{ testName: 'loneliness' }}>
            <Emoji>😔</Emoji>
            Loneliness Test
          </Button>
        </ButtonContainer>
      </ButtonSection>
      <TestimonialsSection>
        <h2>What People Are Saying</h2>
        <Testimonial>
          "This platform helped me understand my emotions better and take action towards improving my mental health."
        </Testimonial>
        <Testimonial>
          "The tests are quick, easy, and insightful. A must-try for anyone looking to improve their well-being."
        </Testimonial>
      </TestimonialsSection>
      <Footer>
        &copy; 2024 Your Company. All rights reserved.
      </Footer>
      <BackgroundEmoji top={10} left={10}>😊</BackgroundEmoji>
      <BackgroundEmoji top={30} left={70}>😃</BackgroundEmoji>
      <BackgroundEmoji top={50} left={20}>😔</BackgroundEmoji>
      <BackgroundEmoji top={70} left={50}>😁</BackgroundEmoji>
      <BackgroundEmoji top={90} left={80}>😡</BackgroundEmoji>
    </Container>
  );
};

export default HomePage;
