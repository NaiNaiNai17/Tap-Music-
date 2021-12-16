window.addEventListener('load', () => {
    const audio = document.querySelectorAll(".audio");
    const pads = document.querySelectorAll(".pads div");
    const visual = document.querySelector('.visual');
    const colors = [
        '#60d394',
        '#d36060',
        '#c060d3',
        '#d3d160',
        '#606bd3',
        '#60c2d3',
    ];

    const keyNote = [65,66,67,68,69,70]

    const keys = document.querySelectorAll('.key')
    
  

    pads.forEach((pad, index) => {
        pad.addEventListener('click', () => {
            audio[index].currentTime = 0;
            audio[index].play();
            createBubbles(index);
        });
       
    });


    
        document.addEventListener('keydown', (e) => {
            pads.forEach((pad, index) => {
            if (e.keyCode === keyNote[index]){
            audio[index].currentTime = 0;
            audio[index].play();
            createBubbles(index);
            }
           
        
        }); 
        });
        
   
    const createBubbles = (index) => {
        const bubble = document.createElement('div');
        visual.appendChild(bubble);
        bubble.style.backgroundColor = colors[index];
        bubble.style.animation = 'jump 1s ease';
    
    };
    
});