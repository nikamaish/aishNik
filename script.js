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

