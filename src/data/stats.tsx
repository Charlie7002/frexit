import { BsShieldFillCheck, BsSpeedometer2, BsStars } from "react-icons/bs";
import { FiUsers, FiSettings } from "react-icons/fi";

import { IStats } from "@/types";

export const stats: IStats[] = [
    {
        title: "Informatique plus performante",
        icon: <BsSpeedometer2 size={34} className="text-blue-500" />,
        description: "Des infrastructures et réseaux optimisés pour accélérer vos usages."
    },
    {
        title: "Sécurité renforcée",
        icon: <BsShieldFillCheck size={34} className="text-green-600" />,
        description: "Protection de bout en bout : firewalls, EDR/XDR, identités et PRA."
    },
    {
        title: "Accompagnement humain & réactif",
        icon: <FiUsers size={34} className="text-yellow-500" />,
        description: "Une équipe proche, disponible et engagée à vos côtés."
    },
    {
        title: "Solutions adaptées à votre entreprise",
        icon: <FiSettings size={34} className="text-blue-500" />,
        description: "Des environnements conçus sur mesure pour vos métiers et vos contraintes."
    },
    {
        title: "Transformation maîtrisée",
        icon: <BsStars size={34} className="text-green-600" />,
        description: "Du conseil à l’exploitation, un partenaire capable de transformer vos usages."
    }
];
