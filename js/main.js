let height = document.getElementById("height");
let weight = document.getElementById("weight");
let calculateBtn = document.getElementById("calculateBtn");
let result = document.getElementById("result");


// Calculate And Display BMI 
let calc_and_display_BMI = () => {
    result.classList.remove("underweight", "normal", "overweight", "obese");
    let the_height = Number(height.value);
  let the_height_by_meter = the_height / 100;
  let the_weight = Number(weight.value);
  let BMI = Number(the_weight / (the_height_by_meter * the_height_by_meter));

  if (BMI < 18.5) {
    result.textContent = `Your BMI Rate : ${BMI.toFixed(1)} (Underweight)`;
    result.classList.add("underweight");
  } else if (BMI >= 18.5 && BMI <= 24.9) {
    result.textContent = `Your BMI Rate : ${BMI.toFixed(1)} (Normal)`;
    result.classList.add("normal");
    result;
  } else if (BMI >= 25 && BMI <= 29.9) {
    result.textContent = `Your BMI Rate : ${BMI.toFixed(1)} (Overweight)`;
    result.classList.add("overweight");
  } else if (BMI >= 30) {
    result.textContent = `Your BMI Rate : ${BMI.toFixed(1)} (Obese)`;
    result.classList.add("obese");
  }
}



calculateBtn.addEventListener("click", calc_and_display_BMI);
