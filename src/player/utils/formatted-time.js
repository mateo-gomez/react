function leftPad(number) {
  return number < 10 ? `0${number}` : number
}

export default function formattedTime(secs) {
  const minutes = parseInt(secs/60, 10)
  const seconds = parseInt(secs % 60, 10)
  return `${leftPad(minutes.toString())} : ${leftPad(seconds.toString())}`
}
