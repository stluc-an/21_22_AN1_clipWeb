
/*----------------------------------------*\
  beakerProject - sketch.js
  @Author Lolha Rodriguez Ricagni (vincent@ogre.be)
  @Date:   2023
  @Last Modified time: 2023-04-03 20:46:34
\*----------------------------------------*/


let audioPath = "./assets/audio/Milieu.mp3";
let sequencer;
let mesAnims = [];
let backgroundImage; // Ajout de la variable pour l'image de fond
let b;
let cpt;
let lp;

function preload() {
    cpt=1;
     backgroundImage = loadImage("./assets/images/FOND.png");

    

    
    //LE TITRE INTRO
  mesAnims.push(
    new Animator({
      imgPatternAddress: "./assets/images/image[IMG_NUM].png",
      imgCount: 66,
      firstImageNum: 0,
      numberLength: 4
    })
   
  );
     cpt=cpt+1;
  
    //for(let lp = 0; lp <2; lp++ ) {   
    
    
    
for(let j = 0; j < 3; j++) {
 mesAnims.push(
      //FLEUR x3
    new Animator({
      imgPatternAddress: "./assets/images/fleur/image[IMG_NUM].png",
      imgCount: 83,
      firstImageNum: 0,
      numberLength: 4
    })
      
  ); cpt=cpt+1;
  };
    
   
    
    
    
for(let j = 0; j < 3; j++) {
  mesAnims.push(
      //FOETUS X3
    new Animator({
      imgPatternAddress: "./assets/images/foetus/image[IMG_NUM].png",
      imgCount: 83,
      firstImageNum: 0,
      numberLength: 4
    })
       
  );cpt=cpt+1;
};

    
    
    
    
       
for(let j = 0; j < 3; j++) {
   mesAnims.push(
       //CA GOUTE X3
    new Animator({
      imgPatternAddress: "./assets/images/ça goute/image[IMG_NUM].png",
      imgCount: 83,
      firstImageNum: 0,
      numberLength: 4
    })
       
  ); cpt=cpt+1;
};
    
  
    
    
    
    
    
for(let j = 0; j < 2; j++) {
    mesAnims.push(
       //FOURMIZ X3
    new Animator({
      imgPatternAddress: "./assets/images/fourmiz/image[IMG_NUM].png",
      imgCount: 83,
      firstImageNum: 0,
      numberLength: 4
    })
         
  );  cpt=cpt+1;
};
    
    
    
    
    
    
   
   b = Math.floor(Math.random()*3)+1;
    for(let j = 0; j < b; j++) {
    mesAnims.push(
       //BOUM X3
    new Animator({
      imgPatternAddress: "./assets/images/boum/image[IMG_NUM].png",
      imgCount: 83,
      firstImageNum: 0,
      numberLength: 4
    })
         
  );  cpt=cpt+1;
};
   
    
    
    
    
    
    mesAnims.push(
       //FOETUS X1
    new Animator({
      imgPatternAddress: "./assets/images/foetus/image[IMG_NUM].png",
      imgCount: 83,
      firstImageNum: 0,
      numberLength: 4
    })
       
  );  cpt=cpt+1;


    
    
    
    
    mesAnims.push(
       //CA GOUTE X1
    new Animator({
      imgPatternAddress: "./assets/images/ça goute/image[IMG_NUM].png",
      imgCount: 83,
      firstImageNum: 0,
      numberLength: 4
    })
         
  );  cpt=cpt+1;


    
    
    
   
 b = Math.floor(Math.random()*3)+1;
     for(let j = 0; j < b; j++) {
    mesAnims.push(
       //FLEUR X1
    new Animator({
      imgPatternAddress: "./assets/images/fleur/image[IMG_NUM].png",
      imgCount: 83,
      firstImageNum: 0,
      numberLength: 4
    })
        
  );  cpt=cpt+1;
     };
    
    
    
    
    

      mesAnims.push(
       //boum X1
    new Animator({
      imgPatternAddress: "./assets/images/boum/image[IMG_NUM].png",
      imgCount: 83,
      firstImageNum: 0,
      numberLength: 4
    })
         
  );  cpt=cpt+1;
    
    
    
    
    
    

  mesAnims.push(
       //FOETUS X1
    new Animator({
      imgPatternAddress: "./assets/images/foetus/image[IMG_NUM].png",
      imgCount: 83,
      firstImageNum: 0,
      numberLength: 4
    })
       
  );  cpt=cpt+1;

    
    
    
    

      mesAnims.push(
       //FLEUR X1
    new Animator({
      imgPatternAddress: "./assets/images/fleur/image[IMG_NUM].png",
      imgCount: 83,
      firstImageNum: 0,
      numberLength: 4
    })
          
  );  cpt=cpt+1;


    
    
    
 b = Math.floor(Math.random()*3)+1;
     for(let j = 0; j < b; j++) {
     mesAnims.push(
       //FOURMIZ X1
    new Animator({
      imgPatternAddress: "./assets/images/fourmiz/image[IMG_NUM].png",
      imgCount: 83,
      firstImageNum: 0,
      numberLength: 4
    })
          
  );  cpt=cpt+1;
     
    };

    
    
    
    
    
for(let j = 0; j < 5; j++) {
   mesAnims.push(
       //FOETUS X5
    new Animator({
      imgPatternAddress: "./assets/images/foetus/image[IMG_NUM].png",
      imgCount: 83,
      firstImageNum: 0,
      numberLength: 4
    })
        
  );  cpt=cpt+1;

};
    
    
    
    
    
    
    
 b = Math.floor(Math.random()*10)+1;
     for(let j = 0; j < b; j++) {
 mesAnims.push(
       //CA GOUTE X1
    new Animator({
      imgPatternAddress: "./assets/images/ça goute/image[IMG_NUM].png",
      imgCount: 83,
      firstImageNum: 0,
      numberLength: 4
        
    })
     
  );   cpt=cpt+1;  
     };
    
    
 
    
    
    
   
    b = Math.floor(Math.random()*3)+1;
    for(let j = 0; j < b; j++) {
    mesAnims.push(
       //BOUM X3
    new Animator({
      imgPatternAddress: "./assets/images/boum/image[IMG_NUM].png",
      imgCount: 83,
      firstImageNum: 0,
      numberLength: 4
    })
         
  );  cpt=cpt+1;
};
   
    
    
    
    
    
    mesAnims.push(
       //FOETUS X1
    new Animator({
      imgPatternAddress: "./assets/images/foetus/image[IMG_NUM].png",
      imgCount: 83,
      firstImageNum: 0,
      numberLength: 4
    })
       
  );  cpt=cpt+1;


    
    
    
    
    mesAnims.push(
       //CA GOUTE X1
    new Animator({
      imgPatternAddress: "./assets/images/ça goute/image[IMG_NUM].png",
      imgCount: 83,
      firstImageNum: 0,
      numberLength: 4
    })
         
  );  cpt=cpt+1;


    
    
    
   
 b = Math.floor(Math.random()*3)+1;
     for(let j = 0; j < b; j++) {
    mesAnims.push(
       //FLEUR X1
    new Animator({
      imgPatternAddress: "./assets/images/fleur/image[IMG_NUM].png",
      imgCount: 83,
      firstImageNum: 0,
      numberLength: 4
    })
        
  );  cpt=cpt+1;
     };
    
    
    
    
    

      mesAnims.push(
       //boum X1
    new Animator({
      imgPatternAddress: "./assets/images/boum/image[IMG_NUM].png",
      imgCount: 83,
      firstImageNum: 0,
      numberLength: 4
    })
         
  );  cpt=cpt+1;
    
    
    
    
    
    

  mesAnims.push(
       //FOETUS X1
    new Animator({
      imgPatternAddress: "./assets/images/foetus/image[IMG_NUM].png",
      imgCount: 83,
      firstImageNum: 0,
      numberLength: 4
    })
       
  );  cpt=cpt+1;

    
    
    
    

      mesAnims.push(
       //FLEUR X1
    new Animator({
      imgPatternAddress: "./assets/images/fleur/image[IMG_NUM].png",
      imgCount: 83,
      firstImageNum: 0,
      numberLength: 4
    })
          
  );  cpt=cpt+1;


    
    
    
 b = Math.floor(Math.random()*3)+1;
     for(let j = 0; j < b; j++) {
     mesAnims.push(
       //FOURMIZ X1
    new Animator({
      imgPatternAddress: "./assets/images/fourmiz/image[IMG_NUM].png",
      imgCount: 83,
      firstImageNum: 0,
      numberLength: 4
    })
          
  );  cpt=cpt+1;
     
    };

    
    
    
    
    
for(let j = 0; j < 5; j++) {
   mesAnims.push(
       //FOETUS X5
    new Animator({
      imgPatternAddress: "./assets/images/foetus/image[IMG_NUM].png",
      imgCount: 83,
      firstImageNum: 0,
      numberLength: 4
    })
        
  );  cpt=cpt+1;

};
    
    
    
    
    
    
    
 b = Math.floor(Math.random()*10)+1;
     for(let j = 0; j < b; j++) {
 mesAnims.push(
       //CA GOUTE X1
    new Animator({
      imgPatternAddress: "./assets/images/ça goute/image[IMG_NUM].png",
      imgCount: 83,
      firstImageNum: 0,
      numberLength: 4
        
    })
     
  );   cpt=cpt+1;  
     };
    
    

    
    
    
    
    
    
    
    
    
    
    
}


