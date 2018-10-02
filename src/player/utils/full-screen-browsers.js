

const fullScreenBrowsers = () => document.fullscreen || document.webkitIsFullScreen || document.mozFullScreen

const requestFullscreen = (element) => {
  try {
    element.requestFullscreen()
  } catch (e) {
    try {
      element.webkitRequestFullscreen()
    } catch (e) {
      try {
        element.mozRequestFullScreen()
      } catch (e) {
        try {
          element.msRequestFullscreen()
        } catch (e) {
          console.log(e);
        }
      }
    }
  }
}

const exitFullScreen = () => {
  try { document.exitFullscreen()       } catch(e){
    try { document.webkitExitFullscreen() } catch(e){
      try { document.mozCancelFullscreen()  } catch(e){
        try { document.msExitFullscreen()     } catch(e){
          console.log(e)
        }
      }
    }
  }
}

export {
  fullScreenBrowsers,
  requestFullscreen,
  exitFullScreen
}
