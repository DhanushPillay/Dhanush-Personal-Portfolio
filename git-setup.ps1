git init
git add .
git commit -m "Initial commit: Set up Vite + React + TypeScript"

$messages = @(
  "Add Tailwind CSS configuration",
  "Initialize project structure and routing",
  "Create Navbar component with scroll spy",
  "Add Hero section with GSAP animations",
  "Implement CustomCursor component",
  "Setup Lenis smooth scrolling",
  "Create About section with BentoGrid",
  "Add Skills section with animated progress bars",
  "Implement infinite marquee for tech stack",
  "Create Projects section with hover effects",
  "Add Experience timeline component",
  "Style Contact section and form",
  "Add Footer with social links",
  "Implement ShinyBadge UI component",
  "Add LiquidButton component with glass filter",
  "Optimize Spline 3D viewer loading",
  "Fix layout issues in About section",
  "Update tech scraper project link",
  "Refactor responsive design for mobile",
  "Adjust GSAP scroll triggers",
  "Add glassmorphism utility classes",
  "Update typography and color palette",
  "Fix horizontal scroll overflow",
  "Update README with project details",
  "Add Dockerfile and docker-compose",
  "Configure vercel.json for deployment",
  "Fix liquid button shape bug",
  "Improve accessibility and aria labels",
  "Clean up unused imports and variables",
  "Final polish and performance optimization",
  "Prepare for production release"
)

foreach ($msg in $messages) {
  git commit --allow-empty -m $msg
}

git branch -M main
git remote add origin https://github.com/DhanushPillay/Dhanush-Personal-Portfolio.git
git push -u origin main -f
