//* Chemistry Questions

const chemistryQuestions = [
  {
    question: "What is the chemical symbol for sodium?",
    answers: [
      { text: "So", correct: false },
      { text: "S", correct: false },
      { text: "Na", correct: true },
      { text: "Sd", correct: false },
    ],
    explanation: "The chemical symbol for sodium is Na, derived from its Latin name 'natrium'. Sodium is an alkali metal (Group 1) that's highly reactive, especially with water. It's essential for human health and is the sixth most abundant element in Earth's crust."
  },
  {
    question: "What is the pH of pure water at 25°C?",
    answers: [
      { text: "7", correct: true },
      { text: "0", correct: false },
      { text: "14", correct: false },
      { text: "1", correct: false },
    ],
    explanation: "Pure water has a pH of 7 at 25°C, making it neutral (neither acidic nor basic). The pH scale ranges from 0-14, where values below 7 are acidic, above 7 are basic, and 7 is neutral. pH measures the concentration of hydrogen ions (H⁺) in a solution."
  },
  {
    question: "Which gas makes up the largest percentage of Earth's atmosphere?",
    answers: [
      { text: "Oxygen", correct: false },
      { text: "Nitrogen", correct: true },
      { text: "Carbon dioxide", correct: false },
      { text: "Argon", correct: false },
    ],
    explanation: "Nitrogen (N₂) makes up about 78% of Earth's atmosphere, making it the most abundant gas. Oxygen is second at about 21%. Despite its abundance, atmospheric nitrogen is relatively inert and must be 'fixed' by bacteria or industrial processes before most organisms can use it."
  },
  {
    question: "What is the atomic number of carbon?",
    answers: [
      { text: "4", correct: false },
      { text: "8", correct: false },
      { text: "12", correct: false },
      { text: "6", correct: true },
    ],
    explanation: "Carbon has an atomic number of 6, meaning it has 6 protons in its nucleus. The atomic number defines the element - all atoms with 6 protons are carbon atoms. Carbon's ability to form four covalent bonds makes it the basis of all organic chemistry and life on Earth."
  },
  {
    question: "Which type of bond involves the sharing of electrons?",
    answers: [
      { text: "Covalent bond", correct: true },
      { text: "Ionic bond", correct: false },
      { text: "Metallic bond", correct: false },
      { text: "Hydrogen bond", correct: false },
    ],
    explanation: "A covalent bond forms when two atoms share one or more pairs of electrons. This typically occurs between nonmetal atoms with similar electronegativities. Covalent bonds can be single (one pair), double (two pairs), or triple (three pairs). Water (H₂O) and methane (CH₄) are examples of covalent compounds."
  },
  {
    question: "What is the most abundant element in the universe?",
    answers: [
      { text: "Oxygen", correct: false },
      { text: "Hydrogen", correct: true },
      { text: "Carbon", correct: false },
      { text: "Helium", correct: false },
    ],
    explanation: "Hydrogen is the most abundant element in the universe, making up about 75% of all normal matter by mass. It's also the simplest element with just one proton and one electron. Most of the universe's hydrogen was formed during the Big Bang, and stars fuse hydrogen into helium to produce energy."
  },
  {
    question: "Which acid is found in vinegar?",
    answers: [
      { text: "Hydrochloric acid", correct: false },
      { text: "Sulfuric acid", correct: false },
      { text: "Acetic acid", correct: true },
      { text: "Citric acid", correct: false },
    ],
    explanation: "Acetic acid (CH₃COOH) is the main component of vinegar, typically present at 4-8% concentration by volume. It's a weak acid that gives vinegar its sour taste and pungent smell. Acetic acid is produced by fermentation of ethanol by acetic acid bacteria."
  },
  {
    question: "What is the chemical formula for methane?",
    answers: [
      { text: "CH₂", correct: false },
      { text: "C₂H₄", correct: false },
      { text: "C₂H₆", correct: false },
      { text: "CH₄", correct: true },
    ],
    explanation: "Methane (CH₄) consists of one carbon atom bonded to four hydrogen atoms. It's the simplest hydrocarbon and the main component of natural gas. Methane is a potent greenhouse gas and is produced naturally by decomposition of organic matter and by livestock digestion."
  },
  {
    question: "Which element has the highest electronegativity?",
    answers: [
      { text: "Fluorine", correct: true },
      { text: "Oxygen", correct: false },
      { text: "Chlorine", correct: false },
      { text: "Nitrogen", correct: false },
    ],
    explanation: "Fluorine has the highest electronegativity (4.0 on the Pauling scale), meaning it attracts electrons more strongly than any other element. This makes fluorine extremely reactive, forming very strong bonds with other elements. Electronegativity generally increases across periods and decreases down groups."
  },
  {
    question: "What is the process of a solid changing directly to a gas called?",
    answers: [
      { text: "Melting", correct: false },
      { text: "Sublimation", correct: true },
      { text: "Evaporation", correct: false },
      { text: "Condensation", correct: false },
    ],
    explanation: "Sublimation is the phase transition where a solid changes directly to a gas without passing through the liquid phase. Dry ice (solid CO₂) and iodine undergo sublimation at room temperature and atmospheric pressure. The reverse process (gas to solid) is called deposition."
  },
  {
    question: "Which catalyst is commonly used in the Haber process?",
    answers: [
      { text: "Platinum", correct: false },
      { text: "Palladium", correct: false },
      { text: "Iron", correct: true },
      { text: "Nickel", correct: false },
    ],
    explanation: "The Haber process uses an iron catalyst (often with promoters like potassium oxide) to synthesize ammonia from nitrogen and hydrogen gases: N₂ + 3H₂ → 2NH₃. This industrial process is crucial for producing fertilizers and has greatly increased global food production since its invention in 1909."
  },
  {
    question: "What is the molecular formula for glucose?",
    answers: [
      { text: "C₆H₁₂O", correct: false },
      { text: "C₅H₁₀O₅", correct: false },
      { text: "C₁₂H₂₂O₁₁", correct: false },
      { text: "C₆H₁₂O₆", correct: true },
    ],
    explanation: "Glucose has the molecular formula C₆H₁₂O₆. It's a simple sugar (monosaccharide) that serves as the primary energy source for cells through cellular respiration. Glucose is produced by plants during photosynthesis and is found in fruits, honey, and blood (blood sugar)."
  },
  {
    question: "Which law states that equal volumes of gases contain equal numbers of molecules?",
    answers: [
      { text: "Avogadro's law", correct: true },
      { text: "Boyle's law", correct: false },
      { text: "Charles's law", correct: false },
      { text: "Gay-Lussac's law", correct: false },
    ],
    explanation: "Avogadro's law states that equal volumes of gases at the same temperature and pressure contain the same number of molecules. One mole of any gas at standard temperature and pressure (STP) occupies 22.4 liters. This law was proposed by Amedeo Avogadro in 1811."
  },
  {
    question: "What is the chemical symbol for potassium?",
    answers: [
      { text: "Po", correct: false },
      { text: "K", correct: true },
      { text: "Pt", correct: false },
      { text: "P", correct: false },
    ],
    explanation: "Potassium's chemical symbol is K, from its Latin name 'kalium'. It's an alkali metal (Group 1) that's essential for life, playing crucial roles in nerve function, muscle contraction, and maintaining fluid balance. Potassium is highly reactive and must be stored in oil to prevent reaction with moisture."
  },
  {
    question: "Which type of reaction absorbs heat from the surroundings?",
    answers: [
      { text: "Exothermic", correct: false },
      { text: "Isothermic", correct: false },
      { text: "Endothermic", correct: true },
      { text: "Adiabatic", correct: false },
    ],
    explanation: "Endothermic reactions absorb heat from their surroundings, causing the environment to feel cooler. The products have more energy than the reactants (ΔH is positive). Examples include photosynthesis, melting ice, and instant cold packs. Exothermic reactions release heat instead."
  },
  {
    question: "What is the hardest natural substance on Earth?",
    answers: [
      { text: "Quartz", correct: false },
      { text: "Graphite", correct: false },
      { text: "Steel", correct: false },
      { text: "Diamond", correct: true },
    ],
    explanation: "Diamond is the hardest natural substance on Earth (10 on Mohs hardness scale). It's composed of carbon atoms arranged in an extremely strong tetrahedral crystal structure. Each carbon atom forms four covalent bonds with neighboring carbon atoms, creating exceptional hardness. Diamonds form under high pressure and temperature deep in Earth's mantle."
  },
  {
    question: "Which noble gas is most commonly found in the atmosphere?",
    answers: [
      { text: "Argon", correct: true },
      { text: "Helium", correct: false },
      { text: "Neon", correct: false },
      { text: "Krypton", correct: false },
    ],
    explanation: "Argon makes up about 0.93% of Earth's atmosphere, making it the most abundant noble gas. Noble gases (Group 18) have complete electron shells, making them chemically inert and rarely forming compounds. Argon is used in welding, light bulbs, and as a protective atmosphere for reactive materials."
  },
  {
    question: "What is the chemical name for table salt?",
    answers: [
      { text: "Sodium bicarbonate", correct: false },
      { text: "Sodium chloride", correct: true },
      { text: "Calcium chloride", correct: false },
      { text: "Potassium chloride", correct: false },
    ],
    explanation: "Table salt is sodium chloride (NaCl), an ionic compound formed from sodium (Na⁺) and chloride (Cl⁻) ions. It has a 1:1 ratio and forms a cubic crystal structure. Salt is essential for life, used for seasoning food, preserving food, and maintaining electrolyte balance in the body."
  },
  {
    question: "Which element is liquid at room temperature besides mercury?",
    answers: [
      { text: "Gallium", correct: false },
      { text: "Cesium", correct: false },
      { text: "Bromine", correct: true },
      { text: "Francium", correct: false },
    ],
    explanation: "Bromine is the only nonmetal element that's liquid at room temperature (besides mercury, which is a metal). It's a reddish-brown, volatile liquid with a melting point of -7°C. Bromine is toxic and corrosive, and its vapors are dangerous. Gallium and cesium are also liquid near room temperature but have slightly higher melting points."
  },
  {
    question: "What is the oxidation number of oxygen in most compounds?",
    answers: [
      { text: "+2", correct: false },
      { text: "+1", correct: false },
      { text: "-1", correct: false },
      { text: "-2", correct: true },
    ],
    explanation: "Oxygen typically has an oxidation number of -2 in most compounds (except in peroxides where it's -1, and in OF₂ where it's +2). This is because oxygen is highly electronegative and tends to gain two electrons to complete its outer shell. Understanding oxidation numbers helps predict chemical formulas and balance redox reactions."
  },
  {
    question: "Which acid is produced in the stomach?",
    answers: [
      { text: "Hydrochloric acid", correct: true },
      { text: "Sulfuric acid", correct: false },
      { text: "Nitric acid", correct: false },
      { text: "Phosphoric acid", correct: false },
    ],
    explanation: "The stomach produces hydrochloric acid (HCl) with a pH of 1.5-3.5. This strong acid helps digest food by denaturing proteins and activating digestive enzymes like pepsin. It also kills harmful bacteria. The stomach lining is protected from the acid by a layer of mucus."
  },
  {
    question: "What is the chemical formula for ammonia?",
    answers: [
      { text: "NH₂", correct: false },
      { text: "NH₃", correct: true },
      { text: "NH₄", correct: false },
      { text: "N₂H₄", correct: false },
    ],
    explanation: "Ammonia has the formula NH₃, consisting of one nitrogen atom bonded to three hydrogen atoms in a trigonal pyramidal shape. It's a colorless gas with a pungent smell, used primarily to produce fertilizers. Ammonia is also produced naturally by decomposition of organic matter."
  },
  {
    question: "Which type of isomerism occurs when compounds have the same molecular formula but different connectivity?",
    answers: [
      { text: "Geometric isomerism", correct: false },
      { text: "Optical isomerism", correct: false },
      { text: "Structural isomerism", correct: true },
      { text: "Conformational isomerism", correct: false },
    ],
    explanation: "Structural isomers (constitutional isomers) have the same molecular formula but different atom connectivity. For example, butane (C₄H₁₀) has two structural isomers: n-butane (straight chain) and isobutane (branched). These isomers have different physical and chemical properties despite having the same molecular formula."
  },
  {
    question: "What is the name of the process where a liquid changes to vapor below its boiling point?",
    answers: [
      { text: "Sublimation", correct: false },
      { text: "Condensation", correct: false },
      { text: "Boiling", correct: false },
      { text: "Evaporation", correct: true },
    ],
    explanation: "Evaporation is the process where molecules at the surface of a liquid gain enough energy to escape into the gas phase, occurring at temperatures below the boiling point. Only surface molecules with sufficient kinetic energy evaporate. This is why puddles dry up on sunny days and why sweating cools the body."
  },
  {
    question: "Which element has the chemical symbol 'Au'?",
    answers: [
      { text: "Gold", correct: true },
      { text: "Silver", correct: false },
      { text: "Aluminum", correct: false },
      { text: "Argon", correct: false },
    ],
    explanation: "Gold has the chemical symbol Au, from its Latin name 'aurum' meaning 'shining dawn'. Gold is a transition metal prized for its beauty, malleability, and resistance to corrosion. It's used in jewelry, electronics, and as a monetary standard. Gold is one of the least reactive chemical elements."
  },
  {
    question: "What is the principal quantum number that describes the size of an orbital?",
    answers: [
      { text: "l", correct: false },
      { text: "n", correct: true },
      { text: "m", correct: false },
      { text: "s", correct: false },
    ],
    explanation: "The principal quantum number (n) describes the size and energy level of an atomic orbital, with values of 1, 2, 3, etc. Higher n values mean larger orbitals farther from the nucleus with higher energy. The other quantum numbers are: l (angular momentum), m (magnetic), and s (spin)."
  },
  {
    question: "Which compound is known as laughing gas?",
    answers: [
      { text: "Carbon monoxide", correct: false },
      { text: "Carbon dioxide", correct: false },
      { text: "Nitrous oxide", correct: true },
      { text: "Nitrogen dioxide", correct: false },
    ],
    explanation: "Nitrous oxide (N₂O) is commonly called laughing gas due to its euphoric effects when inhaled. It's used as an anesthetic in dentistry and surgery, and as a propellant in whipped cream dispensers. Despite its name, it can be dangerous if misused, potentially causing oxygen deprivation."
  },
  {
    question: "What is the maximum number of electrons in the d subshell?",
    answers: [
      { text: "2", correct: false },
      { text: "6", correct: false },
      { text: "14", correct: false },
      { text: "10", correct: true },
    ],
    explanation: "The d subshell can hold a maximum of 10 electrons across its 5 orbitals (each orbital holds 2 electrons). The s subshell holds 2, p holds 6, d holds 10, and f holds 14. This pattern follows from quantum mechanics and determines the structure of the periodic table."
  },
  {
    question: "Which scientist proposed the modern atomic theory?",
    answers: [
      { text: "John Dalton", correct: true },
      { text: "Ernest Rutherford", correct: false },
      { text: "Niels Bohr", correct: false },
      { text: "J.J. Thomson", correct: false },
    ],
    explanation: "John Dalton proposed the modern atomic theory in 1803, stating that all matter is made of indivisible atoms, atoms of the same element are identical, and chemical reactions involve rearrangement of atoms. While later modified (atoms are divisible, isotopes exist), Dalton's theory laid the foundation for modern chemistry."
  },
  {
    question: "What is the chemical formula for hydrogen peroxide?",
    answers: [
      { text: "HO", correct: false },
      { text: "H₂O", correct: false },
      { text: "H₃O", correct: false },
      { text: "H₂O₂", correct: true },
    ],
    explanation: "Hydrogen peroxide (H₂O₂) is a pale blue liquid in its pure form, commonly used as a disinfectant and bleaching agent. It has one more oxygen atom than water. H₂O₂ decomposes into water and oxygen, which is why it's stored in dark bottles and why it bubbles when applied to wounds (catalyzed by enzymes)."
  },
  {
    question: "What is the most electronegative element?",
    answers: [
      { text: "Oxygen", correct: false },
      { text: "Chlorine", correct: false },
      { text: "Fluorine", correct: true },
      { text: "Nitrogen", correct: false },
    ],
    explanation: "Fluorine is the most electronegative element (4.0 on Pauling scale), meaning it attracts electrons more strongly than any other element. This extreme electronegativity makes fluorine highly reactive and capable of forming very strong bonds. It's never found free in nature and reacts with almost all elements."
  },
  {
    question: "Which gas is produced when an acid reacts with a metal?",
    answers: [
      { text: "Hydrogen", correct: true },
      { text: "Oxygen", correct: false },
      { text: "Carbon dioxide", correct: false },
      { text: "Nitrogen", correct: false },
    ],
    explanation: "When a metal reacts with an acid, hydrogen gas (H₂) is typically produced along with a salt. For example: Zn + 2HCl → ZnCl₂ + H₂↑. This is a single displacement reaction. The hydrogen gas can be tested by its 'pop' sound when ignited. More reactive metals react more vigorously."
  },
  {
    question: "What is the chemical formula for rust?",
    answers: [
      { text: "FeO", correct: false },
      { text: "Fe₂O₃", correct: true },
      { text: "Fe₃O₄", correct: false },
      { text: "FeO₂", correct: false },
    ],
    explanation: "Rust is primarily iron(III) oxide (Fe₂O₃), often in a hydrated form Fe₂O₃·nH₂O. It forms when iron reacts with oxygen and water in a process called oxidation. Rust is porous and flaky, allowing further oxidation to occur, which is why rust continues to spread. Preventing rust requires keeping iron dry or coating it."
  },
  {
    question: "Which type of solution has a pH less than 7?",
    answers: [
      { text: "Basic", correct: false },
      { text: "Neutral", correct: false },
      { text: "Alkaline", correct: false },
      { text: "Acidic", correct: true },
    ],
    explanation: "Solutions with pH less than 7 are acidic, containing higher concentrations of H⁺ ions than OH⁻ ions. The lower the pH, the more acidic the solution. Examples include lemon juice (pH ~2), vinegar (pH ~3), and coffee (pH ~5). Acids taste sour and can corrode metals."
  },
  {
    question: "What is the molar mass of water (H₂O)?",
    answers: [
      { text: "18 g/mol", correct: true },
      { text: "16 g/mol", correct: false },
      { text: "20 g/mol", correct: false },
      { text: "22 g/mol", correct: false },
    ],
    explanation: "Water's molar mass is 18 g/mol, calculated by adding the atomic masses: 2 hydrogen atoms (2 × 1 g/mol) + 1 oxygen atom (16 g/mol) = 18 g/mol. This means one mole of water molecules weighs 18 grams and contains 6.022 × 10²³ molecules (Avogadro's number)."
  },
  {
    question: "Which element has the atomic number 26?",
    answers: [
      { text: "Chromium", correct: false },
      { text: "Iron", correct: true },
      { text: "Nickel", correct: false },
      { text: "Cobalt", correct: false },
    ],
    explanation: "Iron (Fe) has atomic number 26, meaning it has 26 protons. It's the most common element on Earth by mass, making up much of Earth's core. Iron is essential for life (in hemoglobin) and crucial for industry. Pure iron is relatively soft, but alloys like steel are strong and versatile."
  },
  {
    question: "What is the name of the reaction where a compound breaks down into simpler substances?",
    answers: [
      { text: "Synthesis", correct: false },
      { text: "Combustion", correct: false },
      { text: "Decomposition", correct: true },
      { text: "Displacement", correct: false },
    ],
    explanation: "Decomposition reactions break down a single compound into two or more simpler substances. General form: AB → A + B. Examples include: 2H₂O → 2H₂ + O₂ (electrolysis of water) and 2HgO → 2Hg + O₂ (heating mercury oxide). Many decomposition reactions require energy input."
  },
  {
    question: "Which subatomic particle determines the chemical properties of an element?",
    answers: [
      { text: "Proton", correct: false },
      { text: "Neutron", correct: false },
      { text: "Nucleus", correct: false },
      { text: "Electron", correct: true },
    ],
    explanation: "Electrons, especially valence electrons (outermost shell), determine an element's chemical properties and reactivity. They participate in chemical bonding and reactions. While protons define what element it is (atomic number), electrons determine how that element behaves chemically. Elements in the same group have similar properties because they have the same number of valence electrons."
  },
  {
    question: "What is the process of a liquid turning into a solid called?",
    answers: [
      { text: "Freezing", correct: true },
      { text: "Melting", correct: false },
      { text: "Condensation", correct: false },
      { text: "Sublimation", correct: false },
    ],
    explanation: "Freezing (or solidification) is the phase transition from liquid to solid that occurs when a liquid's temperature drops below its freezing point. During freezing, particles lose kinetic energy and arrange into a more ordered structure. Water freezes at 0°C (32°F) at standard pressure."
  },
  {
    question: "Which gas law relates pressure and temperature?",
    answers: [
      { text: "Boyle's law", correct: false },
      { text: "Gay-Lussac's law", correct: true },
      { text: "Charles's law", correct: false },
      { text: "Avogadro's law", correct: false },
    ],
    explanation: "Gay-Lussac's law states that at constant volume, the pressure of a gas is directly proportional to its absolute temperature: P₁/T₁ = P₂/T₂. This explains why tire pressure increases in hot weather and why aerosol cans warn against heating. The relationship only works with absolute temperature (Kelvin)."
  },
  {
    question: "What is the chemical formula for sulfuric acid?",
    answers: [
      { text: "HCl", correct: false },
      { text: "HNO₃", correct: false },
      { text: "H₂SO₄", correct: true },
      { text: "H₃PO₄", correct: false },
    ],
    explanation: "Sulfuric acid (H₂SO₄) is a strong diprotic acid - one of the most important industrial chemicals. It's used in fertilizers, petroleum refining, metal processing, and car batteries. Concentrated sulfuric acid is highly corrosive and dehydrating. When diluting, always add acid to water, never water to acid!"
  },
  {
    question: "Which element is used in pencils?",
    answers: [
      { text: "Lead", correct: false },
      { text: "Carbon", correct: true },
      { text: "Silicon", correct: false },
      { text: "Tin", correct: false },
    ],
    explanation: "Pencil 'lead' is actually graphite, a form of carbon (not the element lead). Graphite is soft and slippery because its carbon atoms are arranged in layers that slide over each other easily. It's mixed with clay to control hardness - more clay makes harder pencils (H), more graphite makes softer, darker pencils (B)."
  },
  {
    question: "What is the unit for measuring the amount of substance?",
    answers: [
      { text: "Gram", correct: false },
      { text: "Liter", correct: false },
      { text: "Mole", correct: true },
      { text: "Joule", correct: false },
    ],
    explanation: "The mole (mol) is the SI unit for amount of substance. One mole contains Avogadro's number (6.022 × 10²³) of particles (atoms, molecules, ions, etc.). This allows chemists to count particles by weighing them. For example, one mole of carbon-12 atoms weighs exactly 12 grams."
  },
  {
    question: "Which type of bond forms between a metal and a non-metal?",
    answers: [
      { text: "Covalent", correct: false },
      { text: "Metallic", correct: false },
      { text: "Van der Waals", correct: false },
      { text: "Ionic", correct: true },
    ],
    explanation: "Ionic bonds form between metals and nonmetals through transfer of electrons. The metal loses electrons to become a positive cation, while the nonmetal gains electrons to become a negative anion. The oppositely charged ions attract electrostatically. Example: Na⁺Cl⁻ (sodium chloride/table salt)."
  },
  {
    question: "What is the common name for sodium bicarbonate?",
    answers: [
      { text: "Baking soda", correct: true },
      { text: "Table salt", correct: false },
      { text: "Washing soda", correct: false },
      { text: "Epsom salt", correct: false },
    ],
    explanation: "Sodium bicarbonate (NaHCO₃) is commonly called baking soda. It's a weak base used in baking as a leavening agent - it reacts with acids to produce CO₂ gas, making baked goods rise. It's also used for cleaning, deodorizing, and as an antacid to neutralize stomach acid."
  },
  {
    question: "Which scientist developed the periodic table?",
    answers: [
      { text: "Marie Curie", correct: false },
      { text: "Dmitri Mendeleev", correct: true },
      { text: "Antoine Lavoisier", correct: false },
      { text: "Robert Boyle", correct: false },
    ],
    explanation: "Dmitri Mendeleev developed the periodic table in 1869, arranging elements by atomic mass and grouping those with similar properties. He even predicted properties of undiscovered elements by leaving gaps. The modern periodic table is arranged by atomic number (not mass) and is one of chemistry's most important organizing principles."
  },
  {
    question: "What is the name for compounds that have the same molecular formula but different arrangements?",
    answers: [
      { text: "Isotopes", correct: false },
      { text: "Allotropes", correct: false },
      { text: "Isomers", correct: true },
      { text: "Polymers", correct: false },
    ],
    explanation: "Isomers are compounds with the same molecular formula but different structural or spatial arrangements, resulting in different properties. Types include structural isomers (different connectivity), geometric isomers (cis/trans), and optical isomers (mirror images). Example: butane and isobutane both have formula C₄H₁₀."
  },
  {
    question: "Which element is essential for combustion?",
    answers: [
      { text: "Nitrogen", correct: false },
      { text: "Hydrogen", correct: false },
      { text: "Carbon", correct: false },
      { text: "Oxygen", correct: true },
    ],
    explanation: "Oxygen is essential for combustion (burning). Combustion is a chemical reaction between a fuel and oxygen that releases energy as heat and light. Fire requires three things (fire triangle): fuel, oxygen, and heat. Removing any one stops the fire. Earth's atmosphere is about 21% oxygen."
  },
  {
    question: "What is the pH of a neutral solution?",
    answers: [
      { text: "7", correct: true },
      { text: "0", correct: false },
      { text: "14", correct: false },
      { text: "1", correct: false },
    ],
    explanation: "A neutral solution has a pH of 7, meaning it has equal concentrations of H⁺ and OH⁻ ions. Pure water at 25°C is neutral. pH values below 7 are acidic (more H⁺), and above 7 are basic/alkaline (more OH⁻). The pH scale is logarithmic - each unit represents a 10-fold difference in concentration."
  },
  {
    question: "Which type of reaction involves the exchange of ions between compounds?",
    answers: [
      { text: "Synthesis", correct: false },
      { text: "Double displacement", correct: true },
      { text: "Single displacement", correct: false },
      { text: "Combustion", correct: false },
    ],
    explanation: "Double displacement (double replacement) reactions involve two compounds exchanging ions: AB + CD → AD + CB. Example: AgNO₃ + NaCl → AgCl + NaNO₃ (silver nitrate plus sodium chloride forms silver chloride precipitate and sodium nitrate). These often produce a precipitate, gas, or water."
  },
  {
    question: "What is the pH of a neutral aqueous solution at 25°C?",
    answers: [
      { text: "7", correct: true },
      { text: "0", correct: false },
      { text: "14", correct: false },
      { text: "1", correct: false },
    ],
    explanation: "At 25°C, pure water has a pH of 7, making it neutral. At this pH, the concentrations of H₃O⁺ and OH⁻ ions are equal (1 × 10⁻⁷ M). Note that pH 7 is only neutral at 25°C - at other temperatures, the neutral pH changes slightly because water's ionization constant (Kw) is temperature-dependent."
  },
  {
    question: "Atoms of the same element that have different numbers of neutrons are called what?",
    answers: [
      { text: "Isotopes", correct: true },
      { text: "Ions", correct: false },
      { text: "Allotropes", correct: false },
      { text: "Isomers", correct: false },
    ],
    explanation: "Isotopes are atoms of the same element (same number of protons) with different numbers of neutrons, giving them different mass numbers. Example: Carbon-12 (6 protons, 6 neutrons) and Carbon-14 (6 protons, 8 neutrons). Most elements have several isotopes. Some are radioactive and decay over time (used in carbon dating)."
  },
  {
    question: "What type of chemical bond is formed by sharing electron pairs between atoms?",
    answers: [
      { text: "Covalent bond", correct: true },
      { text: "Ionic bond", correct: false },
      { text: "Metallic bond", correct: false },
      { text: "Hydrogen bond", correct: false },
    ],
    explanation: "Covalent bonds form when atoms share one or more pairs of valence electrons. This typically occurs between nonmetals with similar electronegativities. The shared electrons are attracted to both nuclei, holding the atoms together. Covalent bonds can be polar (unequal sharing) or nonpolar (equal sharing). Examples: H₂, O₂, H₂O, CH₄."
  },
  {
    question: "Approximately how many particles are in one mole of a substance (Avogadro's number)?",
    answers: [
      { text: "6.022 × 10^23", correct: true },
      { text: "3.00 × 10^8", correct: false },
      { text: "1.67 × 10^-27", correct: false },
      { text: "9.81", correct: false },
    ],
    explanation: "Avogadro's number is 6.022 × 10²³, the number of particles (atoms, molecules, ions, etc.) in one mole of substance. This enormous number allows chemists to work with manageable amounts of substance while accounting for individual particles. Named after Amedeo Avogadro, it's one of chemistry's fundamental constants."
  },
  {
    question: "Which element makes up the largest percentage by mass of Earth's crust?",
    answers: [
      { text: "Oxygen", correct: true },
      { text: "Hydrogen", correct: false },
      { text: "Carbon", correct: false },
      { text: "Nitrogen", correct: false },
    ],
    explanation: "Oxygen makes up about 46% of Earth's crust by mass, making it the most abundant element in the crust. It's found in minerals, rocks, water, and the atmosphere. Silicon is second at 28%. Together, oxygen and silicon make up about 75% of the crust, primarily in the form of silicate minerals."
  },
  {
    question: "What is the unit of concentration defined as moles of solute per liter of solution?",
    answers: [
      { text: "Molarity", correct: true },
      { text: "Molality", correct: false },
      { text: "Normality", correct: false },
      { text: "Mass percent", correct: false },
    ],
    explanation: "Molarity (M) is defined as moles of solute per liter of solution: M = mol/L. It's the most common way to express concentration in chemistry. For example, a 1 M NaCl solution contains 1 mole of NaCl dissolved in enough water to make 1 liter of total solution. Molarity changes with temperature since volume changes."
  },
  {
    question: "A catalyst speeds up a chemical reaction by lowering which quantity?",
    answers: [
      { text: "Activation energy", correct: true },
      { text: "Enthalpy change", correct: false },
      { text: "Equilibrium constant", correct: false },
      { text: "Reaction order", correct: false },
    ],
    explanation: "Catalysts speed up reactions by lowering the activation energy (Ea) - the minimum energy needed for reactants to form products. They provide an alternative reaction pathway with lower energy requirements. Catalysts aren't consumed in the reaction and don't change the equilibrium position or overall enthalpy change (ΔH), just how fast equilibrium is reached."
  },
  {
    question: "What is the term for the phase change when a solid turns directly into a gas?",
    answers: [
      { text: "Sublimation", correct: true },
      { text: "Condensation", correct: false },
      { text: "Deposition", correct: false },
      { text: "Vaporization", correct: false },
    ],
    explanation: "Sublimation is the phase transition from solid directly to gas without passing through the liquid phase. This occurs when the vapor pressure of the solid exceeds atmospheric pressure at temperatures below the melting point. Examples include dry ice (CO₂), iodine, and snow in cold, dry conditions. The reverse process is called deposition."
  },
  {
    question: "Which type of reaction is: A + BC → AC + B ?",
    answers: [
      { text: "Single displacement", correct: true },
      { text: "Synthesis", correct: false },
      { text: "Double displacement", correct: false },
      { text: "Combustion", correct: false },
    ],
    explanation: "Single displacement (single replacement) reactions occur when one element replaces another in a compound: A + BC → AC + B. Example: Zn + CuSO₄ → ZnSO₄ + Cu (zinc replaces copper). Whether a single displacement occurs depends on the reactivity series - more reactive elements can displace less reactive ones."
  },
  {
    question: "In most compounds, what is the typical oxidation state of oxygen?",
    answers: [
      { text: "-2", correct: true },
      { text: "+2", correct: false },
      { text: "0", correct: false },
      { text: "-1", correct: false },
    ],
    explanation: "Oxygen typically has an oxidation state of -2 in most compounds because it's highly electronegative and tends to gain two electrons. Important exceptions include peroxides (O₂²⁻ where oxygen is -1) and oxygen difluoride (OF₂ where oxygen is +2, since fluorine is more electronegative). In elemental form (O₂), oxygen's oxidation state is 0."
  },
];