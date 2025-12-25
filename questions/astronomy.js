// * Astronomy Questions

const astronomyQuestions = [
  {
    question: "What is the closest star to Earth?",
    answers: [
      { text: "Alpha Centauri", correct: false },
      { text: "Sirius", correct: false },
      { text: "The Sun", correct: true },
      { text: "Proxima Centauri", correct: false },
    ],
    explanation: "The Sun is Earth's closest star at about 93 million miles (150 million km) away. The next closest star system is Alpha Centauri at 4.37 light-years away, which includes Proxima Centauri, the closest individual star to our solar system after the Sun."
  },
  {
    question: "How many planets are in our solar system?",
    answers: [
      { text: "Eight", correct: true },
      { text: "Nine", correct: false },
      { text: "Seven", correct: false },
      { text: "Ten", correct: false },
    ],
    explanation: "There are eight planets in our solar system: Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, and Neptune. Pluto was reclassified as a dwarf planet in 2006 by the International Astronomical Union due to not clearing its orbital neighborhood."
  },
  {
    question: "What is the largest planet in our solar system?",
    answers: [
      { text: "Saturn", correct: false },
      { text: "Jupiter", correct: true },
      { text: "Neptune", correct: false },
      { text: "Uranus", correct: false },
    ],
    explanation: "Jupiter is the largest planet in our solar system with a diameter of about 86,881 miles (139,822 km). It's so large that over 1,300 Earths could fit inside it. Jupiter is a gas giant composed mainly of hydrogen and helium."
  },
  {
    question: "What is the name of our galaxy?",
    answers: [
      { text: "Andromeda", correct: false },
      { text: "Whirlpool", correct: false },
      { text: "Sombrero", correct: false },
      { text: "Milky Way", correct: true },
    ],
    explanation: "Our galaxy is called the Milky Way, a barred spiral galaxy containing 100-400 billion stars. It appears as a milky band of light across the night sky, which is how it got its name. Our solar system is located about 26,000 light-years from the galactic center."
  },
  {
    question: "Which planet is known as the Red Planet?",
    answers: [
      { text: "Mars", correct: true },
      { text: "Venus", correct: false },
      { text: "Jupiter", correct: false },
      { text: "Mercury", correct: false },
    ],
    explanation: "Mars is called the Red Planet because of its reddish appearance, caused by iron oxide (rust) on its surface. Mars has been a focus of exploration due to evidence of past water and the potential for ancient microbial life."
  },
  {
    question: "What is the hottest planet in our solar system?",
    answers: [
      { text: "Mercury", correct: false },
      { text: "Venus", correct: true },
      { text: "Earth", correct: false },
      { text: "Mars", correct: false },
    ],
    explanation: "Venus is the hottest planet with surface temperatures around 900°F (475°C), even hotter than Mercury despite being farther from the Sun. This is due to its thick atmosphere of carbon dioxide creating an extreme greenhouse effect."
  },
  {
    question: "What causes tides on Earth?",
    answers: [
      { text: "Earth's rotation", correct: false },
      { text: "Solar wind", correct: false },
      { text: "Moon's gravity", correct: true },
      { text: "Ocean currents", correct: false },
    ],
    explanation: "Tides are primarily caused by the Moon's gravitational pull on Earth's oceans. The Moon's gravity creates a bulge of water on the side facing it and on the opposite side, resulting in high tides. The Sun also contributes to tides, creating especially high 'spring tides' when aligned with the Moon."
  },
  {
    question: "What is a light-year?",
    answers: [
      { text: "A unit of time", correct: false },
      { text: "A unit of energy", correct: false },
      { text: "A unit of mass", correct: false },
      { text: "A unit of distance", correct: true },
    ],
    explanation: "A light-year is the distance light travels in one year, approximately 5.88 trillion miles (9.46 trillion km). It's used to measure vast distances in space. For example, the nearest star system (Alpha Centauri) is about 4.37 light-years away."
  },
  {
    question: "Which planet has the most moons?",
    answers: [
      { text: "Saturn", correct: true },
      { text: "Jupiter", correct: false },
      { text: "Uranus", correct: false },
      { text: "Neptune", correct: false },
    ],
    explanation: "Saturn has the most known moons with 146 confirmed satellites as of 2024, surpassing Jupiter's 95 moons. Many of Saturn's moons are small and were discovered recently. Titan, Saturn's largest moon, is larger than the planet Mercury."
  },
  {
    question: "What is the smallest planet in our solar system?",
    answers: [
      { text: "Mars", correct: false },
      { text: "Mercury", correct: true },
      { text: "Venus", correct: false },
      { text: "Pluto", correct: false },
    ],
    explanation: "Mercury is the smallest planet in our solar system with a diameter of about 3,032 miles (4,879 km), only slightly larger than Earth's Moon. Despite being closest to the Sun, it's not the hottest planet due to its lack of atmosphere to trap heat."
  },
  {
    question: "What type of celestial body is the Sun?",
    answers: [
      { text: "Red giant", correct: false },
      { text: "White dwarf", correct: false },
      { text: "Main sequence star", correct: true },
      { text: "Neutron star", correct: false },
    ],
    explanation: "The Sun is a main sequence star, meaning it's in the stable phase of its life where it fuses hydrogen into helium in its core. It's classified as a G-type yellow dwarf star and is about 4.6 billion years old, with roughly 5 billion years left before it evolves into a red giant."
  },
  {
    question: "Which space agency successfully landed the first humans on the Moon?",
    answers: [
      { text: "ESA", correct: false },
      { text: "Roscosmos", correct: false },
      { text: "CNSA", correct: false },
      { text: "NASA", correct: true },
    ],
    explanation: "NASA (National Aeronautics and Space Administration) successfully landed the first humans on the Moon with the Apollo 11 mission on July 20, 1969. Astronauts Neil Armstrong and Buzz Aldrin became the first humans to walk on the Moon."
  },
  {
    question: "What is the name of Saturn's largest moon?",
    answers: [
      { text: "Titan", correct: true },
      { text: "Europa", correct: false },
      { text: "Ganymede", correct: false },
      { text: "Callisto", correct: false },
    ],
    explanation: "Titan is Saturn's largest moon and the second-largest moon in the solar system. It's the only moon with a substantial atmosphere and has liquid methane and ethane lakes on its surface, making it one of the most Earth-like worlds in terms of surface processes."
  },
  {
    question: "What is the study of the universe called?",
    answers: [
      { text: "Geology", correct: false },
      { text: "Cosmology", correct: true },
      { text: "Meteorology", correct: false },
      { text: "Astrology", correct: false },
    ],
    explanation: "Cosmology is the scientific study of the origin, evolution, and eventual fate of the universe. It combines physics, astronomy, and philosophy to understand the universe's large-scale properties, including dark matter, dark energy, and the Big Bang theory."
  },
  {
    question: "Which planet rotates on its side?",
    answers: [
      { text: "Venus", correct: false },
      { text: "Mars", correct: false },
      { text: "Uranus", correct: true },
      { text: "Neptune", correct: false },
    ],
    explanation: "Uranus has an extreme axial tilt of about 98 degrees, meaning it essentially rotates on its side. This unique orientation may have been caused by a collision with an Earth-sized object early in the planet's history, resulting in unusual seasonal patterns."
  },
  {
    question: "What is the name of the region beyond Neptune where many comets originate?",
    answers: [
      { text: "Asteroid Belt", correct: false },
      { text: "Scattered Disk", correct: false },
      { text: "Heliosphere", correct: false },
      { text: "Oort Cloud", correct: true },
    ],
    explanation: "The Oort Cloud is a theoretical spherical shell of icy objects surrounding our solar system at distances up to 100,000 AU from the Sun. It's believed to be the source of long-period comets. The Kuiper Belt, located beyond Neptune, is the source of short-period comets."
  },
  {
    question: "Which planet has the strongest winds in the solar system?",
    answers: [
      { text: "Neptune", correct: true },
      { text: "Jupiter", correct: false },
      { text: "Saturn", correct: false },
      { text: "Uranus", correct: false },
    ],
    explanation: "Neptune has the fastest winds in the solar system, reaching speeds up to 1,200 mph (2,000 km/h). These supersonic winds are driven by Neptune's internal heat source and occur despite the planet receiving very little solar energy due to its distance from the Sun."
  },
  {
    question: "What is the name of the boundary around a black hole beyond which nothing can escape?",
    answers: [
      { text: "Photon sphere", correct: false },
      { text: "Event horizon", correct: true },
      { text: "Schwarzschild radius", correct: false },
      { text: "Singularity", correct: false },
    ],
    explanation: "The event horizon is the boundary around a black hole beyond which the escape velocity exceeds the speed of light, meaning nothing, not even light, can escape. Once matter or radiation crosses the event horizon, it's inevitably pulled toward the singularity at the black hole's center."
  },
  {
    question: "Which constellation contains the North Star?",
    answers: [
      { text: "Ursa Major", correct: false },
      { text: "Cassiopeia", correct: false },
      { text: "Ursa Minor", correct: true },
      { text: "Draco", correct: false },
    ],
    explanation: "Polaris, the North Star, is located in the constellation Ursa Minor (the Little Bear), also known as the Little Dipper. It's positioned almost directly above Earth's North Pole, making it useful for navigation in the Northern Hemisphere for thousands of years."
  },
  {
    question: "What is the approximate age of the universe?",
    answers: [
      { text: "4.6 billion years", correct: false },
      { text: "10 billion years", correct: false },
      { text: "15 billion years", correct: false },
      { text: "13.8 billion years", correct: true },
    ],
    explanation: "The universe is approximately 13.8 billion years old, determined through measurements of the cosmic microwave background radiation and observations of distant galaxies. The solar system, by comparison, is about 4.6 billion years old, forming roughly 9 billion years after the Big Bang."
  },
  {
    question: "Which type of galaxy is the Milky Way?",
    answers: [
      { text: "Spiral", correct: true },
      { text: "Elliptical", correct: false },
      { text: "Irregular", correct: false },
      { text: "Lenticular", correct: false },
    ],
    explanation: "The Milky Way is a barred spiral galaxy, featuring spiral arms rotating around a central bar-shaped structure. It's about 100,000 light-years in diameter and contains 100-400 billion stars. Our solar system is located in one of the minor spiral arms called the Orion Arm."
  },
  {
    question: "What is the name of the largest volcano in the solar system?",
    answers: [
      { text: "Mount Everest", correct: false },
      { text: "Olympus Mons", correct: true },
      { text: "Mauna Kea", correct: false },
      { text: "Alba Mons", correct: false },
    ],
    explanation: "Olympus Mons on Mars is the largest volcano in the solar system, standing about 16 miles (25 km) high—nearly three times the height of Mount Everest. Its base is roughly the size of Arizona. The lower gravity on Mars allowed the volcano to grow to such enormous heights."
  },
  {
    question: "Which planet takes the longest to orbit the Sun?",
    answers: [
      { text: "Saturn", correct: false },
      { text: "Uranus", correct: false },
      { text: "Neptune", correct: true },
      { text: "Pluto", correct: false },
    ],
    explanation: "Neptune takes approximately 165 Earth years to complete one orbit around the Sun. It's the most distant planet from the Sun at an average distance of 2.8 billion miles (4.5 billion km). Neptune completed its first full orbit since its discovery in 1846 only in 2011."
  },
  {
    question: "What is the name of the first artificial satellite launched into space?",
    answers: [
      { text: "Explorer 1", correct: false },
      { text: "Vanguard 1", correct: false },
      { text: "Luna 1", correct: false },
      { text: "Sputnik 1", correct: true },
    ],
    explanation: "Sputnik 1, launched by the Soviet Union on October 4, 1957, was the first artificial satellite to orbit Earth. This 184-pound sphere with four radio antennas marked the beginning of the Space Age and triggered the Space Race between the Soviet Union and the United States."
  },
  {
    question: "Which planet has a day longer than its year?",
    answers: [
      { text: "Venus", correct: true },
      { text: "Mercury", correct: false },
      { text: "Mars", correct: false },
      { text: "Jupiter", correct: false },
    ],
    explanation: "Venus takes 243 Earth days to rotate once on its axis (one Venus day), but only 225 Earth days to orbit the Sun (one Venus year). Additionally, Venus rotates backwards (retrograde rotation) compared to most other planets, likely due to a massive collision early in its history."
  },
  {
    question: "What is the name of the telescope that has provided many deep space images?",
    answers: [
      { text: "Kepler", correct: false },
      { text: "Hubble", correct: true },
      { text: "Spitzer", correct: false },
      { text: "Chandra", correct: false },
    ],
    explanation: "The Hubble Space Telescope, launched in 1990, has provided some of the most detailed visible-light images of distant galaxies, nebulae, and other celestial objects. Operating from low Earth orbit, it avoids atmospheric distortion that affects ground-based telescopes, revolutionizing our understanding of the universe."
  },
  {
    question: "Which moon of Jupiter is known for its volcanic activity?",
    answers: [
      { text: "Europa", correct: false },
      { text: "Ganymede", correct: false },
      { text: "Io", correct: true },
      { text: "Callisto", correct: false },
    ],
    explanation: "Io is the most volcanically active body in the solar system, with over 400 active volcanoes. This extreme volcanism is caused by tidal heating from Jupiter's immense gravity and gravitational interactions with other moons, constantly flexing and heating Io's interior."
  },
  {
    question: "What is the name of the point in Earth's orbit when it is farthest from the Sun?",
    answers: [
      { text: "Perihelion", correct: false },
      { text: "Equinox", correct: false },
      { text: "Solstice", correct: false },
      { text: "Aphelion", correct: true },
    ],
    explanation: "Aphelion is the point in Earth's elliptical orbit when it's farthest from the Sun, occurring around July 4th at about 94.5 million miles (152 million km). Perihelion is when Earth is closest to the Sun (around January 3rd). Despite being farther during summer (Northern Hemisphere), Earth is warmer due to axial tilt, not distance."
  },
  {
    question: "Which space probe was the first to leave the solar system?",
    answers: [
      { text: "Voyager 1", correct: true },
      { text: "Pioneer 10", correct: false },
      { text: "Voyager 2", correct: false },
      { text: "New Horizons", correct: false },
    ],
    explanation: "Voyager 1, launched in 1977, became the first human-made object to enter interstellar space in August 2012 when it crossed the heliopause (the boundary where the Sun's solar wind is stopped by interstellar medium). It's now over 15 billion miles from Earth and still transmitting data."
  },
  {
    question: "What is the name of the super-massive black hole at the center of our galaxy?",
    answers: [
      { text: "Cygnus X-1", correct: false },
      { text: "Sagittarius A*", correct: true },
      { text: "M87*", correct: false },
      { text: "TON 618", correct: false },
    ],
    explanation: "Sagittarius A* (pronounced 'A-star') is the supermassive black hole at the center of the Milky Way, with a mass about 4 million times that of the Sun. Located about 26,000 light-years from Earth, it was directly imaged for the first time in 2022 by the Event Horizon Telescope collaboration."
  },
  {
    question: "What is the name of the nearest galaxy to the Milky Way?",
    answers: [
      { text: "Andromeda", correct: true },
      { text: "Triangulum", correct: false },
      { text: "Whirlpool", correct: false },
      { text: "Centaurus A", correct: false },
    ],
    explanation: "The Andromeda Galaxy (M31) is the nearest major galaxy to the Milky Way, located about 2.5 million light-years away. It's on a collision course with the Milky Way and will merge with our galaxy in about 4.5 billion years, forming a giant elliptical galaxy nicknamed 'Milkomeda.'"
  },
  {
    question: "Which planet has the Great Red Spot?",
    answers: [
      { text: "Saturn", correct: false },
      { text: "Jupiter", correct: true },
      { text: "Neptune", correct: false },
      { text: "Uranus", correct: false },
    ],
    explanation: "Jupiter's Great Red Spot is a massive anticyclonic storm that has been raging for at least 400 years. It's large enough to fit two or three Earths inside. The storm's reddish color is likely caused by complex chemical reactions in Jupiter's atmosphere involving phosphorus and sulfur compounds."
  },
  {
    question: "What is the main sequence phase of a star's life?",
    answers: [
      { text: "Formation stage", correct: false },
      { text: "Death stage", correct: false },
      { text: "Hydrogen burning stage", correct: true },
      { text: "Red giant stage", correct: false },
    ],
    explanation: "The main sequence is the longest and most stable phase of a star's life, during which it fuses hydrogen into helium in its core. Stars spend about 90% of their lifetime in this phase. Our Sun is currently a main sequence star and will remain so for another 5 billion years."
  },
  {
    question: "Which space telescope was launched in 1990?",
    answers: [
      { text: "Spitzer", correct: false },
      { text: "Kepler", correct: false },
      { text: "Chandra", correct: false },
      { text: "Hubble", correct: true },
    ],
    explanation: "The Hubble Space Telescope was launched on April 24, 1990, aboard the Space Shuttle Discovery. Despite an initial problem with its primary mirror, it was repaired during a servicing mission in 1993 and has since revolutionized astronomy with stunning images and groundbreaking discoveries about the universe."
  },
  {
    question: "What is the term for a moon's elliptical path around a planet?",
    answers: [
      { text: "Orbit", correct: true },
      { text: "Rotation", correct: false },
      { text: "Revolution", correct: false },
      { text: "Precession", correct: false },
    ],
    explanation: "An orbit is the curved path an object takes around another object due to gravity. While often elliptical, orbits can be circular, elliptical, parabolic, or hyperbolic. Rotation refers to spinning on an axis, while revolution is the complete path around another object (one orbit)."
  },
  {
    question: "Which element is most abundant in the Sun?",
    answers: [
      { text: "Helium", correct: false },
      { text: "Hydrogen", correct: true },
      { text: "Oxygen", correct: false },
      { text: "Carbon", correct: false },
    ],
    explanation: "Hydrogen makes up about 73% of the Sun's mass, with helium accounting for about 25%. The remaining 2% consists of heavier elements. Through nuclear fusion, the Sun converts about 600 million tons of hydrogen into helium every second, releasing enormous amounts of energy in the process."
  },
  {
    question: "What is the boundary that separates the solar system from interstellar space?",
    answers: [
      { text: "Asteroid belt", correct: false },
      { text: "Kuiper belt", correct: false },
      { text: "Heliopause", correct: true },
      { text: "Oort cloud", correct: false },
    ],
    explanation: "The heliopause is the boundary where the Sun's solar wind is stopped by the interstellar medium. It marks the edge of the heliosphere and the beginning of interstellar space. Voyager 1 crossed the heliopause in 2012, becoming the first human-made object to enter interstellar space."
  },
  {
    question: "Which moon of Saturn has thick atmosphere and lakes of liquid methane?",
    answers: [
      { text: "Enceladus", correct: false },
      { text: "Mimas", correct: false },
      { text: "Iapetus", correct: false },
      { text: "Titan", correct: true },
    ],
    explanation: "Titan is the only moon in the solar system with a substantial atmosphere, composed mainly of nitrogen with clouds of methane. It has liquid methane and ethane lakes and seas on its surface, along with a methane cycle similar to Earth's water cycle, making it one of the most intriguing moons for potential life."
  },
  {
    question: "What is the name of the force that keeps planets in orbit?",
    answers: [
      { text: "Gravity", correct: true },
      { text: "Magnetism", correct: false },
      { text: "Centrifugal force", correct: false },
      { text: "Nuclear force", correct: false },
    ],
    explanation: "Gravity is the fundamental force that keeps planets in orbit around stars and moons in orbit around planets. According to Newton's law of universal gravitation, every object with mass attracts every other object. The Sun's immense gravity keeps all the planets in their orbits around it."
  },
  {
    question: "Which planet rotates backwards compared to most others?",
    answers: [
      { text: "Mars", correct: false },
      { text: "Venus", correct: true },
      { text: "Mercury", correct: false },
      { text: "Jupiter", correct: false },
    ],
    explanation: "Venus has retrograde rotation, meaning it rotates on its axis in the opposite direction to most planets. While most planets rotate counterclockwise when viewed from above the North Pole, Venus rotates clockwise. This unusual rotation may have resulted from a massive collision early in Venus's history."
  },
  {
    question: "What is the process that powers stars?",
    answers: [
      { text: "Chemical combustion", correct: false },
      { text: "Nuclear fission", correct: false },
      { text: "Nuclear fusion", correct: true },
      { text: "Gravitational collapse", correct: false },
    ],
    explanation: "Nuclear fusion powers stars by combining lighter atomic nuclei into heavier ones, releasing enormous amounts of energy. In the Sun and similar stars, hydrogen nuclei fuse to form helium through the proton-proton chain reaction. This process requires extreme temperatures and pressures found in stellar cores."
  },
  {
    question: "Which type of object has an event horizon?",
    answers: [
      { text: "Neutron star", correct: false },
      { text: "White dwarf", correct: false },
      { text: "Pulsar", correct: false },
      { text: "Black hole", correct: true },
    ],
    explanation: "Black holes have event horizons—the boundary beyond which nothing, not even light, can escape due to the immense gravitational pull. The event horizon's size depends on the black hole's mass. Once anything crosses this point, it's inevitably pulled toward the singularity at the black hole's center."
  },
  {
    question: "What is the name of Mars' larger moon?",
    answers: [
      { text: "Phobos", correct: true },
      { text: "Deimos", correct: false },
      { text: "Europa", correct: false },
      { text: "Ganymede", correct: false },
    ],
    explanation: "Phobos is the larger of Mars's two small moons, with a diameter of about 14 miles (22 km). It orbits very close to Mars—only 3,700 miles (6,000 km) above the surface—and is slowly spiraling inward due to tidal forces. In about 50 million years, Phobos will either crash into Mars or break apart to form a ring."
  },
  {
    question: "Which mission first landed humans on the Moon?",
    answers: [
      { text: "Apollo 10", correct: false },
      { text: "Apollo 11", correct: true },
      { text: "Apollo 12", correct: false },
      { text: "Gemini 8", correct: false },
    ],
    explanation: "Apollo 11, launched on July 16, 1969, was the first mission to land humans on the Moon. Commander Neil Armstrong and Lunar Module Pilot Buzz Aldrin landed on the Moon on July 20, 1969, while Michael Collins orbited above in the Command Module. Armstrong's first words upon stepping onto the lunar surface were 'That's one small step for man, one giant leap for mankind.'"
  },
  {
    question: "What is the name of the wide band of stars we see across the night sky?",
    answers: [
      { text: "Asteroid belt", correct: false },
      { text: "Zodiac", correct: false },
      { text: "Milky Way", correct: true },
      { text: "Solar system", correct: false },
    ],
    explanation: "The Milky Way appears as a luminous band across the night sky because we're viewing our galaxy from within it. This band consists of billions of stars in the galactic disk. Ancient civilizations saw this glowing band and named it for its milky appearance, inspiring the galaxy's modern name."
  },
  {
    question: "Which planet has the most extreme temperature variations?",
    answers: [
      { text: "Venus", correct: false },
      { text: "Mars", correct: false },
      { text: "Jupiter", correct: false },
      { text: "Mercury", correct: true },
    ],
    explanation: "Mercury experiences the most extreme temperature variations in the solar system, ranging from about 800°F (430°C) on the Sun-facing side to -290°F (-180°C) on the dark side. This is because Mercury has virtually no atmosphere to distribute heat, and it rotates very slowly, causing extreme differences between day and night."
  },
  {
    question: "What is the name of the theoretical boundary around a star where liquid water could exist?",
    answers: [
      { text: "Habitable zone", correct: true },
      { text: "Asteroid belt", correct: false },
      { text: "Kuiper belt", correct: false },
      { text: "Heliosphere", correct: false },
    ],
    explanation: "The habitable zone, also called the 'Goldilocks zone,' is the region around a star where conditions are 'just right' for liquid water to exist on a planet's surface—not too hot, not too cold. Earth lies within the Sun's habitable zone. Finding exoplanets in habitable zones is a key goal in the search for extraterrestrial life."
  },
  {
    question: "Which comet is visible from Earth every 76 years?",
    answers: [
      { text: "Hale-Bopp", correct: false },
      { text: "Halley's Comet", correct: true },
      { text: "Hyakutake", correct: false },
      { text: "Shoemaker-Levy 9", correct: false },
    ],
    explanation: "Halley's Comet is a short-period comet visible from Earth approximately every 75-76 years. Named after astronomer Edmond Halley who calculated its orbit in 1705, it last appeared in 1986 and will return in 2061. Historical records of Halley's Comet date back over 2,000 years."
  },
  {
    question: "What is the remnant of a massive star after a supernova explosion?",
    answers: [
      { text: "White dwarf", correct: false },
      { text: "Red giant", correct: false },
      { text: "Neutron star or black hole", correct: true },
      { text: "Planetary nebula", correct: false },
    ],
    explanation: "After a massive star explodes in a supernova, its core collapses into either a neutron star (if the core is 1.4-3 solar masses) or a black hole (if the core exceeds 3 solar masses). Neutron stars are incredibly dense—a teaspoon would weigh billions of tons. Less massive stars become white dwarfs surrounded by planetary nebulae."
  },
  {
    question: "Which spacecraft was the first to leave the solar system?",
    answers: [
      { text: "Pioneer 10", correct: false },
      { text: "Voyager 2", correct: false },
      { text: "New Horizons", correct: false },
      { text: "Voyager 1", correct: true },
    ],
    explanation: "Voyager 1 crossed the heliopause in August 2012, becoming the first human-made object to enter interstellar space. Launched in 1977, it's now over 15 billion miles from Earth, traveling at about 38,000 mph. Despite its distance, Voyager 1 still communicates with Earth, sending back data about interstellar space."
  },
  {
    question: "What star is the closest to Earth?",
    answers: [
      { text: "The Sun", correct: true },
      { text: "Proxima Centauri", correct: false },
      { text: "Sirius", correct: false },
      { text: "Alpha Centauri A", correct: false }
    ],
    explanation: "The Sun is Earth's closest star at about 93 million miles away. While Proxima Centauri is the closest star to our solar system after the Sun, it's still 4.24 light-years away—about 25 trillion miles!"
  },
  {
    question: "Which galaxy contains our Solar System?",
    answers: [
      { text: "The Milky Way", correct: true },
      { text: "Andromeda", correct: false },
      { text: "Triangulum", correct: false },
      { text: "Whirlpool", correct: false }
    ],
    explanation: "The Milky Way is our home galaxy, a barred spiral galaxy containing 100-400 billion stars. Our solar system is located in one of its spiral arms, about 26,000 light-years from the galactic center."
  },
  {
    question: "What does one light-year measure?",
    answers: [
      { text: "Distance", correct: true },
      { text: "Time", correct: false },
      { text: "Star brightness", correct: false },
      { text: "Mass of a star", correct: false }
    ],
    explanation: "A light-year is the distance light travels in one year, approximately 5.88 trillion miles (9.46 trillion km). Despite the word 'year' in its name, it's a unit of distance, not time, used to measure the vast distances between stars and galaxies."
  },
  {
    question: "Which planet in our Solar System is most famous for having a prominent ring system?",
    answers: [
      { text: "Saturn", correct: true },
      { text: "Mars", correct: false },
      { text: "Venus", correct: false },
      { text: "Mercury", correct: false }
    ],
    explanation: "Saturn is famous for its spectacular ring system, composed of billions of particles of ice and rock ranging from tiny grains to house-sized chunks. While Jupiter, Uranus, and Neptune also have rings, Saturn's are by far the largest and most visible."
  },
  {
    question: "Small rocky bodies that orbit the Sun mainly between Mars and Jupiter are called what?",
    answers: [
      { text: "Asteroids", correct: true },
      { text: "Comets", correct: false },
      { text: "Meteoroids", correct: false },
      { text: "Planetesimals", correct: false }
    ],
    explanation: "Asteroids are rocky remnants from the early solar system that never coalesced into a planet. The main asteroid belt between Mars and Jupiter contains millions of asteroids, ranging from small rocks to Ceres, which is large enough to be classified as a dwarf planet."
  },
  {
    question: "What name is given to the explosive death of a massive star?",
    answers: [
      { text: "Supernova", correct: true },
      { text: "Nova", correct: false },
      { text: "Pulsar", correct: false },
      { text: "Red giant", correct: false }
    ],
    explanation: "A supernova is the catastrophic explosion of a massive star at the end of its life. In a few seconds, a supernova can release as much energy as the Sun will emit over its entire 10-billion-year lifetime, briefly outshining entire galaxies."
  },
  {
    question: "What term describes a natural object that orbits a planet (like our Moon)?",
    answers: [
      { text: "Natural satellite", correct: true },
      { text: "Artificial satellite", correct: false },
      { text: "Comet", correct: false },
      { text: "Asteroid", correct: false }
    ],
    explanation: "A natural satellite, or moon, is any celestial body that orbits a planet or minor planet. Our Moon is Earth's only natural satellite, but the solar system has over 200 known natural satellites orbiting various planets."
  },
  {
    question: "Which force keeps planets moving in orbit around stars?",
    answers: [
      { text: "Gravity", correct: true },
      { text: "Electromagnetism", correct: false },
      { text: "Strong nuclear force", correct: false },
      { text: "Friction", correct: false }
    ],
    explanation: "Gravity is the fundamental force that keeps planets in orbit around stars. The Sun's immense gravitational pull keeps all the planets in their elliptical orbits, balancing with their orbital velocity to prevent them from either flying off into space or falling into the Sun."
  },
  {
    question: "What term describes the diffuse mixture of gas and dust filling much of interstellar space?",
    answers: [
      { text: "Interstellar medium", correct: true },
      { text: "Quasar field", correct: false },
      { text: "Oort cloud", correct: false },
      { text: "Solar wind", correct: false }
    ],
    explanation: "The interstellar medium (ISM) is the matter and radiation that exists in the space between star systems in a galaxy. Composed primarily of hydrogen gas with traces of heavier elements and dust particles, the ISM is the material from which new stars form."
  },
  {
    question: "What defines a black hole's point of no return where not even light can escape?",
    answers: [
      { text: "Event horizon", correct: true },
      { text: "Singularity", correct: false },
      { text: "Photon sphere", correct: false },
      { text: "Accretion disk", correct: false }
    ],
    explanation: "The event horizon is the boundary around a black hole beyond which the escape velocity exceeds the speed of light. Once anything crosses this threshold, it cannot escape, as nothing can travel faster than light. The singularity is the infinitely dense point at the center, while the event horizon is the visible boundary."
  }
];

