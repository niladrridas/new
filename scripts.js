// Function to hide the initial message
function hideInitialMessage() {
    const initialMessage = document.getElementById('initial-message');
    if (initialMessage) {
        initialMessage.style.display = 'none';
    }
}

// Chatbot functionality
function sendMessage() {
    const userInput = document.getElementById('user-input');
    const userMessage = userInput.value.trim();
    if (userMessage !== '') {
        appendMessage('user', userMessage);
        processUserMessage(userMessage);
        userInput.value = '';
    }
}

function processUserMessage(message) {
    const response = generateResponse(message);
    setTimeout(() => {
        appendMessage('bot', response);
    }, 500);
}

function generateResponse(message) {
    const lowerCaseMessage = message.toLowerCase();

    
    // Greetings
    if (lowerCaseMessage.includes('hello')) {
        return 'Hey there! What is your name?';
    } else if (lowerCaseMessage.includes('hey')) {
        return 'Hi, wonderful to see you! What is your name?';
    } else if (lowerCaseMessage.includes('hi')) {
        return 'Hi! How are you doing today?';
    } else if (lowerCaseMessage.includes('hola')) {
        return 'Hola! ¿Cómo puedo ayudarte hoy?';
    } else if (lowerCaseMessage.includes('bonjour')) {
        return 'Bonjour! Comment puis-je vous aider aujourd\'hui?';
    } else if (lowerCaseMessage.includes('bye')) {
        return 'Cool!';
    } else if (lowerCaseMessage.includes('thank you')) {
        return 'You\'re welcome!';
    }

    // Personal Information
    if (lowerCaseMessage.includes('what is your name')) {
        return 'I\'m Alien, here to assist you with Niladri\'s portfolio.';
    } else if (lowerCaseMessage.includes('who created you')) {
        return 'I was created by a programmer called Niladri.';
    } else if (lowerCaseMessage.includes('who built you')) {
        return 'I was made with a Computer Science student named Niladri.';
    } else if (lowerCaseMessage.includes('who built this chatbot')) {
        return 'The Entrepreneur & Scientist Elon Musk inspired Niladri to build me.';
    }

    // General Knowledge
    if (lowerCaseMessage.includes('largest ocean')) {
        return 'The Pacific Ocean';
    } else if (lowerCaseMessage.includes('capital of france')) {
        return 'Paris';
    } else if (lowerCaseMessage.includes('novel "pride and prejudice"')) {
        return 'Jane Austen';
    } else if (lowerCaseMessage.includes('chemical symbol for gold')) {
        return 'Au';
    } else if (lowerCaseMessage.includes('tallest mountain')) {
        return 'Mount Everest';
    } else if (lowerCaseMessage.includes('largest country')) {
        return 'Russia';
    } else if (lowerCaseMessage.includes('world war ii begin')) {
        return '1939';
    } else if (lowerCaseMessage.includes('largest desert')) {
        return 'The Sahara Desert';
    } else if (lowerCaseMessage.includes('capital of india')) {
        return 'New Delhi';
    } else if (lowerCaseMessage.includes('painted the mona lisa')) {
        return 'Leonardo da Vinci';
    }

    // Computer Science
    if (lowerCaseMessage.includes('full form of cpu')) {
        return 'Central Processing Unit';
    } else if (lowerCaseMessage.includes('difference between ram and rom')) {
        return 'RAM (Random Access Memory) is volatile memory that stores data temporarily, while ROM (Read-Only Memory) is non-volatile memory that stores data permanently.';
    } else if (lowerCaseMessage.includes('operating system')) {
        return 'An operating system is software that manages the hardware and software resources of a computer.';
    } else if (lowerCaseMessage.includes('programming language')) {
        return 'A programming language is a set of instructions that tells a computer what to do.';
    } else if (lowerCaseMessage.includes('internet')) {
        return 'The internet is a global network of interconnected computer networks.';
    } else if (lowerCaseMessage.includes('world wide web')) {
        return 'The World Wide Web is a collection of websites and web pages linked by hyperlinks.';
    }

    // Physics
    if (lowerCaseMessage.includes('law of gravity')) {
        return 'The law of gravity states that every object in the universe attracts every other object with a force proportional to the product of their masses and inversely proportional to the square of the distance between them.';
    } else if (lowerCaseMessage.includes('three states of matter')) {
        return 'Solid, liquid, and gas';
    } else if (lowerCaseMessage.includes('difference between force and mass')) {
        return 'Force is a push or pull that can change the motion of an object, while mass is a measure of the amount of matter in an object.';
    } else if (lowerCaseMessage.includes('speed of light')) {
        return 'The speed of light is approximately 299,792,458 meters per second.';
    } else if (lowerCaseMessage.includes('difference between energy and power')) {
        return 'Energy is the ability to do work, while power is the rate at which energy is transferred.';
    }

    // Mathematics
    if (lowerCaseMessage.includes('pythagorean theorem')) {
        return 'The Pythagorean theorem states that in a right triangle, the square of the hypotenuse (the side opposite the right angle) is equal to the sum of the squares of the other two sides.';
    } else if (lowerCaseMessage.includes('derivative of x^2')) {
        return 'The derivative of x^2 is 2x.';
    } else if (lowerCaseMessage.includes('integral of 1/x')) {
        return 'The integral of 1/x is ln(x).';
    } else if (lowerCaseMessage.includes('difference between an equation and an inequality')) {
        return 'An equation is a statement that two expressions are equal, while an inequality is a statement that two expressions are not equal.';
    } else if (lowerCaseMessage.includes('probability')) {
        return 'Probability is the chance of an event happening.';
    }

    // Technology
    if (lowerCaseMessage.includes('web server')) {
        return 'A web server is a server that stores, processes, and delivers web pages to users.';
    } else if (lowerCaseMessage.includes('client-server model')) {
        return 'In the client-server model, a client is a device that sends requests to a server for services.';
    } else if (lowerCaseMessage.includes('ip address')) {
        return 'An IP address is a unique numerical label assigned to each device connected to a computer network that uses the Internet Protocol for communication.';
    } else if (lowerCaseMessage.includes('computer architecture')) {
        return 'Computer architecture is the design of a computer system or network, consisting of hardware, software, or firmware, and the principles used to organize and utilize its components.';
    } else if (lowerCaseMessage.includes('osi model')) {
        return 'The OSI model is a conceptual framework that characterizes the functions of a telecommunication or computing system. It consists of seven layers, starting from the physical layer and ending with the application layer.';
    }

    // Additional responses
    if (lowerCaseMessage.includes('weather')) {
        return "Let me check that for you. One moment please...";
    } else if (lowerCaseMessage.includes('restaurant')) {
        return "Of course! What type of cuisine are you in the mood for?";
    } else if (lowerCaseMessage.includes('stock market') || lowerCaseMessage.includes('stock prices')) {
        return "I can provide you with the latest updates on stock prices. Which stocks are you interested in?";
    } else if (lowerCaseMessage.includes('about yourself')) {
        return "I'm here to assist you with information and help answer your questions. What specifically would you like to know?";
    } else if (lowerCaseMessage.includes('meaning of life')) {
        return "That's a profound question! Answers to questions about life's meaning can vary greatly depending on personal beliefs and perspectives.";
    } else if (lowerCaseMessage.includes('hobbies')) {
        return "I don't have personal hobbies, but I'm designed to learn and assist with a wide range of topics!";
    } else if (lowerCaseMessage.includes('improve my productivity')) {
        return "Improving productivity often involves optimizing your workflow, setting goals, and managing your time effectively. Are you looking for specific tips or strategies?";
    } else if (lowerCaseMessage.includes('tell me a joke')) {
        return "Sure, here's one: Why don't scientists trust atoms? Because they make up everything!";
    } else if (lowerCaseMessage.includes('learn a new language')) {
        return "Learning a new language involves practice, immersion, and consistency. Have you tried language apps, classes, or conversational practice?";
    } else if (lowerCaseMessage.includes('math problem')) {
        return "Of course! Please provide me with the details of the problem you're working on.";
    }


    // Default response
    return "I'm sorry, I'm not sure how to respond to that. Could you please ask me something else?";
    
}

