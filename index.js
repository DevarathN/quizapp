let listOfQuestions;
let selectedcategory;
function showCategories() {
  document.getElementById("category-container").style.display = "block";
  document.getElementById("category-box-container").style.display = "flex";
  document.getElementById("start-quiz").style.display = "none";
  document.getElementsByClassName("startQuiz")[0].style.display = "none";
}

// Handle category selection
function collapse() {
  document.getElementById("category-container").style.display = "none";
  document.getElementById("start-quiz").style.display = "block";
}
const questionList = {
  General: [
    {
      question: "What is the capital of Australia?",
      options: ["Sydney", "Melbourne", "Canberra", "Brisbane"],
      correctAnswer: "Canberra",
    },
    {
      question: "How many continents are there in the world?",
      options: ["Five", "Six", "Seven", "Eight"],
      correctAnswer: "Seven",
    },
    {
      question: "Which planet is known as the 'Morning Star'?",
      options: ["Venus", "Mars", "Jupiter", "Mercury"],
      correctAnswer: "Venus",
    },
    {
      question: "Who wrote 'Romeo and Juliet'?",
      options: [
        "Charles Dickens",
        "William Shakespeare",
        "Jane Austen",
        "Mark Twain",
      ],
      correctAnswer: "William Shakespeare",
    },
    {
      question: "What is the currency of Japan?",
      options: ["Yuan", "Won", "Yen", "Ringgit"],
      correctAnswer: "Yen",
    },
    {
      question: "Which is the largest ocean on Earth?",
      options: [
        "Indian Ocean",
        "Atlantic Ocean",
        "Arctic Ocean",
        "Pacific Ocean",
      ],
      correctAnswer: "Pacific Ocean",
    },
    {
      question: "What is the largest mammal in the world?",
      options: ["Elephant", "Giraffe", "Blue Whale", "Hippopotamus"],
      correctAnswer: "Blue Whale",
    },
    {
      question: "Who painted the Mona Lisa?",
      options: [
        "Vincent van Gogh",
        "Leonardo da Vinci",
        "Pablo Picasso",
        "Claude Monet",
      ],
      correctAnswer: "Leonardo da Vinci",
    },
    {
      question: "What is the main ingredient in guacamole?",
      options: ["Tomato", "Avocado", "Onion", "Cilantro"],
      correctAnswer: "Avocado",
    },
    {
      question: "Which element has the chemical symbol 'O'?",
      options: ["Oxygen", "Gold", "Iron", "Silver"],
      correctAnswer: "Oxygen",
    },
    {
      question: "What is the largest desert in the world?",
      options: ["Sahara Desert", "Arabian Desert", "Gobi Desert", "Antarctica"],
      correctAnswer: "Antarctica",
    },
    {
      question: "In which year did World War II end?",
      options: ["1943", "1945", "1947", "1950"],
      correctAnswer: "1945",
    },
    {
      question: "Which is the smallest prime number?",
      options: ["Zero", "One", "Two", "Three"],
      correctAnswer: "Two",
    },
    {
      question: "What is the official language of Brazil?",
      options: ["Spanish", "Portuguese", "French", "Italian"],
      correctAnswer: "Portuguese",
    },
    {
      question: "Who is known as the 'Father of Computers'?",
      options: ["Alan Turing", "Charles Babbage", "Bill Gates", "Steve Jobs"],
      correctAnswer: "Charles Babbage",
    },
    {
      question: "Which country is known as the 'Land of the Rising Sun'?",
      options: ["China", "Japan", "Korea", "Vietnam"],
      correctAnswer: "Japan",
    },
    {
      question: "What is the largest organ in the human body?",
      options: ["Heart", "Brain", "Liver", "Skin"],
      correctAnswer: "Skin",
    },
    {
      question: "Who wrote 'To Kill a Mockingbird'?",
      options: [
        "George Orwell",
        "Harper Lee",
        "J.K. Rowling",
        "Ernest Hemingway",
      ],
      correctAnswer: "Harper Lee",
    },
    {
      question: "What is the capital of Canada?",
      options: ["Toronto", "Vancouver", "Ottawa", "Montreal"],
      correctAnswer: "Ottawa",
    },
    {
      question: "What is the capital of Australia?",
      options: ["Sydney", "Melbourne", "Canberra", "Brisbane"],
      correctAnswer: "Canberra",
    },
  ],

  Sports: [
    {
      question:
        "Who is the only boxer to win world titles in eight different weight divisions?",
      options: [
        "Floyd Mayweather Jr.",
        "Manny Pacquiao",
        "Muhammad Ali",
        "Mike Tyson",
      ],
      correctAnswer: "Manny Pacquiao",
    },
    {
      question: "In which city did the 2016 Summer Olympics take place?",
      options: ["Rio de Janeiro", "Tokyo", "London", "Beijing"],
      correctAnswer: "Rio de Janeiro",
    },
    {
      question:
        "What is the term for a hole completed in one stroke under par in golf?",
      options: ["Bogey", "Eagle", "Birdie", "Albatross"],
      correctAnswer: "Birdie",
    },
    {
      question:
        "Which Formula 1 team has the most Constructors' Championships?",
      options: ["Ferrari", "Mercedes", "Red Bull Racing", "McLaren"],
      correctAnswer: "Ferrari",
    },
    {
      question:
        "What is the name of the trophy awarded in The Ashes cricket series between England and Australia?",
      options: ["Wisden Trophy", "Border-Gavaskar Trophy", "The Urn", "Mace"],
      correctAnswer: "The Urn",
    },
    {
      question: "What surface is the French Open tennis tournament played on?",
      options: ["Grass", "Clay", "Hard Court", "Carpet"],
      correctAnswer: "Clay",
    },
    {
      question: "In which sport would you perform a triple axel?",
      options: ["Figure Skating", "Ski Jumping", "Ice Hockey", "Bobsleigh"],
      correctAnswer: "Figure Skating",
    },
    {
      question: "What is the highest individual score in a Test cricket match?",
      options: ["334", "365", "400", "501"],
      correctAnswer: "400",
    },
    {
      question:
        "Which tennis player has won the most Grand Slam singles titles?",
      options: [
        "Serena Williams",
        "Roger Federer",
        "Rafael Nadal",
        "Novak Djokovic",
      ],
      correctAnswer: "Serena Williams",
    },
    {
      question: "In which year did the modern Olympics begin?",
      options: ["1886", "1896", "1906", "1916"],
      correctAnswer: "1896",
    },
    {
      question: "Who won the FIFA Women's World Cup in 2019?",
      options: ["USA", "Germany", "France", "Netherlands"],
      correctAnswer: "USA",
    },
    {
      question: "Which country has won the most Olympic gold medals?",
      options: ["USA", "China", "Russia", "Germany"],
      correctAnswer: "USA",
    },
    {
      question: "What is the national sport of Japan?",
      options: ["Judo", "Sumo Wrestling", "Karate", "Kendo"],
      correctAnswer: "Sumo Wrestling",
    },
    {
      question: "Which horse won the Triple Crown in 2018?",
      options: ["Justify", "American Pharoah", "Secretariat", "Seattle Slew"],
      correctAnswer: "Justify",
    },
    {
      question: "In which country did the martial art of Taekwondo originate?",
      options: ["Japan", "China", "South Korea", "Thailand"],
      correctAnswer: "South Korea",
    },
    {
      question: "Who holds the record for the most career home runs in MLB?",
      options: ["Babe Ruth", "Barry Bonds", "Hank Aaron", "Willie Mays"],
      correctAnswer: "Barry Bonds",
    },
    {
      question: "Which city hosted the 2012 Summer Olympics?",
      options: ["Beijing", "Sydney", "London", "Athens"],
      correctAnswer: "London",
    },
    {
      question: "Which NFL team has won the most Super Bowl championships?",
      options: [
        "New England Patriots",
        "Pittsburgh Steelers",
        "Dallas Cowboys",
        "Green Bay Packers",
      ],
      correctAnswer: "Pittsburgh Steelers",
    },
    {
      question:
        "In which year did the first modern Winter Olympics take place?",
      options: ["1924", "1936", "1948", "1956"],
      correctAnswer: "1924",
    },
    {
      question: "Who won the 2021 UEFA Champions League?",
      options: ["Real Madrid", "Manchester City", "Chelsea", "Bayern Munich"],
      correctAnswer: "Chelsea",
    },
  ],
  Science: [
    {
      question: "What is the chemical symbol for gold?",
      options: ["Au", "Ag", "Fe", "Hg"],
      correctAnswer: "Au",
    },
    {
      question: "Who co-founded Microsoft along with Bill Gates?",
      options: ["Steve Jobs", "Paul Allen", "Elon Musk", "Mark Zuckerberg"],
      correctAnswer: "Paul Allen",
    },
    {
      question: "What does the acronym 'DNA' stand for?",
      options: [
        "Deoxyribonucleic Acid",
        "Digital Network Architecture",
        "Data and Analysis",
        "Distributed Network Application",
      ],
      correctAnswer: "Deoxyribonucleic Acid",
    },
    {
      question:
        "What is the chemical process by which plants make their own food using sunlight?",
      options: [
        "Photosynthesis",
        "Respiration",
        "Transpiration",
        "Fermentation",
      ],
      correctAnswer: "Photosynthesis",
    },
    {
      question: "In what year was the first iPhone released?",
      options: ["2005", "2007", "2010", "2012"],
      correctAnswer: "2007",
    },
    {
      question: "What is the largest planet in our solar system?",
      options: ["Mercury", "Venus", "Earth", "Jupiter"],
      correctAnswer: "Jupiter",
    },
    {
      question: "Who is known as the father of modern physics?",
      options: [
        "Isaac Newton",
        "Albert Einstein",
        "Galileo Galilei",
        "Niels Bohr",
      ],
      correctAnswer: "Albert Einstein",
    },
    {
      question: "What is the atomic number of carbon?",
      options: ["4", "6", "8", "12"],
      correctAnswer: "6",
    },
    {
      question:
        "Which programming language was developed by James Gosling at Sun Microsystems in the 1990s?",
      options: ["Python", "Java", "C++", "Ruby"],
      correctAnswer: "Java",
    },
    {
      question:
        "What is the process by which green plants make their own food using sunlight?",
      options: ["Photosynthesis", "Respiration", "Fermentation", "Combustion"],
      correctAnswer: "Photosynthesis",
    },
    {
      question: "What is the chemical symbol for gold?",
      options: ["Au", "Ag", "Fe", "Hg"],
      correctAnswer: "Au",
    },
    {
      question: "Who co-founded Microsoft along with Bill Gates?",
      options: ["Steve Jobs", "Paul Allen", "Elon Musk", "Mark Zuckerberg"],
      correctAnswer: "Paul Allen",
    },
    {
      question: "What does the acronym 'DNA' stand for?",
      options: [
        "Deoxyribonucleic Acid",
        "Digital Network Architecture",
        "Data and Analysis",
        "Distributed Network Application",
      ],
      correctAnswer: "Deoxyribonucleic Acid",
    },
    {
      question:
        "What is the chemical process by which plants make their own food using sunlight?",
      options: [
        "Photosynthesis",
        "Respiration",
        "Transpiration",
        "Fermentation",
      ],
      correctAnswer: "Photosynthesis",
    },
    {
      question: "In what year was the first iPhone released?",
      options: ["2005", "2007", "2010", "2012"],
      correctAnswer: "2007",
    },
    {
      question: "What is the largest planet in our solar system?",
      options: ["Mercury", "Venus", "Earth", "Jupiter"],
      correctAnswer: "Jupiter",
    },
    {
      question: "Who is known as the father of modern physics?",
      options: [
        "Isaac Newton",
        "Albert Einstein",
        "Galileo Galilei",
        "Niels Bohr",
      ],
      correctAnswer: "Albert Einstein",
    },
    {
      question: "What is the atomic number of carbon?",
      options: ["4", "6", "8", "12"],
      correctAnswer: "6",
    },
    {
      question:
        "Which programming language was developed by James Gosling at Sun Microsystems in the 1990s?",
      options: ["Python", "Java", "C++", "Ruby"],
      correctAnswer: "Java",
    },
    {
      question:
        "What is the process by which green plants make their own food using sunlight?",
      options: ["Photosynthesis", "Respiration", "Fermentation", "Combustion"],
      correctAnswer: "Photosynthesis",
    },
  ],
  History: [
    {
      question: "In which year did the Titanic sink?",
      options: ["1912", "1920", "1905", "1931"],
      correctAnswer: "1912",
    },
    {
      question: "Who was the first President of the United States?",
      options: [
        "Thomas Jefferson",
        "George Washington",
        "John Adams",
        "James Madison",
      ],
      correctAnswer: "George Washington",
    },
    {
      question: "What ancient wonder was located in the city of Alexandria?",
      options: [
        "Great Wall of China",
        "Colossus of Rhodes",
        "Hanging Gardens of Babylon",
        "Lighthouse of Alexandria",
      ],
      correctAnswer: "Lighthouse of Alexandria",
    },
    {
      question:
        "Which famous speech began with the words 'Four score and seven years ago'?",
      options: [
        "Martin Luther King Jr.'s 'I Have a Dream'",
        "John F. Kennedy's 'Ask not what your country...'",
        "Abraham Lincoln's Gettysburg Address",
        "Winston Churchill's 'We shall fight on the beaches'",
      ],
      correctAnswer: "Abraham Lincoln's Gettysburg Address",
    },
    {
      question: "In what year did World War I begin?",
      options: ["1905", "1914", "1923", "1939"],
      correctAnswer: "1914",
    },
    {
      question:
        "Who was the first emperor of China, known for the Terracotta Army?",
      options: [
        "Mao Zedong",
        "Emperor Qin Shi Huang",
        "Sun Yat-sen",
        "Emperor Wu of Han",
      ],
      correctAnswer: "Emperor Qin Shi Huang",
    },
    {
      question: "Which city was the capital of the Byzantine Empire?",
      options: ["Rome", "Constantinople", "Athens", "Alexandria"],
      correctAnswer: "Constantinople",
    },
    {
      question: "What event marked the beginning of the French Revolution?",
      options: [
        "Storming of the Bastille",
        "Execution of Louis XVI",
        "Reign of Terror",
        "Napoleon's rise to power",
      ],
      correctAnswer: "Storming of the Bastille",
    },
    {
      question: "Who was the leader of the Soviet Union during World War II?",
      options: [
        "Vladimir Putin",
        "Joseph Stalin",
        "Leon Trotsky",
        "Mikhail Gorbachev",
      ],
      correctAnswer: "Joseph Stalin",
    },
    {
      question: "Which ancient civilization built the city of Machu Picchu?",
      options: ["Maya", "Inca", "Aztec", "Egyptian"],
      correctAnswer: "Inca",
    },
    {
      question: "In which year did Christopher Columbus first reach America?",
      options: ["1492", "1500", "1520", "1540"],
      correctAnswer: "1492",
    },
    {
      question: "Who was the first President of the United States?",
      options: [
        "Thomas Jefferson",
        "George Washington",
        "John Adams",
        "James Madison",
      ],
      correctAnswer: "George Washington",
    },
    {
      question: "What ancient wonder was located in the city of Alexandria?",
      options: [
        "Great Wall of China",
        "Colossus of Rhodes",
        "Hanging Gardens of Babylon",
        "Lighthouse of Alexandria",
      ],
      correctAnswer: "Lighthouse of Alexandria",
    },
    {
      question:
        "Which famous speech began with the words 'Four score and seven years ago'?",
      options: [
        "Martin Luther King Jr.'s 'I Have a Dream'",
        "John F. Kennedy's 'Ask not what your country...'",
        "Abraham Lincoln's Gettysburg Address",
        "Winston Churchill's 'We shall fight on the beaches'",
      ],
      correctAnswer: "Abraham Lincoln's Gettysburg Address",
    },
    {
      question: "In what year did World War I begin?",
      options: ["1905", "1914", "1923", "1939"],
      correctAnswer: "1914",
    },
    {
      question:
        "Who was the first emperor of China, known for the Terracotta Army?",
      options: [
        "Mao Zedong",
        "Emperor Qin Shi Huang",
        "Sun Yat-sen",
        "Emperor Wu of Han",
      ],
      correctAnswer: "Emperor Qin Shi Huang",
    },
    {
      question: "Which city was the capital of the Byzantine Empire?",
      options: ["Rome", "Constantinople", "Athens", "Alexandria"],
      correctAnswer: "Constantinople",
    },
    {
      question: "What event marked the beginning of the French Revolution?",
      options: [
        "Storming of the Bastille",
        "Execution of Louis XVI",
        "Reign of Terror",
        "Napoleon's rise to power",
      ],
      correctAnswer: "Storming of the Bastille",
    },
    {
      question: "Who was the leader of the Soviet Union during World War II?",
      options: [
        "Vladimir Putin",
        "Joseph Stalin",
        "Leon Trotsky",
        "Mikhail Gorbachev",
      ],
      correctAnswer: "Joseph Stalin",
    },
    {
      question: "Which ancient civilization built the city of Machu Picchu?",
      options: ["Maya", "Inca", "Aztec", "Egyptian"],
      correctAnswer: "Inca",
    },
  ],
  Anime: [
    {
      question: "Who is the creator of the anime 'Naruto'?",
      options: [
        "Masashi Kishimoto",
        "Hiro Mashima",
        "Tite Kubo",
        "Eiichiro Oda",
      ],
      correctAnswer: "Masashi Kishimoto",
    },
    {
      question: "What is the name of the main character in 'One Piece'?",
      options: [
        "Naruto Uzumaki",
        "Monkey D. Luffy",
        "Ichigo Kurosaki",
        "Gon Freecss",
      ],
      correctAnswer: "Monkey D. Luffy",
    },
    {
      question:
        "In 'Attack on Titan,' what are the giant humanoid creatures that threaten humanity called?",
      options: ["Titans", "Ogres", "Colossi", "Giants"],
      correctAnswer: "Titans",
    },
    {
      question: "Who is the protagonist in 'My Hero Academia'?",
      options: [
        "Izuku Midoriya",
        "Katsuki Bakugo",
        "Shoto Todoroki",
        "All Might",
      ],
      correctAnswer: "Izuku Midoriya",
    },
    {
      question:
        "Which anime features a high school student named Light Yagami who discovers a mysterious notebook with deadly powers?",
      options: ["Naruto", "Death Note", "Fullmetal Alchemist", "One Punch Man"],
      correctAnswer: "Death Note",
    },
    {
      question:
        "What is the name of the virtual reality MMORPG in 'Sword Art Online'?",
      options: ["Elder Tale", "Log Horizon", "ALfheim Online", "Aincrad"],
      correctAnswer: "Aincrad",
    },
    {
      question: "In 'Dragon Ball Z,' what is the name of Goku's son?",
      options: ["Gohan", "Vegeta", "Trunks", "Goten"],
      correctAnswer: "Gohan",
    },
    {
      question:
        "Which Studio Ghibli film follows the story of a young girl navigating a mysterious and magical world?",
      options: [
        "Spirited Away",
        "Princess Mononoke",
        "Howl's Moving Castle",
        "My Neighbor Totoro",
      ],
      correctAnswer: "Spirited Away",
    },
    {
      question:
        "What is the primary power of the Devil Fruit eaten by Monkey D. Luffy in 'One Piece'?",
      options: ["Fire", "Ice", "Rubber", "Invisibility"],
      correctAnswer: "Rubber",
    },
    {
      question:
        "In 'Fullmetal Alchemist,' what is the primary goal of the Elric brothers?",
      options: [
        "Finding the Philosopher's Stone",
        "Becoming State Alchemists",
        "Resurrecting their parents",
        "Becoming the strongest alchemists",
      ],
      correctAnswer: "Finding the Philosopher's Stone",
    },
    {
      question: "Who directed the anime film 'Your Name'?",
      options: [
        "Makoto Shinkai",
        "Hayao Miyazaki",
        "Mamoru Hosoda",
        "Isao Takahata",
      ],
      correctAnswer: "Makoto Shinkai",
    },
    {
      question: "What is the main theme of the anime 'Cowboy Bebop'?",
      options: [
        "Space Bounty Hunting",
        "Samurai Warriors",
        "High School Romance",
        "Superhero Adventures",
      ],
      correctAnswer: "Space Bounty Hunting",
    },
    {
      question: "In 'Naruto,' what is the name of Naruto's ninja village?",
      options: [
        "Hidden Leaf Village",
        "Hidden Sand Village",
        "Hidden Mist Village",
        "Hidden Cloud Village",
      ],
      correctAnswer: "Hidden Leaf Village",
    },
    {
      question: "Who is known as the 'Strongest Hero' in 'One Punch Man'?",
      options: ["Genos", "Mumen Rider", "Saitama", "Boros"],
      correctAnswer: "Saitama",
    },
    {
      question: "What is the setting of the anime 'Attack on Titan'?",
      options: [
        "Fantasy World",
        "Post-Apocalyptic Earth",
        "Cyberpunk City",
        "Underwater Kingdom",
      ],
      correctAnswer: "Post-Apocalyptic Earth",
    },
    {
      question:
        "What is the name of the magical school in 'Little Witch Academia'?",
      options: [
        "Luna Nova Academy",
        "Hogwarts School of Witchcraft and Wizardry",
        "Mahoutokoro School of Magic",
        "WizTech Institute",
      ],
      correctAnswer: "Luna Nova Academy",
    },
    {
      question:
        "Which character in 'Dragon Ball Z' can perform the Fusion Dance?",
      options: ["Vegeta", "Goku", "Piccolo", "Goten"],
      correctAnswer: "Goten",
    },
    {
      question:
        "What is the profession of the main character in 'My Hero Academia'?",
      options: ["Chef", "Hero", "Detective", "Pirate"],
      correctAnswer: "Hero",
    },
    {
      question: "In 'One Piece,' what is the ultimate goal of Monkey D. Luffy?",
      options: [
        "Become Pirate King",
        "Find One Piece",
        "Defeat Shanks",
        "Discover the Grand Line",
      ],
      correctAnswer: "Become Pirate King",
    },
    {
      question: "Who is the antagonist in 'Fullmetal Alchemist: Brotherhood'?",
      options: ["Scar", "Father", "Greed", "Envy"],
      correctAnswer: "Father",
    },
  ],
  MoviesAndTVShows: [
    {
      question: "Who directed the movie 'Inception'?",
      options: [
        "Christopher Nolan",
        "Quentin Tarantino",
        "Steven Spielberg",
        "James Cameron",
      ],
      correctAnswer: "Christopher Nolan",
    },
    {
      question:
        "Which TV show features a chemistry teacher turned methamphetamine manufacturer?",
      options: ["Breaking Bad", "The Sopranos", "The Wire", "Dexter"],
      correctAnswer: "Breaking Bad",
    },
    {
      question:
        "Who played the lead role in the movie 'The Shawshank Redemption'?",
      options: ["Morgan Freeman", "Tom Hanks", "Tim Robbins", "Robert De Niro"],
      correctAnswer: "Tim Robbins",
    },
    {
      question:
        "In the TV series 'Friends,' what is the name of Ross and Monica's sister?",
      options: ["Phoebe", "Rachel", "Janice", "Jill"],
      correctAnswer: "Rachel",
    },
    {
      question:
        "Which actor portrayed the character Tony Stark in the Marvel Cinematic Universe?",
      options: [
        "Chris Evans",
        "Chris Hemsworth",
        "Robert Downey Jr.",
        "Mark Ruffalo",
      ],
      correctAnswer: "Robert Downey Jr.",
    },
    {
      question: "What is the title of the first 'Harry Potter' movie?",
      options: [
        "Harry Potter and the Goblet of Fire",
        "Harry Potter and the Philosopher's Stone",
        "Harry Potter and the Prisoner of Azkaban",
        "Harry Potter and the Chamber of Secrets",
      ],
      correctAnswer: "Harry Potter and the Philosopher's Stone",
    },
    {
      question:
        "Which TV show features a character named Walter White who becomes a vigilante?",
      options: [
        "Dexter",
        "Breaking Bad",
        "The Walking Dead",
        "Better Call Saul",
      ],
      correctAnswer: "Breaking Bad",
    },
    {
      question: "Who directed the movie 'The Dark Knight'?",
      options: [
        "Christopher Nolan",
        "Tim Burton",
        "Zack Snyder",
        "Joss Whedon",
      ],
      correctAnswer: "Christopher Nolan",
    },
    {
      question:
        "In the TV series 'Stranger Things,' what is the name of Eleven's best friend?",
      options: ["Lucas", "Dustin", "Will", "Mike"],
      correctAnswer: "Mike",
    },
    {
      question: "Which film won the Academy Award for Best Picture in 2020?",
      options: ["Parasite", "1917", "Joker", "Once Upon a Time in Hollywood"],
      correctAnswer: "Parasite",
    },
    {
      question: "Who played the character Jack Dawson in the movie 'Titanic'?",
      options: ["Leonardo DiCaprio", "Brad Pitt", "Tom Cruise", "Johnny Depp"],
      correctAnswer: "Leonardo DiCaprio",
    },
    {
      question:
        "In the TV series 'Game of Thrones,' who is known as the 'Mother of Dragons'?",
      options: [
        "Sansa Stark",
        "Cersei Lannister",
        "Arya Stark",
        "Daenerys Targaryen",
      ],
      correctAnswer: "Daenerys Targaryen",
    },
    {
      question: "Which actor played the role of Neo in 'The Matrix' trilogy?",
      options: [
        "Keanu Reeves",
        "Hugo Weaving",
        "Lawrence Fishburne",
        "Carrie-Anne Moss",
      ],
      correctAnswer: "Keanu Reeves",
    },
    {
      question:
        "What is the name of the fictional African country in the movie 'Black Panther'?",
      options: ["Wakanda", "Zamunda", "Genovia", "Elbonia"],
      correctAnswer: "Wakanda",
    },
    {
      question:
        "In the TV series 'The Simpsons,' what is the name of the bartender in Moe's Tavern?",
      options: [
        "Moe Szyslak",
        "Barney Gumble",
        "Ned Flanders",
        "Apu Nahasapeemapetilon",
      ],
      correctAnswer: "Moe Szyslak",
    },
    {
      question: "Who directed the movie 'Pulp Fiction'?",
      options: [
        "Quentin Tarantino",
        "Martin Scorsese",
        "Steven Spielberg",
        "David Fincher",
      ],
      correctAnswer: "Quentin Tarantino",
    },
    {
      question:
        "In the TV series 'Breaking Bad,' what is the street name of the blue crystal meth?",
      options: ["Blue Dream", "Blue Ice", "Blue Magic", "Blue Sky"],
      correctAnswer: "Blue Sky",
    },
    {
      question:
        "Which actress played the character Katniss Everdeen in 'The Hunger Games' film series?",
      options: [
        "Emma Stone",
        "Jennifer Lawrence",
        "Scarlett Johansson",
        "Anne Hathaway",
      ],
      correctAnswer: "Jennifer Lawrence",
    },
    {
      question:
        "What is the name of the iconic fictional town in the TV series 'Twin Peaks'?",
      options: ["Riverdale", "Hawkins", "Twin Peaks", "Sunnydale"],
      correctAnswer: "Twin Peaks",
    },
    {
      question: "Who is the creator of the TV series 'The Office' (U.S.)?",
      options: [
        "Ricky Gervais",
        "Greg Daniels",
        "Steve Carell",
        "Mindy Kaling",
      ],
      correctAnswer: "Greg Daniels",
    },
  ],
  Literature: [
    {
      question: "Who wrote the play 'Romeo and Juliet'?",
      options: [
        "Charles Dickens",
        "William Shakespeare",
        "Jane Austen",
        "Mark Twain",
      ],
      correctAnswer: "William Shakespeare",
    },
    {
      question:
        "Which novel begins with the line, 'It was the best of times, it was the worst of times'?",
      options: [
        "Pride and Prejudice",
        "Great Expectations",
        "A Tale of Two Cities",
        "Jane Eyre",
      ],
      correctAnswer: "A Tale of Two Cities",
    },
    {
      question: "Who is the author of 'To Kill a Mockingbird'?",
      options: [
        "George Orwell",
        "Harper Lee",
        "J.K. Rowling",
        "Ernest Hemingway",
      ],
      correctAnswer: "Harper Lee",
    },
    {
      question:
        "In which Shakespearean play does the character Ophelia appear?",
      options: ["Macbeth", "Hamlet", "Othello", "King Lear"],
      correctAnswer: "Hamlet",
    },
    {
      question: "What is the setting of the novel '1984' by George Orwell?",
      options: [
        "Dystopian Future",
        "Victorian England",
        "Renaissance Italy",
        "Medieval Japan",
      ],
      correctAnswer: "Dystopian Future",
    },
    {
      question: "Who wrote the novel 'One Hundred Years of Solitude'?",
      options: [
        "Gabriel Garcia Marquez",
        "F. Scott Fitzgerald",
        "Jorge Luis Borges",
        "Isabel Allende",
      ],
      correctAnswer: "Gabriel Garcia Marquez",
    },
    {
      question:
        "What literary genre does 'The Great Gatsby' by F. Scott Fitzgerald belong to?",
      options: ["Science Fiction", "Romance", "Mystery", "Tragedy"],
      correctAnswer: "Romance",
    },
    {
      question:
        "Who is the protagonist in 'The Catcher in the Rye' by J.D. Salinger?",
      options: [
        "Holden Caulfield",
        "Jay Gatsby",
        "Scout Finch",
        "Winston Smith",
      ],
      correctAnswer: "Holden Caulfield",
    },
    {
      question:
        "In the play 'Macbeth,' what three witches predict Macbeth's future?",
      options: [
        "Weird Sisters",
        "Enchanting Witches",
        "Sorcerer Siblings",
        "Magic Maidens",
      ],
      correctAnswer: "Weird Sisters",
    },
    {
      question:
        "What is the main theme of the novel 'Brave New World' by Aldous Huxley?",
      options: ["Totalitarianism", "Dystopia", "Utopia", "Survival"],
      correctAnswer: "Dystopia",
    },
    {
      question: "Who wrote the poem 'The Raven'?",
      options: [
        "Edgar Allan Poe",
        "Robert Frost",
        "Emily Dickinson",
        "Langston Hughes",
      ],
      correctAnswer: "Edgar Allan Poe",
    },
    {
      question: "What is the title of Jane Austen's final completed novel?",
      options: [
        "Sense and Sensibility",
        "Pride and Prejudice",
        "Emma",
        "Persuasion",
      ],
      correctAnswer: "Persuasion",
    },
    {
      question: "Which Shakespearean play features the character Lady Macbeth?",
      options: ["Romeo and Juliet", "Othello", "Macbeth", "King Lear"],
      correctAnswer: "Macbeth",
    },
    {
      question: "Who wrote the epic poem 'Paradise Lost'?",
      options: ["John Milton", "Homer", "Virgil", "Dante Alighieri"],
      correctAnswer: "John Milton",
    },
    {
      question:
        "In 'The Lord of the Rings,' who is the author of the fictional Red Book of Westmarch?",
      options: ["Frodo Baggins", "Bilbo Baggins", "Gandalf", "Aragorn"],
      correctAnswer: "Bilbo Baggins",
    },
    {
      question: "Which Russian author wrote 'Crime and Punishment'?",
      options: [
        "Fyodor Dostoevsky",
        "Leo Tolstoy",
        "Anton Chekhov",
        "Alexander Pushkin",
      ],
      correctAnswer: "Fyodor Dostoevsky",
    },
    {
      question: "Who is the author of 'The Canterbury Tales'?",
      options: [
        "Geoffrey Chaucer",
        "Sir Thomas More",
        "John Donne",
        "William Langland",
      ],
      correctAnswer: "Geoffrey Chaucer",
    },
    {
      question:
        "Which novel is set during the Russian Revolution and is a satire of the Soviet Union?",
      options: ["Animal Farm", "Brave New World", "1984", "Fahrenheit 451"],
      correctAnswer: "Animal Farm",
    },
    {
      question: "Who wrote the Southern Gothic novel 'To Kill a Mockingbird'?",
      options: [
        "William Faulkner",
        "Harper Lee",
        "Flannery O'Connor",
        "Tennessee Williams",
      ],
      correctAnswer: "Harper Lee",
    },
    {
      question:
        "In 'Frankenstein' by Mary Shelley, what is the name of Victor Frankenstein's creature?",
      options: ["Igor", "The Monster", "Erik", "Adam"],
      correctAnswer: "The Monster",
    },
  ],
  FoodAndCuisine: [
    {
      question: "Which country is known for inventing pizza?",
      options: ["Italy", "United States", "Spain", "Greece"],
      correctAnswer: "Italy",
    },
    {
      question: "What is the main ingredient in guacamole?",
      options: ["Tomatoes", "Avocado", "Onions", "Lime"],
      correctAnswer: "Avocado",
    },
    {
      question: "In which country did sushi originate?",
      options: ["Japan", "China", "South Korea", "Vietnam"],
      correctAnswer: "Japan",
    },
    {
      question:
        "What is the primary ingredient in the Indian dish 'Paneer Tikka'?",
      options: ["Chicken", "Paneer", "Tofu", "Lamb"],
      correctAnswer: "Paneer",
    },
    {
      question: "Which spice is known as 'The Queen of Spices'?",
      options: ["Cumin", "Turmeric", "Cardamom", "Cinnamon"],
      correctAnswer: "Cardamom",
    },
    {
      question:
        "What is the traditional Japanese soup with a soybean base called?",
      options: ["Miso Soup", "Tom Yum", "Pho", "Laksa"],
      correctAnswer: "Miso Soup",
    },
    {
      question:
        "Which fruit is known as the 'king of fruits' and has a strong odor?",
      options: ["Mango", "Durian", "Pineapple", "Banana"],
      correctAnswer: "Durian",
    },
    {
      question: "What is the main ingredient in the Mexican dish 'Guacamole'?",
      options: ["Avocado", "Tomato", "Onion", "Cilantro"],
      correctAnswer: "Avocado",
    },
    {
      question: "Which Italian pasta is shaped like small rice grains?",
      options: ["Fusilli", "Orzo", "Farfalle", "Cavatelli"],
      correctAnswer: "Orzo",
    },
    {
      question:
        "What is the main ingredient in the Middle Eastern dish 'Hummus'?",
      options: ["Chickpeas", "Eggplant", "Yogurt", "Lentils"],
      correctAnswer: "Chickpeas",
    },
    {
      question:
        "Which cuisine is known for its emphasis on fresh and raw ingredients, including sushi?",
      options: ["Mediterranean", "Japanese", "Indian", "Mexican"],
      correctAnswer: "Japanese",
    },
    {
      question: "What is the name of the thin pancake in French cuisine?",
      options: ["Croissant", "Baguette", "Crêpe", "Eclair"],
      correctAnswer: "Crêpe",
    },
    {
      question: "Which type of pasta is shaped like small rice grains?",
      options: ["Rigatoni", "Couscous", "Orzo", "Penne"],
      correctAnswer: "Orzo",
    },
    {
      question: "What is the national dish of Japan?",
      options: ["Sushi", "Tempura", "Ramen", "Sashimi"],
      correctAnswer: "Sushi",
    },
    {
      question:
        "Which type of bread is often used in traditional Mexican cuisine for making tortillas?",
      options: ["Baguette", "Sourdough", "Naan", "Tortilla"],
      correctAnswer: "Tortilla",
    },
    {
      question: "What is the primary ingredient in the Indian dish 'Biryani'?",
      options: ["Chicken", "Beef", "Lamb", "Rice"],
      correctAnswer: "Rice",
    },
    {
      question:
        "Which vegetable is the main ingredient in the Italian dish 'Risotto'?",
      options: ["Tomato", "Zucchini", "Mushroom", "Arborio Rice"],
      correctAnswer: "Arborio Rice",
    },
    {
      question:
        "What is the traditional Turkish dessert made of thin layers of pastry, nuts, and honey?",
      options: ["Baklava", "Kunafa", "Halva", "Lokum"],
      correctAnswer: "Baklava",
    },
    {
      question: "Which spice is known as the 'Queen of Herbs'?",
      options: ["Basil", "Thyme", "Rosemary", "Oregano"],
      correctAnswer: "Basil",
    },
    {
      question:
        "Which type of pasta is shaped like small rice grains and is often used in soups?",
      options: ["Orzo", "Fusilli", "Farfalle", "Penne"],
      correctAnswer: "Orzo",
    },
  ],
  Mythology: [
    {
      question: "In Greek mythology, who is the king of the gods?",
      options: ["Apollo", "Zeus", "Hades", "Poseidon"],
      correctAnswer: "Zeus",
    },
    {
      question: "Which Norse god is associated with thunder and lightning?",
      options: ["Loki", "Odin", "Thor", "Frigg"],
      correctAnswer: "Thor",
    },
    {
      question: "Who is the Egyptian god of the afterlife?",
      options: ["Osiris", "Anubis", "Ra", "Isis"],
      correctAnswer: "Osiris",
    },
    {
      question: "In Hindu mythology, who is the god of destruction?",
      options: ["Vishnu", "Shiva", "Brahma", "Kali"],
      correctAnswer: "Shiva",
    },
    {
      question:
        "Which Greek hero fought against the Trojans in the Trojan War?",
      options: ["Achilles", "Hector", "Perseus", "Theseus"],
      correctAnswer: "Achilles",
    },
    {
      question: "In Roman mythology, who is the goddess of love and beauty?",
      options: ["Venus", "Juno", "Minerva", "Diana"],
      correctAnswer: "Venus",
    },
    {
      question: "Who is the Chinese god of wealth and prosperity?",
      options: ["Hotei", "Fuji", "Caishen", "Yama"],
      correctAnswer: "Caishen",
    },
    {
      question:
        "In Norse mythology, what is the name of the world inhabited by humans?",
      options: ["Midgard", "Asgard", "Niflheim", "Alfheim"],
      correctAnswer: "Midgard",
    },
    {
      question: "Which Hindu goddess is the symbol of knowledge and wisdom?",
      options: ["Lakshmi", "Saraswati", "Parvati", "Durga"],
      correctAnswer: "Saraswati",
    },
    {
      question: "Who is the trickster figure in Native American mythology?",
      options: ["Coyote", "Raven", "Hare", "Spider Woman"],
      correctAnswer: "Coyote",
    },
    {
      question: "In Egyptian mythology, who is the god of the sun?",
      options: ["Ra", "Horus", "Anubis", "Thoth"],
      correctAnswer: "Ra",
    },
    {
      question:
        "Which legendary bird is reborn from its ashes in various mythologies?",
      options: ["Phoenix", "Griffin", "Harpy", "Banshee"],
      correctAnswer: "Phoenix",
    },
    {
      question: "Who is the king of the sea in Greek mythology?",
      options: ["Poseidon", "Hades", "Zeus", "Ares"],
      correctAnswer: "Poseidon",
    },
    {
      question: "In Aztec mythology, who is the feathered serpent god?",
      options: ["Quetzalcoatl", "Huitzilopochtli", "Tezcatlipoca", "Xolotl"],
      correctAnswer: "Quetzalcoatl",
    },
    {
      question: "Which Roman god is equivalent to the Greek god Hermes?",
      options: ["Mercury", "Mars", "Jupiter", "Neptune"],
      correctAnswer: "Mercury",
    },
    {
      question: "Who is the monkey king in Chinese mythology?",
      options: ["Sun Wukong", "Zhu Bajie", "Xuanzang", "Sha Wujing"],
      correctAnswer: "Sun Wukong",
    },
    {
      question:
        "In Celtic mythology, what is the name of the god of the underworld?",
      options: ["Dagda", "Morrigan", "Cernunnos", "Arawn"],
      correctAnswer: "Arawn",
    },
    {
      question: "Who is the queen of the underworld in Greek mythology?",
      options: ["Persephone", "Hecate", "Demeter", "Hera"],
      correctAnswer: "Persephone",
    },
    {
      question:
        "In Japanese mythology, what is the name of the god of the sea and storms?",
      options: ["Raijin", "Susanoo", "Amaterasu", "Inari"],
      correctAnswer: "Susanoo",
    },
  ],
};
// Simulated function to get questions based on the selected category
// Replace this with actual logic or API calls

