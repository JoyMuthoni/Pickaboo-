const closedEmoji= document.querySelector('.closed ')
const openFace = document.querySelector('.open')
//adding event listener
closedEmoji.addEventListener('click', ()=>
{
    if(openFace.classList.contains ('open'))
     {openFace.classList.add('active');
     closedEmoji.classList.remove('active');
        }})

        openFace.addEventListener('click', ()=>
{
    if(closedEmoji.classList.contains ('closed'))
     {closedEmoji.classList.add('active');
    openFace.classList.remove('active');
        }
    });
 