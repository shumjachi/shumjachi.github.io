/* CHROME SCROLL START
------------------------------------ */
if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual';
}     

/* ANHOR
---------------------------------------------------- */ 
function anhor() {
    const anhors = document.querySelectorAll('a[href*="#"]');

    for (let anchor of anhors) {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const blockID = anchor.getAttribute('href').substr(1);
            const element = document.getElementById(blockID); 

            if (element != null) {
                let y = (element.getBoundingClientRect().top + window.pageYOffset);
                window.scrollTo({top: y, behavior: 'smooth'});
            }           
        });
    }
}

// anhor();