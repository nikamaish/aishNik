let isOpen = false;
function toggleMenu() {
    isOpen = !isOpen;
    document.getElementById('navbar-items').classList.toggle('block', isOpen);
    document.getElementById('navbar-items').classList.toggle('hidden', !isOpen);
    document.getElementById('menu-icon').setAttribute('d', isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16m-7 6h7');
}

new Typed('#typed', {
    strings: ["Gamer", "Developer", "Hustler"],
    typeSpeed: 100,
    backSpeed: 50,
    backDelay: 1500,
    loop: true,
    cursorChar: '|', // Optional: change the cursor character
});

const skillImages = {
    "HTML": "assets/html.webp",
    "CSS": "assets/css.webp",
    "JavaScript": "assets/js.webp",
    "Bootstrap": "assets/bootstrap.webp",
    "Tailwind CSS": "assets/tailwindcss.webp",
    "React": "assets/react.webp",
    "Node.js": "assets/node js.webp",
    "Express.js": "assets/express.webp",
    "Socket.io": "assets/socketio.svg",
    "C++": "assets/cpp.webp",
    "Core Java": "assets/java.svg",
    "MySQL": "assets/mysql.webp",
    "MongoDB": "assets/mongodb.webp",
    "Redis": "assets/redis.png",
    "Firebase": "assets/firebase.webp",
    "Git": "assets/git.svg",
    "GitHub": "assets/github.svg",
    "VSCode": "assets/vscode.svg",
    "Docker": "assets/docker.svg",
    "Postman": "assets/postman.svg",
    "MongoDB Atlas": "assets/mongodb.webp",
    "Vercel": "assets/vercel.svg",
    "Render": "assets/render.webp",
    "Flowise": "assets/flowise.jpeg",
};


const frontendSkills = ["HTML", "CSS", "JavaScript", "Bootstrap","Tailwind CSS", "React"];
const backendSkills = ["Node.js", "Express.js", "Socket.io"];
const languages = ["C++","Core Java"];
const databases = ["MySQL","MongoDB", "Redis"];
const tools = ["Git", "GitHub", "VSCode", "Docker","Postman", "MongoDB Atlas"];
const platforms = ["Vercel", "Firebase", "Render", "Flowise"];

document.addEventListener("DOMContentLoaded", () => {
    const createSkillElement = (skill, container) => {
        const skillElement = document.createElement("div");
        skillElement.style.display = "inline-block";
        skillElement.style.textAlign = "center";
        skillElement.style.margin = "10px";

        const skillName = document.createElement("p");
        skillName.textContent = skill;
        skillElement.appendChild(skillName);

        const skillImage = document.createElement("img");
        skillImage.src = skillImages[skill];
        skillImage.alt = skill;
        skillImage.style.width = "50px";
        skillImage.style.height = "50px";
        skillElement.appendChild(skillImage);

        container.appendChild(skillElement);
    };

    const frontendDiv = document.querySelector(".Frontend");
    frontendSkills.map(skill => createSkillElement(skill, frontendDiv));

    const backendDiv = document.querySelector(".Backend");
    backendSkills.map(skill => createSkillElement(skill, backendDiv));

    const languagesDiv = document.querySelector(".Languages");
    languages.map(skill => createSkillElement(skill, languagesDiv));

    const databasesDiv = document.querySelector(".Databases");
    databases.map(skill => createSkillElement(skill, databasesDiv));

    const toolsDiv = document.querySelector(".Tools");
    tools.map(skill => createSkillElement(skill, toolsDiv));

    const platformsDiv = document.querySelector(".Platforms");
    platforms.map(skill => createSkillElement(skill, platformsDiv));
});


const projects = [
    {
      imgSrc: 'assets/GM.png',
      title: 'GulidMasters',
      description: 'Built a website which serves as a Guild for gamers to explore different games, offering events, insights. Deployed frontend and backend on Firebase and Render.',
      technologies: ['assets/react.webp', 'assets/node js.webp', 'assets/express.webp', 'assets/mongodb.webp'],
      liveProject: 'https://gaming-hub-98328.web.app',
      sourceCode: 'https://github.com/nikamaish/GuildMasters'
    },
    {
      imgSrc: 'assets/VM.png',
      title: 'VisualMaster',
      description: 'Developed a website which visualizes real time stock market data and crypto data through graphs for better understanding, particularly catering to newcomers in the stock market world.',
      technologies: ['assets/react.webp', 'assets/socketio.svg', 'assets/flask.svg', 'assets/chartjs.svg', 'assets/mongodb.webp'],
      liveProject: 'https://vm-frontend-phi.vercel.app',
      sourceCode: 'https://github.com/nikamaish/VisualMaster_BE'
    },

    { 
        imgSrc: 'assets/Portfolio.png',
        title: 'Portfolio',
        description: 'Developed a personal portfolio website to showcase my projects, skills, and experience. It has attractive UI and responsive. Deployed on Firebase.',
        technologies: ['assets/react.webp', 'assets/css.webp', 'assets/firebase.webp'],
        liveProject: 'https://portfolio-aish.web.app',
        sourceCode: 'https://github.com/nikamaish/aish_portfolio'
    },

    { 
        imgSrc: 'assets/SimplyGoods.png',
        title: 'SimplyGoods eCommerce',
        description: 'SimplyGood is an e-commerce platform like Amazon and Flipkart. Deployed frontend and backend on cloud flatforms like Firebase and Vercel.',
        technologies: ['assets/react.webp', 'assets/node js.webp', 'assets/express.webp', 'assets/mongodb.webp'],
        liveProject: 'https://simplygoods-aish.web.app',
        sourceCode: 'https://github.com/nikamaish/simply_Goods'
    },

    { 
        imgSrc: 'assets/QuizApp.png',
        title: 'Quize Web App',
        description: 'It integrates Medistream to utilize the microphone and camera, ensuring secure participation. It features time limits for each quiz and provides warnings as deadlines approach.',
        technologies: ['assets/html.webp', 'assets/css.webp','assets/github.svg', 'assets/js.webp'],
        liveProject: 'https://nikamaish.github.io/Quiz_App',
        sourceCode: 'https://github.com/nikamaish/Quiz_App'
    },
    { 
        imgSrc: 'assets/Signature.png',
        title: 'E-Signature Studio',
        description: 'User-friendly platform where you can create your digital signature and download it for use anytime. Perfect for professionals, it ensures your signature is always accessible',
        technologies: ['assets/html.webp', 'assets/css.webp','assets/github.svg', 'assets/js.webp'],
        liveProject: 'https://nikamaish.github.io/Signature_App',
        sourceCode: 'https://github.com/nikamaish/Signature_App'
    },
    { 
        imgSrc: 'assets/mulitstep form.png',
        title: 'MultiStep Form',
        description: 'A multi-step form that allows users to input their details in a step-by-step manner. It is built using React and Tailwind CSS, and deployed on Netlify.',
        technologies: ['assets/react.webp', 'assets/tailwindcss.webp', 'assets/vercel.svg'],
        liveProject: 'https://multistep-form-aish.netlify.app',
        sourceCode: 'https://github.com/nikamaish/Aeonaxy_React_Tailwind'
    },
    { 
        imgSrc: 'assets/WebCraftEditor.png',
        title: 'WebCraft Editor',
        description: 'Platform where you can code and create shapes or tackle similar coding challenges. Ideal for developers and students, it offers a hands-on, interactive environment to practice.',
        technologies: ['assets/html.webp', 'assets/css.webp','assets/github.svg', 'assets/js.webp'],
        liveProject: 'https://nikamaish.github.io/HTML_CSS_Editor',
        sourceCode: 'https://github.com/nikamaish/HTML_CSS_Editor'
    }


    // Add more projects as needed
  ];
  
  const projectsContainer = document.getElementById('projects-container');
  
  // Use map to dynamically create the project cards
  projects.map((project) => {
    const projectCard = `
      <div class="project-card">
        <img src="${project.imgSrc}" alt="Project Image" class="project-card-image">
        <div class="project-card-content">
          <h3>${project.title}</h3>
          ${project.date ? `<p class="project-date">${project.date}</p>` : ''}
          <p>${project.description}</p>
        </div>
        <div class="project-card-footer">
          <div class="tech-icons">
            ${project.technologies.map((techIcon) => `<img src="${techIcon}" alt="Technology">`).join('')}
          </div>
          <div class="project-actions">
            <a href="${project.liveProject}" target="_blank" class="project-btn">Live Project</a>
            <a href="${project.sourceCode}" target="_blank" class="project-btn">Source Code</a>
          </div>
        </div>
      </div>
    `;
    
    projectsContainer.innerHTML += projectCard;
    
  });
 

  document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent form from submitting

    // Validate fields
    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const message = document.getElementById('message');

    let isValid = true;

    // Validate name
    if (name.value.trim() === '') {
        setError(name, 'Name is required');
        isValid = false;
    } else {
        clearError(name);
    }

    // Validate email
    if (email.value.trim() === '') {
        setError(email, 'Email is required');
        isValid = false;
    } else if (!isValidEmail(email.value)) {
        setError(email, 'Please enter a valid email address');
        isValid = false;
    } else {
        clearError(email);
    }

    // Validate message
    if (message.value.trim() === '') {
        setError(message, 'Message cannot be empty');
        isValid = false;
    } else {
        clearError(message);
    }

    // If the form is valid, submit it
    if (isValid) {
        alert('Form submitted successfully!');
        // Here you can submit the form data to the backend
        this.submit();
    }
});

