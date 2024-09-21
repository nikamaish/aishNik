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
    "HTML": "html.webp",
    "CSS": "css.webp",
    "JavaScript": "js.webp",
    "Bootstrap": "bootstrap.webp",
    "Tailwind CSS": "tailwindcss.webp",
    "React": "react.webp",
    "Node.js": "node js.webp",
    "Express.js": "express.webp",
    "Socket.io": "socketio.svg",
    "C++": "cpp.webp",
    "Core Java": "java.svg",
    "MySQL": "mysql.webp",
    "MongoDB": "mongodb.webp",
    "Redis": "redis.png",
    "Firebase": "firebase.webp",
    "Git": "git.svg",
    "GitHub": "github.svg",
    "VSCode": "vscode.svg",
    "Docker": "docker.svg",
    "Postman": "postman.svg",
    "MongoDB Atlas": "mongodb.webp",
    "Vercel": "vercel.svg",
    "Render": "render.webp",
    "Flowise": "flowise.jpeg",
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
      imgSrc: 'GM.png',
      title: 'E-ticket Connect',
      description: 'Revolutionize ticketing by offering instant digital tickets, seamless payments, and efficient data management.',
      technologies: ['react.webp', 'node js.webp', 'express.webp', 'mongodb.webp'],
      liveDemo: '#',
      sourceCode: '#'
    },
    {
      imgSrc: 'VM.png',
      title: 'Trek Travel',
      description: 'Plan your perfect trip with a comprehensive guide to hotels, travel options, and user reviews tailored to your needs.',
      technologies: ['react.webp', 'socketio.svg', 'flask.svg', 'chartjs.svg', 'mongodb.webp'],
      liveDemo: '#',
      sourceCode: '#'
    },

    { 
        imgSrc: 'Portfolio.png',
        title: 'E-ticket Connect',
        description: 'Revolutionize ticketing by offering instant digital tickets, seamless payments, and efficient data management.',
        technologies: ['react.webp', 'css.webp', 'firebase.webp'],
        liveDemo: '#',
        sourceCode: '#'
    },

    { 
        imgSrc: 'SimplyGoods.png',
        title: 'E-ticket Connect',
        description: 'Revolutionize ticketing by offering instant digital tickets, seamless payments, and efficient data management.',
        technologies: ['react.webp', 'node js.webp', 'express.webp', 'mongodb.webp'],
        liveDemo: '#',
        sourceCode: '#'
    },

    { 
        imgSrc: 'QuizApp.png',
        title: 'E-ticket Connect',
        description: 'Revolutionize ticketing by offering instant digital tickets, seamless payments, and efficient data management.',
        technologies: ['html.webp', 'css.webp','github.svg', 'js.webp'],
        liveDemo: '#',
        sourceCode: '#'
    },
    { 
        imgSrc: 'Signature.png',
        title: 'E-ticket Connect',
        description: 'Revolutionize ticketing by offering instant digital tickets, seamless payments, and efficient data management.',
        technologies: ['html.webp', 'css.webp','github.svg', 'js.webp'],
        liveDemo: '#',
        sourceCode: '#'
    },
    { 
        imgSrc: 'mulitstep form.png',
        title: 'E-ticket Connect',
        description: 'Revolutionize ticketing by offering instant digital tickets, seamless payments, and efficient data management.',
        technologies: ['react.webp', 'tailwindcss.webp', 'vercel.svg'],
        liveDemo: '#',
        sourceCode: '#'
    },
    { 
        imgSrc: 'WebCraftEditor.png',
        title: 'E-ticket Connect',
        description: 'Revolutionize ticketing by offering instant digital tickets, seamless payments, and efficient data management.',
        technologies: ['html.webp', 'css.webp','github.svg', 'js.webp'],
        liveDemo: '#',
        sourceCode: '#'
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
            <a href="${project.liveDemo}" class="project-btn">Live Demo</a>
            <a href="${project.sourceCode}" class="project-btn">Source Code</a>
          </div>
        </div>
      </div>
    `;
    
    projectsContainer.innerHTML += projectCard;
    
  });
 