function changecolor(event) {
  event.target.style = "background-color:#91c291;border: 2px solid #91c291";
  event.target.children[1].style = "color:white";
  event.target.children[1].style.visibility = "visible";
}
function shuffleQuestions(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    // Swap array[i] and array[j]
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}
let i = 0;
let correctAnswers;
function loadQuestions(selectedCategory) {
  let category = document.getElementsByClassName("title-category")[0];
  selectedcategory = selectedCategory;
  category.innerText = selectedCategory;
  console.log(i);
  correctAnswers = 0;
  document.getElementById("category-container").style.display = "none";
  document.getElementsByClassName("question-container")[0].style.display =
    "block";
  document.getElementsByClassName("question-box")[0].style.display = "block";
  document.getElementsByClassName("timer-box")[0].style.display = "block";

  let questionbox = document.getElementsByClassName("question-box")[0];
  questionbox.style.display = "block";
  listOfQuestions = shuffleQuestions(questionList[selectedCategory]);
  let lines = document.getElementsByClassName("lines")[0];
  lines.innerHTML += `<div class="progress-line line-${i}"><hr></div>`;
  questionbox.innerHTML = `
            
            <div class="question">
            ${i + 1}. ${listOfQuestions[i].question}
            </div>
            <div class="options">
                <div id="option-1" class="option" onclick="checkAnswer(${i},${0})">
                A. ${listOfQuestions[i].options[0]}
                </div>
                <div id="option-2" class="option" onclick="checkAnswer(${i},${1})">
                B. ${listOfQuestions[i].options[1]}
                </div>
                <div id="option-3" class="option" onclick="checkAnswer(${i},${2})">
                C. ${listOfQuestions[i].options[2]}
                </div>
                <div id="option-4" class="option" onclick="checkAnswer(${i},${3})">
                D. ${listOfQuestions[i].options[3]}
                </div>
            </div>
           <div class="next-skip">
            
            <button class="skip" onclick="updateQuestions(${i})">Skip<i class="fa-solid fa-forward"></i></button>
            <button class="quit" onclick="goBack()">Quit </button>
            </div>
        `;
  countdownFlag = true;
  countdown();
}

