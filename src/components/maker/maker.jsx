import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Editor from '../editor/editor';
import Footer from '../footer/footer';
import Header from '../header/header';
import Preview from '../preview/preview';
import styles from './maker.module.css';

const Maker = ({ authService }) => {
	const [cards, setCards] = useState(() => {
		return [
			{
				id: '1',
				name: 'jiuk',
				company: 'Google',
				theme: 'dark',
				title: 'Software Engineer',
				email: 'island0318@gmail.com',
				message: 'go for it',
				fileName: 'jiuk',
				fileURL: null
			},
			{
				id: '2',
				name: 'jiuk2',
				company: 'Google',
				theme: 'light',
				title: 'Software Engineer',
				email: 'island0318@gmail.com',
				message: 'go for it',
				fileName: 'jiuk',
				fileURL: 'jiuk.png'
			},
			{
				id: '3',
				name: 'jiuk3',
				company: 'Google',
				theme: 'colorful',
				title: 'Software Engineer',
				email: 'island0318@gmail.com',
				message: 'go for it',
				fileName: 'jiuk',
				fileURL: null
			}
		];
	});
	const history = useHistory();

	const onLogout = () => {
		authService.logout();
	};

	useEffect(() => {
		authService.onAuthChange(user => {
			if (!user) {
				history.push('/');
			}
		});
	});

	const addCard = card => {
		const updated = [...cards, card];
		setCards(updated);
	};

	return (
		<section className={styles.maker}>
			<Header onLogout={onLogout} />
			<div className={styles.container}>
				<Editor cards={cards} addCard={addCard} />
				<Preview cards={cards} />
			</div>
			<Footer />
		</section>
	);
};

export default Maker;
