import { IPricing } from "@/types";

export const tiers: IPricing[] = [
    {
        name: 'Digital Workplace',
        price: 'Modernisez votre environnement de travail',
        features: [
            'Parc postes et licences prêts à l’emploi',
            'Espaces collaboratifs Microsoft 365, Teams, SharePoint',
            'Support utilisateurs et mises à jour continues',
            'Expérience de travail hybride simplifiée',
        ],
    },
    {
        name: 'CyberSafe',
        price: 'Votre entreprise protégée 24/7',
        features: [
            'Audits, tests et diagnostics de sécurité',
            'Firewalls nouvelle génération et segmentation',
            'EDR/XDR sur postes et serveurs',
            'Gestion des identités et MFA',
        ],
    },
    {
        name: 'ConnectPro',
        price: 'Performance réseau et mobilité sécurisée',
        features: [
            'LAN, WAN et Wi-Fi entreprise optimisés',
            'Trafic priorisé et supervision active',
            'Accès distant sécurisé et travail mobile',
            'Accompagnement performance & support',
        ],
    },
    {
        name: 'CloudFlex',
        price: 'Le cloud flexible, simple et contrôlé',
        features: [
            'Cloud privé, public ou hybride maîtrisé',
            'Plan de reprise d’activité et sauvegardes',
            'Pilotage des coûts et des ressources',
            'Intégration avec vos applicatifs métiers',
        ],
    },
    {
        name: 'Support+',
        price: 'Un service d’assistance réactif et humain',
        features: [
            'Supervision 24/7 et alertes proactives',
            'Support utilisateurs multicanal',
            'Maintenance applicative et évolutions',
            'Interventions rapides sur site ou à distance',
        ],
    },
]
