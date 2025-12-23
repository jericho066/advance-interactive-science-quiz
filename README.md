# Interactive Science Quiz

A comprehensive, responsive web-based quiz application covering multiple science subjects. Test your knowledge across Physics, Biology, Chemistry, Astronomy, Geology, and Computer Science with an intuitive interface and detailed answer review system.

## Features

### Core Functionality
- **6 Science Topics**: Physics, Biology, Chemistry, Astronomy, Geology, and Computer Science
- **Flexible Quiz Length**: Choose from 10, 15, 20, 30, 40, or 50 questions
- **Question Randomization**: Questions are shuffled for unique quiz experiences
- **Real-time Feedback**: Instant feedback with streak tracking
- **Progress Tracking**: Visual progress bar throughout the quiz

### Interactive Elements
- **Answer Review System**: Detailed breakdown showing correct answers and your selections
- **Performance Statistics**: Score tracking with passing threshold (70%)
- **Streak Counter**: Gamification element tracking consecutive correct answers
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices

### User Experience
- **Smooth Animations**: Hover effects and transitions for better interaction
- **Visual Feedback**: Color-coded answer states (correct/incorrect)
- **Comprehensive Results**: Final score with detailed statistics
- **Restart Functionality**: Easy quiz reset with topic re-selection

## Demo

[Live Demo](https://jericho066.github.io/advance-interactive-science-quiz/)


## Technologies Used

- **HTML5**: Semantic structure and accessibility
- **CSS3**: 
  - Flexbox and Grid layouts
  - Custom properties for theming
  - Responsive design with clamp() functions
  - Smooth animations and transitions
- **Vanilla JavaScript**: 
  - ES6+ features
  - Modular code organization
  - Event-driven architecture
  - Local state management

## Project Structure

```
science-quiz/
├── index.html              # Main HTML file
├── src/
│   ├── style.css           # Main stylesheet
│   ├── script.js           # Core JavaScript logic
│   └── feedbacks.js        # Feedback messages system
├── questions/
│   ├── physics.js          # Physics questions (60+ questions)
│   ├── biology.js          # Biology questions (60+ questions)
│   ├── chemistry.js        # Chemistry questions (60+ questions)
│   ├── astronomy.js        # Astronomy questions (60+ questions)
│   ├── geology.js          # Geology questions (60+ questions)
│   └── com-sci.js          # Computer Science questions (60+ questions)
└── README.md
```

## How to Use

1. **Start**: Click "Okay" to proceed from the welcome screen
2. **Select Topic**: Choose from 6 available science subjects
3. **Choose Length**: Pick the number of questions (10-50)
4. **Take Quiz**: Answer questions with instant feedback
5. **Review Results**: See your final score and statistics
6. **View Answers**: Detailed review of all questions and correct answers
7. **Restart**: Try again with different settings

##  Installation & Setup

### Option 1: Direct Download
```bash
# Clone the repository
git clone https://github.com/jericho066/advance-interactive-science-quiz.git

# Navigate to project directory
cd advance-interactive-science-quiz

# Open in browser
open index.html
```

## Question Database

The quiz includes 350+ carefully curated questions across six subjects:

- **Physics**: Classical mechanics, thermodynamics, electromagnetism, optics, modern physics
- **Biology**: Cell biology, genetics, ecology, anatomy, physiology
- **Chemistry**: Atomic structure, chemical bonds, reactions, organic chemistry
- **Astronomy**: Solar system, stars, galaxies, cosmology, space exploration
- **Geology**: Rock types, Earth structure, plate tectonics, mineralogy
- **Computer Science**: Programming concepts, algorithms, data structures, networking

## Future Enhancements

- Question difficulty levels
- Timer mode for each question
- Detailed explanations for answers
- Performance analytics over time
- Question bookmarking system
- Multi-language support
- Dark mode toggle
- Sound effects and music
- Achievement system
