import React, { useRef, useEffect } from "react";
const getRandom = (min: number, max: number) => {
  return Math.random() * (max - min) + min;
};

const Particle = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;
    canvas.width = window.innerWidth - 15;
    canvas.height = window.innerHeight - 100;

    // Create Particle Class
    class Particle {
      public x: number;
      public y: number;
      public directionX: number;
      public directionY: number;
      public size: number;
      public color: string;
      constructor(
        x: number,
        y: number,
        directionX: number,
        directionY: number,
        size: number,
        color: string,
      ) {
        this.x = x;
        this.y = y;
        this.directionX = directionX;
        this.directionY = directionY;
        this.size = size;
        this.color = color;
      }

      // Method to draw individual particles
      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
        ctx.fillStyle = this.color;
        ctx.fill();
      }

      // Check particle position, move the particle, draw it, and interact with mouse
      update() {
        // Check if particle is within canvas
        if (this.x + this.size > canvas.width || this.x - this.size < 0) {
          this.directionX = -this.directionX;
        }
        if (this.y + this.size > canvas.height || this.y - this.size < 0) {
          this.directionY = -this.directionY;
        }

        // Check collision detection - mouse position / particle position
        //

        // for (let a = 0; a < particlesArray.length; a++) {
        //   for (let b = a; b < particlesArray.length; b++) {
        //     const dx = particlesArray[a].x - particlesArray[b].x;
        //     const dy = particlesArray[a].y - particlesArray[b].y;
        //     const distance = Math.hypot(dx, dy);
        //
        //     if (distance < 200) {
        //       ctx.save();
        //       ctx.strokeStyle = "#00000001";
        //       const opacity = 1 - distance / 100;
        //       ctx.globalAlpha = opacity;
        //       ctx.beginPath();
        //       ctx.moveTo(particlesArray[a].x, particlesArray[a].y);
        //       ctx.lineTo(particlesArray[b].x, particlesArray[b].y);
        //       ctx.stroke();
        //       ctx.restore();
        //     }
        //   }
        // }
        //
        // Move particle
        this.x += this.directionX;
        this.y += this.directionY;

        // Draw particle
        this.draw();
      }
    }

    let particlesArray: Particle[] = [];

    // Create particle array
    function init() {
      particlesArray = [];
      const numberOfParticles = 9;
      for (let i = 0; i < numberOfParticles; i++) {
        const size = getRandom(90, 130);
        // const size = Math.random() * 50 + 1;
        const x = Math.random() * (innerWidth - size * 3) + size * 2;
        const y = Math.random() * (innerHeight - size * 3) + size * 2;
        const directionX = Math.random() * 5 - 1.5;
        const directionY = Math.random() * 5 - 1.5;
        const color = `hsl(${getRandom(100, 250)},100%,50%)`;

        ctx.strokeStyle = color;
        particlesArray.push(
          new Particle(x, y, directionX, directionY, size, color),
        );
      }
    }

    // Animation loop
    function animate() {
      ctx.clearRect(0, 0, innerWidth, innerHeight);
      particlesArray.forEach((val: Particle) => val.update());
      requestAnimationFrame(animate);
    }

    // Resize event
    window.addEventListener("resize", () => {
      canvas.width = window.innerWidth - 15;
      canvas.height = window.innerHeight - 64;
      init();
    });
    init();
    animate();
    console.log("render");
    return () => window.removeEventListener("resize", () => null);
  }, []);

  return <canvas ref={canvasRef}></canvas>;
};

export default Particle;
