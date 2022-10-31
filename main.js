pannellum.viewer('panorama', {
  "type": "equirectangular",
  "panorama": "./projeto grupo/times square.jpeg",
  "autoLoad": true
})
gsap.fromTo('.titulo,', {opacity: 0, y: 20}, {opacity: 1,y: 0, duration: 1})