// src/scripts/portfolioManager.js

import { portfolioData } from '../data/portfolioData.js';

class PortfolioManager {
    constructor() {
        this.currentLanguage = 'en';
        this.init();
    }

    init() {
        this.populateContent();
        this.setupLanguageSelector();
    }

    populateContent() {
        const data = portfolioData[this.currentLanguage];

        // About section
        const aboutContent = document.getElementById('about-content');
        if (aboutContent) {
            aboutContent.textContent = data.about.description;
        }

        // Experience section
        this.populateExperience(data.experience.items);

        // Education section
        this.populateEducation(data.education.items);

        // Skills section
        this.populateSkills(data.skills.items);

        // References section
        this.populateReferences(data.references.items);

        // Update titles
        this.updateTitles(data);
    }

    populateExperience(items) {
        const container = document.getElementById('experience-content');
        if (!container) return;

        container.innerHTML = '';
        items.forEach(item => {
            const experienceCard = document.createElement('div');
            experienceCard.className = 'glass-card p-6 hover:scale-[1.02] transition-all duration-300';
            experienceCard.innerHTML = `
                <div class="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <h3 class="text-xl font-bold text-purple-300">${item.jobTitle}</h3>
                    <span class="text-sm text-gray-400">${item.fromDate} - ${item.toDate}</span>
                </div>
                <div class="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <h4 class="text-lg font-semibold">${item.company}</h4>
                    <span class="text-sm text-gray-400">${item.location}</span>
                </div>
                <p class="text-gray-300 leading-relaxed">${item.description}</p>
            `;
            container.appendChild(experienceCard);
        });
    }

    populateEducation(items) {
        const container = document.getElementById('education-content');
        if (!container) return;

        container.innerHTML = '';
        items.forEach(item => {
            const educationCard = document.createElement('div');
            educationCard.className = 'glass-card p-6 hover:scale-[1.02] transition-all duration-300';
            educationCard.innerHTML = `
                <h3 class="text-lg font-bold text-purple-300 mb-2">${item.description}</h3>
                <h4 class="text-md font-semibold mb-2">${item.place}</h4>
                <p class="text-sm text-gray-400 mb-3">${item.location} • ${item.fromDate} - ${item.toDate}</p>
                <ul class="space-y-1">
                    ${item.data.map(point => `<li class="text-sm text-gray-300">• ${point}</li>`).join('')}
                </ul>
            `;
            container.appendChild(educationCard);
        });
    }

    populateSkills(items) {
        const container = document.getElementById('skills-content');
        if (!container) return;

        container.innerHTML = '';
        items.forEach(skill => {
            const skillItem = document.createElement('div');
            skillItem.className = 'skill-tag px-4 py-3 rounded-lg mb-4';
            skillItem.innerHTML = `<p class="text-gray-200">${skill}</p>`;
            container.appendChild(skillItem);
        });
    }

    populateReferences(items) {
        const container = document.getElementById('references-content');
        if (!container) return;

        container.innerHTML = '';
        items.forEach(ref => {
            const refCard = document.createElement('div');
            refCard.className = 'glass-card p-6 hover:scale-[1.02] transition-all duration-300';
            refCard.innerHTML = `
                <h3 class="text-lg font-bold text-purple-300 mb-2">${ref.name}</h3>
                <p class="text-md font-semibold mb-1">${ref.title}</p>
                <p class="text-sm text-gray-400 mb-2">${ref.company}</p>
                <a href="mailto:${ref.email}" class="text-sm text-blue-400 hover:text-blue-300 transition-colors">
                    ${ref.email}
                </a>
            `;
            container.appendChild(refCard);
        });
    }

    updateTitles(data) {
        const titleElements = {
            '[data-translate="about.title"]': data.about.title,
            '[data-translate="experience.title"]': data.experience.title,
            '[data-translate="education.title"]': data.education.title,
            '[data-translate="skills.title"]': data.skills.title,
            '[data-translate="references.title"]': data.references.title
        };

        Object.entries(titleElements).forEach(([selector, text]) => {
            const element = document.querySelector(selector);
            if (element) {
                element.textContent = text;
            }
        });
    }

    setupLanguageSelector() {
        const languageSelect = document.getElementById('language-select');
        if (languageSelect) {
            languageSelect.addEventListener('change', (e) => {
                this.currentLanguage = e.target.value;
                this.populateContent();
            });
        }
    }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new PortfolioManager();
});