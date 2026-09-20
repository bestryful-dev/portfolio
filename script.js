
// 1. Accordion & Grid View Toggle Logic for Projects
const container = document.getElementById('projects');
const toggleBtn = document.getElementById('view-toggle-btn');
const panels = document.querySelectorAll('.panel');

// Default first panel open state for desktop slider view
if(panels.length > 0 && !container.classList.contains('grid-view')) {
    panels[0].classList.add('active');
}

// Hover event for expanding slider panels (disabled if in grid view)
panels.forEach((panel) => {
    panel.addEventListener('mouseenter', () => {
        if (!container.classList.contains('grid-view') && window.innerWidth > 1024) {
            removeActiveClasses();
            panel.classList.add('active');
        }
    });
});

function removeActiveClasses() {
    panels.forEach((panel) => {
        panel.classList.remove('active');
    });
}

// Toggle button action switcher
if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
        const isGrid = container.classList.toggle('grid-view');
        
        if (isGrid) {
            toggleBtn.innerHTML = '<i class="fas fa-stream"></i> Switch to Slider View';
            removeActiveClasses();
        } else {
            toggleBtn.innerHTML = '<i class="fas fa-th-large"></i> Switch to Grid View';
            if(panels.length > 0) panels[0].classList.add('active');
        }
    });
}

// 2. Scroll Animation for Service/Contact Cards
const boxes = document.querySelectorAll('.card');

window.addEventListener('scroll', checkBoxes);
checkBoxes(); // Run once on page load

function checkBoxes() {
    const triggerBottom = window.innerHeight / 5 * 4.5;

    boxes.forEach(box => {
        const boxTop = box.getBoundingClientRect().top;
        if (boxTop < triggerBottom) {
            box.classList.add('show');
        } else {
            box.classList.remove('show');
        }
    });
}

// 3. Header Minimize Effect on Scroll
const minimize = document.getElementById('navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        minimize.classList.add('active');
    } else {
        minimize.classList.remove('active');
    }
});





// // expanding projects

// const container = document.getElementById('projects');
// const toggleBtn = document.getElementById('view-toggle-btn');
// const panels = document.querySelectorAll('.panel');

// // 1. Hover/Mouseenter Behavior
// panels.forEach((panel) => {
//     panel.addEventListener('mouseenter', () => {
//         // ONLY expand on hover if we are NOT in grid view
//         if (!container.classList.contains('grid-view')) {
//             removeActiveClasses();
//             panel.classList.add('active');
//         }
//     });
// });

// function removeActiveClasses() {
//     panels.forEach((panel) => {
//         panel.classList.remove('active');
//     });
// }

// // 2. View Switcher Toggle Logic
// toggleBtn.addEventListener('click', () => {
//     const isGrid = container.classList.toggle('grid-view');
    
//     if (isGrid) {
//         // Change button text/icon for Grid state
//         toggleBtn.innerHTML = '<i class="fas fa-stream"></i> Switch to Slider View';
        
//         // Remove active class states so grid sizing looks perfectly uniform
//         removeActiveClasses();
//     } else {
//         // Revert button text/icon for Slider state
//         toggleBtn.innerHTML = '<i class="fas fa-th-large"></i> Switch to Grid View';
        
//         // Re-assign default first active panel for accordion view
//         if(panels.length > 0) panels[0].classList.add('active');
//     }
// });


// panels.forEach((panel) => {
//     panel.addEventListener('mouseenter', () => {
//         removeActiveClasses();
//         panel.classList.add('active');
//     });
// });

// function removeActiveClasses() {
//     panels.forEach((panel) => {
//         panel.classList.remove('active');
//     });
// }




// // scroll animaton
// const boxes = document.querySelectorAll('.card')

// window.addEventListener('scroll', checkboxes)

// checkboxes()

// function checkboxes(){
//     const triggerBottom = window.innerHeight /5 * 4.5

//     boxes.forEach(box => {
//         const boxTop =box.getBoundingClientRect().top
        
//         if (boxTop< triggerBottom){
//             box.classList.add('show')
//         }else{
//             box.classList.remove('show')
//         }
//     })
// }

// // nav minimize on scroll
// const minimize = document.getElementById('navbar')
// console.log(minimize)
// window.addEventListener('scroll', fixNav)


// function fixNav(){
//     if(window.scrollY>minimize.offsetHeight+150){
//         minimize.classList.add('active')
//     }else{
//         minimize.classList.remove('active')
//     }

// }
