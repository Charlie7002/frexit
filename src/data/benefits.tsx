import {
	FiActivity,
	FiCloud,
	FiCpu,
	FiDatabase,
	FiLock,
	FiMonitor,
	FiPhoneCall,
	FiShield,
	FiTool,
	FiUsers,
} from 'react-icons/fi'

import { IBenefit } from '@/types'

export const benefits: IBenefit[] = [
	{
		title: 'Infrastructure & Serveurs',
		description:
			'Donnez de la puissance à votre cœur informatique avec des architectures fiables et prêtes pour la croissance.',
		bullets: [
			{
				title: 'Déploiement physique & virtuel',
				description: 'Serveurs optimisés et virtualisation maîtrisée.',
				icon: <FiCpu size={26} />,
			},
			{
				title: 'Cloud privé, public & hybride',
				description: 'Choisissez le modèle le plus adapté à vos usages.',
				icon: <FiCloud size={26} />,
			},
			{
				title: 'Stockage, sauvegardes & PRA',
				description: 'Plan de reprise d’activité et continuité assurée.',
				icon: <FiDatabase size={26} />,
			},
			{
				title: 'Supervision 24/7',
				description: 'Visibilité en temps réel sur vos performances.',
				icon: <FiActivity size={26} />,
			},
		],
		imageSrc: '/images/illu1.avif',
	},
	{
		title: 'Réseaux & Connectivité',
		description:
			'Un réseau qui ne vous ralentit jamais et sécurise chaque échange.',
		bullets: [
			{
				title: 'LAN / WAN / Wi-Fi entreprise',
				description: 'Couverture fiable pour tous vos sites.',
				icon: <FiMonitor size={26} />,
			},
			{
				title: 'Optimisation de performance',
				description: 'Qualité de service et trafic priorisé.',
				icon: <FiActivity size={26} />,
			},
			{
				title: 'Sécurisation & segmentation',
				description: 'Isolation des flux sensibles et contrôle fin.',
				icon: <FiShield size={26} />,
			},
			{
				title: 'Monitoring & support',
				description: 'Surveillance proactive et assistance rapide.',
				icon: <FiTool size={26} />,
			},
		],
		imageSrc: '/images/illu11.jpeg',
	},
	{
		title: 'Cybersécurité',
		description:
			'Votre protection, notre priorité : sécurisez postes, serveurs et identités.',
		bullets: [
			{
				title: 'Audit, tests & diagnostics',
				description: 'Évaluez vos risques et vos priorités.',
				icon: <FiShield size={26} />,
			},
			{
				title: 'Firewalls nouvelle génération',
				description: 'Protection périmétrique et filtrage avancé.',
				icon: <FiLock size={26} />,
			},
			{
				title: 'Sécurisation EDR/XDR',
				description:
					'Détection et réponse immédiate sur tous les terminaux.',
				icon: <FiMonitor size={26} />,
			},
			{
				title: 'Identités & accès maîtrisés',
				description: 'Gestion des habilitations et MFA intégrés.',
				icon: <FiUsers size={26} />,
			},
		],
		imageSrc: '/images/illu5.jpg',
	},
	{
		title: 'Bureautique & Postes de travail',
		description:
			'Une expérience utilisateur fluide et sans interruption pour vos équipes.',
		bullets: [
			{
				title: 'Gestion du parc',
				description: 'Inventaire, mises à jour et conformité assurés.',
				icon: <FiTool size={26} />,
			},
			{
				title: 'Déploiement matériel & licences',
				description: 'Equipements prêts à l’emploi et gérés.',
				icon: <FiMonitor size={26} />,
			},
			{
				title: 'Support utilisateurs',
				description: 'Assistance réactive et proximité terrain.',
				icon: <FiPhoneCall size={26} />,
			},
			{
				title: 'Outils bureautiques modernes',
				description: 'Productivité et collaboration simplifiées.',
				icon: <FiUsers size={26} />,
			},
		],
		imageSrc: '/images/illu6.jpg',
	},
	{
		title: 'Software & Développement',
		description:
			'Des logiciels qui facilitent votre quotidien et automatisent vos processus.',
		bullets: [
			{
				title: 'Logiciels métiers',
				description: 'ERP, CRM et outils dédiés à vos métiers.',
				icon: <FiDatabase size={26} />,
			},
			{
				title: 'Automatisation & intégrations',
				description: 'Connecteurs et workflows sur mesure.',
				icon: <FiActivity size={26} />,
			},
			{
				title: 'Développements spécifiques',
				description: 'Applications adaptées à vos usages internes.',
				icon: <FiTool size={26} />,
			},
			{
				title: 'Maintenance applicative',
				description: 'Suivi, évolutions et correctifs rapides.',
				icon: <FiPhoneCall size={26} />,
			},
		],
		imageSrc: '/images/illu2.jpg',
	},
	{
		title: 'Communication & Collaboration',
		description:
			'Travaillez mieux, partout, avec des outils unifiés et sécurisés.',
		bullets: [
			{
				title: 'Microsoft 365, Teams, SharePoint',
				description: 'Environnements collaboratifs prêts à l’emploi.',
				icon: <FiUsers size={26} />,
			},
			{
				title: 'Téléphonie IP & communications unifiées',
				description: 'Voix, vidéo et messagerie intégrées.',
				icon: <FiPhoneCall size={26} />,
			},
			{
				title: 'Espaces collaboratifs personnalisés',
				description: 'Portails et sites adaptés à vos équipes.',
				icon: <FiMonitor size={26} />,
			},
			{
				title: 'Travail hybride sécurisé',
				description: 'Accès distant maîtrisé et échanges protégés.',
				icon: <FiShield size={26} />,
			},
		],
		imageSrc: '/images/illu8.jpeg',
	},
]
