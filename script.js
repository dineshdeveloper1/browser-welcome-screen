function setInitialRotationAngles() {
  const hourHand = document.querySelector('.hour');
  const minHand = document.querySelector('.minute');
  const secHand = document.querySelector('.seconds');
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();
  // Calculate the total number of seconds since the start of the hour
  const totalSeconds = (hours * 3600) + (minutes * 60) + seconds;
  // Calculate the percentage complete within the hour
  const percentageComplete = (totalSeconds / 3600) * 100;
  // Calculate the rotation angles in degrees
  const hourAngle = (hours * 30) + (minutes * 0.5) + (seconds * (0.5 / 60));
  const minAngle = (minutes * 6) + (seconds * (6 / 60));
  const secAngle = seconds * 6;
  // Set the starting rotation angles
  hourHand.setAttribute('transform', `rotate(${hourAngle} 500 500)`);
  minHand.setAttribute('transform', `rotate(${minAngle} 500 500)`);
  secHand.setAttribute('transform', `rotate(${secAngle} 500 500)`);
}
setInitialRotationAngles();