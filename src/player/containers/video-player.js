import React, { Component } from 'react'
import VideoPlayerLayout from '../components/video-player-layout'
import Video from '../components/video'
import Title from '../components/title'
import PlayPause from '../components/play-pause'
import Timer from '../components/timer'
import Controls from '../components/video-player-controls'
import formattedTime from '../utils/formatted-time'
import ProgressBar from '../components/progress-bar'
import Spinner from '../components/spinner'
import Volume from '../components/volume'
import FullScreen from '../components/full-screen'
import { fullScreenBrowsers, requestFullscreen, exitFullScreen } from '../utils/full-screen-browsers'

export default class VideoPlayer extends Component {
  state = {
    pause: true,
    duration: 0,
    currentTime: 0,
    loading: false,
    volume: 1,
    muted: false
  }
  togglePlay = (event) => {
    this.setState({
      pause: !this.state.pause
    })
  }
  componentDidMount() {
    this.setState({
      pause: (!this.props.autoplay)
    })
  }
  handleLoadedMetada = event => {
    this.video = event.target
    this.setState({
      duration: this.video.duration
    })
  }
  handleTimeUpdate = event => {
    // console.log(this.video.currentTime);
    this.setState({
      currentTime: this.video.currentTime
    })
  }
  handleProgressChange = event => {
    // event.target.value
    this.video.currentTime = event.target.value
  }
  handleSeeking = event => {
    this.setState({
      loading: true
    })
  }
  handleseeked = event => {
    this.setState({
      loading: false
    })
  }
  handleVolumeChange = event => {
    this.video.volume = event.target.value
  }
  toggleMute = event => {
    this.video.muted = !this.state.muted
    this.state.muted = !this.state.muted
  }
  handleFullScreenClick = event => {
    if (!fullScreenBrowsers()) {
      // this.player.webkitRequestFullscreen()
      requestFullscreen(this.player)
    } else {
      exitFullScreen()
    }
  }
  setRef = element => {
    this.player = element
  }
  render() {
    return (
      <VideoPlayerLayout
        setRef={this.setRef}
      >
        <Title title={this.props.title} />
        <Controls>
          <PlayPause
            pause={this.state.pause}
            handleClick={this.togglePlay}
          />
          <Timer
            duration={formattedTime(this.state.duration)}
            currentTimeFormatted={formattedTime(this.state.currentTime)}
          />
          <ProgressBar
            duration={this.state.duration}
            currentTime={~~this.state.currentTime}
            handleProgressChange={this.handleProgressChange}
          />
          <Volume
            handleVolumeChange={this.handleVolumeChange}
            toggleMute={this.toggleMute}
            mute={this.state.muted}
          />
          <FullScreen
            handleFullScreenClick={this.handleFullScreenClick}
          />
        </Controls>
        {
          this.state.loading && <Spinner />
        }
        {/* <Spinner
          active={this.state.loading}
        /> */}
        <Video
          autoplay={this.props.autoplay}
          pause={this.state.pause}
          handleLoadedMetada={this.handleLoadedMetada}
          handleTimeUpdate={this.handleTimeUpdate}
          handleSeeking={this.handleSeeking}
          handleseeked={this.handleseeked}
          src={this.props.src}
        />
      </VideoPlayerLayout>
    )
  }
}
