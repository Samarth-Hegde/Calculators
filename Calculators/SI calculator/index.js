const cur_opt = document.querySelector("#cur-dd");
const cur_name = document.querySelector("#cur-name");
const period_select = document.querySelector("#prd-sel");
const p = document.querySelector("#p");
const t = document.querySelector("#t");
const r = document.querySelector("#r");
const interest_amt = document.querySelector("#int-amt");
const total_amt = document.querySelector("#total-amt");
const calc = document.querySelector("#submit");
const reset = document.querySelector("#clr");
const int_amt_lbl = document.querySelector("#i-amt-lbl");
const total_amt_lbl = document.querySelector("#t-amt-lbl");
let cur_arr = [];
let principle;
let time;
let rate_of_interest;
let prd_val = "years";
let si;
let ta;

cur_opt.addEventListener("click", () => {
  cur_name.innerHTML = cur_opt.value;
});

period_select.addEventListener("click", () => {
  prd_val = period_select.value;
});

calc.addEventListener("click", () => {
  if (prd_val === "years" && t.value > 0) {
    time = parseFloat(t.value);
  } else if (prd_val === "days" && t.value > 0) {
    time = parseFloat(t.value) / 365;
  } else if (prd_val === "weeks" && t.value > 0) {
    time = parseFloat(t.value) / 52.143;
  } else if (prd_val === "months" && t.value > 0) {
    time = parseFloat(t.value) / 12;
  }
  if (time) {
    interest_amt.classList.add("dis-res");
    total_amt.classList.add("dis-res");
    int_amt_lbl.innerHTML = "Interest Amount";
    total_amt_lbl.innerHTML = "Total Amount";
    si = (parseFloat(p.value) * time * parseFloat(r.value)) / 100;
    interest_amt.innerHTML = `${cur_opt.value}  ${si.toFixed(2)}`;
    ta = parseFloat(p.value) + si;
    console.log(ta);
    total_amt.innerHTML = `${cur_opt.value}  ${ta.toFixed(2)}`;
  } else {
    interest_amt.innerHTML = "Enter Proper Values";
  }
});

reset.addEventListener("click", () => {
  p.value = "";
  t.value = "";
  r.value = "";
  total_amt.classList.remove("dis-res");
  total_amt.innerHTML = "";
  interest_amt.classList.remove("dis-res");
  interest_amt.innerHTML = "";
  int_amt_lbl.innerHTML = "";
  total_amt_lbl.innerHTML = "";
});
