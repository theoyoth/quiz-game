<template>
  <div>
    <Particles id="tsparticles" :options="particleOptions" />
    <h1 class="text-3xl mt-8 font-bold text-center">what's up!</h1>
    <div class="flex items-center justify-center h-80">
      <NuxtLink to="/type">
        <div class="group w-40 p-4 bg-green-600 hover:bg-green-500 rounded-lg text-center">
          <p class="font-semibold text-lg">Play <font-awesome-icon :icon="['fas','play']" /></p>
        </div>
      </NuxtLink>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';
import Particles from 'particles.vue';
declare module 'particles.vue';
Vue.use(Particles);

export default {
  data() {
    return {
      particleOptions: {
    "autoPlay": true,
    "background": {
      "image": "",
      "position": "50% 50%",
      "repeat": "no-repeat",
      "size": "cover",
      "opacity": 1
    },
    "backgroundMask": {
      "composite": "destination-out",
      "cover": {
        "color": {
          "value": "#fff"
        },
        "opacity": 1
      },
      "enable": false
    },
    "fullScreen": {
      "enable": true,
      "zIndex": 1
    },
    "detectRetina": true,
    "duration": 0,
    "fpsLimit": 60,
    "interactivity": {
      "detectsOn": "window",
      "modes": {
        "attract": {
          "distance": 200,
          "duration": 0.4,
          "easing": "ease-out-quad",
          "factor": 1,
          "maxSpeed": 50,
          "speed": 1
        },
        "bounce": {
          "distance": 200
        },
        "bubble": {
          "distance": 300,
          "duration": 0.4,
          "mix": false
        },
        "connect": {
          "distance": 80,
          "links": {
            "opacity": 0.5
          },
          "radius": 60
        },
        "grab": {
          "distance": 100,
          "links": {
            "blink": false,
            "consent": false,
            "opacity": 1
          }
        },
        "light": {
          "area": {
            "gradient": {
              "start": {
                "value": "#ffffff"
              },
              "stop": {
                "value": "#000000"
              }
            },
            "radius": 1000
          },
          "shadow": {
            "color": {
              "value": "#000000"
            },
            "length": 2000
          }
        },
        "push": {
          "default": true,
          "groups": [],
          "quantity": 4
        },
        "remove": {
          "quantity": 2
        },
        "repulse": {
          "distance": 200,
          "duration": 0.4,
          "factor": 100,
          "speed": 1,
          "maxSpeed": 50,
          "easing": "ease-out-quad"
        },
        "slow": {
          "factor": 3,
          "radius": 200
        },
        "trail": {
          "delay": 1,
          "pauseOnStop": false,
          "quantity": 1
        }
      }
    },
    "manualParticles": [],
    "motion": {
      "disable": false,
      "reduce": {
        "factor": 4,
        "value": true
      }
    },
    "particles": {
      "bounce": {
        "horizontal": {
          "random": {
            "enable": false,
            "minimumValue": 0.1
          },
          "value": 1
        },
        "vertical": {
          "random": {
            "enable": false,
            "minimumValue": 0.1
          },
          "value": 1
        }
      },
      "collisions": {
        "bounce": {
          "horizontal": {
            "random": {
              "enable": false,
              "minimumValue": 0.1
            },
            "value": 1
          },
          "vertical": {
            "random": {
              "enable": false,
              "minimumValue": 0.1
            },
            "value": 1
          }
        },
        "enable": false,
        "mode": "bounce",
        "overlap": {
          "enable": true,
          "retries": 0
        }
      },
      "color": {
        "value": ["#d14775", "#b33fca", "#9bc53d", "#68abde", "#ec7513"],
        "animation": {
          "h": {
            "count": 0,
            "enable": false,
            "offset": 0,
            "speed": 1,
            "sync": true
          },
          "s": {
            "count": 0,
            "enable": false,
            "offset": 0,
            "speed": 1,
            "sync": true
          },
          "l": {
            "count": 0,
            "enable": false,
            "offset": 0,
            "speed": 1,
            "sync": true
          }
        }
      },
      "destroy": {
        "mode": "none",
        "split": {
          "count": 1,
          "factor": {
            "random": {
              "enable": false,
              "minimumValue": 0
            },
            "value": 3
          },
          "rate": {
            "random": {
              "enable": false,
              "minimumValue": 0
            },
            "value": {
              "min": 4,
              "max": 9
            }
          },
          "sizeOffset": true
        }
      },
      "gradient": [],
      "groups": {},
      "life": {
        "count": 0,
        "delay": {
          "random": {
            "enable": false,
            "minimumValue": 0
          },
          "value": 0,
          "sync": false
        },
        "duration": {
          "random": {
            "enable": false,
            "minimumValue": 0.0001
          },
          "value": 0,
          "sync": false
        }
      },
      "links": {
        "blink": false,
        "color": {
          "value": "#fff"
        },
        "consent": false,
        "distance": 100,
        "enable": false,
        "frequency": 1,
        "opacity": 1,
        "shadow": {
          "blur": 5,
          "color": {
            "value": "#00ff00"
          },
          "enable": false
        },
        "triangles": {
          "enable": false,
          "frequency": 1
        },
        "width": 1,
        "warp": false
      },
      "move": {
        "angle": {
          "offset": 0,
          "value": 90
        },
        "attract": {
          "distance": 200,
          "enable": false,
          "rotate": {
            "x": 3000,
            "y": 3000
          }
        },
        "decay": 0,
        "distance": {},
        "direction": "top",
        "drift": 0,
        "enable": true,
        "gravity": {
          "acceleration": 9.81,
          "enable": false,
          "inverse": false,
          "maxSpeed": 50
        },
        "path": {
          "clamp": true,
          "delay": {
            "random": {
              "enable": false,
              "minimumValue": 0
            },
            "value": 0
          },
          "enable": false,
          "options": {}
        },
        "outModes": {
          "default": "out",
          "bottom": "out",
          "left": "out",
          "right": "out",
          "top": "out"
        },
        "random": false,
        "size": false,
        "speed": 5,
        "spin": {
          "acceleration": 0,
          "enable": false
        },
        "straight": false,
        "trail": {
          "enable": false,
          "length": 10,
          "fillColor": {
            "value": "#000000"
          }
        },
        "vibrate": false,
        "warp": false
      },
      "number": {
        "density": {
          "enable": false,
          "area": 800,
          "factor": 1000
        },
        "limit": 0,
        "value": 30
      },
      "opacity": {
        "random": {
          "enable": true,
          "minimumValue": 0.5
        },
        "value": {
          "min": 0.5,
          "max": 0.9
        },
        "animation": {
          "count": 0,
          "enable": false,
          "speed": 1,
          "sync": false,
          "destroy": "none",
          "startValue": "random",
          "minimumValue": 0.1
        }
      },
      "orbit": {
        "animation": {
          "count": 0,
          "enable": false,
          "speed": 1,
          "sync": false
        },
        "enable": false,
        "opacity": 1,
        "rotation": {
          "random": {
            "enable": false,
            "minimumValue": 0
          },
          "value": 45
        },
        "width": 1
      },
      "reduceDuplicates": false,
      "repulse": {
        "random": {
          "enable": false,
          "minimumValue": 0
        },
        "value": 0,
        "enabled": false,
        "distance": 1,
        "duration": 1,
        "factor": 1,
        "speed": 1
      },
      "roll": {
        "darken": {
          "enable": false,
          "value": 0
        },
        "enable": false,
        "enlighten": {
          "enable": false,
          "value": 0
        },
        "mode": "vertical",
        "speed": 25
      },
      "rotate": {
        "random": {
          "enable": false,
          "minimumValue": 0
        },
        "value": 0,
        "animation": {
          "enable": false,
          "speed": 0,
          "sync": false
        },
        "direction": "clockwise",
        "path": false
      },
      "shadow": {
        "blur": 0,
        "color": {
          "value": "#000000"
        },
        "enable": false,
        "offset": {
          "x": 0,
          "y": 0
        }
      },
      "shape": {
        "options": {},
        "type": "star"
      },
      "size": {
        "random": {
          "enable": true,
          "minimumValue": 5
        },
        "value": {
          "min": 4,
          "max": 10
        },
        "animation": {
          "count": 0,
          "enable": true,
          "speed": 100,
          "sync": false,
          "destroy": "none",
          "startValue": "random",
          "minimumValue": 30
        }
      },
      "stroke": {
        "width": 0
      },
      "tilt": {
        "random": {
          "enable": false,
          "minimumValue": 0
        },
        "value": 0,
        "animation": {
          "enable": false,
          "speed": 0,
          "sync": false
        },
        "direction": "clockwise",
        "enable": false
      },
      "twinkle": {
        "lines": {
          "enable": false,
          "frequency": 0.05,
          "opacity": 1
        },
        "particles": {
          "enable": false,
          "frequency": 0.05,
          "opacity": 1
        }
      },
      "wobble": {
        "distance": 5,
        "enable": false,
        "speed": 50
      },
      "zIndex": {
        "random": {
          "enable": false,
          "minimumValue": 0
        },
        "value": 0,
        "opacityRate": 1,
        "sizeRate": 1,
        "velocityRate": 1
      }
    },
    "pauseOnBlur": true,
    "pauseOnOutsideViewport": true,
    "responsive": [],
    "themes": [],
    "zLayers": 100,
    "retina_detect": true
  }

      }
    }
}
</script>

<style>
.particle {
  background: white;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  position: absolute;
  z-index: 0;
}
</style>