var manoI,manoD,manoDImg,manoIImg;
var m1Img,m2Img,m3Img,m4Img,m5Img,mGroup;
var arbolImg,arbolGroup,arbol1Group;
var fondo,fondoImg;
var n,m,a,b,c;
var verde;
var roca1,roca2,roca3;
var rock;
var rocaGroup;
var categorias;
var monstrito;

function preload(){
 manoIImg = loadImage("mano izquierda.png");
 manoDImg = loadImage("mano derecha.png");
 arbolImg = loadImage("arbol.png");
 m1Img = loadImage("m1.png");
 m2Img = loadImage("m2.png");
 m3Img = loadImage("m3.png");
 m4Img = loadImage("m4.png");
 m5Img = loadImage("m5.png");
 fondoImg = loadImage("noche 1.png");
 roca1 = loadImage("roca1.png");
 roca2 = loadImage("roca2.png");
 roca3 = loadImage("roca3.png");
}

function setup() {
 fondo = createSprite(675,300);
 fondo.addImage(fondoImg);
 fondo.scale = 2;
 fondo.depth = -1000;

 arbolGroup = new Group();
 arbol1Group = new Group();
 rocaGroup = new Group();
 mGroup = new Group();

 verde = createSprite(650,500,1350,350);
 verde.shapeColor = "green";
 verde.depth = -999;
 n = 0.1;
 m = 0.1;

 manoD = createSprite(900,540);
 manoD.addImage(manoDImg);
 manoD.scale = 0.7;
 manoD.rotation = 30;
 manoD.depth = 1000;

 manoI = createSprite(400,760);
 manoI.addImage(manoIImg);
 manoI.scale = 0.7;
 manoI.rotation = -30;
 manoI.depth = 1000;

 a = 0;
 b = 0.1;
 c = 1;
}

function draw() {
 createCanvas(1319,625);
 
 if (frameCount%1 === 0){
    arbolGroup.setScaleEach(n);
    n = n+0.025;
 }
 if (frameCount%70 === 0){
    n = 0.1;
    
 }

 if (frameCount%1 === 0){
   arbol1Group.setScaleEach(m);
   m = m+0.025;
}
 if (frameCount%50 === 0){
   m = 0.1;
   
}
if (a<30){

   if(frameCount%1 === 0){
      mGroup.setScaleEach(b);
      b = b+0.025+((a*a)/10000);
   }

   if (frameCount%(80-(a)) === 0){
      b = 0.1;

   }

}else if(a===30){

   if(frameCount%1 === 0){
      mGroup.setScaleEach(b);
      b = b+0.1;
    }
   
    if (frameCount%20 === 0){
      b = 0.1;
   
    }
    c = 0;


 }






 manoD.depth = manoD.depth+20;
 manoI.depth = manoI.depth+20;

 
 
 manitas();
 monstritosAparecenYDestruyenTodoAsiQueHayQueDispararles();

 if(mousePressedOver(mGroup[mGroup.lenght-1])){
   console.log("hola");
   }
   
 arbolSpawn();
 rocaSpawn();
 background("white");
 drawSprites();
}


function arbolSpawn() {

    if (frameCount%70 === 0){
        var arbol = createSprite(Math.round(random(200,250)),310);
        arbol.scale = 0.1;  
        arbol.addImage(arbolImg);
        arbol.depth = 1;
        
        arbol.velocityY = 2;
        arbol.velocityX = -8;
    
        arbol.lifetime = 150;
    
        arbolGroup.add(arbol);
    }

    if (frameCount%70 === 0){
         var arbol1 = createSprite(Math.round(random(1075,1125)),310);
         arbol1.scale = 0.1;
         arbol1.addImage(arbolImg);
         arbol1.depth = 1;
      
         arbol1.velocityY = 2;
         arbol1.velocityX = 8;
      
         arbol1.lifetime = 150;
      
         arbolGroup.add(arbol1);
    }

    if (frameCount%50 === 0){
      var arbol2 = createSprite(Math.round(random(1075,1125)),310);
      arbol2.scale = 0.1;
      arbol2.addImage(arbolImg);
      arbol2.depth = 2;
  
      arbol2.velocityY = 2;
      arbol2.velocityX = 8;
  
      arbol2.lifetime = 150;
  
      arbol1Group.add(arbol2);
   }
   if (frameCount%50 === 0){
      var arbol3 = createSprite(Math.round(random(200,250)),310);
      arbol3.scale = 0.1;  
      arbol3.addImage(arbolImg);
      arbol3.depth = 2;
      
      arbol3.velocityY = 2;
      arbol3.velocityX = -8;

      arbol3.lifetime = 150;

      arbol1Group.add(arbol3);
   }

}
function rocaSpawn(){
   if(frameCount%40 === 0){
      var roca = createSprite(200,350,1,1);
      roca.x = Math.round(random(200,1100));
      roca.velocityY = 4;
      roca.depth = 0;
      roca.scale = 0.15;
      roca.lifetime = 200;
      if(roca.x < 650){
         roca.velocityX = (roca.x - 650)/100
      }
      if(roca.x > 650){
         roca.velocityX = (roca.x - 650)/100;
      }

      
      rock = Math.round(random(1,3));
      switch(rock){
         case 1:
            roca.addImage(roca1);
            break
         case 2:
            roca.addImage(roca2);
            break
         case 3:
            roca.addImage(roca3);
            break
         default:

            break
                  
         

      }
      rocaGroup.add(roca);

   }

   
}

function manitas (){
   if(manoD.y<550){
      manoI.velocityY = -10;
   }
   if(manoD.y>750){
      manoI.velocityY = 10;
   }

   if(manoI.y<550){
      manoD.velocityY = -10;
   }
   if(manoI.y>750){
      manoD.velocityY = 10;
   }
}

function monstritosAparecenYDestruyenTodoAsiQueHayQueDispararles(){

  if (a===30){
   if(frameCount%(20)===0){
      mGroup.destroyEach();
      monstrito = createSprite(200,300);
      monstrito.x = Math.round(random(300,1000));
      categorias = Math.round(random(1,5));
      switch(categorias){
         case 1:
            monstrito.addImage(m1Img);
            break
         case 2:
            monstrito.addImage(m2Img);
            break
         case 3:
            monstrito.addImage(m3Img);
            break
         case 4:
            monstrito.addImage(m4Img);
            break
         case 5:
            monstrito.addImage(m5Img);
            break
      }
      monstrito.scale = 0.2;
      monstrito.depth = 3;
      monstrito.lifetime = 20;
      monstrito.velocityY = 2;
      monstrito.debug = true;
      a = a+c;
      mGroup.add(monstrito);
   }
  }
  if (a<30){
   if(frameCount%(80-(a))===0){
      mGroup.destroyEach();
      monstrito = createSprite(200,300);
      monstrito.x = Math.round(random(300,1000));
      categorias = Math.round(random(1,5));
      switch(categorias){
         case 1:
            monstrito.addImage(m1Img);
            break
         case 2:
            monstrito.addImage(m2Img);
            break
         case 3:
            monstrito.addImage(m3Img);
            break
         case 4:
            monstrito.addImage(m4Img);
            break
         case 5:
            monstrito.addImage(m5Img);
            break
      }
      monstrito.scale = 0.2;
      monstrito.depth = 3;
      monstrito.lifetime = 80-(a);
      monstrito.velocityY = 2;
      monstrito.debug = true;
      a = a+c;
      mGroup.add(monstrito);
   }
}
 

}


