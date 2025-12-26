//* Computer Science Questions

const computerScienceQuestions = [
  {
    question: "What does CPU stand for?",
    answers: [
      { text: "Central Processing Unit", correct: true },
      { text: "Computer Personal Unit", correct: false },
      { text: "Central Program Unit", correct: false },
      { text: "Computer Processing Unit", correct: false },
    ],
    explanation: "The CPU (Central Processing Unit) is the 'brain' of the computer that executes instructions from programs. It performs arithmetic, logic, control, and input/output operations. Modern CPUs contain billions of transistors and can execute billions of instructions per second. The CPU works with RAM to process data and run applications."
  },
  {
    question: "Which programming language is known for its use in web development and has a coffee-related name?",
    answers: [
      { text: "Python", correct: false },
      { text: "Java", correct: true },
      { text: "C++", correct: false },
      { text: "Ruby", correct: false },
    ],
    explanation: "Java was created by Sun Microsystems in 1995 and named after Java coffee. It's a versatile, object-oriented language known for 'write once, run anywhere' capability through the Java Virtual Machine (JVM). While initially popular for web applets, Java is now widely used for enterprise applications, Android development, and backend systems."
  },
  {
    question: "What does RAM stand for?",
    answers: [
      { text: "Run Access Memory", correct: false },
      { text: "Read Access Memory", correct: false },
      { text: "Random Access Memory", correct: true },
      { text: "Rapid Access Memory", correct: false },
    ],
    explanation: "RAM (Random Access Memory) is volatile memory that stores data and programs currently in use. 'Random access' means any location can be accessed directly in constant time, unlike sequential storage. RAM is fast but loses all data when power is off. More RAM allows computers to run more programs simultaneously and handle larger datasets efficiently."
  },
  {
    question: "Which data structure follows the Last In, First Out (LIFO) principle?",
    answers: [
      { text: "Queue", correct: false },
      { text: "Array", correct: false },
      { text: "Tree", correct: false },
      { text: "Stack", correct: true },
    ],
    explanation: "A stack operates on the Last In, First Out (LIFO) principle, like a stack of plates—you add and remove from the top. Main operations are push (add) and pop (remove). Stacks are used in function call management, undo mechanisms, expression evaluation, and backtracking algorithms. Queues use FIFO (First In, First Out) instead."
  },
  {
    question: "What is the binary representation of the decimal number 8?",
    answers: [
      { text: "1000", correct: true },
      { text: "1010", correct: false },
      { text: "1100", correct: false },
      { text: "0111", correct: false },
    ],
    explanation: "In binary (base-2), 8 is represented as 1000. Each position represents a power of 2: from right to left, 2⁰=1, 2¹=2, 2²=4, 2³=8. So 1000 means (1×8) + (0×4) + (0×2) + (0×1) = 8. Binary is fundamental to computing because digital circuits use two states (on/off, 1/0)."
  },
  {
    question: "Which company developed the Java programming language?",
    answers: [
      { text: "Microsoft", correct: false },
      { text: "Sun Microsystems", correct: true },
      { text: "Apple", correct: false },
      { text: "IBM", correct: false },
    ],
    explanation: "Sun Microsystems developed Java in 1995, with James Gosling as the lead designer. Originally called Oak, it was renamed Java after Java coffee. Sun Microsystems was later acquired by Oracle Corporation in 2010. Java's platform independence and robust libraries made it one of the most popular programming languages worldwide."
  },
  {
    question: "What does HTML stand for?",
    answers: [
      { text: "High Tech Modern Language", correct: false },
      { text: "Home Tool Markup Language", correct: false },
      { text: "HyperText Markup Language", correct: true },
      { text: "Hyperlink and Text Markup Language", correct: false },
    ],
    explanation: "HTML (HyperText Markup Language) is the standard markup language for creating web pages. It uses tags to structure content, defining elements like headings, paragraphs, links, and images. HTML provides the skeleton of web pages, while CSS handles styling and JavaScript adds interactivity. Created by Tim Berners-Lee in 1991, HTML is fundamental to the World Wide Web."
  },
  {
    question: "Which sorting algorithm has the best average-case time complexity?",
    answers: [
      { text: "Bubble Sort", correct: false },
      { text: "Selection Sort", correct: false },
      { text: "Insertion Sort", correct: false },
      { text: "Quick Sort", correct: true },
    ],
    explanation: "Quick Sort has an average-case time complexity of O(n log n), making it one of the fastest sorting algorithms for most datasets. It uses a divide-and-conquer approach, selecting a pivot and partitioning elements around it. While its worst-case is O(n²), this is rare with good pivot selection. Merge Sort also has O(n log n) but requires more memory."
  },
  {
    question: "What is the maximum number that can be represented with 8 bits?",
    answers: [
      { text: "255", correct: true },
      { text: "256", correct: false },
      { text: "127", correct: false },
      { text: "128", correct: false },
    ],
    explanation: "With 8 bits, you can represent 2⁸ = 256 different values. For unsigned integers, this ranges from 0 to 255 (256 total values). Each bit doubles the possible values: 1 bit = 2 values, 2 bits = 4 values, 8 bits = 256 values. In binary, 255 is 11111111. For signed integers using two's complement, the range is -128 to 127."
  },
  {
    question: "Which protocol is used for transferring web pages?",
    answers: [
      { text: "FTP", correct: false },
      { text: "HTTP", correct: true },
      { text: "SMTP", correct: false },
      { text: "TCP", correct: false },
    ],
    explanation: "HTTP (HyperText Transfer Protocol) is the application protocol used for transmitting web pages and resources on the World Wide Web. It operates on a request-response model: clients (browsers) send HTTP requests, and servers return HTTP responses containing HTML, images, or other data. HTTPS adds encryption via SSL/TLS for secure communication."
  },
  {
    question: "What is the time complexity of binary search?",
    answers: [
      { text: "O(n)", correct: false },
      { text: "O(n²)", correct: false },
      { text: "O(log n)", correct: true },
      { text: "O(1)", correct: false },
    ],
    explanation: "Binary search has O(log n) time complexity because it repeatedly divides the search space in half. For a sorted array of n elements, binary search makes at most log₂(n) comparisons. For example, searching 1 million items takes about 20 comparisons. This makes binary search extremely efficient, but it requires the data to be sorted first."
  },
  {
    question: "Which database language is used to query relational databases?",
    answers: [
      { text: "Python", correct: false },
      { text: "JavaScript", correct: false },
      { text: "C++", correct: false },
      { text: "SQL", correct: true },
    ],
    explanation: "SQL (Structured Query Language) is the standard language for managing and querying relational databases. It allows you to SELECT (retrieve), INSERT (add), UPDATE (modify), and DELETE data, as well as create and modify database structures. Major database systems like MySQL, PostgreSQL, Oracle, and SQL Server all use SQL with slight variations."
  },
  {
    question: "What does API stand for?",
    answers: [
      { text: "Application Programming Interface", correct: true },
      { text: "Advanced Programming Interface", correct: false },
      { text: "Application Process Interface", correct: false },
      { text: "Automated Programming Interface", correct: false },
    ],
    explanation: "An API (Application Programming Interface) is a set of rules and protocols that allows different software applications to communicate with each other. APIs define methods and data formats for requesting services, enabling integration between systems. For example, a weather app uses a weather service's API to fetch current conditions. APIs are fundamental to modern software development."
  },
  {
    question: "Which data structure is used for breadth-first search?",
    answers: [
      { text: "Stack", correct: false },
      { text: "Queue", correct: true },
      { text: "Tree", correct: false },
      { text: "Hash Table", correct: false },
    ],
    explanation: "Breadth-first search (BFS) uses a queue (FIFO - First In, First Out) to explore nodes level by level. Starting from a root node, BFS visits all neighbors before moving to the next level. Queues ensure nodes are processed in the order they're discovered. BFS is used for shortest path finding, web crawling, and social network connections. Depth-first search uses a stack instead."
  },
  {
    question: "What is the result of 10 % 3 in most programming languages?",
    answers: [
      { text: "3", correct: false },
      { text: "0", correct: false },
      { text: "1", correct: true },
      { text: "10", correct: false },
    ],
    explanation: "The modulo operator (%) returns the remainder after division. 10 ÷ 3 = 3 with remainder 1, so 10 % 3 = 1. Modulo is useful for checking divisibility, cycling through arrays (using index % arrayLength), converting units, and many algorithmic problems. It's different from division: 10 / 3 gives the quotient (3 in integer division)."
  },
  {
    question: "Which programming paradigm does Python primarily support?",
    answers: [
      { text: "Only procedural", correct: false },
      { text: "Only functional", correct: false },
      { text: "Only object-oriented", correct: false },
      { text: "Multi-paradigm", correct: true },
    ],
    explanation: "Python is a multi-paradigm language supporting procedural (step-by-step instructions), object-oriented (classes and objects), and functional (first-class functions, lambda, map/filter/reduce) programming styles. This flexibility lets developers choose the most appropriate approach for each problem. Python's design philosophy emphasizes code readability with significant whitespace."
  },
  {
    question: "What does CSS stand for?",
    answers: [
      { text: "Cascading Style Sheets", correct: true },
      { text: "Computer Style Sheets", correct: false },
      { text: "Creative Style Sheets", correct: false },
      { text: "Colorful Style Sheets", correct: false },
    ],
    explanation: "CSS (Cascading Style Sheets) is the language used to style HTML documents, controlling layout, colors, fonts, spacing, and visual presentation. 'Cascading' refers to how styles are applied in priority order: inline styles override internal styles, which override external stylesheets. CSS separates content (HTML) from presentation, making websites more maintainable and responsive."
  },
  {
    question: "Which algorithm is used to find the shortest path in a weighted graph?",
    answers: [
      { text: "Bubble Sort", correct: false },
      { text: "Dijkstra's Algorithm", correct: true },
      { text: "Linear Search", correct: false },
      { text: "Merge Sort", correct: false },
    ],
    explanation: "Dijkstra's algorithm finds the shortest path from a source node to all other nodes in a weighted graph with non-negative edges. It uses a greedy approach, always selecting the unvisited node with the smallest distance. Time complexity is O((V+E) log V) with a priority queue. It's used in GPS navigation, network routing, and many optimization problems."
  },
  {
    question: "What is the base of the hexadecimal number system?",
    answers: [
      { text: "8", correct: false },
      { text: "10", correct: false },
      { text: "16", correct: true },
      { text: "2", correct: false },
    ],
    explanation: "Hexadecimal (hex) is base-16, using digits 0-9 and letters A-F (where A=10, B=11, ..., F=15). Each hex digit represents 4 bits (2⁴=16), making it compact for representing binary data. For example, byte 11111111 in binary equals FF in hex and 255 in decimal. Hex is widely used in programming for colors (#FF0000 = red), memory addresses, and debugging."
  },
  {
    question: "Which company created the C programming language?",
    answers: [
      { text: "Microsoft", correct: false },
      { text: "Apple", correct: false },
      { text: "Google", correct: false },
      { text: "Bell Labs", correct: true },
    ],
    explanation: "Dennis Ritchie created C at Bell Labs (AT&T) between 1972-1973. Originally developed for the Unix operating system, C became one of the most influential programming languages. Its efficiency, portability, and low-level control influenced many modern languages (C++, Java, C#, JavaScript). C is still widely used in operating systems, embedded systems, and performance-critical applications."
  },
  {
    question: "What is polymorphism in object-oriented programming?",
    answers: [
      { text: "Having multiple constructors", correct: false },
      { text: "Using the same interface for different data types", correct: true },
      { text: "Creating multiple objects", correct: false },
      { text: "Inheriting from multiple classes", correct: false },
    ],
    explanation: "Polymorphism ('many forms') allows objects of different types to be treated through the same interface. It enables a single function or method to work with different types. There are two types: compile-time (method overloading) and runtime (method overriding). For example, a draw() method works differently for Circle, Square, and Triangle objects, but all can be called the same way."
  },
  {
    question: "Which port number is commonly used for HTTP traffic?",
    answers: [
      { text: "21", correct: false },
      { text: "25", correct: false },
      { text: "80", correct: true },
      { text: "443", correct: false },
    ],
    explanation: "Port 80 is the default port for HTTP (unencrypted web) traffic. When you visit http://example.com, your browser connects to port 80 on the server. Other common ports: 443 (HTTPS/encrypted web), 21 (FTP), 22 (SSH), 25 (SMTP/email), 3306 (MySQL). Ports are 16-bit numbers (0-65535) that allow multiple services on one IP address."
  },
  {
    question: "What is the worst-case time complexity of bubble sort?",
    answers: [
      { text: "O(n)", correct: false },
      { text: "O(n log n)", correct: false },
      { text: "O(n²)", correct: true },
      { text: "O(log n)", correct: false },
    ],
    explanation: "Bubble sort has O(n²) worst-case and average-case time complexity because it uses nested loops, potentially comparing each element with every other element. For an array of n elements, it makes up to n² comparisons. While simple to understand and implement, bubble sort is inefficient for large datasets. It's mainly used for educational purposes."
  },
  {
    question: "Which data type is used to store true/false values?",
    answers: [
      { text: "Integer", correct: false },
      { text: "String", correct: false },
      { text: "Float", correct: false },
      { text: "Boolean", correct: true },
    ],
    explanation: "Boolean (named after George Boole) is a data type with only two possible values: true or false. Booleans are fundamental for conditional statements (if/else), loops (while), and logical operations (AND, OR, NOT). Internally, booleans are often stored as single bits (1=true, 0=false), though some languages use whole bytes for efficiency."
  },
  {
    question: "What does GUI stand for?",
    answers: [
      { text: "Graphical User Interface", correct: true },
      { text: "General User Interface", correct: false },
      { text: "Global User Interface", correct: false },
      { text: "Generic User Interface", correct: false },
    ],
    explanation: "GUI (Graphical User Interface) uses visual elements like windows, icons, menus, and buttons for user interaction, as opposed to text-based command-line interfaces (CLI). GUIs make computers more accessible by providing intuitive visual controls. Xerox PARC pioneered GUIs in the 1970s, influencing Apple's Macintosh and Microsoft Windows."
  },
  {
    question: "Which programming language is commonly used for machine learning?",
    answers: [
      { text: "COBOL", correct: false },
      { text: "Python", correct: true },
      { text: "Assembly", correct: false },
      { text: "Pascal", correct: false },
    ],
    explanation: "Python dominates machine learning due to its simplicity, extensive libraries (NumPy, Pandas, TensorFlow, PyTorch, scikit-learn), and strong community support. Its readability allows researchers and developers to focus on algorithms rather than syntax. While Python itself is interpreted, ML libraries use optimized C/C++ code for performance-critical operations."
  },
  {
    question: "What is the purpose of a compiler?",
    answers: [
      { text: "To execute programs", correct: false },
      { text: "To debug programs", correct: false },
      { text: "To translate source code to machine code", correct: true },
      { text: "To design user interfaces", correct: false },
    ],
    explanation: "A compiler translates high-level source code (like C, C++, Java) into machine code or intermediate code that computers can execute. Compilation happens before execution, catching syntax errors and optimizing code. This differs from interpreters (like Python's default) that execute code line-by-line. Some languages use both: Java compiles to bytecode, then the JVM interprets or JIT-compiles it."
  },
  {
    question: "Which network topology connects all devices to a central hub?",
    answers: [
      { text: "Ring", correct: false },
      { text: "Mesh", correct: false },
      { text: "Bus", correct: false },
      { text: "Star", correct: true },
    ],
    explanation: "In a star topology, all devices connect to a central hub or switch. It's easy to set up and troubleshoot, and one device failure doesn't affect others. However, if the central hub fails, the entire network goes down. Star topology is common in modern Ethernet networks. Ring connects devices in a circle, mesh connects all-to-all, and bus uses a single cable."
  },
  {
    question: "What is the decimal value of the binary number 1101?",
    answers: [
      { text: "13", correct: true },
      { text: "11", correct: false },
      { text: "15", correct: false },
      { text: "9", correct: false },
    ],
    explanation: "Binary 1101 equals decimal 13. Reading right to left: (1×2⁰)+(0×2¹)+(1×2²)+(1×2³) = 1+0+4+8 = 13. Each position represents a power of 2. To convert binary to decimal, sum the powers of 2 where there's a 1. Binary is base-2, so it uses only digits 0 and 1, making it perfect for digital electronics with on/off states."
  },
  {
    question: "Which HTTP method is used to retrieve data from a server?",
    answers: [
      { text: "POST", correct: false },
      { text: "GET", correct: true },
      { text: "PUT", correct: false },
      { text: "DELETE", correct: false },
    ],
    explanation: "GET is the HTTP method for retrieving data from a server. It's safe (doesn't change server state) and idempotent (multiple identical requests have the same effect as one). GET requests include parameters in the URL. Other methods: POST (submit data), PUT (update/replace), DELETE (remove), PATCH (partial update). REST APIs use these methods to define CRUD operations."
  },
  {
    question: "What does OOP stand for in programming?",
    answers: [
      { text: "Object-Orientation Programming", correct: false },
      { text: "Operational-Online Programming", correct: false },
      { text: "Object-Oriented Programming", correct: true },
      { text: "Open-Online Programming", correct: false },
    ],
    explanation: "OOP (Object-Oriented Programming) is a paradigm based on 'objects' containing data (attributes) and code (methods). Key principles include encapsulation (bundling data and methods), inheritance (classes deriving from others), polymorphism (same interface, different implementations), and abstraction (hiding complexity). Languages like Java, C++, Python, and C# support OOP, promoting code reusability and organization."
  },
  {
    question: "Which layer of the OSI model handles routing?",
    answers: [
      { text: "Physical", correct: false },
      { text: "Data Link", correct: false },
      { text: "Network", correct: true },
      { text: "Transport", correct: false },
    ],
    explanation: "The Network layer (Layer 3) of the OSI model handles routing—determining the best path for data to travel across networks. It uses logical addressing (IP addresses) and protocols like IP, ICMP, and routing protocols (OSPF, BGP). Routers operate at this layer. The 7-layer OSI model is: Physical, Data Link, Network, Transport, Session, Presentation, Application."
  },
  {
    question: "What is the purpose of version control systems like Git?",
    answers: [
      { text: "To compile code", correct: false },
      { text: "To track changes in code over time", correct: true },
      { text: "To execute programs", correct: false },
      { text: "To design databases", correct: false },
    ],
    explanation: "Version control systems (VCS) like Git track changes to files over time, allowing developers to review history, revert changes, and collaborate effectively. Git enables branching (working on features independently), merging (combining changes), and distributed development (each developer has a complete repository copy). GitHub, GitLab, and Bitbucket provide cloud hosting for Git repositories."
  },
  {
    question: "Which algorithm technique breaks problems into smaller subproblems?",
    answers: [
      { text: "Greedy algorithm", correct: false },
      { text: "Brute force", correct: false },
      { text: "Dynamic programming", correct: false },
      { text: "Divide and conquer", correct: true },
    ],
    explanation: "Divide and conquer recursively breaks problems into smaller independent subproblems, solves them, and combines results. Classic examples include Merge Sort, Quick Sort, and Binary Search. The approach has three steps: divide (split problem), conquer (solve subproblems recursively), combine (merge solutions). Dynamic programming also breaks down problems but solves overlapping subproblems by storing results to avoid redundant computation."
  },
  {
    question: "What is the standard port for HTTPS?",
    answers: [
      { text: "80", correct: false },
      { text: "21", correct: false },
      { text: "443", correct: true },
      { text: "25", correct: false },
    ],
    explanation: "Port 443 is the standard port for HTTPS (HTTP Secure), the encrypted version of HTTP using SSL/TLS. When you visit https://example.com, your browser connects to port 443. The encryption protects data from eavesdropping and tampering. Modern browsers show a padlock icon for HTTPS connections. Port 80 is for unencrypted HTTP."
  },
  {
    question: "Which data structure allows insertion and deletion at both ends?",
    answers: [
      { text: "Stack", correct: false },
      { text: "Queue", correct: false },
      { text: "Deque", correct: true },
      { text: "Array", correct: false },
    ],
    explanation: "A deque (double-ended queue, pronounced 'deck') allows insertion and deletion at both the front and rear ends. It combines stack and queue capabilities, supporting push/pop at both ends. Deques are useful for algorithms like sliding window problems and implementing undo-redo functionality. Most languages provide deque implementations (Python's collections.deque, C++ std::deque)."
  },
  {
    question: "What is the time complexity of accessing an element in an array by index?",
    answers: [
      { text: "O(1)", correct: true },
      { text: "O(log n)", correct: false },
      { text: "O(n)", correct: false },
      { text: "O(n²)", correct: false },
    ],
    explanation: "Accessing an array element by index is O(1)—constant time—because arrays store elements in contiguous memory. The address of any element can be calculated directly: base_address + (index × element_size). This makes arrays extremely fast for random access. However, inserting or deleting in the middle is O(n) because elements must be shifted."
  },
  {
    question: "Which programming language is primarily used for iOS app development?",
    answers: [
      { text: "Java", correct: false },
      { text: "Kotlin", correct: false },
      { text: "Swift", correct: true },
      { text: "C#", correct: false },
    ],
    explanation: "Swift, introduced by Apple in 2014, is the primary language for iOS, macOS, watchOS, and tvOS app development. It replaced Objective-C as Apple's recommended language, offering modern syntax, safety features, and better performance. Swift is open-source and emphasizes safety (preventing common bugs) and speed. Kotlin is used for Android development, C# for cross-platform with Xamarin."
  },
  {
    question: "What does DNS stand for?",
    answers: [
      { text: "Dynamic Name System", correct: false },
      { text: "Domain Name System", correct: true },
      { text: "Digital Network Service", correct: false },
      { text: "Distributed Name Service", correct: false },
    ],
    explanation: "DNS (Domain Name System) translates human-readable domain names (like google.com) into IP addresses (like 172.217.14.206) that computers use to communicate. DNS operates like the internet's phone book. When you visit a website, your computer queries DNS servers to resolve the domain name. DNS uses a hierarchical, distributed database system with root servers, TLD servers, and authoritative servers."
  },
  {
    question: "Which keyword is used to define a function in Python?",
    answers: [
      { text: "function", correct: false },
      { text: "func", correct: false },
      { text: "method", correct: false },
      { text: "def", correct: true },
    ],
    explanation: "Python uses 'def' (short for define) to declare functions. Syntax: def function_name(parameters): followed by the indented function body. Python relies on indentation rather than braces to define code blocks. Functions can return values using 'return'. Python also supports lambda for anonymous functions and async def for asynchronous functions."
  },
  {
    question: "What is the maximum value for an unsigned 16-bit integer?",
    answers: [
      { text: "32767", correct: false },
      { text: "65535", correct: true },
      { text: "65536", correct: false },
      { text: "32768", correct: false },
    ],
    explanation: "An unsigned 16-bit integer can represent 2¹⁶ = 65,536 different values, ranging from 0 to 65,535. 'Unsigned' means no negative numbers, using all bits for magnitude. In binary, 65535 is 1111111111111111 (16 ones). Signed 16-bit integers use two's complement and range from -32,768 to 32,767. Understanding bit ranges is crucial for preventing overflow bugs."
  },
  {
    question: "Which design pattern ensures only one instance of a class exists?",
    answers: [
      { text: "Factory", correct: false },
      { text: "Observer", correct: false },
      { text: "Singleton", correct: true },
      { text: "Decorator", correct: false },
    ],
    explanation: "The Singleton pattern restricts a class to a single instance and provides global access to it. It's useful for managing shared resources like database connections, configuration settings, or logging. Implementation typically involves a private constructor and a static method that returns the single instance. However, singletons can make testing difficult and are sometimes considered an anti-pattern."
  },
  {
    question: "What is the primary purpose of an operating system?",
    answers: [
      { text: "To run applications", correct: false },
      { text: "To provide internet access", correct: false },
      { text: "To create documents", correct: false },
      { text: "To manage computer resources", correct: true },
    ],
    explanation: "The operating system (OS) manages computer hardware and software resources, providing services for programs. Key functions include process management (scheduling CPU time), memory management (allocating RAM), file system management (organizing data), device drivers (hardware control), and user interface (CLI or GUI). Examples include Windows, macOS, Linux, iOS, and Android."
  },
  {
    question: "Which protocol is used for sending emails?",
    answers: [
      { text: "HTTP", correct: false },
      { text: "FTP", correct: false },
      { text: "SMTP", correct: true },
      { text: "TCP", correct: false },
    ],
    explanation: "SMTP (Simple Mail Transfer Protocol) is used for sending emails from clients to servers and between mail servers. It operates on port 25 (or 587 for submission). SMTP handles outgoing mail, while POP3 and IMAP handle incoming mail retrieval. Email transmission involves multiple protocols: your client uses SMTP to send, the recipient's server stores it, and they retrieve it using POP3/IMAP."
  },
  {
    question: "What is recursion in programming?",
    answers: [
      { text: "Using loops repeatedly", correct: false },
      { text: "A function calling itself", correct: true },
      { text: "Repeating code blocks", correct: false },
      { text: "Creating multiple functions", correct: false },
    ],
    explanation: "Recursion occurs when a function calls itself to solve a problem by breaking it into smaller instances of the same problem. Every recursive function needs: a base case (stopping condition) and a recursive case (calling itself with modified parameters). Classic examples include factorial calculation, Fibonacci sequence, and tree traversal. Recursion can be elegant but may use more memory than iterative solutions."
  },
  {
    question: "Which component stores data permanently in a computer?",
    answers: [
      { text: "RAM", correct: false },
      { text: "Cache", correct: false },
      { text: "Register", correct: false },
      { text: "Hard drive", correct: true },
    ],
    explanation: "Hard drives (HDDs and SSDs) provide permanent (non-volatile) storage that persists when power is off. HDDs use spinning magnetic platters, while SSDs use flash memory (faster, no moving parts). They store the operating system, programs, and user files. RAM, cache, and registers are volatile, losing data when powered off. Storage hierarchy trades speed for capacity: registers (fastest, smallest) to hard drives (slowest, largest)."
  },
  {
    question: "What does the term 'Big O' notation describe?",
    answers: [
      { text: "Memory usage", correct: false },
      { text: "Code readability", correct: false },
      { text: "Algorithm efficiency", correct: true },
      { text: "Program size", correct: false },
    ],
    explanation: "Big O notation describes algorithm efficiency in terms of time or space complexity as input size grows. It shows worst-case performance. Common complexities: O(1) constant, O(log n) logarithmic, O(n) linear, O(n log n) linearithmic, O(n²) quadratic, O(2ⁿ) exponential. For example, binary search is O(log n), while bubble sort is O(n²). Big O helps compare algorithms and predict scalability."
  },
  {
    question: "Which JavaScript framework is maintained by Facebook?",
    answers: [
      { text: "Angular", correct: false },
      { text: "Vue.js", correct: false },
      { text: "jQuery", correct: false },
      { text: "React", correct: true },
    ],
    explanation: "React is a JavaScript library (often called a framework) created and maintained by Facebook (Meta) since 2013. It uses a component-based architecture and virtual DOM for efficient UI updates. React's declarative approach makes building interactive UIs simpler. React Native extends React to mobile app development. Angular is by Google, Vue.js is community-driven, and jQuery is a legacy library."
  },
  {
    question: "What is the purpose of encapsulation in OOP?",
    answers: [
      { text: "To hide implementation details", correct: true },
      { text: "To create multiple objects", correct: false },
      { text: "To inherit properties", correct: false },
      { text: "To override methods", correct: false },
    ],
    explanation: "Encapsulation bundles data (attributes) and methods that operate on that data within a class, hiding internal implementation details from outside access. It uses access modifiers (private, protected, public) to control visibility. Benefits include data protection, reduced complexity, flexibility (internal changes don't affect external code), and maintainability. Encapsulation is a fundamental OOP principle promoting modularity."
  },
  {
    question: "Which data structure is best for implementing a priority queue?",
    answers: [
      { text: "Array", correct: false },
      { text: "Linked List", correct: false },
      { text: "Stack", correct: false },
      { text: "Heap", correct: true },
    ],
    explanation: "A heap (specifically a binary heap) is optimal for implementing priority queues, providing O(log n) insertion and deletion of the highest (or lowest) priority element. Min-heaps keep the smallest element at the root, max-heaps keep the largest. Heaps are complete binary trees stored efficiently in arrays. Priority queues are used in Dijkstra's algorithm, task scheduling, and event-driven simulations."
  },
  {
  question: "Which programming language popularized object-oriented programming with its early development in the 1970s?",
  answers: [
    { text: "Smalltalk", correct: true },
    { text: "C", correct: false },
    { text: "Fortran", correct: false },
    { text: "Lisp", correct: false }
  ],
  explanation: "Smalltalk, developed at Xerox PARC in the 1970s, was one of the first pure object-oriented languages where everything is an object. It introduced concepts like classes, inheritance, and polymorphism that influenced modern OOP languages. Smalltalk's syntax inspired many languages and pioneered the graphical IDE and GUI development. Though less common today, its principles permeate Java, C++, Python, and Ruby."
},
{
  question: "Which language is widely used for system programming and gives fine-grained control over memory?",
  answers: [
    { text: "C", correct: true },
    { text: "Python", correct: false },
    { text: "Ruby", correct: false },
    { text: "PHP", correct: false }
  ],
  explanation: "C provides low-level memory access through pointers, making it ideal for system programming like operating systems, embedded systems, and device drivers. Created by Dennis Ritchie in 1972, C offers efficiency and control without automatic memory management. Programmers manually allocate and free memory. This power comes with responsibility—memory leaks and buffer overflows are common bugs in C programs."
},
{
  question: "Which language is the modern, officially preferred language for Android app development alongside Java?",
  answers: [
    { text: "Kotlin", correct: true },
    { text: "Swift", correct: false },
    { text: "Dart", correct: false },
    { text: "C#", correct: false }
  ],
  explanation: "Kotlin became Android's officially preferred language in 2019, though Java remains supported. Developed by JetBrains and released in 2011, Kotlin runs on the JVM and is fully interoperable with Java. It offers null safety, concise syntax, extension functions, and coroutines for async programming. Kotlin reduces boilerplate code and prevents common errors, improving developer productivity and app stability."
},
{
  question: "Which language uses significant indentation (whitespace) to define code blocks instead of braces?",
  answers: [
    { text: "Python", correct: true },
    { text: "Java", correct: false },
    { text: "C++", correct: false },
    { text: "Go", correct: false }
  ],
  explanation: "Python uses indentation to define code blocks, rather than braces {} or keywords. This enforces readable, consistent code formatting. Typically, 4 spaces per indentation level is standard. Mixing tabs and spaces causes errors. This design choice, part of Python's philosophy of readability, makes code visually clean but can frustrate beginners used to brace-based languages."
},
{
  question: "Which language is a statically typed superset of JavaScript that transpiles to plain JavaScript?",
  answers: [
    { text: "TypeScript", correct: true },
    { text: "CoffeeScript", correct: false },
    { text: "Dart", correct: false },
    { text: "Elm", correct: false }
  ],
  explanation: "TypeScript, developed by Microsoft in 2012, adds optional static typing, classes, interfaces, and modern ECMAScript features to JavaScript. It transpiles (compiles) to plain JavaScript that runs anywhere JavaScript runs. Type checking catches errors during development rather than runtime. TypeScript has become extremely popular, especially for large applications, improving code quality and developer experience with better tooling and autocomplete."
},
{
  question: "Which purely functional language is known for lazy evaluation and strong static typing?",
  answers: [
    { text: "Haskell", correct: true },
    { text: "Scala", correct: false },
    { text: "OCaml", correct: false },
    { text: "F#", correct: false }
  ],
  explanation: "Haskell is a purely functional language where functions have no side effects and evaluation is lazy (expressions computed only when needed). Named after logician Haskell Curry, it features strong static typing with type inference, immutable data, and elegant mathematical concepts. While having a steep learning curve, Haskell influences many languages and is used in academia, finance, and research for its mathematical rigor and conciseness."
},
{
  question: "Which language is most commonly associated with statistical computing and data analysis?",
  answers: [
    { text: "R", correct: true },
    { text: "MATLAB", correct: false },
    { text: "Julia", correct: false },
    { text: "SAS", correct: false }
  ],
  explanation: "R, created in 1993, is designed specifically for statistical computing, data analysis, and visualization. It offers extensive packages for statistics, machine learning, and graphics through CRAN (Comprehensive R Archive Network). R is popular in academia, research, and data science. While Python has gained ground in data science, R excels in statistical analysis with specialized packages and visualization capabilities like ggplot2."
},
{
  question: "In runtime terminology, what does JIT stand for?",
  answers: [
    { text: "Just-In-Time (compilation)", correct: true },
    { text: "Java Integrated Translator", correct: false },
    { text: "Jump-Into-Thread", correct: false },
    { text: "Joint-Instruction-Translator", correct: false }
  ],
  explanation: "JIT (Just-In-Time) compilation compiles code during execution rather than before. JIT compilers translate bytecode or intermediate code to machine code at runtime, optimizing frequently-executed code paths. This combines benefits of interpretation (portability) and compilation (speed). Java's HotSpot JVM, JavaScript engines (V8, SpiderMonkey), and .NET's CLR use JIT compilation to achieve near-native performance."
},
{
  question: "Which language enforces single class inheritance but supports multiple interface implementations for polymorphism?",
  answers: [
    { text: "Java", correct: true },
    { text: "C++", correct: false },
    { text: "Python", correct: false },
    { text: "Ruby", correct: false }
  ],
  explanation: "Java allows a class to extend only one parent class (single inheritance) to avoid the 'diamond problem' of multiple inheritance ambiguity. However, a class can implement multiple interfaces, gaining polymorphic behavior without inheritance complications. Interfaces define contracts (method signatures) that implementing classes must fulfill. This design provides flexibility while maintaining clarity and avoiding the pitfalls of multiple inheritance."
},
{
  question: "Which language introduced goroutines as lightweight concurrent functions that simplify concurrency?",
  answers: [
    { text: "Go", correct: true },
    { text: "Erlang", correct: false },
    { text: "Rust", correct: false },
    { text: "Scala", correct: false }
  ],
  explanation: "Go (Golang), created by Google in 2009, introduced goroutines—lightweight threads managed by the Go runtime rather than the OS. You can spawn thousands of goroutines with minimal overhead. Goroutines communicate via channels, implementing CSP (Communicating Sequential Processes) for safe concurrent programming. This makes Go excellent for concurrent systems, web servers, and cloud services. The 'go' keyword launches a goroutine: go function()."
}
];
