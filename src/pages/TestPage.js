// src/pages/TestPage.js
import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: ${({ testName }) => getContainerBackgroundColor(testName)};
`;

const getContainerBackgroundColor = (testName) => {
  const colors = {
    anxiety: '#e0f7fa',
    anger: '#ffebee',
    'self-esteem': '#fce4ea',
    happiness: '#fff9c4',
    loneliness: '#e8f5e9',
  };
  return colors[testName] || '#fce4ea'; // Default color if testName is not matched
};

const Card = styled.div`
  background: white;
  padding: 40px;
  border-radius: 20px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  text-align: center;
  width: 80%;
  max-width: 600px;
`;

const Title = styled.h2`
  color: #7b1fa2;
  margin-bottom: 20px;
`;

const Question = styled.div`
  margin: 20px 0;
`;

const Options = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 10px;
`;

const OptionButton = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  border: none;
  border-radius: 10px;
  background-color: ${props => props.isSelected ? props.color : '#e0e0e0'};
  color: white;
  transition: background-color 0.3s;

  &:hover {
    background-color: ${props => props.color};
  }
`;

const Button = styled.button`
  margin: 20px;
  padding: 15px 30px;
  font-size: 16px;
  cursor: pointer;
  border: none;
  border-radius: 10px;
  background-color: #7b1fa2;
  color: white;
  transition: background-color 0.3s;

  &:hover {
    background-color: #4a0072;
  }
`;

const getQuestionList = (testName) => {
  const questions = {
    anxiety: [
      'How often do you feel nervous or on edge without a clear reason?',
      'Do you find it difficult to control your worrying?',
      'How often do you experience sudden feelings of panic or fear?',
      'How often do you avoid situations because they make you anxious?',
      'How often do you experience physical symptoms like a racing heart or sweating when anxious?',
    ],
    anger: [
      'How often do you feel irritated over small matters?',
      'How often do you feel like you’re about to lose your temper?',
      'How often do you express your anger physically or verbally?',
      'How often do you feel resentful towards others?',
      'How often do you hold onto grudges?',
    ],
    'self-esteem': [
      'How often do you feel proud of your accomplishments?',
      'How often do you compare yourself negatively to others?',
      'How often do you feel confident in your abilities?',
      'How often do you feel like you are a person of worth?',
      'How often do you focus on your weaknesses rather than your strengths?',
    ],
    happiness: [
      'How often do you feel content with your life?',
      'How often do you find joy in your daily activities?',
      'How often do you feel optimistic about the future?',
      'How often do you feel grateful for what you have?',
      'How often do you feel a sense of purpose or fulfillment?',
    ],
    loneliness: [
      'How often do you feel alone even when you are surrounded by people?',
      'How often do you feel left out by others?',
      'How often do you find it hard to make new friends?',
      'How often do you feel isolated from others?',
      'How often do you feel like you have no one to talk to?',
    ],
  };
  return questions[testName] || [];
};

const options = ['Never', 'Rarely', 'Sometimes', 'Often', 'Always'];

const colors = ['#f44336', '#ff9800', '#ffeb3b', '#8bc34a', '#4caf50'];

const TestPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const testName = location.state?.testName || 'anxiety'; // Default to 'anxiety' test if location.state is not available

  const questions = getQuestionList(testName);
  const [answers, setAnswers] = useState(Array(questions.length).fill(null));

  const handleOptionClick = (questionIndex, option) => {
    const newAnswers = [...answers];
    newAnswers[questionIndex] = option;
    setAnswers(newAnswers);
  };

  const handleSubmit = () => {
    if (answers.includes(null)) {
      alert('Please answer all the questions');
    } else {
      navigate('/result', { state: { answers, testName } });
    }
  };

  return (
    <Container testName={testName}>
      <Card>
        <Title>{testName.charAt(0).toUpperCase() + testName.slice(1)} Test</Title>
        {questions.map((question, index) => (
          <Question key={index}>
            <p>{question}</p>
            <Options>
              {options.map((option, optionIndex) => (
                <OptionButton
                  key={optionIndex}
                  onClick={() => handleOptionClick(index, option)}
                  isSelected={answers[index] === option}
                  color={colors[optionIndex]}
                >
                  {option}
                </OptionButton>
              ))}
            </Options>
          </Question>
        ))}
        <Button onClick={handleSubmit}>Finish</Button>
      </Card>
    </Container>
  );
};

export default TestPage;
