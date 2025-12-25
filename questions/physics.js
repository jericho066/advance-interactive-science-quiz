//* Physics Questions

const physicsQuestions = [
  {
    question: "After nitrogen and oxygen, what is the third most abundant gas in the Earth's atmosphere?",
    answers: [
      { text: "Carbon dioxide", correct: false },
      { text: "Helium", correct: false },
      { text: "Argon", correct: true },
      { text: "Neon", correct: false },
    ],
    explanation: "Argon makes up about 0.93% of Earth's atmosphere, making it the third most abundant gas after nitrogen (78%) and oxygen (21%). It's a noble gas that is chemically inert and doesn't react with other elements."
  },
  {
    question: "What term describes the scattering of a high frequency photon after interacting with a charged particle?",
    answers: [
      { text: "Rayleigh scattering", correct: false },
      { text: "Compton scattering", correct: true },
      { text: "Thomson scattering", correct: false },
      { text: "Mie scattering", correct: false },
    ],
    explanation: "Compton scattering occurs when a high-energy photon collides with a charged particle (usually an electron), resulting in the photon losing energy and changing direction. This demonstrates the particle nature of light and was discovered by Arthur Compton in 1923."
  },
  {
    question: "What is the name of the donut-shaped ring of objects, orbiting the sun just beyond the orbit of Neptune?",
    answers: [
      { text: "The Asteroid Belt", correct: false },
      { text: "The Kuiper Belt", correct: true },
      { text: "The Oort Cloud", correct: false },
      { text: "The Scattered Disk", correct: false },
    ],
    explanation: "The Kuiper Belt is a region of icy objects beyond Neptune's orbit, extending from about 30 to 50 AU from the Sun. It contains dwarf planets like Pluto and is the source of many short-period comets."
  },
  {
    question: "In the formula n=c/v, what does 'n' stand for?",
    answers: [
      { text: "Frequency", correct: false },
      { text: "Refractive index", correct: true },
      { text: "Wavelength", correct: false },
      { text: "Optical density", correct: false },
    ],
    explanation: "The refractive index (n) is the ratio of the speed of light in vacuum (c) to the speed of light in a medium (v). It measures how much light bends when entering a material. For example, water has a refractive index of about 1.33."
  },
  {
    question: "What is the heaviest stable element in the periodic table?",
    answers: [
      { text: "Uranium", correct: false },
      { text: "Bismuth", correct: false },
      { text: "Lead", correct: true },
      { text: "Mercury", correct: false },
    ],
    explanation: "Lead (Pb, atomic number 82) is the heaviest element with stable isotopes. All elements heavier than lead are radioactive and decay over time. Bismuth was once thought to be stable, but in 2003 it was discovered to be very slightly radioactive with an extremely long half-life."
  },
  {
    question: "In order for an object to keep moving in a circle, a force has to act on it that is directed towards the centre of the circle. What is the name of that force?",
    answers: [
      { text: "Centrifugal force", correct: false },
      { text: "Centripetal force", correct: true },
      { text: "Tangential force", correct: false },
      { text: "Normal force", correct: false },
    ],
    explanation: "Centripetal force is the real force that pulls an object toward the center of a circular path, keeping it moving in a circle. It's calculated as F = mv²/r. Examples include gravity keeping planets in orbit and tension in a string when swinging an object."
  },
  {
    question: "When an object falls at a steady speed, what is gravitational potential energy converted into?",
    answers: [
      { text: "Kinetic energy", correct: false },
      { text: "Heat energy", correct: true },
      { text: "Sound energy", correct: false },
      { text: "Elastic potential energy", correct: false },
    ],
    explanation: "When an object falls at terminal velocity (steady speed), it's not accelerating, so kinetic energy isn't increasing. Instead, gravitational potential energy is converted to heat through air resistance. The air molecules are heated by friction as the object pushes through them."
  },
  {
    question: "Which of Newton's laws is being described in the following statement: when walking my dog on a lead, the tension that the lead is acting on me as my dog pulls forwards, is the same as the tension that I am acting on the lead as I pull my dog back.",
    answers: [
      { text: "Newton's first law", correct: false },
      { text: "Newton's second law", correct: false },
      { text: "Newton's third law", correct: true },
      { text: "Newton's law of universal gravitation", correct: false },
    ],
    explanation: "Newton's third law states that for every action, there is an equal and opposite reaction. The forces are equal in magnitude but opposite in direction, acting on different objects. The dog pulls you forward with the same force that you pull the dog backward."
  },
  {
    question: "What is Young's modulus a measure of?",
    answers: [
      { text: "Hardness", correct: false },
      { text: "Stiffness (how much strain a material will undergo)", correct: true },
      { text: "Brittleness", correct: false },
      { text: "Toughness", correct: false },
    ],
    explanation: "Young's modulus measures the stiffness of a material - its resistance to elastic deformation under stress. It's calculated as stress divided by strain (E = σ/ε). A higher Young's modulus means the material is stiffer and requires more force to deform."
  },
  {
    question: "What kind of lens might be used in reading glasses?",
    answers: [
      { text: "Convex", correct: true },
      { text: "Concave", correct: false },
      { text: "Cylindrical", correct: false },
      { text: "Bifocal", correct: false },
    ],
    explanation: "Convex lenses are converging lenses used in reading glasses to correct farsightedness (presbyopia). They help focus light onto the retina by bending light rays inward, making nearby objects appear clearer."
  },
  {
    question: "In the formula s=d/t, what does 's' stand for?",
    answers: [
      { text: "Distance", correct: false },
      { text: "Speed", correct: true },
      { text: "Acceleration", correct: false },
      { text: "Time", correct: false },
    ],
    explanation: "Speed is the rate at which an object covers distance, calculated by dividing distance (d) by time (t). It's a scalar quantity (has magnitude but no direction). The SI unit for speed is meters per second (m/s)."
  },
  {
    question: "Protons, neutrons and electrons all orbit the ____.",
    answers: [
      { text: "Nucleus", correct: true },
      { text: "Electron shell", correct: false },
      { text: "Atomic center", correct: false },
      { text: "Ion core", correct: false },
    ],
    explanation: "Actually, only electrons orbit the nucleus. Protons and neutrons are located inside the nucleus at the atom's center. The question is slightly misleading, but 'nucleus' is the intended answer as it's the central point of the atom."
  },
  {
    question: "As an ambulance drives past, you notice the pitch of its siren changing. This is caused by the ___ effect.",
    answers: [
      { text: "Doppler", correct: true },
      { text: "Photoelectric", correct: false },
      { text: "Compton", correct: false },
      { text: "Zeeman", correct: false },
    ],
    explanation: "The Doppler effect is the change in frequency (and thus pitch) of a wave as the source moves relative to an observer. When the ambulance approaches, sound waves are compressed (higher pitch), and when it moves away, they're stretched (lower pitch)."
  },
  {
    question: "What are sounds below 20 Hz known as?",
    answers: [
      { text: "Ultrasound", correct: false },
      { text: "Infrasound", correct: true },
      { text: "Subsonic", correct: false },
      { text: "Low frequency", correct: false },
    ],
    explanation: "Infrasound refers to sound waves with frequencies below 20 Hz, which is below the range of human hearing. These low-frequency sounds can be produced by natural phenomena like earthquakes, volcanic eruptions, and ocean waves, and can travel long distances."
  },
  {
    question: "What does a vector quantity have that a scalar quantity lacks?",
    answers: [
      { text: "Magnitude", correct: false },
      { text: "A direction", correct: true },
      { text: "Units", correct: false },
      { text: "Mathematical properties", correct: false },
    ],
    explanation: "Vector quantities have both magnitude (size) and direction, while scalar quantities only have magnitude. Examples of vectors include velocity, force, and displacement. Examples of scalars include speed, mass, and temperature."
  },
  {
    question: "What is the most common unit for measuring pressure?",
    answers: [
      { text: "Pascals", correct: true },
      { text: "Newtons", correct: false },
      { text: "Atmospheres", correct: false },
      { text: "Bars", correct: false },
    ],
    explanation: "The Pascal (Pa) is the SI unit of pressure, defined as one newton per square meter (N/m²). It's named after French mathematician Blaise Pascal. While atmospheres and bars are also used, Pascal is the standard scientific unit."
  },
  {
    question: "What is the property of an object that can return to its original shape after deformation?",
    answers: [
      { text: "Plasticity", correct: false },
      { text: "Elasticity", correct: true },
      { text: "Malleability", correct: false },
      { text: "Ductility", correct: false },
    ],
    explanation: "Elasticity is the ability of a material to return to its original shape after being deformed by an external force, as long as the elastic limit hasn't been exceeded. Rubber bands and springs are examples of highly elastic materials."
  },
  {
    question: "What type of electromagnetic radiation has the lowest frequency?",
    answers: [
      { text: "Microwaves", correct: false },
      { text: "Radio waves", correct: true },
      { text: "Infrared", correct: false },
      { text: "Visible light", correct: false },
    ],
    explanation: "Radio waves have the lowest frequencies (and longest wavelengths) in the electromagnetic spectrum, ranging from about 3 kHz to 300 GHz. They're used for broadcasting, communications, and radio astronomy."
  },
  {
    question: "Lubrication can be used to limit the ____ between two objects.",
    answers: [
      { text: "Contact", correct: false },
      { text: "Friction", correct: true },
      { text: "Pressure", correct: false },
      { text: "Heat transfer", correct: false },
    ],
    explanation: "Lubrication reduces friction between surfaces in contact by creating a thin film that prevents direct contact. This reduces wear, heat generation, and energy loss. Common lubricants include oil, grease, and specialized fluids."
  },
  {
    question: "Which element has an atomic number of 1?",
    answers: [
      { text: "Hydrogen", correct: true },
      { text: "Helium", correct: false },
      { text: "Lithium", correct: false },
      { text: "Deuterium", correct: false },
    ],
    explanation: "Hydrogen has atomic number 1, meaning it has one proton in its nucleus. It's the lightest and most abundant element in the universe, making up about 75% of all normal matter. Deuterium is actually an isotope of hydrogen, not a separate element."
  },
  {
    question: "A convex lens is ___ at the centre than it is at the ends.",
    answers: [
      { text: "Thinner", correct: false },
      { text: "Wider", correct: true },
      { text: "Smoother", correct: false },
      { text: "Clearer", correct: false },
    ],
    explanation: "A convex lens (converging lens) is thicker in the middle than at the edges. This shape causes parallel light rays to converge to a focal point. The word 'wider' here refers to the thickness or width of the lens material."
  },
  {
    question: "Amperes and volts both measures of what?",
    answers: [
      { text: "Electricity", correct: true },
      { text: "Kinetic energy", correct: false },
      { text: "Height", correct: false },
      { text: "Velocity", correct: false },
    ],
    explanation: "Amperes (amps) measure electric current (the flow of charge), while volts measure electric potential difference (voltage). Together they describe electrical systems: current is like water flow, voltage is like water pressure."
  },
  {
    question: "In the equation for Newton's Second Law of Motion, F=ma, what does a represent?",
    answers: [
      { text: "Absorption", correct: false },
      { text: "Pressure", correct: false },
      { text: "Acceleration", correct: true },
      { text: "Nothing", correct: false },
    ],
    explanation: "In F=ma, 'a' represents acceleration, measured in m/s². This law states that force equals mass times acceleration, meaning that the acceleration of an object depends on the net force acting on it and its mass."
  },
  {
    question: "The sun is mainly composed of which two elements?",
    answers: [
      { text: "Hydrogen and Carbon", correct: false },
      { text: "Oxygen and Helium", correct: false },
      { text: "Helium and Argon", correct: false },
      { text: "Hydrogen and Helium", correct: true },
    ],
    explanation: "The Sun is about 73% hydrogen and 25% helium by mass. Nuclear fusion in the Sun's core converts hydrogen into helium, releasing enormous amounts of energy in the process. This is the source of the Sun's energy and light."
  },
  {
    question: "What is measured using an Ohmmeter?",
    answers: [
      { text: "Friction", correct: false },
      { text: "Air pressure", correct: false },
      { text: "Radioactivity", correct: false },
      { text: "Electrical resistance", correct: true },
    ],
    explanation: "An ohmmeter measures electrical resistance in ohms (Ω). Resistance is the opposition to current flow in a conductor. According to Ohm's Law (V=IR), resistance determines how much current flows for a given voltage."
  },
  {
    question: "What type of energy can be calculated using the formula U=mgh?",
    answers: [
      { text: "Kinetic energy", correct: false },
      { text: "Heat energy", correct: false },
      { text: "Gravitational potential energy", correct: true },
      { text: "Sound energy", correct: false },
    ],
    explanation: "Gravitational potential energy (GPE) is the energy stored by an object due to its position in a gravitational field. The formula U=mgh calculates GPE, where m is mass, g is gravitational acceleration (9.8 m/s²), and h is height above a reference point."
  },
  {
    question: "In 1901, Wilhelm Conrad Röntgen won the first Nobel Prize for physics. What did he discover to earn him this prestigious award?",
    answers: [
      { text: "black-body radiation", correct: false },
      { text: "X-rays", correct: true },
      { text: "The Electron", correct: false },
      { text: "Electromagnetic waves", correct: false },
    ],
    explanation: "Röntgen discovered X-rays in 1895 while experimenting with cathode rays. He noticed that a fluorescent screen glowed even when shielded from direct cathode rays, indicating a new type of penetrating radiation. His discovery revolutionized medical diagnostics."
  },
  {
    question: "A region in a fluid in which the flow revolves around an axis line is known as a ___.",
    answers: [
      { text: "Vortex", correct: true },
      { text: "Cyclone", correct: false },
      { text: "Drain", correct: false },
      { text: "Helix", correct: false },
    ],
    explanation: "A vortex is a rotating flow pattern in a fluid. Examples include whirlpools, tornadoes, and the water draining from a bathtub. The rotating motion is often caused by the conservation of angular momentum in the fluid."
  },
  {
    question: "Which of the following is the most electrically conductive?",
    answers: [
      { text: "Copper", correct: false },
      { text: "Iron", correct: false },
      { text: "Mercury", correct: false },
      { text: "Silver", correct: true },
    ],
    explanation: "Silver is the most electrically conductive element at room temperature, with a conductivity of 6.30 × 10⁷ S/m. However, copper is more commonly used in electrical wiring because it's much cheaper and nearly as conductive as silver."
  },
  {
    question: "If two wave sources have an identical frequency and waveform, they are ___.",
    answers: [
      { text: "Contingent", correct: false },
      { text: "Cohensive", correct: false },
      { text: "Combative", correct: false },
      { text: "Coherent", correct: true },
    ],
    explanation: "Coherent waves have a constant phase relationship, meaning they maintain the same frequency and waveform over time. This property is essential for phenomena like interference patterns and is used in technologies like lasers and holography."
  },
  {
    question: "What is the SI unit of electric current?",
    answers: [
      { text: "Volt", correct: false },
      { text: "Watt", correct: false },
      { text: "Ohm", correct: false },
      { text: "Ampere", correct: true },
    ],
    explanation: "The ampere (A) is the SI unit of electric current, defined as the flow of one coulomb of charge per second. It's named after French physicist André-Marie Ampère, a pioneer in the study of electromagnetism."
  },
  {
    question: "Which law states that the current through a conductor is proportional to the voltage across it?",
    answers: [
      { text: "Ohm's law", correct: true },
      { text: "Faraday's law", correct: false },
      { text: "Lenz's law", correct: false },
      { text: "Kirchhoff's law", correct: false },
    ],
    explanation: "Ohm's Law (V = IR) states that voltage is proportional to current for a given resistance. It's one of the fundamental principles of electronics and electrical engineering, discovered by Georg Ohm in 1827."
  },
  {
    question: "What happens to the wavelength of light when it enters a denser medium?",
    answers: [
      { text: "It increases", correct: false },
      { text: "It decreases", correct: true },
      { text: "It remains the same", correct: false },
      { text: "It doubles", correct: false },
    ],
    explanation: "When light enters a denser medium, it slows down and its wavelength decreases proportionally. The frequency remains constant. This is why the refractive index is higher in denser media - light travels slower through them."
  },
  {
    question: "Which particle has no electric charge?",
    answers: [
      { text: "Proton", correct: false },
      { text: "Electron", correct: false },
      { text: "Neutron", correct: true },
      { text: "Alpha particle", correct: false },
    ],
    explanation: "The neutron has no electric charge - it's electrically neutral. Protons are positively charged (+1), electrons are negatively charged (-1), and alpha particles are positively charged (+2). Neutrons are found in the atomic nucleus along with protons."
  },
  {
    question: "What is the speed of light in vacuum?",
    answers: [
      { text: "3 × 10⁸ m/s", correct: true },
      { text: "3 × 10⁶ m/s", correct: false },
      { text: "3 × 10⁷ m/s", correct: false },
      { text: "3 × 10⁹ m/s", correct: false },
    ],
    explanation: "The speed of light in vacuum is approximately 299,792,458 m/s, commonly rounded to 3 × 10⁸ m/s or 300,000 km/s. This is the universal speed limit - nothing with mass can travel faster than light."
  },
  {
    question: "Which phenomenon explains why the sky appears blue?",
    answers: [
      { text: "Reflection", correct: false },
      { text: "Rayleigh scattering", correct: true },
      { text: "Refraction", correct: false },
      { text: "Absorption", correct: false },
    ],
    explanation: "Rayleigh scattering occurs when light interacts with particles much smaller than its wavelength (like air molecules). Blue light has a shorter wavelength and scatters more than red light, making the sky appear blue. At sunset, light travels through more atmosphere, scattering away the blue and leaving red/orange."
  },
  {
    question: "What is the formula for kinetic energy?",
    answers: [
      { text: "mgh", correct: false },
      { text: "½mv²", correct: true },
      { text: "F × d", correct: false },
      { text: "P × t", correct: false },
    ],
    explanation: "Kinetic energy (KE) is the energy of motion, calculated as KE = ½mv², where m is mass and v is velocity. This shows that kinetic energy increases with the square of velocity - doubling speed quadruples the kinetic energy."
  },
  {
    question: "Which type of wave requires a medium to travel through?",
    answers: [
      { text: "Light wave", correct: false },
      { text: "Radio wave", correct: false },
      { text: "X-ray", correct: false },
      { text: "Sound wave", correct: true },
    ],
    explanation: "Sound waves are mechanical waves that require a medium (solid, liquid, or gas) to travel through. They propagate by vibrating particles in the medium. Light, radio waves, and X-rays are electromagnetic waves that can travel through vacuum."
  },
  {
    question: "What is absolute zero in Celsius?",
    answers: [
      { text: "-273.15°C", correct: true },
      { text: "-100°C", correct: false },
      { text: "-200°C", correct: false },
      { text: "-300°C", correct: false },
    ],
    explanation: "Absolute zero is -273.15°C (0 Kelvin), the theoretical lowest possible temperature. At this point, molecular motion would theoretically cease completely. While we can't reach absolute zero, scientists have cooled matter to within a billionth of a degree of it."
  },
  {
    question: "Which law explains the relationship between pressure and volume of a gas?",
    answers: [
      { text: "Charles's law", correct: false },
      { text: "Boyle's law", correct: true },
      { text: "Gay-Lussac's law", correct: false },
      { text: "Avogadro's law", correct: false },
    ],
    explanation: "Boyle's Law states that at constant temperature, the pressure and volume of a gas are inversely proportional (P₁V₁ = P₂V₂). If you compress a gas to half its volume, its pressure doubles. This was discovered by Robert Boyle in 1662."
  },
  {
    question: "What is the unit of power?",
    answers: [
      { text: "Joule", correct: false },
      { text: "Newton", correct: false },
      { text: "Watt", correct: true },
      { text: "Pascal", correct: false },
    ],
    explanation: "The watt (W) is the SI unit of power, defined as one joule per second. Power measures the rate at which energy is transferred or converted. It's named after Scottish engineer James Watt, who improved the steam engine."
  },
  {
    question: "Which color of light has the highest frequency?",
    answers: [
      { text: "Red", correct: false },
      { text: "Green", correct: false },
      { text: "Blue", correct: false },
      { text: "Violet", correct: true },
    ],
    explanation: "Violet light has the highest frequency (and shortest wavelength) in the visible spectrum, around 750 THz. Red light has the lowest frequency. Beyond violet is ultraviolet (UV) radiation, which is invisible to human eyes but has even higher frequency."
  },
  {
    question: "What is the acceleration due to gravity on Earth?",
    answers: [
      { text: "9.8 m/s²", correct: true },
      { text: "8.9 m/s²", correct: false },
      { text: "10.2 m/s²", correct: false },
      { text: "9.0 m/s²", correct: false },
    ],
    explanation: "The acceleration due to gravity (g) on Earth's surface is approximately 9.8 m/s² (or 9.81 m/s² more precisely). This means that in free fall, an object's velocity increases by 9.8 m/s every second. The value varies slightly depending on altitude and location."
  },
  {
    question: "Which material is the best conductor of electricity?",
    answers: [
      { text: "Aluminum", correct: false },
      { text: "Silver", correct: true },
      { text: "Gold", correct: false },
      { text: "Copper", correct: false },
    ],
    explanation: "Silver has the highest electrical conductivity of all metals. However, copper is more commonly used because it's much cheaper while still being an excellent conductor. Gold is used in high-end electronics because it doesn't corrode, not because of superior conductivity."
  },
  {
    question: "What is the change in momentum called?",
    answers: [
      { text: "Force", correct: false },
      { text: "Acceleration", correct: false },
      { text: "Impulse", correct: true },
      { text: "Velocity", correct: false },
    ],
    explanation: "Impulse is the change in momentum of an object, calculated as force multiplied by time (J = FΔt). It's also equal to the change in momentum (Δp = mΔv). This concept explains why airbags work - they increase collision time, reducing force."
  },
  {
    question: "Which principle explains how airplanes generate lift?",
    answers: [
      { text: "Archimedes' principle", correct: false },
      { text: "Pascal's principle", correct: false },
      { text: "Newton's third law", correct: false },
      { text: "Bernoulli's principle", correct: true },
    ],
    explanation: "Bernoulli's principle states that as fluid velocity increases, pressure decreases. Airplane wings are shaped so air moves faster over the top than the bottom, creating lower pressure above and higher pressure below, generating lift."
  },
  {
    question: "What is the SI unit of frequency?",
    answers: [
      { text: "Hertz", correct: true },
      { text: "Decibel", correct: false },
      { text: "Watt", correct: false },
      { text: "Joule", correct: false },
    ],
    explanation: "The hertz (Hz) is the SI unit of frequency, defined as one cycle per second. It's named after Heinrich Hertz, who proved the existence of electromagnetic waves. Common examples: 60 Hz (AC electricity), 440 Hz (musical note A), 2.4 GHz (WiFi)."
  },
  {
    question: "Which type of lens converges light rays?",
    answers: [
      { text: "Concave", correct: false },
      { text: "Convex", correct: true },
      { text: "Cylindrical", correct: false },
      { text: "Plano", correct: false },
    ],
    explanation: "Convex lenses (converging lenses) are thicker in the middle and cause parallel light rays to converge to a focal point. They're used in magnifying glasses, cameras, eyeglasses for farsightedness, and telescopes."
  },
  {
    question: "What is the relationship between wavelength and frequency?",
    answers: [
      { text: "Directly proportional", correct: false },
      { text: "Exponentially related", correct: false },
      { text: "Inversely proportional", correct: true },
      { text: "No relationship", correct: false },
    ],
    explanation: "Wavelength (λ) and frequency (f) are inversely proportional: λ = c/f, where c is the speed of light. As frequency increases, wavelength decreases. For example, radio waves have long wavelengths and low frequencies, while gamma rays have short wavelengths and high frequencies."
  },
  {
    question: "Which effect describes the change in frequency due to relative motion?",
    answers: [
      { text: "Photoelectric effect", correct: false },
      { text: "Compton effect", correct: false },
      { text: "Hall effect", correct: false },
      { text: "Doppler effect", correct: true },
    ],
    explanation: "The Doppler effect is the change in frequency of a wave when the source and observer are in relative motion. It's used in radar guns, astronomy (to measure star motion), medical ultrasound, and explains why a siren's pitch changes as it passes by."
  },
  {
    question: "What is the force that opposes motion between surfaces?",
    answers: [
      { text: "Tension", correct: false },
      { text: "Normal force", correct: false },
      { text: "Friction", correct: true },
      { text: "Weight", correct: false },
    ],
    explanation: "Friction is the resistive force that opposes motion between surfaces in contact. It's caused by microscopic irregularities on surfaces interlocking. There are two types: static friction (prevents motion) and kinetic friction (opposes ongoing motion)."
  },
  {
    question: "Which law states that energy cannot be created or destroyed?",
    answers: [
      { text: "Second law of thermodynamics", correct: false },
      { text: "First law of thermodynamics", correct: true },
      { text: "Newton's first law", correct: false },
      { text: "Law of universal gravitation", correct: false },
    ],
    explanation: "The First Law of Thermodynamics, also known as the Law of Conservation of Energy, states that energy can only be transformed from one form to another, but the total amount of energy in a closed system remains constant."
  },
  {
    question: "What is the unit of electric charge?",
    answers: [
      { text: "Ampere", correct: false },
      { text: "Volt", correct: false },
      { text: "Coulomb", correct: true },
      { text: "Farad", correct: false },
    ],
    explanation: "The coulomb (C) is the SI unit of electric charge, defined as the charge transported by a constant current of one ampere in one second. One electron has a charge of approximately -1.6 × 10⁻¹⁹ coulombs."
  },
  {
    question: "Which state of matter has particles with the highest kinetic energy?",
    answers: [
      { text: "Solid", correct: false },
      { text: "Liquid", correct: false },
      { text: "Gas", correct: false },
      { text: "Plasma", correct: true },
    ],
    explanation: "Plasma is the fourth state of matter with the highest kinetic energy. At extremely high temperatures, electrons are stripped from atoms, creating an ionized gas. Examples include the Sun, lightning, and neon 7:28 PMsigns. It's the most common state of matter in the universe."
  },
  {
    question: "What is the bending of light when it passes through different media called?",
    answers: [
      { text: "Refraction", correct: true },
      { text: "Reflection", correct: false },
      { text: "Diffraction", correct: false },
      { text: "Interference", correct: false },
    ],
    explanation: "Refraction is the bending of light as it passes from one medium to another with a different optical density. It occurs because light travels at different speeds in different materials. This is why a straw appears bent in a glass of water."
  },
  {
    question: "Which particle mediates the electromagnetic force?",
    answers: [
      { text: "Gluon", correct: false },
      { text: "Photon", correct: true },
      { text: "W boson", correct: false },
      { text: "Higgs boson", correct: false },
    ],
  explanation: "Photons are the force-carrying particles (gauge bosons) of the electromagnetic force. They're massless, travel at the speed of light, and mediate all electromagnetic interactions between charged particles. Other forces use different particles: gluons (strong force), W/Z bosons (weak force)."
  },
  {
    question: "What is the measure of how much matter an object contains?",
    answers: [
      { text: "Weight", correct: false },
      { text: "Volume", correct: false },
      { text: "Mass", correct: true },
      { text: "Density", correct: false },
    ],
    explanation: "Mass is the measure of the amount of matter in an object, measured in kilograms. Unlike weight (which is a force that depends on gravity), mass is constant regardless of location. An object has the same mass on Earth, the Moon, or in space."
  },
  {
    question: "Which law describes the motion of planets around the sun?",
    answers: [
      { text: "Newton's law of gravitation", correct: false },
      { text: "Coulomb's law", correct: false },
      { text: "Hooke's law", correct: false },
      { text: "Kepler's laws", correct: true },
    ],
    explanation: "Kepler's three laws of planetary motion describe how planets orbit the Sun: (1) orbits are ellipses with the Sun at one focus, (2) planets sweep out equal areas in equal times, (3) orbital period squared is proportional to distance cubed."
  },
  {
    question: "What is the SI unit of magnetic field strength?",
    answers: [
      { text: "Tesla", correct: true },
      { text: "Weber", correct: false },
      { text: "Henry", correct: false },
      { text: "Gauss", correct: false },
    ],
  explanation: "The tesla (T) is the SI unit of magnetic field strength (magnetic flux density). It's named after Nikola Tesla. One tesla is quite strong - Earth's magnetic field is about 50 microtesla, while an MRI machine uses 1.5-3 tesla."
  },
  {
    question: "Which phenomenon occurs when two waves meet?",
    answers: [
      { text: "Refraction", correct: false },
      { text: "Reflection", correct: false },
      { text: "Absorption", correct: false },
      { text: "Interference", correct: true },
    ],
    explanation: "Interference occurs when two or more waves overlap and combine. Constructive interference happens when waves align (crest + crest), creating a larger amplitude. Destructive interference happens when they oppose (crest + trough), canceling each other out. This creates interference patterns."
  },
];