// Example usage:
const userInput = "What's the best way to learn a new language?";
const response = generateResponse(userInput);
console.log(response);

function clearHistory() {
    // Assuming you have a function to clear messages from the chat history
    var messages = document.getElementById('messages');
    messages.innerHTML = ''; // Clearing all messages
}


function appendMessage(sender, message) {
    const messagesList = document.getElementById('messages');
    const messageElement = document.createElement('li');
    messageElement.classList.add('message', sender === 'user' ? 'user-message' : 'bot-message');
    messageElement.textContent = message;
    messagesList.appendChild(messageElement);
    messagesList.scrollTop = messagesList.scrollHeight;
}

// Chatbot show/hide functionality
function toggleChatbot() {
    const chatbotContainer = document.getElementById('chatbot-container');
    const chatButton = document.getElementById('chat-button');
    if (chatbotContainer.style.display === 'none' || !chatbotContainer.style.display) {
        chatbotContainer.style.display = 'block';
        chatButton.style.display = 'none';
    } else {
        chatbotContainer.style.display = 'none';
        chatButton.style.display = 'block';
    }
}

// Event listener for the chat button
document.getElementById('chat-button').addEventListener('click', toggleChatbot);

// Handle key press event
document.getElementById('user-input').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        sendMessage();
    }
});