function setup() {	
    frameRate(24);
  createCanvas(window.innerWidth, window.innerHeight);
  sequencer = new Sequencer(audioPath, 300);
  for(let lp=0;lp<4;lp++){
  for(let i = 0; i < cpt; i++) {
    sequencer.registerSequence({
      name: "milieu" + i,
      start: 1 + i * 20,
      stop: (i + 1) * 20,
      steps: [1, 1+1/18, 1+2/18, 1+3/18, 1+4/18, 1+5/18, 1+6/18, 1+7/18, 1+8/18, 1+9/18, 1+10/18, 1+11/18, 1+12/18, 1+13/18, 1+14/18, 1+15/18, 1+16/18, 1+17/18],
      onStart: (event) => {
        mesAnims[i].setDrawable(true);
      },
      onStep: (event) => {
        mesAnims[i].setCursor(event.amount);
      },
      onStop: (event) => {
        mesAnims[i].setDrawable(false);
      },
    });
  }}
}

function draw() {
 // Afficher l'image de fond
  image(backgroundImage, 0, 0, width, height);

  sequencer.update();

  for(let anim of mesAnims) {
    if(anim.isDrawable()) {
      anim.draw();		
    }
  }
}

function windowResized() {
  resizeCanvas(window.innerWidth, window.innerHeight);
}