function setError(element, message) {
    const parent = element.parentElement;
    const errorDisplay = parent.querySelector('.error-message');
    errorDisplay.innerText = message;
    errorDisplay.style.display = 'block';
    element.style.borderColor = '#ff4d4d';
}

function clearError(element) {
    const parent = element.parentElement;
    const errorDisplay = parent.querySelector('.error-message');
    errorDisplay.innerText = '';
    errorDisplay.style.display = 'none';
    element.style.borderColor = '#bbb';
}

function isValidEmail(email) {
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(String(email).toLowerCase());
}


document.getElementById('contactForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent the default form submission

  const name = encodeURIComponent(document.getElementById('name').value);
  const email = encodeURIComponent(document.getElementById('email').value);
  const subject = encodeURIComponent(document.getElementById('subject').value);
  const message = encodeURIComponent(document.getElementById('message').value);

  const emailRecipient = 'aishnikam31@gmail.com'; // Your recipient email

  const mailtoLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${emailRecipient}&su=${subject}&body=${message}&tf=cm`;

  // Open the mailto link in a new window
  window.open(mailtoLink, '_blank');

  // Clear the form after opening the new window
  document.getElementById('contactForm').reset();
});


const world = Globe()
(document.querySelector('.globe'))
.globeImageUrl('//unpkg.com/three-globe/example/img/earth-blue-marble.jpg')
.bumpImageUrl('//unpkg.com/three-globe/example/img/earth-topology.png')
.backgroundColor('rgba(0, 0, 0, 0)') // No background
.showAtmosphere(false) // Remove atmosphere
.pointOfView({ lat: 1.3521, lng: 103.8198, altitude: 2 });
world.controls().enableZoom = false;


// Fetch world cities data
fetch('//unpkg.com/three-globe/example/datasets/world_cities.json')
.then(res => res.json())
.then(cities => {
  world.pointsData(cities)
    .pointAltitude(0.01)
    .pointRadius(0.05)
    .pointColor(() => 'orange')
    .pointsMerge(true);
});

// Spin the globe by adjusting the longitude
let lng = 0; // Start longitude

function spinGlobe() {
  lng += 0.6; // Adjust this value to control the spin speed
  world.pointOfView({ lat: 1.3521, lng: lng, altitude: 2 });
  requestAnimationFrame(spinGlobe); // Continually update the globe's position
}

spinGlobe(); // Start the spinning effect