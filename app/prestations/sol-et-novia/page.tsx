import { ProjectCollection } from "@/components/project-collection";
const p="/client-assets/projets/sol-et-novia/";
export default function Page(){return <ProjectCollection project={{
  eyebrow:"EVJF · Identité · Goodies · Jeu sur mesure", title:"Sol & Novia", intro:"Un univers solaire, joyeux et entièrement personnalisé pour célébrer Solène avec ses meilleures amies.", hero:p+"img_soletnovia.png", heroAlt:"Univers Sol et Novia",
  band:"Une histoire avant un thème.",
  sections:[
    {eyebrow:"Le point de départ",title:"Sortir des clichés",text:"Son faire-part, ses goûts, le programme du week-end et les anecdotes de ses proches ont guidé chaque choix graphique. Le nom est né d'un jeu de mots : Solène devient la novia, la future mariée lumineuse entourée de ses amies.",images:[{src:p+"img_LE NOM DU PROJET.png",alt:"Recherche du nom Sol et Novia"},{src:p+"img_soletnoviavisuel.png",alt:"Illustrations du projet Sol et Novia"}]},
    {number:"01",eyebrow:"Textiles",title:"Une identité qui se porte",text:"Le visuel complet réunit toutes les références au programme. Décliné sur les tee-shirts et les tote bags, il rassemble immédiatement le groupe et devient un souvenir du week-end.",images:[{src:p+"img_soletnoviapensepouretrevecu.png",alt:"Textiles Sol et Novia"},{src:p+"img_soletnoviagoodies.png",alt:"Goodies Sol et Novia"}]},
    {number:"02",eyebrow:"Art de la table",title:"Le brunch entre dans l'univers",text:"Étiquettes, pots, cidre et gobelets : chaque support reprend les codes du projet avec une touche de second degré.",images:[{src:p+"img_potssoletnovia.png",alt:"Pots personnalisés"},{src:p+"img_cidresoletnovia.png",alt:"Cidre personnalisé"},{src:p+"img_etiquettes.png",alt:"Étiquettes personnalisées"}]},
    {number:"03",eyebrow:"Animations",title:"Un jeu 100 % Solène",text:"Du questionnaire au plateau, les amies ont rempli un questionnaire détaillé. Les réponses ont été transformées en anecdotes, défis et questions-réponses pour créer une animation intime et entièrement sur mesure.",images:[{src:p+"img_plateasoetnovia.png",alt:"Jeu de plateau Sol et Novia"},{src:p+"img_cartessoletnovia.png",alt:"Cartes du jeu Sol et Novia"}]}
  ],summary:["Identité","Goodies","Table","Expérience"]
}}/>}
