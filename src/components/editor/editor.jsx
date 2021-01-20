import React from 'react';
import CardEddForm from '../card_add_form/card_add_form';
import CardEditForm from '../card_edit_form/card_edit_form';
import styles from './editor.module.css';

const Editor = ({ cards, addCard, updateCard, deleteCard }) => {
	return (
		<section className={styles.editor}>
			<h1 className={styles.title}>Card Maker</h1>
			{Object.keys(cards).map(key => (
				<CardEditForm key={key.id} card={cards[key]} updateCard={updateCard} deleteCard={deleteCard} />
			))}
			<CardEddForm onAdd={addCard} />
		</section>
	);
};

export default Editor;
