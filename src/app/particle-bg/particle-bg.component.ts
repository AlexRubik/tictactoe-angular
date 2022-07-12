import { Component, OnInit } from '@angular/core';
import { loadFull } from 'tsparticles';
import { MoveDirection, ClickMode, HoverMode, OutMode, ISourceOptions, Engine, Container } from "tsparticles-engine";





@Component({
  selector: 'app-particle-bg',
  templateUrl: './particle-bg.component.html',
  styleUrls: ['./particle-bg.component.scss']
})
export class ParticleBgComponent implements OnInit {

  
  innerWidth!:any;
  id = "tsparticles";
  particlesUrl = "https://gateway.pinata.cloud/ipfs/QmQ2HJNdaBcTojNk5Ddnptxx7oP3wN7DciewdkeBC7H4YL";
  particlesOptions: ISourceOptions = {
    
   
    fullScreen: {
      zIndex: -1
    },
    fpsLimit: 120,
    interactivity: {
      events: {
        onClick: {
          enable: false,
          mode: 'push'
        },
        onHover: {
          enable: true,
          mode: 'repulse'
        },
        resize: true
      },
      modes: {
        push: {
          quantity: 4
        },
        repulse: {
          distance: 100,
          duration: 0.4
        }
      }
    },
    particles: {
      color: {
        value: '#254467'
      },
      links: {
        color: '#254467',
        distance: 150,
        enable: true,
        opacity: 0.4,
        width: 1
      },
      move: {
        direction: 'none',
        enable: true,
        outModes: 'bounce',
        random: false,
        speed: 0.76,
        straight: false
      },
      number: {
        density: {
          enable: true,
          area: 900
        },
        value: 80
      },
      opacity: {
        value: 0.75
      },
      shape: {
        type: 'circle'
      },
      size: {
        value: { min: 1, max: 5 }
      }
    },
    detectRetina: true
  };

  constructor() { }

  ngOnInit(): void {

    this.innerWidth = window.innerWidth;
    console.log(this.innerWidth)
    
  }

  async particlesInit(engine: Engine): Promise<void> {
    console.log("init", engine);

    await loadFull(engine);
  }

  public particlesLoaded(container: Container): void {
    console.log("loaded", container);
  }





  
}
