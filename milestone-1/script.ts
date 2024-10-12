const buttonToggle = document.getElementById('toggle-skills') as HTMLButtonElement | null;
const skillsSection = document.getElementById('skills') as HTMLElement | null;

if (buttonToggle && skillsSection) {
    buttonToggle.addEventListener('click', () => {
        skillsSection.style.display = (skillsSection.style.display === 'none') ? 'block' : 'none';
    });
} else {
    console.error("Button or Skills element not found.");
}
