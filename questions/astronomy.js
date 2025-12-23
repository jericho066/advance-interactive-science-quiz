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
  },
  {
    question: "How many planets are in our solar system?",
    answers: [
      { text: "Eight", correct: true },
      { text: "Nine", correct: false },
      { text: "Seven", correct: false },
      { text: "Ten", correct: false },
    ],
  },
  {
    question: "What is the largest planet in our solar system?",
    answers: [
      { text: "Saturn", correct: false },
      { text: "Jupiter", correct: true },
      { text: "Neptune", correct: false },
      { text: "Uranus", correct: false },
    ],
  },
  {
    question: "What is the name of our galaxy?",
    answers: [
      { text: "Andromeda", correct: false },
      { text: "Whirlpool", correct: false },
      { text: "Sombrero", correct: false },
      { text: "Milky Way", correct: true },
    ],
  },
  {
    question: "Which planet is known as the Red Planet?",
    answers: [
      { text: "Mars", correct: true },
      { text: "Venus", correct: false },
      { text: "Jupiter", correct: false },
      { text: "Mercury", correct: false },
    ],
  },
  {
    question: "What is the hottest planet in our solar system?",
    answers: [
      { text: "Mercury", correct: false },
      { text: "Venus", correct: true },
      { text: "Earth", correct: false },
      { text: "Mars", correct: false },
    ],
  },
  {
    question: "What causes tides on Earth?",
    answers: [
      { text: "Earth's rotation", correct: false },
      { text: "Solar wind", correct: false },
      { text: "Moon's gravity", correct: true },
      { text: "Ocean currents", correct: false },
    ],
  },
  {
    question: "What is a light-year?",
    answers: [
      { text: "A unit of time", correct: false },
      { text: "A unit of energy", correct: false },
      { text: "A unit of mass", correct: false },
      { text: "A unit of distance", correct: true },
    ],
  },
  {
    question: "Which planet has the most moons?",
    answers: [
      { text: "Saturn", correct: true },
      { text: "Jupiter", correct: false },
      { text: "Uranus", correct: false },
      { text: "Neptune", correct: false },
    ],
  },
  {
    question: "What is the smallest planet in our solar system?",
    answers: [
      { text: "Mars", correct: false },
      { text: "Mercury", correct: true },
      { text: "Venus", correct: false },
      { text: "Pluto", correct: false },
    ],
  },
  {
    question: "What type of celestial body is the Sun?",
    answers: [
      { text: "Red giant", correct: false },
      { text: "White dwarf", correct: false },
      { text: "Main sequence star", correct: true },
      { text: "Neutron star", correct: false },
    ],
  },
  {
    question: "Which space agency successfully landed the first humans on the Moon?",
    answers: [
      { text: "ESA", correct: false },
      { text: "Roscosmos", correct: false },
      { text: "CNSA", correct: false },
      { text: "NASA", correct: true },
    ],
  },
  {
    question: "What is the name of Saturn's largest moon?",
    answers: [
      { text: "Titan", correct: true },
      { text: "Europa", correct: false },
      { text: "Ganymede", correct: false },
      { text: "Callisto", correct: false },
    ],
  },
  {
    question: "What is the study of the universe called?",
    answers: [
      { text: "Geology", correct: false },
      { text: "Cosmology", correct: true },
      { text: "Meteorology", correct: false },
      { text: "Astrology", correct: false },
    ],
  },
  {
    question: "Which planet rotates on its side?",
    answers: [
      { text: "Venus", correct: false },
      { text: "Mars", correct: false },
      { text: "Uranus", correct: true },
      { text: "Neptune", correct: false },
    ],
  },
  {
    question: "What is the name of the region beyond Neptune where many comets originate?",
    answers: [
      { text: "Asteroid Belt", correct: false },
      { text: "Scattered Disk", correct: false },
      { text: "Heliosphere", correct: false },
      { text: "Oort Cloud", correct: true },
    ],
  },
  {
    question: "Which planet has the strongest winds in the solar system?",
    answers: [
      { text: "Neptune", correct: true },
      { text: "Jupiter", correct: false },
      { text: "Saturn", correct: false },
      { text: "Uranus", correct: false },
    ],
  },
  {
    question: "What is the name of the boundary around a black hole beyond which nothing can escape?",
    answers: [
      { text: "Photon sphere", correct: false },
      { text: "Event horizon", correct: true },
      { text: "Schwarzschild radius", correct: false },
      { text: "Singularity", correct: false },
    ],
  },
  {
    question: "Which constellation contains the North Star?",
    answers: [
      { text: "Ursa Major", correct: false },
      { text: "Cassiopeia", correct: false },
      { text: "Ursa Minor", correct: true },
      { text: "Draco", correct: false },
    ],
  },
  {
    question: "What is the approximate age of the universe?",
    answers: [
      { text: "4.6 billion years", correct: false },
      { text: "10 billion years", correct: false },
      { text: "15 billion years", correct: false },
      { text: "13.8 billion years", correct: true },
    ],
  },
  {
    question: "Which type of galaxy is the Milky Way?",
    answers: [
      { text: "Spiral", correct: true },
      { text: "Elliptical", correct: false },
      { text: "Irregular", correct: false },
      { text: "Lenticular", correct: false },
    ],
  },
  {
    question: "What is the name of the largest volcano in the solar system?",
    answers: [
      { text: "Mount Everest", correct: false },
      { text: "Olympus Mons", correct: true },
      { text: "Mauna Kea", correct: false },
      { text: "Alba Mons", correct: false },
    ],
  },
  {
    question: "Which planet takes the longest to orbit the Sun?",
    answers: [
      { text: "Saturn", correct: false },
      { text: "Uranus", correct: false },
      { text: "Neptune", correct: true },
      { text: "Pluto", correct: false },
    ],
  },
  {
    question: "What is the name of the first artificial satellite launched into space?",
    answers: [
      { text: "Explorer 1", correct: false },
      { text: "Vanguard 1", correct: false },
      { text: "Luna 1", correct: false },
      { text: "Sputnik 1", correct: true },
    ],
  },
  {
    question: "Which planet has a day longer than its year?",
    answers: [
      { text: "Venus", correct: true },
      { text: "Mercury", correct: false },
      { text: "Mars", correct: false },
      { text: "Jupiter", correct: false },
    ],
  },
  {
    question: "What is the name of the telescope that has provided many deep space images?",
    answers: [
      { text: "Kepler", correct: false },
      { text: "Hubble", correct: true },
      { text: "Spitzer", correct: false },
      { text: "Chandra", correct: false },
    ],
  },
  {
    question: "Which moon of Jupiter is known for its volcanic activity?",
    answers: [
      { text: "Europa", correct: false },
      { text: "Ganymede", correct: false },
      { text: "Io", correct: true },
      { text: "Callisto", correct: false },
    ],
  },
  {
    question: "What is the name of the point in Earth's orbit when it is farthest from the Sun?",
    answers: [
      { text: "Perihelion", correct: false },
      { text: "Equinox", correct: false },
      { text: "Solstice", correct: false },
      { text: "Aphelion", correct: true },
    ],
  },
  {
    question: "Which space probe was the first to leave the solar system?",
    answers: [
      { text: "Voyager 1", correct: true },
      { text: "Pioneer 10", correct: false },
      { text: "Voyager 2", correct: false },
      { text: "New Horizons", correct: false },
    ],
  },
  {
    question: "What is the name of the super-massive black hole at the center of our galaxy?",
    answers: [
      { text: "Cygnus X-1", correct: false },
      { text: "Sagittarius A*", correct: true },
      { text: "M87*", correct: false },
      { text: "TON 618", correct: false },
    ],
  },
  {
    question: "What is the name of the nearest galaxy to the Milky Way?",
    answers: [
      { text: "Andromeda", correct: true },
      { text: "Triangulum", correct: false },
      { text: "Whirlpool", correct: false },
      { text: "Centaurus A", correct: false },
    ],
  },
  {
    question: "Which planet has the Great Red Spot?",
    answers: [
      { text: "Saturn", correct: false },
      { text: "Jupiter", correct: true },
      { text: "Neptune", correct: false },
      { text: "Uranus", correct: false },
    ],
  },
  {
    question: "What is the main sequence phase of a star's life?",
    answers: [
      { text: "Formation stage", correct: false },
      { text: "Death stage", correct: false },
      { text: "Hydrogen burning stage", correct: true },
      { text: "Red giant stage", correct: false },
    ],
  },
  {
    question: "Which space telescope was launched in 1990?",
    answers: [
      { text: "Spitzer", correct: false },
      { text: "Kepler", correct: false },
      { text: "Chandra", correct: false },
      { text: "Hubble", correct: true },
    ],
  },
  {
    question: "What is the term for a moon's elliptical path around a planet?",
    answers: [
      { text: "Orbit", correct: true },
      { text: "Rotation", correct: false },
      { text: "Revolution", correct: false },
      { text: "Precession", correct: false },
    ],
  },
  {
    question: "Which element is most abundant in the Sun?",
    answers: [
      { text: "Helium", correct: false },
      { text: "Hydrogen", correct: true },
      { text: "Oxygen", correct: false },
      { text: "Carbon", correct: false },
    ],
  },
  {
    question: "What is the boundary that separates the solar system from interstellar space?",
    answers: [
      { text: "Asteroid belt", correct: false },
      { text: "Kuiper belt", correct: false },
      { text: "Heliopause", correct: true },
      { text: "Oort cloud", correct: false },
    ],
  },
  {
    question: "Which moon of Saturn has thick atmosphere and lakes of liquid methane?",
    answers: [
      { text: "Enceladus", correct: false },
      { text: "Mimas", correct: false },
      { text: "Iapetus", correct: false },
      { text: "Titan", correct: true },
    ],
  },
  {
    question: "What is the name of the force that keeps planets in orbit?",
    answers: [
      { text: "Gravity", correct: true },
      { text: "Magnetism", correct: false },
      { text: "Centrifugal force", correct: false },
      { text: "Nuclear force", correct: false },
    ],
  },
  {
    question: "Which planet rotates backwards compared to most others?",
    answers: [
      { text: "Mars", correct: false },
      { text: "Venus", correct: true },
      { text: "Mercury", correct: false },
      { text: "Jupiter", correct: false },
    ],
  },
  {
    question: "What is the process that powers stars?",
    answers: [
      { text: "Chemical combustion", correct: false },
      { text: "Nuclear fission", correct: false },
      { text: "Nuclear fusion", correct: true },
      { text: "Gravitational collapse", correct: false },
    ],
  },
  {
    question: "Which type of object has an event horizon?",
    answers: [
      { text: "Neutron star", correct: false },
      { text: "White dwarf", correct: false },
      { text: "Pulsar", correct: false },
      { text: "Black hole", correct: true },
    ],
  },
  {
    question: "What is the name of Mars' larger moon?",
    answers: [
      { text: "Phobos", correct: true },
      { text: "Deimos", correct: false },
      { text: "Europa", correct: false },
      { text: "Ganymede", correct: false },
    ],
  },
  {
    question: "Which mission first landed humans on the Moon?",
    answers: [
      { text: "Apollo 10", correct: false },
      { text: "Apollo 11", correct: true },
      { text: "Apollo 12", correct: false },
      { text: "Gemini 8", correct: false },
    ],
  },
  {
    question: "What is the name of the wide band of stars we see across the night sky?",
    answers: [
      { text: "Asteroid belt", correct: false },
      { text: "Zodiac", correct: false },
      { text: "Milky Way", correct: true },
      { text: "Solar system", correct: false },
    ],
  },
  {
    question: "Which planet has the most extreme temperature variations?",
    answers: [
      { text: "Venus", correct: false },
      { text: "Mars", correct: false },
      { text: "Jupiter", correct: false },
      { text: "Mercury", correct: true },
    ],
  },
  {
    question: "What is the name of the theoretical boundary around a star where liquid water could exist?",
    answers: [
      { text: "Habitable zone", correct: true },
      { text: "Asteroid belt", correct: false },
      { text: "Kuiper belt", correct: false },
      { text: "Heliosphere", correct: false },
    ],
  },
  {
    question: "Which comet is visible from Earth every 76 years?",
    answers: [
      { text: "Hale-Bopp", correct: false },
      { text: "Halley's Comet", correct: true },
      { text: "Hyakutake", correct: false },
      { text: "Shoemaker-Levy 9", correct: false },
    ],
  },
  {
    question: "What is the remnant of a massive star after a supernova explosion?",
    answers: [
      { text: "White dwarf", correct: false },
      { text: "Red giant", correct: false },
      { text: "Neutron star or black hole", correct: true },
      { text: "Planetary nebula", correct: false },
    ],
  },
  {
    question: "Which spacecraft was the first to leave the solar system?",
    answers: [
      { text: "Pioneer 10", correct: false },
      { text: "Voyager 2", correct: false },
      { text: "New Horizons", correct: false },
      { text: "Voyager 1", correct: true },
    ],
  },
  {
  question: "What star is the closest to Earth?",
  answers: [
    { text: "The Sun", correct: true },
    { text: "Proxima Centauri", correct: false },
    { text: "Sirius", correct: false },
    { text: "Alpha Centauri A", correct: false }
  ]
},
{
  question: "Which galaxy contains our Solar System?",
  answers: [
    { text: "The Milky Way", correct: true },
    { text: "Andromeda", correct: false },
    { text: "Triangulum", correct: false },
    { text: "Whirlpool", correct: false }
  ]
},
{
  question: "What does one light-year measure?",
  answers: [
    { text: "Distance", correct: true },
    { text: "Time", correct: false },
    { text: "Star brightness", correct: false },
    { text: "Mass of a star", correct: false }
  ]
},
{
  question: "Which planet in our Solar System is most famous for having a prominent ring system?",
  answers: [
    { text: "Saturn", correct: true },
    { text: "Mars", correct: false },
    { text: "Venus", correct: false },
    { text: "Mercury", correct: false }
  ]
},
{
  question: "Small rocky bodies that orbit the Sun mainly between Mars and Jupiter are called what?",
  answers: [
    { text: "Asteroids", correct: true },
    { text: "Comets", correct: false },
    { text: "Meteoroids", correct: false },
    { text: "Planetesimals", correct: false }
  ]
},
{
  question: "What name is given to the explosive death of a massive star?",
  answers: [
    { text: "Supernova", correct: true },
    { text: "Nova", correct: false },
    { text: "Pulsar", correct: false },
    { text: "Red giant", correct: false }
  ]
},
{
  question: "What term describes a natural object that orbits a planet (like our Moon)?",
  answers: [
    { text: "Natural satellite", correct: true },
    { text: "Artificial satellite", correct: false },
    { text: "Comet", correct: false },
    { text: "Asteroid", correct: false }
  ]
},
{
  question: "Which force keeps planets moving in orbit around stars?",
  answers: [
    { text: "Gravity", correct: true },
    { text: "Electromagnetism", correct: false },
    { text: "Strong nuclear force", correct: false },
    { text: "Friction", correct: false }
  ]
},
{
  question: "What term describes the diffuse mixture of gas and dust filling much of interstellar space?",
  answers: [
    { text: "Interstellar medium", correct: true },
    { text: "Quasar field", correct: false },
    { text: "Oort cloud", correct: false },
    { text: "Solar wind", correct: false }
  ]
},
{
  question: "What defines a black hole's point of no return where not even light can escape?",
  answers: [
    { text: "Event horizon", correct: true },
    { text: "Singularity", correct: false },
    { text: "Photon sphere", correct: false },
    { text: "Accretion disk", correct: false }
  ]
}
];