# Save the Groundwater Game 💧

Save the Groundwater is an interactive, educational web-based gamified learning platform designed to teach the critical importance of groundwater conservation, water purification, and smart irrigation techniques.

The project features a series of engaging challenges that guide the player through the phases of water scarcity, rainwater harvesting, purification, and micro-irrigation management.

---

## 🎮 Game Levels

### 🚪 Phase 0: Intro & Player Setup
- **Loader (`a1_index.html`)**: An animated loading splash screen introducing the game.
- **Splash Screen (`index.html`)**: Allows players to set their username, greets them with customized welcome remarks, displays their high score, and persists their session using `localStorage`.

### 💦 Level 1: Manage Drought (`WaterConservationGame/index.html`)
- **Cheru's Story**: A running arcade game where players guide Cheru on her daily trek to fetch water.
- **Gameplay**: Use the `↑` arrow key to jump over tumbleweeds and `↓` arrow key to crouch under flying birds. Bumping into obstacles causes water leakage (health loss). Reaching home saves the remaining water as the player's score and unlocks Level 2.

### 🌧️ Level 2: Rainwater Harvesting (`surplus.html`)
- **Water Management Quiz**: An interactive, score-based quiz assessing the player's knowledge on managing drought, storing surplus rainwater, and ecological conservation.
- **Rewards**: Correct answers earn points; incorrect answers subtract points. Completing the quiz successfully unlocks Level 3.

### 🚰 Level 3: Filter Contaminated Water (`filter_water.html`)
- **Filtration Puzzle**: Players must construct a water filtration column using Sand & Gravel, Activated Carbon, and Chlorine Disinfection media.
- **Educational Component**: Teaches the correct physical-chemical-biological sequence:
  1. *Sand & Gravel* (retains dirt, leaves, and mud)
  2. *Activated Carbon* (absorbs chemicals and odor)
  3. *Chlorine Tablets* (kills micro-organisms/bacteria)
- **Goal**: Order filters correctly to clean the contaminated water chamber. Success unlocks Level 4.

### 🚜 Level 4: Micro Irrigation (`micro_irrigation.html`)
- **Farm Hydration Simulator**: Players manage a 3x3 crop field containing varying crop types (Lettuce, Tomato, Corn) with differing hydration requirements.
- **Irrigation Tools**:
  - *Drip Irrigation* (High efficiency, waters 1 target tile)
  - *Sprinklers* (Medium radius, waters target + adjacent tiles)
  - *Flood Irrigation* (Low efficiency, waters a whole vertical row)
- **Goal**: Fully hydrate all 9 crop tiles before the limited groundwater reserve is depleted.

---

## 🏆 Dynamic Leaderboard
- Player scores across levels are automatically consolidated and ranked in a dynamic Leaderboard (`leaderboard.html`) stored in the browser's local storage (`localStorage`).

---

## 🚀 How to Run the Project Locally

Since the game is built entirely using vanilla frontend web technologies (HTML5, Javascript, CSS3), **no compilation or complex server setups are required**.

### Method 1: Double Click (Simplest)
1. Double-click the file `a1_index.html` in your file explorer.
2. It will open directly in your default web browser.

### Method 2: Live Server (Recommended for Developers)
If you are using **Visual Studio Code**:
1. Open VS Code and open this project directory.
2. Install the **Live Server** extension (by Ritwick Dey).
3. Click the **"Go Live"** button at the bottom-right corner of the VS Code window.
4. It will start a local development server at `http://127.0.0.1:5500` and open the game automatically.

---

## 🌐 How to Deploy the Project

You can host this project online for free using any of the following web services.

### Option 1: GitHub Pages (Free & Easy)
1. Initialize a git repository and push the project code to a public GitHub repository.
2. On your GitHub repository page, navigate to **Settings** > **Pages** (under Code and automation).
3. Under **Build and deployment**, select **Deploy from a branch**.
4. Choose your branch (e.g. `main` or `master`) and folder (usually `/root`), then click **Save**.
5. After a few minutes, your site will be live at `https://<your-username>.github.io/<your-repo-name>/a1_index.html`.

### Option 2: Vercel (Fast & Premium)
1. Install the Vercel CLI via terminal: `npm install -g vercel` (requires Node.js).
2. Open terminal in the project directory and run: `vercel`.
3. Follow the interactive prompts to link and deploy your site.
4. Vercel will provide a free production URL (e.g. `your-project-name.vercel.app`).

### Option 3: Netlify (Drag & Drop)
1. Go to [Netlify](https://www.netlify.com/) and log in.
2. Go to the **Sites** tab and scroll to the bottom.
3. Drag and drop your local project folder into the box labeled **"Want to deploy a new site without Git? Drag and drop your site folder here"**.
4. Netlify will deploy it in seconds and generate a custom URL.
