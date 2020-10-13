const celeste = document.getElementById('celeste')
      const violeta = document.getElementById('violeta')
      const naranja = document.getElementById('naranja')
      const verde = document.getElementById('verde')
      const btnEmpezar = document.getElementById('btnEmpezar')
      const VELOCIDAD = 0.5
      
      class Juego {
        constructor() {
          this.inicializar()
          this.generarSecuencia()
          this.siguienteNivel()
        }

        inicializar() {
          btnEmpezar.classList.add('hide')
          this.elegirColor = this.elegirColor.bind(this)
          this.nivel = 1
          this.colores = {
            celeste,
            violeta,
            naranja,
            verde
          }
        }

        generarSecuencia() {
          this.secuencia = new Array(10).fill(0).map(n => Math.floor(Math.random() * 4))
        }

        siguienteNivel() {
          this.iluminarSecuencia()
          this.agregarEventosClick()
        }

        transformarNumeroAColor(num) {
          if (num === 0) return 'celeste'
          if (num === 1) return 'violeta'
          if (num === 2) return 'naranja'
          if (num === 3) return 'verde'
        }

        iluminarSecuencia() {
          for (let i = 0; i < this.nivel; i++) {
            const color = this.transformarNumeroAColor(this.secuencia[i])
            setTimeout(() => this.iluminarColor(color), 1500 * i * VELOCIDAD)
          }
        }

        iluminarColor(color) {
          this.colores[color].classList.add('light')
          setTimeout(() => this.apagarColor(color), 700 * VELOCIDAD)
        }

        apagarColor(color) {
          this.colores[color].classList.remove('light')
        }

        agregarEventosClick() {
          this.colores.celeste.addEventListener('click', this.elegirColor)
          this.colores.verde.addEventListener('click', this.elegirColor)
          this.colores.violeta.addEventListener('click', this.elegirColor)
          this.colores.naranja.addEventListener('click', this.elegirColor)
        }

        elegirColor(ev) {
          console.log(ev)
        }
      }

      function empezarJuego() {
        /* Para debuggear -> window */
        window.juego = new Juego()
      }