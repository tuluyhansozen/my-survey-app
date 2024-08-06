// src/pages/ResultPage.js
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import resultImage from '../assets/result.png'; // Add your image in the assets folder

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: #fff3e0;
  padding: 20px;
`;

const getCardBackgroundColor = (testName) => {
  const colors = {
    anxiety: '#e0f7fa',
    anger: '#ffebee',
    'self-esteem': '#fce4ec',
    happiness: '#fff9c4',
    loneliness: '#e8f5e9',
  };
  return colors[testName] || '#fff';
};

const Card = styled.div`
  background: ${({ testName }) => getCardBackgroundColor(testName)};
  padding: 40px;
  border-radius: 20px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  text-align: center;
  width: 80%;
  max-width: 800px;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 20px;
`;

const ResultText = styled.div`
  flex: 1;
  text-align: left;
`;

const Title = styled.h2`
  color: #ef6c00;
  margin-bottom: 20px;
`;

const AnswerList = styled.div`
  text-align: left;
  margin: 20px 0;
`;

const Answer = styled.p`
  color: #555;
  margin: 5px 0;
`;

const ResultImage = styled.img`
  width: 100%;
  max-width: 300px;
  margin: 20px 0;
`;

const Button = styled.button`
  margin: 20px;
  padding: 15px 30px;
  font-size: 16px;
  cursor: pointer;
  border: none;
  border-radius: 10px;
  background-color: #ff9800;
  color: white;
  transition: background-color 0.3s;

  &:hover {
    background-color: #e65100;
  }
`;

const getResultText = (testName, score) => {
  const results = {
    anxiety: [
      '✨ You’re a Zen Master! Your calm demeanor is like a serene lake. Keep riding those peaceful waves! 🌊',
      '😌 You’re on the right track! Your occasional anxious moments are manageable. Continue using your stress-busting tools! 🧘',
      '😰 Oops! Anxiety seems to be making waves in your life. Consider exploring calming techniques or talking to a pro! 🌟',
    ],
    anger: [
      '🕊️ Peaceful Warrior! Your anger management skills are impressive. You handle emotions like a champ! 👊',
      '😠 Sometimes your temper flares up, but you usually keep it in check. Keep practicing your anger management techniques! 💪',
      '🔥 Hot Temper Alert! Your anger can be intense. It might be helpful to explore some anger management strategies or seek support. 🚒',
    ],
    'self-esteem': [
      '🌟 Confidence King/Queen! You shine with self-worth and confidence. Keep owning your awesomeness! 👑',
      '😊 You’re feeling pretty good about yourself, but a little self-doubt sneaks in now and then. Embrace your strengths and keep shining! ✨',
      '😔 Feeling down about yourself? It’s time for some self-love and affirmation. Reach out to supportive people or explore positive self-talk! 💖',
    ],
    happiness: [
      '🌈 Happiness Guru! Your life is full of joy and contentment. Keep spreading those positive vibes! 😄',
      '🙂 You find happiness often but face occasional bumps. Keep up with what makes you smile and find new sources of joy! 🌟',
      '☹️ Feeling low? It’s time to explore what brings you true happiness and make some changes to lift your spirits! 🌺',
    ],
    loneliness: [
      '🤗 You’re well-connected and supported. Your social network is strong. Keep nurturing those relationships! 🌼',
      '😕 Sometimes you feel a bit alone, but you have a solid support system. Reach out and strengthen those connections! 🌻',
      '😢 Loneliness is hitting hard. It might be a good time to build new connections or seek support to feel more connected! 🌟',
    ],
  };

  if (score <= 1) return results[testName][0];
  if (score <= 3) return results[testName][1];
  return results[testName][2];
};

const ResultPage = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const { answers, testName } = state;

  const options = ['Never', 'Rarely', 'Sometimes', 'Often', 'Always'];
  const score = answers.reduce((acc, answer) => acc + options.indexOf(answer), 0) / answers.length;

  const resultText = getResultText(testName, score);

  return (
    <Container>
      <Card testName={testName}>
        <ResultImage src={resultImage} alt="Result" />
        <ResultText>
          <Title>Congratulations on completing the test!</Title>
          <AnswerList>
            {answers.map((answer, index) => (
              <Answer key={index}>
                {`Q${index + 1}: ${answer}`}
              </Answer>
            ))}
          </AnswerList>
          <p>{resultText}</p>
        </ResultText>
      </Card>
      <Button onClick={() => navigate('/')}>Return to main menu</Button>
    </Container>
  );
};

export default ResultPage;
