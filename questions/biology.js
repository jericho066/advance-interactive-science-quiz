//* Biology Questions

const biologyQuestions = [
  {
    question: "What is the powerhouse of the cell?",
    answers: [
      { text: "Nucleus", correct: false },
      { text: "Ribosome", correct: false },
      { text: "Mitochondria", correct: true },
      { text: "Endoplasmic reticulum", correct: false },
    ],
    explanation: "Mitochondria are called the 'powerhouse of the cell' because they generate most of the cell's ATP (adenosine triphosphate) through cellular respiration. They convert nutrients and oxygen into energy that cells can use for their functions."
  },
  {
    question: "Which blood type is known as the universal donor?",
    answers: [
      { text: "O negative", correct: true },
      { text: "AB positive", correct: false },
      { text: "A positive", correct: false },
      { text: "B negative", correct: false },
    ],
    explanation: "O negative blood is the universal donor because it lacks A, B, and Rh antigens on red blood cells. This means it can be given to anyone without causing an immune reaction. However, O negative individuals can only receive O negative blood."
  },
  {
    question: "What is the study of fungi called?",
    answers: [
      { text: "Botany", correct: false },
      { text: "Mycology", correct: true },
      { text: "Zoology", correct: false },
      { text: "Microbiology", correct: false },
    ],
    explanation: "Mycology is the scientific study of fungi, including yeasts, molds, and mushrooms. Fungi are a separate kingdom from plants and animals, with unique characteristics like chitin cell walls and heterotrophic nutrition."
  },
  {
    question: "How many chambers does a human heart have?",
    answers: [
      { text: "Two", correct: false },
      { text: "Three", correct: false },
      { text: "Five", correct: false },
      { text: "Four", correct: true },
    ],
    explanation: "The human heart has four chambers: two upper atria (left and right) that receive blood, and two lower ventricles (left and right) that pump blood out. The right side pumps deoxygenated blood to the lungs, while the left side pumps oxygenated blood to the body."
  },
  {
    question: "Which organelle is responsible for protein synthesis?",
    answers: [
      { text: "Ribosome", correct: true },
      { text: "Lysosome", correct: false },
      { text: "Golgi apparatus", correct: false },
      { text: "Vacuole", correct: false },
    ],
    explanation: "Ribosomes are the cellular structures responsible for protein synthesis. They read mRNA (messenger RNA) and translate the genetic code into chains of amino acids, which fold into functional proteins. Ribosomes can be free in the cytoplasm or attached to the endoplasmic reticulum."
  },
  {
    question: "What is the largest organ in the human body?",
    answers: [
      { text: "Liver", correct: false },
      { text: "Skin", correct: true },
      { text: "Brain", correct: false },
      { text: "Lungs", correct: false },
    ],
    explanation: "The skin is the largest organ in the human body, covering about 20 square feet in adults. It serves as a protective barrier against pathogens, regulates body temperature, prevents water loss, and contains sensory receptors for touch, pain, and temperature."
  },
  {
    question: "Which process do plants use to make their own food?",
    answers: [
      { text: "Respiration", correct: false },
      { text: "Fermentation", correct: false },
      { text: "Photosynthesis", correct: true },
      { text: "Digestion", correct: false },
    ],
    explanation: "Photosynthesis is the process by which plants convert light energy (usually from the sun) into chemical energy stored in glucose. Using chlorophyll in chloroplasts, plants combine carbon dioxide and water to produce glucose and oxygen: 6CO₂ + 6H₂O + light → C₆H₁₂O₆ + 6O₂."
  },
  {
    question: "What is the basic unit of heredity?",
    answers: [
      { text: "Chromosome", correct: false },
      { text: "DNA", correct: false },
      { text: "Protein", correct: false },
      { text: "Gene", correct: true },
    ],
    explanation: "A gene is the basic unit of heredity - a segment of DNA that codes for a specific protein or trait. Humans have approximately 20,000-25,000 genes. Genes are located on chromosomes and are passed from parents to offspring."
  },
  {
    question: "Which part of the brain controls balance and coordination?",
    answers: [
      { text: "Cerebellum", correct: true },
      { text: "Cerebrum", correct: false },
      { text: "Medulla", correct: false },
      { text: "Hypothalamus", correct: false },
    ],
    explanation: "The cerebellum, located at the back of the brain below the cerebrum, controls balance, coordination, and fine motor movements. It processes information from the muscles and inner ear to maintain posture and smooth movement. Damage to the cerebellum can cause loss of coordination."
  },
  {
    question: "What type of blood vessel carries blood away from the heart?",
    answers: [
      { text: "Vein", correct: false },
      { text: "Artery", correct: true },
      { text: "Capillary", correct: false },
      { text: "Venule", correct: false },
    ],
    explanation: "Arteries carry oxygenated blood away from the heart to the body's tissues (except for pulmonary arteries, which carry deoxygenated blood to the lungs). They have thick, elastic walls to withstand high pressure from the heart's pumping action."
  },
  {
    question: "Which biomolecule stores genetic information?",
    answers: [
      { text: "Protein", correct: false },
      { text: "Lipid", correct: false },
      { text: "DNA", correct: true },
      { text: "Carbohydrate", correct: false },
    ],
    explanation: "DNA (deoxyribonucleic acid) stores genetic information in all living organisms. It's a double helix made of nucleotides containing four bases (A, T, G, C). The sequence of these bases encodes instructions for building proteins and determines inherited traits."
  },
  {
    question: "What is the process by which cells divide to form gametes?",
    answers: [
      { text: "Mitosis", correct: false },
      { text: "Binary fission", correct: false },
      { text: "Cytokinesis", correct: false },
      { text: "Meiosis", correct: true },
    ],
    explanation: "Meiosis is a special type of cell division that produces gametes (sex cells: sperm and eggs) with half the number of chromosomes as the parent cell. It involves two divisions and creates genetic diversity through crossing over and independent assortment."
  },
  {
    question: "Which hormone regulates blood sugar levels?",
    answers: [
      { text: "Insulin", correct: true },
      { text: "Adrenaline", correct: false },
      { text: "Thyroxine", correct: false },
      { text: "Cortisol", correct: false },
    ],
    explanation: "Insulin, produced by the pancreas, regulates blood sugar levels by allowing cells to absorb glucose from the bloodstream. When blood sugar is high, insulin is released to lower it. Lack of insulin or insulin resistance causes diabetes."
  },
  {
    question: "What is the scientific name for humans?",
    answers: [
      { text: "Homo erectus", correct: false },
      { text: "Homo sapiens", correct: true },
      { text: "Homo habilis", correct: false },
      { text: "Homo neanderthalensis", correct: false },
    ],
    explanation: "Homo sapiens (meaning 'wise man') is the scientific name for modern humans. We're the only surviving species of the genus Homo. Homo sapiens evolved in Africa about 300,000 years ago and are characterized by large brains, bipedalism, and complex language."
  },
  {
    question: "Which type of cell lacks a nucleus?",
    answers: [
      { text: "Eukaryotic cell", correct: false },
      { text: "Plant cell", correct: false },
      { text: "Prokaryotic cell", correct: true },
      { text: "Animal cell", correct: false },
    ],
    explanation: "Prokaryotic cells (bacteria and archaea) lack a membrane-bound nucleus and other organelles. Their DNA floats freely in the cytoplasm. Eukaryotic cells (plants, animals, fungi) have a nucleus and membrane-bound organelles."
  },
  {
    question: "What is the main function of red blood cells?",
    answers: [
      { text: "Fight infection", correct: false },
      { text: "Clot blood", correct: false },
      { text: "Regulate temperature", correct: false },
      { text: "Carry oxygen", correct: true },
    ],
    explanation: "Red blood cells (erythrocytes) carry oxygen from the lungs to body tissues and carbon dioxide back to the lungs. They contain hemoglobin, an iron-rich protein that binds oxygen. Humans have about 25 trillion red blood cells, which are produced in bone marrow."
  },
  {
    question: "Which structure controls what enters and leaves the cell?",
    answers: [
      { text: "Cell membrane", correct: true },
      { text: "Cell wall", correct: false },
      { text: "Cytoplasm", correct: false },
      { text: "Nuclear membrane", correct: false },
    ],
    explanation: "The cell membrane (plasma membrane) is a selectively permeable barrier that controls what enters and leaves the cell. It's composed of a phospholipid bilayer with embedded proteins. This selective permeability maintains the cell's internal environment."
  },
  {
    question: "What is the process of programmed cell death called?",
    answers: [
      { text: "Necrosis", correct: false },
      { text: "Apoptosis", correct: true },
      { text: "Mitosis", correct: false },
      { text: "Lysis", correct: false },
    ],
    explanation: "Apoptosis is programmed cell death - a controlled process where cells systematically dismantle themselves. It's essential for development (like forming fingers by removing webbing), eliminating damaged cells, and preventing cancer. Unlike necrosis (traumatic cell death), apoptosis doesn't cause inflammation."
  },
  {
    question: "Which part of the flower produces pollen?",
    answers: [
      { text: "Pistil", correct: false },
      { text: "Sepal", correct: false },
      { text: "Stamen", correct: true },
      { text: "Petal", correct: false },
    ],
    explanation: "The stamen is the male reproductive organ of a flower that produces pollen. It consists of the anther (which produces pollen) and the filament (which supports the anther). The pistil is the female part that receives pollen."
  },
  {
    question: "What is the hardest substance in the human body?",
    answers: [
      { text: "Bone", correct: false },
      { text: "Cartilage", correct: false },
      { text: "Keratin", correct: false },
      { text: "Tooth enamel", correct: true },
    ],
    explanation: "Tooth enamel is the hardest substance in the human body, even harder than bone. It's composed of 96% minerals (primarily hydroxyapatite) and protects teeth from daily wear and decay. However, unlike bone, enamel cannot regenerate once damaged."
  },
  {
    question: "Which system is responsible for producing hormones?",
    answers: [
      { text: "Endocrine system", correct: true },
      { text: "Nervous system", correct: false },
      { text: "Circulatory system", correct: false },
      { text: "Digestive system", correct: false },
    ],
    explanation: "The endocrine system is a network of glands that produce and secrete hormones directly into the bloodstream. Major glands include the pituitary, thyroid, adrenal glands, and pancreas. Hormones regulate metabolism, growth, reproduction, mood, and many other functions."
  },
  {
    question: "What is the liquid part of blood called?",
    answers: [
      { text: "Serum", correct: false },
      { text: "Plasma", correct: true },
      { text: "Lymph", correct: false },
      { text: "Hemoglobin", correct: false },
    ],
    explanation: "Plasma is the liquid component of blood, making up about 55% of total blood volume. It's a pale yellow fluid composed of 90% water and 10% dissolved substances including proteins, glucose, minerals, hormones, and waste products. It transports blood cells and nutrients throughout the body."
  },
  {
    question: "Which organelle breaks down waste materials in the cell?",
    answers: [
      { text: "Mitochondria", correct: false },
      { text: "Ribosome", correct: false },
      { text: "Lysosome", correct: true },
      { text: "Chloroplast", correct: false },
    ],
    explanation: "Lysosomes are organelles containing digestive enzymes that break down waste materials, cellular debris, and foreign substances. They act as the cell's 'recycling center' and 'garbage disposal,' breaking down worn-out organelles and molecules into simpler components that can be reused."
  },
  {
    question: "What is the study of insects called?",
    answers: [
      { text: "Herpetology", correct: false },
      { text: "Ornithology", correct: false },
      { text: "Ichthyology", correct: false },
      { text: "Entomology", correct: true },
    ],
    explanation: "Entomology is the scientific study of insects, which make up the largest group of animals on Earth with over a million described species. Entomologists study insect biology, ecology, behavior, evolution, and their relationships with humans, plants, and other organisms."
  },
  {
    question: "Which muscle is involuntary and found in the heart?",
    answers: [
      { text: "Cardiac muscle", correct: true },
      { text: "Skeletal muscle", correct: false },
      { text: "Smooth muscle", correct: false },
      { text: "Striated muscle", correct: false },
    ],
    explanation: "Cardiac muscle is unique to the heart and contracts involuntarily (without conscious control). It has characteristics of both skeletal muscle (striated appearance) and smooth muscle (involuntary control). Cardiac muscle cells are connected by intercalated discs that allow synchronized contractions."
  },
  {
    question: "What is the process by which plants lose water through their leaves?",
    answers: [
      { text: "Osmosis", correct: false },
      { text: "Transpiration", correct: true },
      { text: "Diffusion", correct: false },
      { text: "Evaporation", correct: false },
    ],
    explanation: "Transpiration is the process where water evaporates from plant leaves through tiny pores called stomata. It serves multiple functions: cooling the plant, transporting minerals from roots, and creating negative pressure that pulls water up from the roots. About 90% of water absorbed by plants is lost through transpiration."
  },
  {
    question: "Which vitamin is produced when skin is exposed to sunlight?",
    answers: [
      { text: "Vitamin A", correct: false },
      { text: "Vitamin C", correct: false },
      { text: "Vitamin D", correct: true },
      { text: "Vitamin K", correct: false },
    ],
    explanation: "Vitamin D is synthesized in the skin when exposed to UVB rays from sunlight. The body converts a cholesterol compound in the skin into vitamin D₃. This vitamin is essential for calcium absorption, bone health, immune function, and many other processes."
  },
  {
    question: "What is the smallest bone in the human body?",
    answers: [
      { text: "Femur", correct: false },
      { text: "Tibia", correct: false },
      { text: "Radius", correct: false },
      { text: "Stapes", correct: true },
    ],
    explanation: "The stapes (or stirrup bone) in the middle ear is the smallest bone in the human body, measuring only 2-3 millimeters long. It's one of three tiny bones (ossicles) that transmit sound vibrations from the eardrum to the inner ear."
  },
  {
    question: "Which process converts glucose into energy without oxygen?",
    answers: [
      { text: "Aerobic respiration", correct: false },
      { text: "Fermentation", correct: true },
      { text: "Photosynthesis", correct: false },
      { text: "Glycolysis", correct: false },
    ],
    explanation: "Fermentation is an anaerobic process (occurs without oxygen) that converts glucose into energy, producing either lactic acid (in muscles during intense exercise) or ethanol and CO₂ (in yeast for brewing/baking). It yields only 2 ATP per glucose, much less than aerobic respiration's 36-38 ATP."
  },
  {
    question: "What is the term for animals that are active at night?",
    answers: [
      { text: "Diurnal", correct: false },
      { text: "Crepuscular", correct: false },
      { text: "Cathemeral", correct: false },
      { text: "Nocturnal", correct: true },
    ],
    explanation: "Nocturnal animals are active at night and sleep during the day. They often have special adaptations like enhanced night vision, sensitive hearing, or echolocation. Examples include owls, bats, raccoons, and many cats. This lifestyle helps them avoid predators and/or heat."
  },
  {
    question: "What is the process by which plants absorb water through their roots?",
    answers: [
      { text: "Active transport", correct: false },
      { text: "Diffusion", correct: false },
      { text: "Osmosis", correct: true },
      { text: "Facilitated diffusion", correct: false },
    ],
    explanation: "Osmosis is the movement of water molecules across a semi-permeable membrane from an area of high water concentration to low water concentration. Plant roots absorb water from soil through osmosis, driven by the higher solute concentration inside root cells compared to the soil."
  },
  {
    question: "Which organ produces bile?",
    answers: [
      { text: "Liver", correct: true },
      { text: "Pancreas", correct: false },
      { text: "Gallbladder", correct: false },
      { text: "Stomach", correct: false },
    ],
    explanation: "The liver produces bile, a greenish-yellow fluid that helps digest fats by emulsifying them (breaking large fat droplets into smaller ones). Bile is stored and concentrated in the gallbladder, then released into the small intestine when needed. The liver also detoxifies blood and produces many important proteins."
  },
  {
    question: "What is the functional unit of the kidney?",
    answers: [
      { text: "Glomerulus", correct: false },
      { text: "Nephron", correct: true },
      { text: "Tubule", correct: false },
      { text: "Collecting duct", correct: false },
    ],
    explanation: "The nephron is the functional unit of the kidney, with each kidney containing about one million nephrons. Each nephron consists of a glomerulus (filtering unit) and a tubule (reabsorption unit) that filters blood, removes waste, and regulates water and electrolyte balance."
  },
  {
    question: "Which vitamin deficiency causes scurvy?",
    answers: [
      { text: "Vitamin A", correct: false },
      { text: "Vitamin B12", correct: false },
      { text: "Vitamin D", correct: false },
      { text: "Vitamin C", correct: true },
    ],
    explanation: "Scurvy is caused by severe vitamin C (ascorbic acid) deficiency. Vitamin C is essential for collagen synthesis, which is necessary for healthy skin, blood vessels, bones, and connective tissue. Symptoms include bleeding gums, bruising, weakness, and poor wound healing. It was common among sailors before citrus fruits were understood as a cure."
  },
  {
    question: "What is the longest bone in the human body?",
    answers: [
      { text: "Femur", correct: true },
      { text: "Tibia", correct: false },
      { text: "Humerus", correct: false },
      { text: "Fibula", correct: false },
    ],
    explanation: "The femur (thigh bone) is the longest, strongest, and heaviest bone in the human body, typically about 19-20 inches in adults. It extends from the hip to the knee and can support up to 30 times the weight of the body when walking or running."
  },
  {
    question: "Which blood component is responsible for clotting?",
    answers: [
      { text: "Red blood cells", correct: false },
      { text: "Platelets", correct: true },
      { text: "White blood cells", correct: false },
      { text: "Plasma", correct: false },
    ],
    explanation: "Platelets (thrombocytes) are small cell fragments that play a crucial role in blood clotting. When a blood vessel is injured, platelets rush to the site, stick together, and form a plug. They also release chemicals that trigger a cascade of reactions forming a fibrin clot to stop bleeding."
  },
  {
    question: "What is the study of birds called?",
    answers: [
      { text: "Herpetology", correct: false },
      { text: "Ichthyology", correct: false },
      { text: "Ornithology", correct: true },
      { text: "Mammalogy", correct: false },
    ],
    explanation: "Ornithology is the scientific study of birds. It covers bird anatomy, physiology, behavior, ecology, evolution, and conservation. There are about 10,000 known bird species. Ornithologists study everything from migration patterns to vocalization to the impact of climate change on bird populations."
  },
  {
    question: "Which organelle contains digestive enzymes?",
    answers: [
      { text: "Ribosome", correct: false },
      { text: "Mitochondria", correct: false },
      { text: "Golgi apparatus", correct: false },
      { text: "Lysosome", correct: true },
    ],
    explanation: "Lysosomes contain about 50 different digestive enzymes that can break down proteins, nucleic acids, carbohydrates, and lipids. These enzymes work best in acidic conditions, which the lysosome maintains at pH 4.5-5. They digest food particles, worn-out organelles, and pathogens."
  },
  {
    question: "What is the normal human body temperature in Fahrenheit?",
    answers: [
      { text: "98.6°F", correct: true },
      { text: "97.8°F", correct: false },
      { text: "99.2°F", correct: false },
      { text: "100.4°F", correct: false },
    ],
    explanation: "The average normal human body temperature is 98.6°F (37°C), though this can vary slightly between individuals and throughout the day. Body temperature is lowest in the early morning and highest in the late afternoon. Temperature regulation is controlled by the hypothalamus in the brain."
  },
  {
    question: "Which part of the eye controls the amount of light entering?",
    answers: [
      { text: "Cornea", correct: false },
      { text: "Iris", correct: true },
      { text: "Lens", correct: false },
      { text: "Retina", correct: false },
    ],
    explanation: "The iris is the colored part of the eye that controls the size of the pupil, thereby regulating the amount of light entering the eye. In bright light, the iris contracts to make the pupil smaller; in dim light, it relaxes to make the pupil larger. This is called the pupillary light reflex."
  },
  {
    question: "What is the chemical messenger that travels through the bloodstream?",
    answers: [
      { text: "Enzyme", correct: false },
      { text: "Antibody", correct: false },
      { text: "Hormone", correct: true },
      { text: "Neurotransmitter", correct: false },
    ],
    explanation: "Hormones are chemical messengers produced by endocrine glands and transported through the bloodstream to target organs. They regulate growth, metabolism, reproduction, mood, and many other functions. Examples include insulin (blood sugar), adrenaline (stress response), and estrogen/testosterone (sexual development)."
  },
  {
    question: "Which gas do plants release during photosynthesis?",
    answers: [
      { text: "Carbon dioxide", correct: false },
      { text: "Nitrogen", correct: false },
      { text: "Hydrogen", correct: false },
      { text: "Oxygen", correct: true },
    ],
    explanation: "During photosynthesis, plants absorb carbon dioxide and water, using light energy to produce glucose and release oxygen as a byproduct. This oxygen is essential for most life on Earth. One large tree can produce enough oxygen for two people per year."
  },
  {
    question: "What is the process of cell eating called?",
    answers: [
      { text: "Phagocytosis", correct: true },
      { text: "Pinocytosis", correct: false },
      { text: "Exocytosis", correct: false },
      { text: "Endocytosis", correct: false },
    ],
    explanation: "Phagocytosis (from Greek 'phagein' = to eat) is a type of endocytosis where cells engulf large particles or even other cells. White blood cells use phagocytosis to engulf and destroy bacteria and other pathogens. The engulfed material is enclosed in a vesicle and digested by enzymes."
  },
  {
    question: "Which structure connects muscle to bone?",
    answers: [
      { text: "Ligament", correct: false },
      { text: "Tendon", correct: true },
      { text: "Cartilage", correct: false },
      { text: "Fascia", correct: false },
    ],
    explanation: "Tendons are tough, fibrous connective tissue cords that attach muscles to bones. They're made primarily of collagen and are extremely strong, able to withstand great tension. When a muscle contracts, it pulls on the tendon, which then moves the bone. Ligaments, in contrast, connect bone to bone."
  },
  {
    question: "What is the main component of plant cell walls?",
    answers: [
      { text: "Chitin", correct: false },
      { text: "Protein", correct: false },
      { text: "Cellulose", correct: true },
      { text: "Starch", correct: false },
    ],
    explanation: "Cellulose is the main structural component of plant cell walls, making it the most abundant organic polymer on Earth. It's a polysaccharide made of glucose units linked together. Humans can't digest cellulose, but it serves as dietary fiber. Fungi use chitin instead of cellulose in their cell walls."
  },
  {
    question: "Which type of immunity is acquired through vaccination?",
    answers: [
      { text: "Innate immunity", correct: false },
      { text: "Natural immunity", correct: false },
      { text: "Passive immunity", correct: false },
      { text: "Active immunity", correct: true },
    ],
    explanation: "Active immunity is acquired when the body produces its own antibodies in response to an antigen (disease-causing organism or vaccine). Vaccination introduces a weakened or dead pathogen, prompting the immune system to create memory cells. This provides long-lasting protection without causing the disease."
  },
  {
    question: "What is the space between neurons called?",
    answers: [
      { text: "Synapse", correct: true },
      { text: "Axon", correct: false },
      { text: "Dendrite", correct: false },
      { text: "Cell body", correct: false },
    ],
    explanation: "The synapse is the tiny gap (about 20-40 nanometers) between two neurons where communication occurs. When an electrical signal reaches the end of a neuron, it triggers the release of neurotransmitters that cross the synapse and bind to receptors on the next neuron, continuing the signal."
  },
  {
    question: "Which organ filters waste from the blood?",
    answers: [
      { text: "Liver", correct: false },
      { text: "Kidney", correct: true },
      { text: "Spleen", correct: false },
      { text: "Pancreas", correct: false },
    ],
    explanation: "The kidneys are bean-shaped organs that filter waste products, excess water, and toxins from the blood to produce urine. They process about 200 quarts of blood daily, filtering out about 2 quarts of waste and water. Kidneys also regulate blood pressure, electrolyte balance, and red blood cell production."
  },
  {
    question: "What is the study of classification of organisms called?",
    answers: [
      { text: "Ecology", correct: false },
      { text: "Genetics", correct: false },
      { text: "Taxonomy", correct: true },
      { text: "Physiology", correct: false },
    ],
    explanation: "Taxonomy is the science of classifying and naming organisms based on shared characteristics and evolutionary relationships. The modern system uses hierarchical categories: Domain, Kingdom, Phylum, Class, Order, Family, Genus, Species. Carl Linnaeus developed the binomial nomenclature system we still use today."
  },
  {
    question: "Which molecule carries genetic information from DNA to ribosomes?",
    answers: [
      { text: "tRNA", correct: false },
      { text: "rRNA", correct: false },
      { text: "Protein", correct: false },
      { text: "mRNA", correct: true },
    ],
    explanation: "mRNA (messenger RNA) carries genetic information copied from DNA out of the nucleus to ribosomes in the cytoplasm. This process is called transcription. The ribosome then reads the mRNA sequence and uses it to build proteins (translation). This is a key part of gene expression."
  },
  {
    question: "Which organelle is primarily responsible for producing ATP (the cell's main energy currency)?",
    answers: [
      { text: "Mitochondrion", correct: true },
      { text: "Ribosome", correct: false },
      { text: "Golgi apparatus", correct: false },
      { text: "Lysosome", correct: false },
    ],
    explanation: "Mitochondria produce ATP through cellular respiration, converting glucose and oxygen into energy. They have their own DNA and reproduce independently, supporting the endosymbiotic theory that they were once free-living bacteria. Cells with high energy needs (like muscle cells) have more mitochondria."
  },
  {
    question: "Enzymes are biological molecules made mostly of which macromolecule?",
    answers: [
      { text: "Proteins", correct: true },
      { text: "Carbohydrates", correct: false },
      { text: "Lipids", correct: false },
      { text: "Nucleic acids", correct: false },
    ],
    explanation: "Enzymes are proteins that act as biological catalysts, speeding up chemical reactions without being consumed. Each enzyme has a specific 3D shape that allows it to bind to specific substrates. Factors like temperature and pH affect enzyme function. Without enzymes, most biological reactions would occur too slowly to sustain life."
  },
  {
    question: "What is the basic structural and functional unit of all living organisms?",
    answers: [
      { text: "Cell", correct: true },
      { text: "Tissue", correct: false },
      { text: "Organ", correct: false },
      { text: "Organ system", correct: false },
    ],
    explanation: "The cell is the basic unit of life - the smallest structure capable of performing all life functions. All organisms are made of one or more cells. Cells contain genetic material, can reproduce, obtain and use energy, respond to their environment, and maintain homeostasis."
  },
  

// Todo: continue adding explanation.
{
  question: "Which blood cells are primarily responsible for transporting oxygen throughout the body?",
  answers: [
    { text: "Red blood cells", correct: true },
    { text: "White blood cells", correct: false },
    { text: "Platelets", correct: false },
    { text: "Plasma cells", correct: false }
  ]
},
{
  question: "What is the name of the process that breaks glucose into pyruvate and yields ATP without requiring oxygen?",
  answers: [
    { text: "Glycolysis", correct: true },
    { text: "Krebs cycle", correct: false },
    { text: "Electron transport chain", correct: false },
    { text: "Photosynthesis", correct: false }
  ]
},
{
  question: "In eukaryotic cells, where does transcription (DNA → RNA) primarily take place?",
  answers: [
    { text: "Nucleus", correct: true },
    { text: "Cytoplasm", correct: false },
    { text: "Mitochondrion", correct: false },
    { text: "Ribosome", correct: false }
  ]
},
{
  question: "What process during meiosis increases genetic variation by exchanging segments between homologous chromosomes?",
  answers: [
    { text: "Crossing over", correct: true },
    { text: "Binary fission", correct: false },
    { text: "Independent assortment", correct: false },
    { text: "Cytokinesis", correct: false }
  ]
},
{
  question: "Which molecule carries genetic information in most organisms?",
  answers: [
    { text: "DNA", correct: true },
    { text: "RNA", correct: false },
    { text: "Protein", correct: false },
    { text: "Lipid", correct: false }
  ]
},
{
  question: "Organisms that lack a nucleus and membrane-bound organelles belong to which group?",
  answers: [
    { text: "Prokaryotes", correct: true },
    { text: "Eukaryotes", correct: false },
    { text: "Archaea only", correct: false },
    { text: "Protists", correct: false }
  ]
},
{
  question: "Which kingdom contains multicellular, photosynthetic organisms that have cell walls made of cellulose?",
  answers: [
    { text: "Plantae", correct: true },
    { text: "Animalia", correct: false },
    { text: "Fungi", correct: false },
    { text: "Protista", correct: false }
  ]
}
];