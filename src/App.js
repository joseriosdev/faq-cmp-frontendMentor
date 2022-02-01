import { useState } from 'react'
import Title from './Cmps/Title'
import Img from './Cmps/Img'
import Cards from './Cmps/Cards'

const App = () => {
	const cardInfo = [
		{
			id: 0,
			question: 'How many team members can I invite?',
			answer: 'You can invite up to 2 additional users on the Free plan. There is no limit on team members for the Premium plan.',
			isActive: false
		},
		{
			id: 1,
			question: 'What is the maximum file upload size?',
			answer: 'No more than 2GB. All files in your account must fit your allotted storage space.',
			isActive: true
		},
		{
			id: 2,
			question: 'How do I reset my password?',
			answer: 'Click “Forgot password” from the login page or “Change password” from your profile page. A reset link will be emailed to you.',
			isActive: false
		},
		{
			id: 3,
			question: 'Can I cancel my subscription?',
			answer: 'Yes! Send us a message and we’ll process your request no questions asked.',
			isActive: false
		},
		{
			id: 4,
			question: 'Do you provide additional support?',
			answer: 'Chat and email support is available 24/7. Phone lines are open during normal business hours.',
			isActive: false
		}
	]

	const [cards, setCards] = useState(cardInfo)

	const whenClick = (id) => {
		setCards(cards.map( card => {
			let c = {...card}
			if (card.id === id)
				c.isActive = !card.isActive
			else
				c.isActive = false
			
			return c
		}))
	}

	return (
		<main className="component">
			<div>
				<Img />
			</div>
			<div>
				<Title />
				<Cards
					cards={cards}
					whenClick={whenClick}
				/>
			</div>
		</main>
	)
}


export default App
