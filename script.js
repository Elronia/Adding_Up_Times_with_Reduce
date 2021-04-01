const timeNodes = Array.from(document.querySelectorAll('[data-time'));

const seconds = timesNodes
    .map(node => node.dataset.time)
    .map(timeCode => {
        const [mins, secs] = timeCode.split(':');
        
    })
