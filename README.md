# Garfield Theme Portfolio

An interactive portfolio website featuring Garfield character animations and a 4-corner navigation system.

## 🎯 Overview

This project offers navigation to the About, Experience, Projects, and Contact sections through four corner buttons. At the center, there's an animated Garfield character whose eyes shift based on the section the user clicks. It supports a dark mode and light mode toggle, and features a responsive design, making it accessible across various devices.

## ✨ Features

| 기능                           | 설명                                                                                                          |
| ------------------------------ | ------------------------------------------------------------------------------------------------------------- |
| **4코너 네비게이션**           | 화면의 4개 코너에 위치한 버튼을 통해 About, Experience, Projects, Contact 섹션으로 이동하는 네비게이션 시스템 |
| **Garfield 캐릭터 애니메이션** | 중앙에 위치한 Garfield 캐릭터가 각 섹션 클릭 시 시선이 변화하는 인터랙티브 애니메이션                         |
| **다크/라이트 모드**           | 다크모드와 라이트모드를 전환할 수 있으며, 로컬 스토리지에 설정을 저장                                         |
| **반응형 디자인**              | 데스크톱과 모바일 환경을 모두 지원하는 반응형 레이아웃                                                        |
| **프로젝트 슬라이드쇼**        | 프로젝트 섹션에서 좌우 화살표 버튼을 통해 포트폴리오 프로젝트들을 슬라이드 형태로 표시                        |

## 🚀 Technologies Used

- **HTML5** - Semantic markup structure
- **CSS3** - Advanced styling with animations and responsive design
- **JavaScript (ES6+)** - Interactive functionality and animations
- **Font Awesome** - Icon library for UI elements

## 📁 Project Structure

```
Garfield-Theme-Portfolio/
├── assets/
│   ├── face-animation-dark/     # Garfield animation frame images for dark mode
│   ├── face-animation-light/    # Garfield animation frame images for light mode
│   ├── fontawesome/             # Local Font Awesome assets (icons & webfonts)
│   ├── icons/                   # UI icons and favicon assets
│   ├── og/                      # Open Graph images for social sharing
│   ├── projects/                # Project preview and showcase images
│   └── responsive/              # Small-screen overlay images for responsive layouts
├── css/
│   ├── style.css                # Global and layout styles
│   ├── animation.css            # Animation-related styles
│   └── color-mode.css           # Light/Dark theme styles
├── js/
│   ├── animation.js             # Garfield character animation logic
│   ├── color-mode.js            # Theme (light/dark mode) toggle logic
│   └── project-slideshow.js     # Project carousel and slideshow logic
└── index.html                   # Main entry HTML file
```

## 🎮 How to Use

1. **Navigation**: Click on any of the four corner buttons (About, Experience, Projects, Contact) to navigate between sections
2. **Character Interaction**: Watch Garfield's eyes follow your cursor and change direction based on which section you're viewing
3. **Theme Toggle**: Use the theme toggle button to switch between dark and light modes
4. **Project Gallery**: In the Projects section, use the arrow buttons to browse through different projects
5. **Contact**: Access email and GitHub links directly from the Contact section

## 🎨 Design Features

- **Interactive Character**: Garfield character with eye-tracking animations
- **Grid Layout**: Unique 4-corner navigation system
- **Smooth Animations**: CSS transitions and JavaScript-powered animations
- **Theme Persistence**: User's theme preference is saved in localStorage
- **Mobile Responsive**: Optimized for both desktop and mobile devices

## 📱 Responsive Design

The portfolio is fully responsive and adapts to different screen sizes:

- Desktop: Full 4-corner navigation experience
- Tablet: Optimized layout for medium screens
- Mobile: Touch-friendly interface with adjusted spacing
