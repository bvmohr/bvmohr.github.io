/* ==========================================================================
   THEME TOGGLE SYSTEM
   ========================================================================== */
const themeToggle = document.getElementById('themeToggle');
const currentTheme = localStorage.getItem('theme') || 'dark';

// Initial Theme Setup
if (currentTheme === 'light') {
    document.documentElement.setAttribute('data-theme', 'light');
    themeToggle.innerHTML = '☀️ Light';
} else {
    document.documentElement.setAttribute('data-theme', 'dark');
    themeToggle.innerHTML = '🌙 Dark';
}

// Click Trigger Toggle
themeToggle.addEventListener('click', () => {
    let theme = document.documentElement.getAttribute('data-theme');
    if (theme === 'dark') {
        document.documentElement.setAttribute('data-theme', 'light');
        themeToggle.innerHTML = '☀️ Light';
        localStorage.setItem('theme', 'light');
    } else {
        document.documentElement.setAttribute('data-theme', 'dark');
        themeToggle.innerHTML = '🌙 Dark';
        localStorage.setItem('theme', 'dark');
    }
});


/* ==========================================================================
   INTERACTIVE DEVELOPER TERMINAL (AI BOT)
   ========================================================================== */
const terminalInput = document.getElementById('terminalInput');
const terminalHistory = document.getElementById('terminalHistory');
const terminalBody = document.getElementById('terminalBody');
const actionBadges = document.querySelectorAll('.action-badge');

// Preset Commands & Rich Markdown/HTML Responses
const COMMANDS = {
    help: `Available commands:<br>
      - <span class="hl">about</span>: Brief summary of Brian's professional path<br>
      - <span class="hl">skills</span>: List technical languages & systems<br>
      - <span class="hl">projects</span>: Highlighted software developments<br>
      - <span class="hl">contact</span>: Methods to start a discussion<br>
      - <span class="hl">clear</span>: Clear terminal console history`,
      
    about: `🤖 Brian is a Software Developer on the **AI-assisted bot team** at New York State's Office of Information Technology.<br>
      - Focuses on constructing user-centric AI bots & automations.<br>
      - Dual Bachelor's holder in **Computer Science** and **Mathematics** (SUNY Potsdam).<br>
      - Firm believer in life-long learning and clean, testable code architectures.`,
      
    skills: `🤖 Brian's Core Competencies:<br>
      - <span class="hl">Languages</span>: Python, JavaScript, Java, C/C++, SQL, Shell script<br>
      - <span class="hl">AI/Data</span>: PyTorch, NLP Sentiment Classifiers, Jupyter Notebooks<br>
      - <span class="hl">Tech/Ops</span>: React.js, Express.js, HTML5/CSS3, Docker, Git & Github`,
      
    projects: `🤖 Highlighted Projects:<br>
      1. <span class="hl">Workout Pro</span>: Personal fitness planner (React.js, Express.js)<br>
      2. <span class="hl">AI Sentiment Classifier</span>: PyTorch deep learning models (Python)<br>
      3. <span class="hl">Game of Cells</span>: 2D biology educational simulator (Java, LibGDX)`,
      
    contact: `🤖 Let's build something intelligent:<br>
      - <span class="hl">Email</span>: <a href="mailto:bvmohr2@gmail.com" class="hl">bvmohr2@gmail.com</a><br>
      - <span class="hl">LinkedIn</span>: <a href="https://www.linkedin.com/in/brian-v-mohr" target="_blank" class="hl">brian-v-mohr</a><br>
      - <span class="hl">GitHub</span>: <a href="https://github.com/bvmohr" target="_blank" class="hl">bvmohr</a>`
};

// Process Console Input
function handleCommand(cmdText) {
    const cleanCmd = cmdText.trim().toLowerCase();
    
    // Add user query to history layout
    const userLine = document.createElement('div');
    userLine.className = 'terminal-line user-msg';
    userLine.innerHTML = `<span class="prompt">guest@nys-oit %</span> ${cmdText}`;
    terminalHistory.appendChild(userLine);
    
    if (cleanCmd === '') {
        scrollToBottom();
        return;
    }
    
    // Process matching action
    const responseLine = document.createElement('div');
    responseLine.className = 'terminal-line bot-msg';
    
    if (cleanCmd === 'clear') {
        terminalHistory.innerHTML = '';
        scrollToBottom();
        return;
    } else if (COMMANDS[cleanCmd]) {
        responseLine.innerHTML = COMMANDS[cleanCmd];
    } else {
        responseLine.innerHTML = `⚠️ Command not found: <span class="hl">${cmdText}</span>. Type <span class="hl">help</span> for assistance.`;
    }
    
    terminalHistory.appendChild(responseLine);
    scrollToBottom();
}

// Auto-Scroll helper
function scrollToBottom() {
    terminalBody.scrollTop = terminalBody.scrollHeight;
}

// Bind Inputs & Submit
terminalInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        const value = terminalInput.value;
        handleCommand(value);
        terminalInput.value = '';
    }
});

// Bind Clickable Action Badges
actionBadges.forEach(badge => {
    badge.addEventListener('click', () => {
        const cmd = badge.getAttribute('data-cmd');
        handleCommand(cmd);
    });
});


/* ==========================================================================
   SCROLL REVEAL (INTERSECTION OBSERVER)
   ========================================================================== */
const revealElements = document.querySelectorAll('.scroll-reveal');

if ('IntersectionObserver' in window && revealElements.length > 0) {
    const revealCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target); // Unobserve after triggering once
            }
        });
    };
    
    const revealObserver = new IntersectionObserver(revealCallback, {
        root: null, // default to viewport
        threshold: 0.15 // trigger when 15% visible
    });
    
    revealElements.forEach(element => {
        revealObserver.observe(element);
    });
} else {
    // Fallback if IntersectionObserver isn't supported
    revealElements.forEach(element => {
        element.classList.add('active');
    });
}