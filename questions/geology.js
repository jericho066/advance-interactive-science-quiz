//* Geology Questions

const geologyQuestions = [
  {
    question: "What is the study of earthquakes called?",
    answers: [
      { text: "Volcanology", correct: false },
      { text: "Petrology", correct: false },
      { text: "Seismology", correct: true },
      { text: "Mineralogy", correct: false },
    ],
    explanation: "Seismology is the scientific study of earthquakes and the propagation of seismic waves through Earth. Seismologists use seismographs to detect and measure earthquakes, helping predict future events, understand Earth's interior structure, and assess earthquake hazards for building safety."
  },
  {
    question: "Which type of rock is formed from cooled magma?",
    answers: [
      { text: "Igneous", correct: true },
      { text: "Sedimentary", correct: false },
      { text: "Metamorphic", correct: false },
      { text: "Crystalline", correct: false },
    ],
    explanation: "Igneous rocks form when molten magma or lava cools and solidifies. Intrusive igneous rocks (like granite) cool slowly underground, forming large crystals. Extrusive igneous rocks (like basalt) cool quickly at the surface, forming small crystals or glassy textures. The name comes from the Latin 'ignis' meaning fire."
  },
  {
    question: "What is the hardest mineral on the Mohs scale?",
    answers: [
      { text: "Quartz", correct: false },
      { text: "Diamond", correct: true },
      { text: "Topaz", correct: false },
      { text: "Corundum", correct: false },
    ],
    explanation: "Diamond ranks 10 on the Mohs hardness scale, making it the hardest naturally occurring mineral. The scale, developed by Friedrich Mohs in 1812, ranks minerals from 1 (talc, softest) to 10 (diamond). Diamond's extreme hardness comes from its strong covalent carbon bonds arranged in a crystal lattice."
  },
  {
    question: "Which layer of Earth is liquid?",
    answers: [
      { text: "Crust", correct: false },
      { text: "Mantle", correct: false },
      { text: "Inner core", correct: false },
      { text: "Outer core", correct: true },
    ],
    explanation: "The outer core is the only liquid layer of Earth, composed primarily of molten iron and nickel at temperatures of 4,000-5,000°C. Its fluid motion generates Earth's magnetic field through the dynamo effect. The inner core is solid due to extreme pressure, despite being even hotter than the outer core."
  },
  {
    question: "What is the most abundant mineral in Earth's crust?",
    answers: [
      { text: "Feldspar", correct: true },
      { text: "Quartz", correct: false },
      { text: "Mica", correct: false },
      { text: "Calcite", correct: false },
    ],
    explanation: "Feldspar makes up about 60% of Earth's crust, making it the most abundant mineral group. Feldspars are aluminosilicate minerals containing potassium, sodium, or calcium. They're essential components of most igneous rocks and break down to form clay minerals, contributing to soil formation."
  },
  {
    question: "What type of boundary occurs when tectonic plates move apart?",
    answers: [
      { text: "Convergent", correct: false },
      { text: "Divergent", correct: true },
      { text: "Transform", correct: false },
      { text: "Subduction", correct: false },
    ],
    explanation: "Divergent boundaries occur where tectonic plates move apart, allowing magma to rise and create new crust. Mid-ocean ridges are classic examples where seafloor spreading occurs. As plates separate, earthquakes and volcanic activity are common. The Mid-Atlantic Ridge is actively pushing North America and Europe apart at about 2.5 cm per year."
  },
  {
    question: "Which scale is used to measure earthquake magnitude?",
    answers: [
      { text: "Mercalli scale", correct: false },
      { text: "Beaufort scale", correct: false },
      { text: "Richter scale", correct: true },
      { text: "Fujita scale", correct: false },
    ],
    explanation: "The Richter scale, developed by Charles Richter in 1935, measures earthquake magnitude based on seismic wave amplitude. It's logarithmic, meaning each whole number increase represents 10 times more ground motion. Modern seismology often uses the moment magnitude scale, which is more accurate for large earthquakes, though 'Richter scale' remains commonly used."
  },
  {
    question: "What is the name for molten rock beneath Earth's surface?",
    answers: [
      { text: "Tephra", correct: false },
      { text: "Obsidian", correct: false },
      { text: "Basalt", correct: false },
      { text: "Magma", correct: true },
    ],
    explanation: "Magma is molten rock beneath Earth's surface, formed in the mantle or crust where temperatures reach 700-1,300°C. Once magma reaches the surface through volcanic eruption, it's called lava. Magma composition determines eruption style—silica-rich magma is more viscous and explosive, while basaltic magma flows more easily."
  },
  {
    question: "Which type of volcano has the most explosive eruptions?",
    answers: [
      { text: "Stratovolcano", correct: true },
      { text: "Shield volcano", correct: false },
      { text: "Cinder cone", correct: false },
      { text: "Fissure volcano", correct: false },
    ],
    explanation: "Stratovolcanoes (composite volcanoes) produce the most explosive eruptions due to their viscous, gas-rich magma. They build up steep, cone-shaped mountains from alternating layers of lava, ash, and rock debris. Famous examples include Mount St. Helens, Mount Fuji, and Mount Vesuvius. Their eruptions can be catastrophic and far-reaching."
  },
  {
    question: "What is the name of the supercontinent that existed about 200 million years ago?",
    answers: [
      { text: "Gondwana", correct: false },
      { text: "Pangaea", correct: true },
      { text: "Laurasia", correct: false },
      { text: "Rodinia", correct: false },
    ],
    explanation: "Pangaea ('all Earth' in Greek) was a supercontinent that existed during the late Paleozoic and early Mesozoic eras, about 335-175 million years ago. It began breaking apart around 200 million years ago, eventually forming today's continents. Evidence includes matching fossils, rock formations, and coastlines across current continents."
  },
  {
    question: "What is the process called that compacts and cements sediments to form sedimentary rock?",
    answers: [
      { text: "Lithification", correct: true },
      { text: "Metamorphism", correct: false },
      { text: "Erosion", correct: false },
      { text: "Crystallization", correct: false }
    ],
    explanation: "Lithification is the process of converting loose sediments into solid sedimentary rock through compaction (pressure from overlying layers squeezing sediments together) and cementation (minerals precipitating from water to bind sediment grains). This process can take thousands to millions of years."
  },
  {
    question: "What is the process by which rocks are broken down by weather?",
    answers: [
      { text: "Erosion", correct: false },
      { text: "Deposition", correct: false },
      { text: "Sedimentation", correct: false },
      { text: "Weathering", correct: true },
    ],
    explanation: "Weathering is the breakdown of rocks at Earth's surface through physical (mechanical) and chemical processes. Physical weathering includes freeze-thaw cycles and abrasion. Chemical weathering involves reactions with water, oxygen, and acids. Weathering is distinct from erosion, which involves the transport of weathered materials."
  },
  {
    question: "Which era is known as the 'Age of Reptiles'?",
    answers: [
      { text: "Mesozoic", correct: true },
      { text: "Paleozoic", correct: false },
      { text: "Cenozoic", correct: false },
      { text: "Precambrian", correct: false },
    ],
    explanation: "The Mesozoic Era (252-66 million years ago) is called the Age of Reptiles because dinosaurs and other reptiles dominated terrestrial ecosystems. It's divided into three periods: Triassic, Jurassic, and Cretaceous. The era ended with the mass extinction event that wiped out non-avian dinosaurs."
  },
  {
    question: "What type of rock is marble?",
    answers: [
      { text: "Igneous", correct: false },
      { text: "Metamorphic", correct: true },
      { text: "Sedimentary", correct: false },
      { text: "Volcanic", correct: false },
    ],
    explanation: "Marble is a metamorphic rock formed when limestone (sedimentary rock) is subjected to high temperature and pressure, causing calcite crystals to recrystallize into larger interlocking crystals. This metamorphosis gives marble its characteristic appearance and makes it valuable for sculpture and architecture. Pure marble is white, but impurities create various colors."
  },
  {
    question: "Which gas is most commonly released during volcanic eruptions?",
    answers: [
      { text: "Carbon dioxide", correct: false },
      { text: "Sulfur dioxide", correct: false },
      { text: "Water vapor", correct: true },
      { text: "Methane", correct: false },
    ],
    explanation: "Water vapor (H₂O) comprises 60-90% of volcanic gases, making it the most abundant emission. Other gases include carbon dioxide (10-40%), sulfur dioxide, hydrogen sulfide, and small amounts of other gases. Though water vapor dominates, sulfur dioxide often receives more attention due to its visible effects and environmental impact."
  },
  {
    question: "What is the deepest part of Earth called?",
    answers: [
      { text: "Mantle", correct: false },
      { text: "Outer core", correct: false },
      { text: "Asthenosphere", correct: false },
      { text: "Inner core", correct: true },
    ],
    explanation: "The inner core is Earth's deepest layer, a solid sphere of iron and nickel about 1,220 km in radius, located 5,150-6,370 km below Earth's surface. Despite temperatures reaching 5,200°C (hotter than the Sun's surface), extreme pressure keeps it solid. It rotates slightly faster than Earth's surface."
  },
  {
    question: "Which type of metamorphism occurs due to high pressure and temperature over large areas?",
    answers: [
      { text: "Regional metamorphism", correct: true },
      { text: "Contact metamorphism", correct: false },
      { text: "Hydrothermal metamorphism", correct: false },
      { text: "Dynamic metamorphism", correct: false },
    ],
    explanation: "Regional metamorphism (also called dynamic metamorphism) occurs over large areas due to high pressure and temperature, typically associated with mountain-building processes at convergent plate boundaries. It produces foliated rocks like slate, schist, and gneiss. Contact metamorphism, in contrast, occurs when rocks are heated by nearby magma intrusions."
  },
  {
    question: "What is the name for the boundary between two tectonic plates?",
    answers: [
      { text: "Fault line", correct: false },
      { text: "Plate boundary", correct: true },
      { text: "Rift valley", correct: false },
      { text: "Fracture zone", correct: false },
    ],
    explanation: "Plate boundaries are zones where two tectonic plates meet. There are three types: divergent (plates move apart), convergent (plates collide), and transform (plates slide past each other). These boundaries are sites of intense geological activity including earthquakes, volcanic eruptions, and mountain formation. Fault lines are fractures where movement has occurred."
  },
  {
    question: "Which mineral group makes up most of Earth's crust?",
    answers: [
      { text: "Carbonates", correct: false },
      { text: "Oxides", correct: false },
      { text: "Silicates", correct: true },
      { text: "Sulfides", correct: false },
    ],
    explanation: "Silicate minerals make up over 90% of Earth's crust. They're built around the silicon-oxygen tetrahedron (SiO₄), the fundamental building block. Common silicates include quartz, feldspars, micas, and olivine. Silicates are classified by how their tetrahedra are arranged: isolated, chain, sheet, or framework structures."
  },
  {
    question: "What is the name for the semi-liquid layer beneath the lithosphere?",
    answers: [
      { text: "Mesosphere", correct: false },
      { text: "Outer core", correct: false },
      { text: "Lower mantle", correct: false },
      { text: "Asthenosphere", correct: true },
    ],
    explanation: "The asthenosphere is a mechanically weak, ductile region of the upper mantle, approximately 80-200 km below Earth's surface. Though solid, it behaves plastically over geological time due to high temperature and pressure. This allows tectonic plates (part of the rigid lithosphere above) to move across it through convection currents."
  },
  {
    question: "Which type of coal has the highest carbon content?",
    answers: [
      { text: "Anthracite", correct: true },
      { text: "Bituminous", correct: false },
      { text: "Lignite", correct: false },
      { text: "Peat", correct: false },
    ],
    explanation: "Anthracite is the highest rank of coal, containing 86-97% carbon. It's hard, glossy black, and burns with little smoke and high heat. Coal forms from buried plant material subjected to increasing pressure and heat over time: peat → lignite → bituminous → anthracite. Each stage increases carbon content and energy density."
  },
  {
    question: "What causes most tsunamis?",
    answers: [
      { text: "Volcanic eruptions", correct: false },
      { text: "Underwater earthquakes", correct: true },
      { text: "Landslides", correct: false },
      { text: "Meteorite impacts", correct: false },
    ],
    explanation: "About 80% of tsunamis are caused by underwater earthquakes, particularly those that displace the seafloor vertically at subduction zones. When tectonic plates suddenly shift, they displace massive amounts of water, creating waves that can travel across entire ocean basins at speeds up to 500 mph, growing in height as they approach shallow coastal waters."
  },
  {
    question: "Which rock type is formed from compressed organic matter?",
    answers: [
      { text: "Granite", correct: false },
      { text: "Sandstone", correct: false },
      { text: "Coal", correct: true },
      { text: "Shale", correct: false },
    ],
    explanation: "Coal is a sedimentary rock formed from accumulated plant material that has been buried, compressed, and heated over millions of years in swampy environments. As organic matter is buried deeper, increasing pressure and temperature drive off moisture and volatile compounds, concentrating carbon. This process transforms plant debris into coal."
  },
  {
    question: "What is the name for the point on Earth's surface directly above an earthquake's focus?",
    answers: [
      { text: "Hypocenter", correct: false },
      { text: "Fault plane", correct: false },
      { text: "Seismic zone", correct: false },
      { text: "Epicenter", correct: true },
    ],
    explanation: "The epicenter is the point on Earth's surface directly above the earthquake's focus (hypocenter), where the rupture originates underground. The epicenter typically experiences the strongest shaking and most damage. Seismologists determine the epicenter by triangulating data from multiple seismograph stations measuring arrival times of seismic waves."
  },
  {
    question: "Which mineral is commonly known as 'fool's gold'?",
    answers: [
      { text: "Pyrite", correct: true },
      { text: "Chalcopyrite", correct: false },
      { text: "Galena", correct: false },
      { text: "Marcasite", correct: false },
    ],
    explanation: "Pyrite (iron sulfide, FeS₂) is nicknamed 'fool's gold' because its golden metallic luster deceives inexperienced prospectors. However, pyrite is harder than gold, more brittle, and forms cubic crystals. Real gold is softer, denser, and doesn't tarnish. Pyrite's name comes from the Greek 'pyr' meaning fire, as it creates sparks when struck."
  },
  {
    question: "What type of sedimentary rock is formed from evaporating seawater?",
    answers: [
      { text: "Limestone", correct: false },
      { text: "Evaporite", correct: true },
      { text: "Conglomerate", correct: false },
      { text: "Breccia", correct: false },
    ],
    explanation: "Evaporites form when bodies of seawater or saltwater lakes evaporate, leaving behind mineral deposits. Common evaporite minerals include halite (rock salt), gypsum, and anhydrite. Large evaporite deposits indicate ancient seas or lakes that repeatedly filled and evaporated. These rocks are economically important sources of salt, gypsum, and potash."
  },
  {
    question: "Which geological period is known for the mass extinction that killed the dinosaurs?",
    answers: [
      { text: "Jurassic", correct: false },
      { text: "Triassic", correct: false },
      { text: "Cretaceous", correct: true },
      { text: "Permian", correct: false },
    ],
    explanation: "The Cretaceous Period ended 66 million years ago with the Cretaceous-Paleogene (K-Pg) extinction event, which killed about 75% of species including non-avian dinosaurs. Evidence suggests a massive asteroid impact in present-day Mexico (Chicxulub crater) combined with volcanic activity caused global climate change, leading to this mass extinction."
  },
  {
    question: "What is the name for the zone where most earthquakes and volcanoes occur?",
    answers: [
      { text: "Mid-Atlantic Ridge", correct: false },
      { text: "San Andreas Fault", correct: false },
      { text: "Mariana Trench", correct: false },
      { text: "Ring of Fire", correct: true },
    ],
    explanation: "The Ring of Fire is a 40,000 km horseshoe-shaped zone around the Pacific Ocean where about 90% of earthquakes and 75% of active volcanoes occur. This intense activity results from tectonic plates colliding, subducting, and moving at numerous plate boundaries. Countries along the Ring of Fire include Japan, Indonesia, Philippines, New Zealand, and the western Americas."
  },
  {
    question: "Which type of igneous rock cools slowly underground?",
    answers: [
      { text: "Intrusive", correct: true },
      { text: "Extrusive", correct: false },
      { text: "Volcanic", correct: false },
      { text: "Plutonic", correct: false },
    ],
    explanation: "Intrusive igneous rocks (also called plutonic rocks) form when magma cools slowly deep underground, allowing large crystals to develop. Granite is a common example. The slow cooling rate permits atoms time to arrange into large, visible mineral crystals. Extrusive rocks cool quickly at the surface, forming small crystals or glass."
  },
  {
    question: "What is the primary cause of continental drift?",
    answers: [
      { text: "Earth's rotation", correct: false },
      { text: "Convection currents in the mantle", correct: true },
      { text: "Gravitational forces", correct: false },
      { text: "Magnetic field changes", correct: false },
    ],
    explanation: "Continental drift is driven by convection currents in Earth's mantle. Heat from the core causes hot, less dense material to rise while cooler material sinks, creating circular currents. These currents drag the overlying tectonic plates, causing them to move. This process, part of plate tectonics theory, explains how continents have moved over geological time."
  },
  {
    question: "What is the hardest naturally occurring substance on Earth?",
    answers: [
      { text: "Quartz", correct: false },
      { text: "Corundum", correct: false },
      { text: "Diamond", correct: true },
      { text: "Topaz", correct: false },
    ],
    explanation: "Diamond is the hardest naturally occurring substance, rating 10 on the Mohs hardness scale. Its extreme hardness comes from carbon atoms bonded in a rigid three-dimensional crystal structure where each carbon atom bonds to four others. This makes diamond invaluable for cutting tools, drill bits, and abrasives, beyond its value as a gemstone."
  },
  {
    question: "Which type of rock forms from cooled lava?",
    answers: [
      { text: "Extrusive igneous", correct: true },
      { text: "Intrusive igneous", correct: false },
      { text: "Sedimentary", correct: false },
      { text: "Metamorphic", correct: false },
    ],
    explanation: "Extrusive igneous rocks form when lava (molten rock at Earth's surface) cools and solidifies quickly. Rapid cooling prevents large crystals from forming, resulting in fine-grained or glassy textures. Common examples include basalt (dark, fine-grained) and obsidian (volcanic glass). The term 'extrusive' means the rock formed outside (at the surface)."
  },
  {
    question: "What is the most common type of volcano?",
    answers: [
      { text: "Shield volcano", correct: false },
      { text: "Stratovolcano", correct: true },
      { text: "Cinder cone", correct: false },
      { text: "Caldera", correct: false },
    ],
    explanation: "Stratovolcanoes (composite volcanoes) are the most common type of large volcano on land. They're built from alternating layers of lava flows, volcanic ash, and rock debris, creating steep, conical mountains. Examples include Mount Fuji, Mount Rainier, and Mount Vesuvius. Their viscous magma and explosive eruptions make them potentially dangerous."
  },
  {
    question: "Which mineral is used to make glass?",
    answers: [
      { text: "Feldspar", correct: false },
      { text: "Mica", correct: false },
      { text: "Calcite", correct: false },
      { text: "Quartz", correct: true },
    ],
    explanation: "Quartz (silicon dioxide, SiO₂) is the primary ingredient in glass making. Pure quartz sand is heated to about 1,700°C where it melts and, upon cooling, forms glass. Other materials like soda ash and limestone are added to lower the melting point and improve glass properties. Quartz is Earth's second-most abundant mineral after feldspar."
  },
  {
    question: "What is the name for the breaking and wearing away of rocks?",
    answers: [
      { text: "Erosion", correct: true },
      { text: "Weathering", correct: false },
      { text: "Deposition", correct: false },
      { text: "Sedimentation", correct: false },
    ],
    explanation: "Erosion is the process of transporting weathered rock and soil from one location to another by wind, water, ice, or gravity. It's distinct from weathering (the breakdown of rocks in place). Erosion shapes landscapes by carving valleys, forming deltas, and creating distinctive landforms. Deposition is where eroded material settles."
  },
  {
    question: "Which scale measures the hardness of minerals?",
    answers: [
      { text: "Richter scale", correct: false },
      { text: "Mohs scale", correct: true },
      { text: "Mercalli scale", correct: false },
      { text: "Beaufort scale", correct: false },
    ],
    explanation: "The Mohs scale, created by German mineralogist Friedrich Mohs in 1812, ranks mineral hardness from 1 (talc) to 10 (diamond) based on their ability to scratch each other. It's a relative scale, not linear—diamond is actually about 4 times harder than corundum (9). The scale is simple and still widely used for mineral identification."
  },
  {
    question: "What is molten rock called when it's underground?",
    answers: [
      { text: "Lava", correct: false },
      { text: "Magma", correct: true },
      { text: "Obsidian", correct: false },
      { text: "Basalt", correct: false },
    ],
    explanation: "Magma is molten rock located beneath Earth's surface. It forms when rock melts due to high temperature, decreased pressure, or addition of water in the mantle or crust. When magma reaches the surface through volcanic activity, it becomes lava. Magma chambers beneath volcanoes can remain molten for thousands of years."
  },
  {
    question: "Which type of plate boundary creates mountains?",
    answers: [
      { text: "Divergent", correct: false },
      { text: "Transform", correct: false },
      { text: "Convergent", correct: true },
      { text: "Collision", correct: false },
    ],
    explanation: "Convergent boundaries, where tectonic plates collide, create mountains. When two continental plates converge, neither subducts due to similar density, instead crumpling and pushing upward to form mountain ranges like the Himalayas. When oceanic and continental plates converge, the denser oceanic plate subducts, often forming volcanic mountain ranges like the Andes."
  },
  {
    question: "What is the study of fossils called?",
    answers: [
      { text: "Paleontology", correct: true },
      { text: "Archaeology", correct: false },
      { text: "Anthropology", correct: false },
      { text: "Geology", correct: false },
    ],
    explanation: "Paleontology is the scientific study of ancient life through fossils. Paleontologists examine fossilized remains and traces of organisms to understand evolution, ancient environments, and Earth's history. The field combines geology and biology. Archaeology studies human history through artifacts, while anthropology studies human societies and cultures."
  },
  {
    question: "Which rock type is limestone?",
    answers: [
      { text: "Igneous", correct: false },
      { text: "Sedimentary", correct: true },
      { text: "Metamorphic", correct: false },
      { text: "Volcanic", correct: false },
    ],
    explanation: "Limestone is a sedimentary rock composed primarily of calcium carbonate (CaCO₃), usually from accumulated shells, coral, and algae. It forms in warm, shallow marine environments where calcium carbonate precipitates or organisms build calcium carbonate structures. Limestone is widely used in construction, cement production, and as agricultural lime."
  },
  {
    question: "What causes most landslides?",
    answers: [
      { text: "Earthquakes", correct: false },
      { text: "Volcanic activity", correct: false },
      { text: "Heavy rainfall", correct: true },
      { text: "Human activity", correct: false },
    ],
    explanation: "Heavy rainfall is the most common trigger for landslides. Water saturates soil, making it heavier and reducing friction between particles. It also increases pore pressure, reducing soil strength. When saturated soil on slopes exceeds its stability threshold, it slides. While earthquakes and human activities cause some landslides, prolonged or intense rainfall triggers the majority."
  },
  {
    question: "Which era came after the Paleozoic?",
    answers: [
      { text: "Precambrian", correct: false },
      { text: "Cenozoic", correct: false },
      { text: "Quaternary", correct: false },
      { text: "Mesozoic", correct: true },
    ],
    explanation: "The Mesozoic Era (252-66 million years ago) followed the Paleozoic Era and preceded the Cenozoic Era. Known as the Age of Reptiles, the Mesozoic is divided into three periods: Triassic, Jurassic, and Cretaceous. It saw the rise and dominance of dinosaurs, the breakup of Pangaea, and ended with the K-Pg mass extinction."
  },
  {
    question: "What is the most abundant gas in volcanic emissions?",
    answers: [
      { text: "Water vapor", correct: true },
      { text: "Carbon dioxide", correct: false },
      { text: "Sulfur dioxide", correct: false },
      { text: "Hydrogen sulfide", correct: false },
    ],
    explanation: "Water vapor makes up 60-90% of volcanic gas emissions, far exceeding other gases. This water comes from magma (where it was dissolved under pressure) and from groundwater heated by magma. When magma rises and pressure decreases, dissolved gases—primarily water vapor—are released, often explosively. Despite its abundance, sulfur dioxide gets more attention due to its visible and environmental effects."
  },
  {
    question: "Which mineral is the primary component of granite?",
    answers: [
      { text: "Quartz", correct: false },
      { text: "Feldspar", correct: true },
      { text: "Mica", correct: false },
      { text: "Hornblende", correct: false },
    ],
    explanation: "Feldspar is the most abundant mineral in granite, typically comprising 50-60% of its composition. Granite is a coarse-grained intrusive igneous rock also containing quartz (25-35%), mica, and other minerals. The specific feldspar varieties (orthoclase and plagioclase) give granite its characteristic pink, white, or gray colors."
  },
  {
    question: "What type of rock is slate?",
    answers: [
      { text: "Igneous", correct: false },
      { text: "Sedimentary", correct: false },
      { text: "Metamorphic", correct: true },
      { text: "Composite", correct: false },
    ],
    explanation: "Slate is a fine-grained metamorphic rock formed from shale (sedimentary rock) subjected to low-grade metamorphism. The process aligns clay minerals, creating planes of weakness called cleavage that allow slate to split into thin, flat sheets. This property makes slate valuable for roofing, flooring, and writing surfaces (chalkboards)."
  },
  {
    question: "Which process forms sedimentary rocks?",
    answers: [
      { text: "Cooling", correct: false },
      { text: "Melting", correct: false },
      { text: "Metamorphism", correct: false },
      { text: "Compaction and cementation", correct: true },
    ],
    explanation: "Sedimentary rocks form through lithification: sediments are compacted by overlying weight and cemented together by minerals precipitating from water. First, weathering and erosion produce sediments that are transported and deposited. Over time, burial pressure squeezes out water and pore space (compaction), while dissolved minerals act as glue (cementation), binding particles into solid rock."
  },
  {
    question: "What is the name for rocks that form deep underground?",
    answers: [
      { text: "Plutonic", correct: true },
      { text: "Volcanic", correct: false },
      { text: "Sedimentary", correct: false },
      { text: "Metamorphic", correct: false },
    ],
    explanation: "Plutonic rocks (also called intrusive igneous rocks) form when magma cools slowly deep underground in large bodies called plutons. The slow cooling allows large mineral crystals to develop, creating coarse-grained textures. Granite is the most common plutonic rock. They're named after Pluto, the Roman god of the underworld."
  },
  {
    question: "Which type of weathering involves chemical changes?",
    answers: [
      { text: "Physical weathering", correct: false },
      { text: "Chemical weathering", correct: true },
      { text: "Biological weathering", correct: false },
      { text: "Mechanical weathering", correct: false },
    ],
    explanation: "Chemical weathering involves chemical reactions that alter rock composition, such as oxidation (rusting), hydrolysis (reaction with water), and carbonation (reaction with carbonic acid). These processes break down minerals and create new compounds. Physical weathering breaks rocks into smaller pieces without changing their chemical composition through processes like freeze-thaw cycles and abrasion."
  },
  {
    question: "What is the name for the center of an earthquake?",
    answers: [
      { text: "Epicenter", correct: false },
      { text: "Fault", correct: false },
      { text: "Focus (hypocenter)", correct: true },
      { text: "Seismic zone", correct: false },
    ],
    explanation: "The focus (also called hypocenter) is the actual point underground where an earthquake rupture begins and seismic energy is first released. It can be shallow (0-70 km), intermediate (70-300 km), or deep (300-700 km). The epicenter is the point on Earth's surface directly above the focus, where shaking is typically strongest."
  },
  {
    question: "Which mineral is commonly found in metamorphic rocks?",
    answers: [
      { text: "Halite", correct: false },
      { text: "Gypsum", correct: false },
      { text: "Calcite", correct: false },
      { text: "Garnet", correct: true },
    ],
    explanation: "Garnet is a common index mineral in metamorphic rocks, forming under moderate to high temperature and pressure conditions. Its presence helps geologists determine the metamorphic grade (intensity of metamorphism) a rock experienced. Garnets form distinctive reddish crystals in rocks like schist and gneiss. Halite and gypsum are evaporite minerals, while calcite is common in sedimentary rocks."
  },
  {
  question: "What type of rock forms when molten magma cools and solidifies?",
  answers: [
    { text: "Igneous rock", correct: true },
    { text: "Sedimentary rock", correct: false },
    { text: "Metamorphic rock", correct: false },
    { text: "Clastic rock", correct: false }
  ],
  explanation: "Igneous rocks form from the cooling and solidification of magma (underground) or lava (at the surface). The cooling rate determines crystal size: slow cooling creates large crystals (intrusive/plutonic rocks like granite), while fast cooling creates small crystals or glass (extrusive/volcanic rocks like basalt). The name comes from Latin 'ignis' meaning fire."
},
{
  question: "Which mineral is the main component of limestone?",
  answers: [
    { text: "Calcite", correct: true },
    { text: "Quartz", correct: false },
    { text: "Feldspar", correct: false },
    { text: "Mica", correct: false }
  ],
  explanation: "Calcite (calcium carbonate, CaCO₃) is the primary mineral in limestone. Limestone forms mainly from accumulated shells, coral fragments, and algae in warm, shallow marine environments. The calcite test involves adding dilute hydrochloric acid to the rock—limestone fizzes vigorously as CO₂ gas is released. Limestone is used in construction, cement, and agriculture."
},
{
  question: "What is the scientific study of fossils called?",
  answers: [
    { text: "Paleontology", correct: true },
    { text: "Petrology", correct: false },
    { text: "Mineralogy", correct: false },
    { text: "Seismology", correct: false }
  ],
  explanation: "Paleontology is the study of ancient life through fossils—preserved remains or traces of organisms. Paleontologists reconstruct past ecosystems, trace evolutionary lineages, and use fossils to date rocks and correlate rock layers across regions. The field spans from microscopic bacteria to dinosaurs, covering billions of years of Earth's history."
},
{
  question: "Which scale measures earthquake intensity based on observed effects and damage?",
  answers: [
    { text: "Mercalli scale", correct: true },
    { text: "Richter scale", correct: false },
    { text: "Moment magnitude (Mw)", correct: false },
    { text: "Beaufort scale", correct: false }
  ],
  explanation: "The Modified Mercalli Intensity Scale measures earthquake effects based on observations of damage and human perception, ranking from I (not felt) to XII (total destruction). Unlike the Richter or moment magnitude scales that measure earthquake energy, the Mercalli scale assesses impact, which varies with distance from epicenter, building quality, and local geology."
},
{
  question: "What is the outermost solid layer of the Earth called?",
  answers: [
    { text: "Crust", correct: true },
    { text: "Mantle", correct: false },
    { text: "Outer core", correct: false },
    { text: "Inner core", correct: false }
  ],
  explanation: "Earth's crust is the thin, outermost solid layer, divided into continental crust (30-70 km thick, less dense, granitic) and oceanic crust (5-10 km thick, denser, basaltic). The crust and uppermost mantle form the rigid lithosphere, broken into tectonic plates. Despite being where we live, the crust represents less than 1% of Earth's volume."
},
{
  question: "What process moves weathered rock and soil from one place to another by wind, water, or ice?",
  answers: [
    { text: "Erosion", correct: true },
    { text: "Deposition", correct: false },
    { text: "Weathering", correct: false },
    { text: "Lithification", correct: false }
  ],
  explanation: "Erosion transports weathered material from one location to another through agents like running water, wind, glaciers, and gravity. It shapes landscapes by removing material from highlands and transporting it to lowlands. Weathering breaks down rocks in place, erosion moves the material, and deposition is where transported sediment settles. These processes work together in the rock cycle."
},
{
  question: "Which type of rock is typically formed by compaction and cementation of sediments?",
  answers: [
    { text: "Sedimentary rock", correct: true },
    { text: "Igneous rock", correct: false },
    { text: "Metamorphic rock", correct: false },
    { text: "Volcanic rock", correct: false }
  ],
  explanation: "Sedimentary rocks form through lithification: loose sediments are compacted by overlying layers and cemented by minerals precipitating from groundwater. Common examples include sandstone (from sand), shale (from mud), and conglomerate (from gravel). Sedimentary rocks often contain fossils and provide records of past environments, making up about 75% of rocks exposed at Earth's surface."
},
{
  question: "Which plate boundary is primarily responsible for forming mid-ocean ridges?",
  answers: [
    { text: "Divergent boundary", correct: true },
    { text: "Convergent boundary", correct: false },
    { text: "Transform boundary", correct: false },
    { text: "Passive margin", correct: false }
  ],
  explanation: "Divergent boundaries occur where tectonic plates move apart, allowing magma to rise from the mantle and create new oceanic crust. This seafloor spreading builds underwater mountain chains called mid-ocean ridges. The Mid-Atlantic Ridge is a prime example, actively separating the Americas from Europe and Africa at about 2.5 cm per year. These boundaries feature shallow earthquakes and volcanic activity."
},
{
  question: "What was the name of the supercontinent that existed about 200 million years ago?",
  answers: [
    { text: "Pangaea", correct: true },
    { text: "Laurasia", correct: false },
    { text: "Gondwana", correct: false },
    { text: "Eurasia", correct: false }
  ],
  explanation: "Pangaea ('all Earth') was the most recent supercontinent, existing from about 335 to 175 million years ago. It assembled from earlier landmasses and began breaking apart in the Jurassic Period, eventually forming today's continents. Evidence includes matching fossils, rock formations, and mountain chains across continents now separated by oceans. Laurasia and Gondwana were the two major fragments when Pangaea split."
},
{
  question: "What is the primary driving force behind plate tectonics in Earth's mantle?",
  answers: [
    { text: "Mantle convection", correct: true },
    { text: "Solar radiation", correct: false },
    { text: "Tidal forces", correct: false },
    { text: "Magnetic reversal", correct: false }
  ],
  explanation: "Mantle convection drives plate tectonics. Heat from Earth's core and radioactive decay in the mantle create temperature differences that cause hot, buoyant rock to rise while cooler, denser rock sinks, forming convection cells. These slow-moving currents drag the overlying tectonic plates, causing them to diverge, converge, or slide past each other at rates of 1-10 cm per year."
}
];
