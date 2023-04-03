let container = document.querySelector(".container");




    
    container.addEventListener('mousemove',(e)=>{
        
        let circle = document.createElement('div');
            circle.className='circle';
            let top = e.clientY;
            let left = e.clientX;
        
            circle.style.top=`${top}px`;
            circle.style.left=`${left}px`;
            let color = '0123456789ABCDEF';
            let randomColor = '#';
            for(let i=0; i<6; i++)
            {
                randomColor=randomColor+`${color[Math.floor(Math.random()*16)]}`;
            }
            
            // circle.style.border=`2px solid ${randomColor}`;
            circle.style.backgroundColor=`${randomColor}`;
            circle.style.boxShadow = `0px 0px 5px ${randomColor}`
            container.appendChild(circle);

            let itmes = document.getElementsByClassName('circle');
            console.log(itmes)
            setTimeout(()=>{
                container.removeChild(itmes[0]);
            },1000)
            
        })


