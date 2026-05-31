const canvas =
document.getElementById(
"starfield"
);

const ctx =
canvas.getContext("2d");

function resize() {

canvas.width =
window.innerWidth;

canvas.height =
window.innerHeight;
}

resize();

window.addEventListener(
"resize",
resize
);

const stars = [];

for (let i = 0; i < 300; i++) {

stars.push({

```
x: Math.random() * canvas.width,

y: Math.random() * canvas.height,

size: Math.random() * 2,

speed: Math.random() * .3
```

});
}

function animate() {

ctx.clearRect(
0,
0,
canvas.width,
canvas.height
);

ctx.fillStyle = "white";

stars.forEach(star => {

```
ctx.beginPath();

ctx.arc(
  star.x,
  star.y,
  star.size,
  0,
  Math.PI * 2
);

ctx.fill();

star.y += star.speed;

if (star.y >
    canvas.height) {

  star.y = 0;

  star.x =
    Math.random()
    * canvas.width;
}
```

});

requestAnimationFrame(
animate
);
}

animate();