// Set the initial time in seconds

// Function to be called every second

// Start the timer
let timeInSeconds = 59;
let countdownFlag = true; // Flag to track whether countdown is active
let timerId; // Variable to store the timer ID for clearing

// Function to update the timer display
function updateTimer() {
  const minutes = Math.floor(timeInSeconds / 60);
  const seconds = timeInSeconds % 60;

  const timer = document.getElementsByClassName("timer-box")[0];
  timer.innerText =
    "Time left: " + minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
}
function playAudio() {
  const audio = document.getElementById("alertAudio");
  audio.play();
}
function stopAudio() {
  const audio = document.getElementById("alertAudio");
  audio.pause();
  audio.currentTime = 0; // Reset the audio to the beginning
}
// Function to be called every second
function countdown() {
  updateTimer();

  if (timeInSeconds > 0 && countdownFlag) {
    if (timeInSeconds < 10) {
      playAudio();
      const timer = document.getElementsByClassName("timer-box")[0];
      timer.style.color = "rgb(233, 57, 57)";
    }
    // Decrease the time by 1 second
    timeInSeconds--;
    // Call the countdown function again after 1000 milliseconds (1 second)
    timerId = setTimeout(countdown, 1000);
  } else {
    stopAudio();
    const timer = document.getElementsByClassName("timer-box")[0];
    timer.innerText = "Time's up!"; // Timer has reached zero
    updateQuestions();
  }
}

