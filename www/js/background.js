let c = init("canvas"),
w = (canvas.width = window.innerWidth),
h = (canvas.height = window.innerHeight);


class firefly
{
    constructor()
    {
        this.x = Math.random() * w;
        this.y = Math.random() * h;
        this.s = Math.random() * 2;        
        this.a = 1.0;
    }
    
    move()
    {
        this.s += 1;
        this.a = this.a - Math.random() / 20;
    }
  
    show()
    {        
        let i = this.s;
        let opacity = this.a;
        let red = 64;
        let green = 64;
        let blue = 64;
        let color = `rgba(${red}, ${green}, ${blue}, ${opacity})`;
                
        c.beginPath();
        c.ellipse(this.x,this.y, 2, 2 , 2 * Math.PI, 0, 2 * Math.PI);
        c.lineWidth = 3; // Largeur de la bordure
        opacity = this.a / 4 * 4; // Valeur d'opacité
        color = `rgba(${red}, ${green}, ${blue}, ${opacity})`;
        c.strokeStyle = color;
        c.stroke();
        
        c.beginPath();
        c.ellipse(this.x,this.y,i * 2, i , 2 * Math.PI, 0, 2 * Math.PI);
        c.lineWidth = 3; // Largeur de la bordure
        opacity = this.a / 4 * 3;
        color = `rgba(${red}, ${green}, ${blue}, ${opacity})`;
        c.strokeStyle = color;
        c.stroke();

        c.beginPath();
        c.ellipse(this.x,this.y,i * 4, i * 2 ,  2 * Math.PI, 0, 2 * Math.PI);
        c.lineWidth = 2;
        opacity = this.a / 4 * 2;
        color = `rgba(${red}, ${green}, ${blue}, ${opacity})`;
        c.strokeStyle = color;
        c.stroke();
        
        c.beginPath();
        c.ellipse(this.x,this.y, i * 8, i * 4 ,  2*Math.PI, 0, 2*Math.PI);
        c.lineWidth = 1;
        opacity = this.a / 4 * 1;
        color = `rgba(${red}, ${green}, ${blue}, ${opacity})`;
        c.strokeStyle = color;       
        c.stroke();
    }
}

let f = [];

function draw() 
{    
    for(let i = 0; i < f.length; i++)
    {    
        if (f[i].a <= 0)
        {
            f.splice(i,1);
        }
    }
        
    if(f.length < 25){
        for(let j = f.length; j < 25; j++){
            f.push(new firefly());
        }
     }

    for(let i = 0; i < f.length; i++){
        f[i].move();
        f[i].show();
    }
}

let mouse = {};
let last_mouse = {};

canvas.addEventListener("mousemove", function(e) 
    {
        last_mouse.x = mouse.x;
        last_mouse.y = mouse.y;

        mouse.x = e.pageX - this.offsetLeft;
        mouse.y = e.pageY - this.offsetTop;
    },
    false
);

function init(elemid) 
{
    let canvas = document.getElementById(elemid),
    c = canvas.getContext("2d"),
    w = (canvas.width = window.innerWidth),
    h = (canvas.height = window.innerHeight);
    c.fillStyle = "rgba(0,0,0,1)";
    c.fillRect(0, 0, w, h);
    return c;
}

window.requestAnimFrame = (function() 
{
    return 
    (
        window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        window.oRequestAnimationFrame ||
        window.msRequestAnimationFrame ||
        function(callback) 
        {
            window.setTimeout(callback);
        }
    );
});

function loop() 
{
  c.clearRect(0, 0, w, h);
  draw();
  window.requestAnimFrame(loop);
}

window.addEventListener("resize", function() 
{
  (w = canvas.width = window.innerWidth),
  (h = canvas.height = window.innerHeight);
  loop();
});

loop();
setInterval(loop, 150);