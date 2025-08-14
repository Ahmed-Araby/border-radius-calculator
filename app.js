console.log("here");
const input = document.getElementById("top-left-circle-radius-picker");
const topLeftCircleBox = document.getElementById("top-left-circle");
const styleTargetBox = document.getElementById("style-target-box");

input.addEventListener("input", (event) => {
  console.log(`Input value changed to: ${event.target.value}`);
  const radius = event.target.value;
  topLeftCircleBox.style.width = `${radius*2}px`;
  topLeftCircleBox.style.height = `${radius*2}px`;
  styleTargetBox.style.borderTopLeftRadius = `${radius}px`;
});