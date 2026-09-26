import { triggerDownload } from './utils.js';
import { initScrollAnimations } from './animations.js';

// document.addEventListener('DOMContentLoaded', () => {
//     // Initialize animations
//     initScrollAnimations();

//     // Attach Resume Download
//     const resumeBtn = document.getElementById('resumeBtn');
//     if (resumeBtn) {
//         resumeBtn.addEventListener('click', () => {
//             // In a production build, Vite handles assets in the /public folder at the root path
//             triggerDownload('/public/docs/Deepanshu Singh Resume-AI_.pdf', 'Deepanshu_Singh_Resume.pdf');
//         });
//     }
// });

// Attach Hero Resume Download
const heroResumeBtn = document.getElementById('heroResumeBtn');
if (heroResumeBtn) {
    heroResumeBtn.addEventListener('click', () => {
        triggerDownload('/public/docs/Deepanshu Singh Resume-AI_.pdf', 'Deepanshu_Singh_Resume.pdf');
    });
}

const HeroResumeBtn = document.getElementById('heroResumeBtn-sec');
if (HeroResumeBtn) {
    HeroResumeBtn.addEventListener('click', () => {
        triggerDownload('/public/docs/Deepanshu Singh Resume-AI_.pdf', 'Deepanshu_Singh_Resume.pdf');
    });
}
