import React, { useState } from 'react';
import '../Styles/Support.css';
import arrowDown from '../assets/Support/arrow_down.png'; // Добавьте изображение вниз
import arrowUp from '../assets/Support/arrow_up.png'; // Добавьте изображение вверх

const Support = () => {
  const [openQuestionIndex, setOpenQuestionIndex] = useState(null);

  const questions = [
    {
      question: "Как я могу сделать заказ?",
      answer: "Чтобы сделать заказ, вы можете перейти на страницу \"Сделать заказ\" и следовать инструкциям."
    },
    {
      question: "Как связаться с поддержкой?",
      answer: "Вы можете связаться с поддержкой по электронной почте sabe_support@gmail.com или в телеграме @SABE_support"
    },
    {
      question: "Какие бренды вы предлагаете?",
      answer: "Мы предлагаем широкий ассортимент брендов, включая Nike, Adidas, New Balance, Lacoste и другие."
    },
  ];

  const toggleQuestion = (index) => {
    if (openQuestionIndex === index) {
      setOpenQuestionIndex(null);
    } else {
      setOpenQuestionIndex(index);
    }
  };

  return (
    <div className="support-container">
      <h1 className="support-title">Поддержка</h1>
      <div className="support-content">
        <div className="support-section">
          <h2>Часто задаваемые вопросы</h2>
          <p>Здесь вы найдете ответы на часто задаваемые вопросы. Если у вас есть вопрос, которого нет в этом списке, пожалуйста, свяжитесь с нашей службой поддержки.</p>
        </div>
        <div className="faq-section">
          {questions.map((item, index) => (
            <div key={index} className="faq-item">
              <div className="faq-question" onClick={() => toggleQuestion(index)}>
                <span>{item.question}</span>
                <img
                  src={openQuestionIndex === index ? arrowUp : arrowDown}
                  alt={openQuestionIndex === index ? 'Collapse' : 'Expand'}
                  className="arrow"
                />
              </div>
              <div className={`faq-answer ${openQuestionIndex === index ? 'open' : ''}`}>
                {item.answer}
              </div>
            </div>
          ))}
        </div>
        <div className="support-section">
          <h2>Свяжитесь с нами</h2>
          <p>Если у вас есть вопросы или проблемы, свяжитесь с нами через следующие каналы:</p>
          <ul>
            <li>Электронная почта поддержки: sabe_support@gmail.com</li>
            <li>Телеграм поддержки: @SABE_support</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Support;
