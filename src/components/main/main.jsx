import React, { useEffect, useState } from 'react';
import Footer from '../footer/footer';
import Header from '../header/header';
import styles from './main.module.css'
import { useNavigate } from 'react-router-dom';
import Editor from '../editor/editor';
import Preview from '../preview/preview';


const Main = ({ authService }) => {
  const [cards, setCards] = useState ({
    '1' : { 
      id: '1',
      name: 'ellie',
      company: 'Samsung',
      theme: 'dark',
      title: 'Software Engineer',
      email: 'ellie@gmail.com',
      message: 'go for it',
      fileName: 'ellie',
      fileURL: null
    },
    '2' : { 
      id: '2',
      name: 'ellie2',
      company: 'Samsung',
      theme: 'light',
      title: 'Software Engineer',
      email: 'ellie@gmail.com',
      message: 'go for it',
      fileName: 'ellie',
      fileURL: null
    } ,
    '3' : { 
      id: '3',
      name: 'ellie3',
      company: 'Samsung',
      theme: 'colorful',
      title: 'Software Engineer',
      email: 'ellie@gmail.com',
      message: 'go for it',
      fileName: 'ellie',
      fileURL: null
    }
  });

  const navigate = useNavigate();

  const onLogout = () => {
    authService.logout();
  };

  useEffect(() => {
    authService.onAuthChange(user => {
      if(!user) {
        navigate('/');
      }
    })
  })

  const createOrUpdateCard = card => {
    setCards(cards => {
      const updated = {...cards};
      updated[card.id] = card;
      return updated;
    });
  }

  const deleteCard = card => {
    setCards(cards => {
      const updated = {...cards};
      delete updated[card.id]
      return updated;
    });
  }

  return (
    <section className={styles.maker}>
      <Header onLogout={onLogout}/>
      <section className={styles.container}>
        <Editor cards={cards} addCard={createOrUpdateCard} updateCard={createOrUpdateCard} deleteCard={deleteCard}/>
        <Preview cards={cards}/>
      </section>
      <Footer />
    </section>
  )
}
export default Main;