// Function to pause the timer
function pauseTimer() {
  countdownFlag = false;
  clearTimeout(timerId); // Clear the countdown timer
}

// Function to resume the timer
function resumeTimer() {
  countdownFlag = true;
  timeInSeconds = 59;
  countdown(); // Start the countdown again
}
function checkAnswer(questionIndex, optionNumber) {
  if (!countdownFlag) {
    return; // Do nothing if the countdown is already stopped
  }

  pauseTimer(); // Pause the timer

  // Your existing code to check the answer and update the UI
  const selectedOption = listOfQuestions[questionIndex].options[optionNumber];
  const correctAnswer = listOfQuestions[questionIndex].correctAnswer;
  const optionElement = document.getElementById(`option-${optionNumber + 1}`);
  let newline = document.getElementsByClassName(`line-${i}`)[0];

  if (selectedOption === correctAnswer) {
    optionElement.style.backgroundColor = "rgb(82, 194, 82)";
    optionElement.style.border = "1px solid rgb(82, 194, 82)";
    optionElement.innerHTML += `<i class="fa-solid fa-circle-check"></i>`;
    const timer = document.getElementsByClassName("timer-box")[0];
    timer.style.color = "rgb(82, 194, 82)"; // Correct answer color
    correctAnswers++;
    newline.classList.add("correct");
  } else {
    optionElement.style.backgroundColor = "rgb(233, 57, 57)";
    optionElement.style.border = "1px solid rgb(233, 57, 57)";
    optionElement.innerHTML += `<i class="fa-solid fa-circle-xmark"></i>`;
    newline.classList.add("incorrect");
    for (let k = 0; k < 4; k++) {
      let newSelectedOption = listOfQuestions[questionIndex].options[k];
      if (newSelectedOption === listOfQuestions[questionIndex].correctAnswer) {
        let newOptionElement = document.getElementById(`option-${k + 1}`);
        newOptionElement.style.backgroundColor = "rgb(82, 194, 82)";
        newOptionElement.style.border = "1px solid rgb(82, 194, 82)";
        newOptionElement.innerHTML += `<i class="fa-solid fa-circle-check"></i>`;
      }
    }
    const timer = document.getElementsByClassName("timer-box")[0];
    timer.style.color = "rgb(233, 57, 57)"; // Correct answer color

    // Incorrect answer color
  }

  // Additional code as needed...
  let skipNext = document.getElementsByClassName("next-skip")[0];
  skipNext.innerHTML = `<button class="next" onclick="updateQuestions(${i})">
    Next<i class="fa-solid fa-arrow-right"></i>
  </button>`;
  if (i === 9) {
    skipNext.innerHTML = `<button class="next" onclick="updateQuestions(${i})">
    Submit<i class="fa-solid fa-arrow-right"></i>
  </button>`;
  }
  // Resume the timer (you might want to do this after a delay or upon user interaction)
  // Example: Resume after a 2-second delay
}
function updateQuestions() {
  const timer = document.getElementsByClassName("timer-box")[0];
  timer.style.color = "white";
  i += 1;
  pauseTimer();

  if (i < 10) {
    let questionbox = document.getElementsByClassName("question-box")[0];
    let lines = document.getElementsByClassName("lines")[0];
    lines.innerHTML += `<div class="progress-line line-${i}"><hr></div>`;
    questionbox.innerHTML = `
            
            <div class="question">
             ${i + 1}. ${listOfQuestions[i].question}
            </div>
            <div class="options">
                <div id="option-1" class="option" onclick="checkAnswer(${i},${0})">
                A. ${listOfQuestions[i].options[0]}
                </div>
                <div id="option-2" class="option" onclick="checkAnswer(${i},${1})">
                B. ${listOfQuestions[i].options[1]}
                </div>
                <div id="option-3" class="option" onclick="checkAnswer(${i},${2})">
                C. ${listOfQuestions[i].options[2]}
                </div>
                <div id="option-4" class="option" onclick="checkAnswer(${i},${3})">
                D. ${listOfQuestions[i].options[3]}
                </div>
            </div>

            <div class="next-skip">
            
            <button class="skip" onclick="updateQuestions(${i})">Skip<i class="fa-solid fa-forward"></i></button>
             <button class="quit" onclick="goBack()">Quit </button>
            </div>
        `;
    let skipNext = document.getElementsByClassName("next-skip")[0];

    if (i === 9) {
      skipNext.innerHTML = `<button class="next" onclick="updateQuestions(${i})">
    Submit<i class="fa-solid fa-arrow-right"></i>
  </button>`;
    }
    resumeTimer();
  } else {
    const lines = document.getElementsByClassName("lines")[0];
    lines.innerHTML = ``;
    const timer = document.getElementsByClassName("timer-box")[0];
    timer.innerHTML = "";
    let questionbox = document.getElementsByClassName("question-box")[0];
    let category = document.getElementsByClassName("title-category")[0];
    category.innerHTML = ``;
    if (correctAnswers < 5) {
      questionbox.innerHTML = `<p>Unfortunately, you didn't pass the test this time. Don't be discouraged—A lower score doesn't define your abilities. Reflect on the questions you struggled with and strive for improvement</p>`;
    } else if (correctAnswers >= 5 && correctAnswers <= 7) {
      questionbox.innerHTML = `<p>Congratulations! You passed the test</p>`;
    } else if (correctAnswers >= 8 && correctAnswers <= 9) {
      questionbox.innerHTML = `<p>Congratulations on your impressive score! Keep up the excellent work and continue building on your success!</p>`;
    } else {
      questionbox.innerHTML = `<p>Brilliant work! A perfect score – you're unstoppable!</p>`;
    }
    questionbox.innerHTML += `<p>Score: ${correctAnswers}/10</p>
    
    <button class="goback" style="" onclick="goBack()">Go back</button>
    
    `;
    questionbox.style.color = "white";
  }
}

function goBack() {
  i = 0;
  let category = document.getElementsByClassName("title-category")[0];
  category.innerText = "";
  const lines = document.getElementsByClassName("lines")[0];
  lines.innerHTML = ``;

  const timer = document.getElementsByClassName("timer-box")[0];
  timer.innerHTML = "";
  timer.style.display = "none";

  const categoryContainer = document.getElementById("category-container");
  let questionbox = document.getElementsByClassName("question-container")[0];
  timeInSeconds = 59;
  pauseTimer();
  questionbox.style.display = "none";
  categoryContainer.style.display = "block";
}
