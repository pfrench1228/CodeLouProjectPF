let picary = [
    {
        description: 'HVF with the cow',
        photo: 'img/HVFcow.png',
    },
    {
        description: 'Picture of the store',
        photo: 'img/Store.JPG',
    },
    {
        description: 'Jims Stand at the FM',
        photo: 'img/JimStand.JPG',
    },
    {
        description: 'Whole Family',
        photo: 'img/FamBam.JPG',
    },
  ]

let aryidx = 0;

function flippic(piccall) {
    if (piccall === 'forward') {
        
        if(aryidx >= picary.length - 1) {
            aryidx = -1;
        }

        aryidx += 1;
        let whichpic = picary[aryidx];
        document.getElementById("myImg").src = whichpic.photo;
    }
    
    if (piccall === 'backward') {
        
        if(aryidx <= 0) {
            aryidx = picary.length;
        }

        aryidx += -1;
        let whichpic = picary[aryidx];
        document.getElementById("myImg").src = whichpic.photo;
    }
}