import Hero from '@/components/Hero'
import Benefits from '@/components/Benefits/Benefits'
import Container from '@/components/Container'
import Section from '@/components/Section'
import Stats from '@/components/Stats'
import CTA from '@/components/CTA'

const HomePage: React.FC = () => {
	return (
		<>
			<Hero />
			<Container>
				<Section
					id="services"
					title="Des services pensés pour booster votre performance"
					description="Infrastructure, réseaux, cybersécurité, cloud, bureautique, software et collaboration : une offre complète pour moderniser votre SI."
				>
					<Benefits />
				</Section>

				<Section
					id="apports"
					title="Ce que nous vous apportons"
					description="Avec Frex IT, votre informatique devient un levier de croissance, pas une contrainte."
				>
					<Stats />
				</Section>

				<CTA />
			</Container>
		</>
	)
}

export default HomePage
