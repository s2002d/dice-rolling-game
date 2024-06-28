const firstran = Math.floor(Math.random()*6)+1

const firstdieimage = 'image/dice' + firstran + '.png';

document.querySelectorAll('img')[0].setAttribute('src',firstdieimage)


const secran = Math.floor(Math.random()*6)+1

const secdieimage = 'image/dice' + secran + '.png';

document.querySelectorAll('img')[1].setAttribute('src',secdieimage)

if(firstran > secran)
    {document.querySelector('h1').innerHTML = 'The Winner is User 1';}
else if(firstran < secran)
    {document.querySelector('h1').innerHTML = 'The Winner is User 2';}
else{
    document.querySelector('h1').innerHTML = "It's Draw";
}
