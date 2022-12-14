import React, { useEffect, useState } from 'react';
import Footer from '../footer/footer';
import Header from '../header/header';
import styles from './main.module.css'
import { useNavigate, useLocation} from 'react-router-dom';
import Editor from '../editor/editor';
import Preview from '../preview/preview';


const Main = ({ FileInput, authService, cardRepository }) => {
  const location = useLocation();
  const locationState = location?.state;
  const [cards, setCards] = useState ({});
  const [userId, setUserId] = useState(locationState && locationState.id);

  const navigate = useNavigate();

  const onLogout = () => {
    authService.logout();
  };

  useEffect(() => {
    if(!userId) {
      return;
    }
    const stopSync = cardRepository.syncCards(userId, cards => {
      setCards(cards);
    })
    return () => stopSync();
  }, [userId])

  useEffect(() => {
    authService.onAuthChange(user => {
      if(user) {
        setUserId(locationState.id);
      } else {
        navigate('/')
      }
    })
  }, [userId]);

  const createOrUpdateCard = card => {
    setCards(cards => {
      const updated = {...cards};
      updated[card.id] = card;
      return updated;
    });
    cardRepository.saveCard(userId, card);
  }

  const deleteCard = card => {
    setCards(cards => {
      const updated = {...cards};
      delete updated[card.id]
      return updated;
    });
    cardRepository.removeCard(userId, card);
  }

  return (
    <section className={styles.maker}>
      <Header onLogout={onLogout}/>
      <section className={styles.container}>
        <Editor FileInput={FileInput} cards={cards} addCard={createOrUpdateCard} updateCard={createOrUpdateCard} deleteCard={deleteCard}/>
        <Preview cards={cards}/>
      </section>
      <Footer />
    </section>
  )
}
export default Main;