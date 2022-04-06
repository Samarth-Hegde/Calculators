const metric_btn = document.getElementById("metric");
const us_btn = document.getElementById("us");
const in_div = document.querySelectorAll(".dis-in");
const cm_div = document.querySelectorAll(".dis-cm");
const wt_inp = document.querySelector(".wt-inp");
const wt_btn = document.querySelector(".wt-btn");
const submit = document.querySelector(".submit");
const reset = document.querySelector(".reset");
const bmi_ans = document.querySelector("#BMI");
const category = document.querySelector("#cat");
const hlt_risk = document.querySelector("#hlt-rsk");
const res_div = document.querySelector(".result");
let feet;
let inch;
let cm;
let wt;
let bmi;
let len;

metric_btn.addEventListener("click", () => {
  us_btn.classList.remove("selected");
  metric_btn.classList.add("selected");
  in_div.forEach((ele) => {
    ele.style.display = "none";
  });
  cm_div.forEach((ele) => {
    ele.style.display = "inline";
  });
  wt_inp.placeholder = "kg";
  wt_btn.innerHTML = "kg";
});

us_btn.addEventListener("click", () => {
  metric_btn.classList.remove("selected");
  us_btn.classList.add("selected");
  cm_div.forEach((ele) => {
    ele.style.display = "none";
  });
  in_div.forEach((ele) => {
    ele.style.display = "inline";
  });
  wt_inp.placeholder = "pounds";
  wt_btn.innerHTML = "lb";
});

submit.addEventListener("click", () => {
  if (metric_btn.classList.contains("selected")) {
    if (cm_div[1].value > 0) cm = parseFloat(cm_div[1].value);

    if (wt_inp.value > 0) wt = parseFloat(wt_inp.value);
    bmi = wt / ((cm / 100) * (cm / 100));
  }
  if (us_btn.classList.contains("selected")) {
    if (in_div[0].value > 0) feet = parseFloat(in_div[0].value);
    if (in_div[2].value > 0) inch = parseFloat(in_div[2].value);
    if (wt_inp.value > 0) wt = parseFloat(wt_inp.value);
    len = inch + 12 * feet;
    console.log(feet, inch, len);
    bmi = (wt / (len * len)) * 703;
  }
  if (bmi) {
    bmi_ans.innerHTML = bmi.toFixed(2);
    bm_det(bmi);
  } else {
    catagory.innerHTML = "Please enter proper data";
    hlt_risk.innerHTML = "";
  }
});

const bm_det = (bmi) => {
  res_div.classList.remove("hide");
  if (bmi <= 18.4) {
    category.innerHTML = "Underweight";
    hlt_risk.innerHTML = "Malnutrition risk";
  }
  if (bmi >= 18.5 && bmi <= 24.9) {
    category.innerHTML = "Normal Weight";
    hlt_risk.innerHTML = "Low risk";
  }
  if (bmi >= 25 && bmi <= 29.9) {
    category.innerHTML = "Overweight";
    hlt_risk.innerHTML = "Enhanced risk";
  }
  if (bmi >= 30 && bmi <= 34.9) {
    category.innerHTML = "Moderately obese";
    hlt_risk.innerHTML = "Medium risk";
  }
  if (bmi >= 35 && bmi <= 39.9) {
    category.innerHTML = "Severely obese";
    hlt_risk.innerHTML = "High risk";
  }
  if (bmi >= 40.5) {
    category.innerHTML = "Very severely obese";
    hlt_risk.innerHTML = "Very high risk";
  }
};

reset.addEventListener("click", () => {
  res_div.classList.add("hide");
  category.innerHTML = "";
  hlt_risk.innerHTML = "";
  bmi_ans.innerHTML = "";
  in_div[0].value = "";
  in_div[1].value = "";
  in_div[2].value = "";
  wt_inp.value = "";
  cm_div[0].value = "";
  cm_div[1].value = "";
  feet = 0;
  inch = 0;
  cm = 0;
  wt = 0;
  bmi = 0;
});
