let options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
  };
  
  let slideUpToVisible = function(entries, observer) {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            if(!entry.target.classList.contains('observed')) {
                entry.target.classList.add('observed');            
            }
            observer.unobserve(entry.target);
        }
    });
  };
  
  let observer = new IntersectionObserver(slideUpToVisible, options);
  
  let targets = document.querySelectorAll('.observable');
  targets.forEach(target => {
    observer.observe(target);
  });