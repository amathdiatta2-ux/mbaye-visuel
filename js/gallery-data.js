/**
 * MBAYE VISUEL — Données de la galerie
 * -------------------------------------------------
 * Pour ajouter une nouvelle photo :
 * 1. Placez le fichier image dans images/portfolio/<categorie>/
 * 2. Ajoutez une ligne ci-dessous avec : src, catégorie, et texte alternatif (alt)
 * 3. La catégorie doit correspondre à un data-filter existant dans index.html
 *    (mariages, traditions, soutenances, shooting-femmes, shooting-hommes,
 *     shooting-enfants, evenements)
 *
 * "size" contrôle la taille de la vignette dans la grille masonry :
 *    "tall"  -> vignette plus haute (portrait marqué)
 *    "wide"  -> vignette plus large (format paysage)
 *    ""      -> taille standard
 */

const GALLERY_DATA = [
  // ---- Mariages ----
    // ---- Mariages ----
  { src: "images/portfolio/mariages/mariage-01.jpg", category: "mariages", alt: "Mariée en robe blanche et hijab, bouquet de roses rouges, jardin tropical, Mbaye Visuel", size: "" },
  { src: "images/portfolio/mariages/mariage-02.jpg", category: "mariages", alt: "Mariée souriante tenant un bouquet noir et rouge, entourée de deux femmes, Mbaye Visuel", size: "" },
  { src: "images/portfolio/mariages/mariage-03.jpg", category: "mariages", alt: "Mariée de profil au bord de l'eau, bouquet de roses rouges, Mbaye Visuel", size: "" },
  { src: "images/portfolio/mariages/mariage-04.jpg", category: "mariages", alt: "Mariée souriante, photographie de mariage Ziguinchor", size: "" },
  { src: "images/portfolio/mariages/mariage-05.jpg", category: "mariages", alt: "Mariée souriante, bras ouverts devant une balustrade au bord de l'eau, Mbaye Visuel", size: "" },
  { src: "images/portfolio/mariages/mariage-06.jpg", category: "mariages", alt: "Mariée au bord de l'eau, main décorée au henné levée, Mbaye Visuel", size: "" },
  { src: "images/portfolio/mariages/mariage-07.jpg", category: "mariages", alt: "Mains ornées de henné, mariage, Mbaye Visuel", size: "" },
  { src: "images/portfolio/mariages/mariage-08.jpg", category: "mariages", alt: "Mariée souriante sur un escalier en briques, longue traîne, bouquet de roses rouges, Mbaye Visuel", size: "" },
  { src: "images/portfolio/mariages/mariage-09.jpg", category: "mariages", alt: "Mariée souriante aux mains décorées au henné, devant une fenêtre en bois, Mbaye Visuel", size: "" },
  { src: "images/portfolio/mariages/mariage-10.jpg", category: "mariages", alt: "Mariée souriante avec un bouquet de roses rouges, main levée, Mbaye Visuel", size: "" },
  { src: "images/portfolio/mariages/mariage-11.jpg", category: "mariages", alt: "Mariée de profil, bouquet de roses rouges et longue traîne dans le vent, Mbaye Visuel", size: "" },
  { src: "images/portfolio/mariages/mariage-12.jpg", category: "mariages", alt: "Portrait de mariée dans la verdure, main au henné levée, Mbaye Visuel", size: "" },
  { src: "images/portfolio/mariages/mariage-13.jpg", category: "mariages", alt: "Mariée souriante tenant un bouquet noir et rouge sous un feuillage, Mbaye Visuel", size: "" },
  { src: "images/portfolio/mariages/mariage-14.jpg", category: "mariages", alt: "Mariée les yeux fermés, bouquet serré contre elle, Mbaye Visuel", size: "" },
  { src: "images/portfolio/mariages/mariage-15.jpg", category: "mariages", alt: "Mariée souriante avec un bouquet de roses rouges dans un jardin, Mbaye Visuel", size: "" },
  { src: "images/portfolio/mariages/mariage-16.jpg", category: "mariages", alt: "Deux femmes en robes bleu marine à motifs et hijab bleu, au bord de l'eau, Mbaye Visuel", size: "" },
  { src: "images/portfolio/mariages/mariage-17.jpg", category: "mariages", alt: "Deux femmes en robes bleu marine à motifs, appuyées à une rambarde, Mbaye Visuel", size: "" },
  { src: "images/portfolio/mariages/mariage-18.jpg", category: "mariages", alt: "Mariée mains au henné levées, entourée de deux femmes en robes bleues, devant une villa, Mbaye Visuel", size: "" },
  { src: "images/portfolio/mariages/mariage-19.jpg", category: "mariages", alt: "Mariée et deux femmes en robes bleues qui rient sur la pelouse, Mbaye Visuel", size: "" },
  { src: "images/portfolio/mariages/mariage-20.jpg", category: "mariages", alt: "Mariée et une femme en robe bleue qui rient, bouquet de roses rouges, Mbaye Visuel", size: "" },
  { src: "images/portfolio/mariages/mariage-21.jpg", category: "mariages", alt: "Mariée de dos entre deux femmes en robes bleues, près d'un escalier, Mbaye Visuel", size: "" },

  // ---- Traditions & cérémonies ----
  { src: "images/portfolio/traditions/tradition-01.jpg", category: "traditions", alt: "Cérémonie traditionnelle sénégalaise, main levée, Mbaye Visuel", size: "" },
  { src: "images/portfolio/traditions/tradition-02.jpg", category: "traditions", alt: "Portrait cérémonie Henné, tenue traditionnelle bleue, Mbaye Visuel", size: "tall" },
  { src: "images/portfolio/traditions/tradition-03.jpg", category: "traditions", alt: "Cérémonie traditionnelle, boubou brodé, Mbaye Visuel", size: "" },
  { src: "images/portfolio/traditions/tradition-04.jpg", category: "traditions", alt: "Portrait cérémonie traditionnelle, coiffe et bijoux dorés, Mbaye Visuel", size: "" },
  { src: "images/portfolio/traditions/tradition-05.jpg", category: "traditions", alt: "Détail henné et éventail traditionnel, Mbaye Visuel", size: "" },
  { src: "images/portfolio/traditions/tradition-06.jpg", category: "traditions", alt: "Cérémonie traditionnelle avec calebasse décorée, Mbaye Visuel", size: "" },
  { src: "images/portfolio/traditions/tradition-07.jpg", category: "traditions", alt: "Portrait tenue traditionnelle, fond rouge, Mbaye Visuel", size: "" },
  { src: "images/portfolio/traditions/tradition-08.jpg", category: "traditions", alt: "Cérémonie traditionnelle, tenue pourpre et or, Mbaye Visuel", size: "" },
  { src: "images/portfolio/traditions/tradition-09.jpg", category: "traditions", alt: "Cérémonie traditionnelle sénégalaise en intérieur, Mbaye Visuel", size: "" },
  { src: "images/portfolio/traditions/tradition-10.jpg", category: "traditions", alt: "Portrait tenue traditionnelle rayée bleue, Mbaye Visuel", size: "" },

  // ---- Soutenances ----
  { src: "images/portfolio/soutenances/soutenance-01.jpg", category: "soutenances", alt: "Étudiante après soutenance, diplôme en main, Mbaye Visuel", size: "" },
  { src: "images/portfolio/soutenances/soutenance-02.jpg", category: "soutenances", alt: "Portrait de soutenance en extérieur, Mbaye Visuel", size: "" },
  { src: "images/portfolio/soutenances/soutenance-03.jpg", category: "soutenances", alt: "Couverture de soutenance, campus, Mbaye Visuel", size: "" },
  { src: "images/portfolio/soutenances/soutenance-04.jpg", category: "soutenances", alt: "Signature de documents lors d'une soutenance, Mbaye Visuel", size: "wide" },
  { src: "images/portfolio/soutenances/soutenance-05.jpg", category: "soutenances", alt: "Étudiant en costume, couverture de soutenance, Mbaye Visuel", size: "" },
  { src: "images/portfolio/soutenances/soutenance-06.jpg", category: "soutenances", alt: "Portrait de soutenance avec décor extérieur, Mbaye Visuel", size: "" },
  { src: "images/portfolio/soutenances/soutenance-07.jpg", category: "soutenances", alt: "Étudiant présentant son mémoire, Mbaye Visuel", size: "" },
  { src: "images/portfolio/soutenances/soutenance-08.jpg", category: "soutenances", alt: "Signature de procès-verbal de soutenance, Mbaye Visuel", size: "wide" },

  // ---- Shooting Femmes ----
  { src: "images/portfolio/shooting-femmes/femme-01.jpg", category: "shooting-femmes", alt: "Portrait studio femme, fond rouge, Mbaye Visuel", size: "" },
  { src: "images/portfolio/shooting-femmes/femme-02.jpg", category: "shooting-femmes", alt: "Shooting studio, robe bleue, Mbaye Visuel", size: "" },
  { src: "images/portfolio/shooting-femmes/femme-03.jpg", category: "shooting-femmes", alt: "Portrait studio, robe verte brodée, Mbaye Visuel", size: "tall" },
  { src: "images/portfolio/shooting-femmes/femme-04.jpg", category: "shooting-femmes", alt: "Shooting studio, tenue orange et hijab, Mbaye Visuel", size: "" },
  { src: "images/portfolio/shooting-femmes/femme-05.jpg", category: "shooting-femmes", alt: "Portrait studio, tenue turquoise, Mbaye Visuel", size: "" },
  { src: "images/portfolio/shooting-femmes/femme-06.jpg", category: "shooting-femmes", alt: "Shooting studio fond rouge, robe rose fleurie, Mbaye Visuel", size: "" },
  { src: "images/portfolio/shooting-femmes/femme-07.jpg", category: "shooting-femmes", alt: "Portrait studio, dentelle blanche, Mbaye Visuel", size: "" },
  { src: "images/portfolio/shooting-femmes/femme-08.jpg", category: "shooting-femmes", alt: "Portrait studio assise, hijab bleu, Mbaye Visuel", size: "" },
  { src: "images/portfolio/shooting-femmes/femme-09.jpg", category: "shooting-femmes", alt: "Portrait turban bleu et bijoux dorés, Mbaye Visuel", size: "" },
  { src: "images/portfolio/shooting-femmes/femme-10.jpg", category: "shooting-femmes", alt: "Portrait turban bleu, tenue rayée, Mbaye Visuel", size: "" },

  // ---- Shooting Hommes ----
  { src: "images/portfolio/shooting-hommes/homme-01.jpg", category: "shooting-hommes", alt: "Portrait studio homme en boubou blanc, Mbaye Visuel", size: "tall" },
  { src: "images/portfolio/shooting-hommes/homme-02.jpg", category: "shooting-hommes", alt: "Portrait studio homme en tenue bleue, Mbaye Visuel", size: "" },

  // ---- Shooting Enfants ----
  { src: "images/portfolio/shooting-enfants/enfant-01.jpg", category: "shooting-enfants", alt: "Portrait studio petite fille, fond rouge, Mbaye Visuel", size: "" },
  { src: "images/portfolio/shooting-enfants/enfant-02.jpg", category: "shooting-enfants", alt: "Portrait studio jeune garçon, fond rouge, Mbaye Visuel", size: "" },
  { src: "images/portfolio/shooting-enfants/enfant-03.jpg", category: "shooting-enfants", alt: "Portrait studio enfant en mouvement, fond rouge, Mbaye Visuel", size: "" },
  { src: "images/portfolio/shooting-enfants/enfant-04.jpg", category: "shooting-enfants", alt: "Portrait studio enfant en tenue traditionnelle, Mbaye Visuel", size: "" },

  // ---- Événements ----
  { src: "images/portfolio/evenements/evenement-01.jpg", category: "evenements", alt: "Préparatifs d'événement, mise en beauté, Mbaye Visuel", size: "wide" },
];