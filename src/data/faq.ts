import { IFAQ } from '@/types'
import { siteDetails } from './siteDetails'

export const faqs: IFAQ[] = [
	{
		question: `Comment ${siteDetails.siteName} sécurise vos infrastructures ?`,
		answer:
			'Audits, diagnostics, firewalls nouvelle génération, EDR/XDR sur postes et serveurs, et une gestion rigoureuse des identités avec MFA pour verrouiller chaque accès.',
	},
	{
		question: 'Pouvez-vous prendre en charge l’ensemble du projet ?',
		answer:
			'Oui. Conseil, conception, déploiement, cloud, réseau, cybersécurité, postes de travail et support : nous pilotons la transformation de bout en bout.',
	},
	{
		question: 'Que se passe-t-il après le déploiement ?',
		answer:
			'Nous assurons la supervision 24/7, le support utilisateurs et la maintenance applicative pour garantir la continuité et l’amélioration de vos services.',
	},
	{
		question: 'Comment travaillez-vous avec nos équipes ?',
		answer:
			'En proximité : ateliers métiers, plans de migration clairs, et une communication fluide pour sécuriser chaque jalon.',
	},
	{
		question: 'Comment vous contacter rapidement ?',
		answer:
			'Par email à contact@frex-it.fr ou au 06 95 84 21 79 pour échanger sur votre besoin ou une urgence.',
	},
]
