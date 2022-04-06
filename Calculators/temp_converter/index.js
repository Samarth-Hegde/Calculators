const buttons = document.querySelectorAll(".btn");
const f_input = document.querySelector("#f-input");
const r_input = document.querySelector("#r-input");
const c_input = document.querySelector("#c-input");
const k_input = document.querySelector("#k-input");
const reset = document.querySelector(".reset-btn");
let f_temp;
let r_temp;
let c_temp;
let k_temp;
let temp_obj;
buttons.forEach((ele) => {
  ele.addEventListener("click", () => {
    if (ele === buttons[0]) {
      temp_obj = centigrade_to_other(
        fahrenheit_to_centigrade(parseFloat(f_input.value))
      );
      r_input.value = temp_obj.r_temp.toFixed(3);
      c_input.value = fahrenheit_to_centigrade(
        parseFloat(f_input.value)
      ).toFixed(3);
      k_input.value = temp_obj.k_temp.toFixed(3);
    } else if (ele === buttons[1]) {
      temp_obj = centigrade_to_other(
        rankine_to_centigrade(parseFloat(r_input.value))
      );
      f_input.value = temp_obj.f_temp.toFixed(3);
      c_input.value = rankine_to_centigrade(parseFloat(r_input.value)).toFixed(
        3
      );
      k_input.value = temp_obj.k_temp.toFixed(3);
    } else if (ele === buttons[2]) {
      temp_obj = centigrade_to_other(parseFloat(c_input.value));
      f_input.value = temp_obj.f_temp.toFixed(3);
      r_input.value = temp_obj.r_temp.toFixed(3);
      k_input.value = temp_obj.k_temp.toFixed(3);
    } else if (ele === buttons[3]) {
      temp_obj = centigrade_to_other(
        kelvin_to_centigrade(parseFloat(k_input.value))
      );
      f_input.value = temp_obj.f_temp.toFixed(3);
      c_input.value = kelvin_to_centigrade(parseFloat(k_input.value)).toFixed(
        3
      );
      r_input.value = temp_obj.r_temp.toFixed(3);
    }
  });
});

const rankine_to_centigrade = (r_temp) => {
  c_temp = (parseFloat(r_temp) - 491.67) * (5 / 9);
  return c_temp;
};
const fahrenheit_to_centigrade = (f_temp) => {
  c_temp = (parseFloat(f_temp) - 32) * (5 / 9);
  return c_temp;
};
const kelvin_to_centigrade = (k_temp) => {
  c_temp = parseFloat(k_temp) - 273.1;
  return c_temp;
};

const centigrade_to_other = (c_temp) => {
  f_temp = parseFloat(c_temp) * (9 / 5) + 32;
  r_temp = parseFloat(c_temp) * (9 / 5) + 491.67;
  k_temp = parseFloat(c_temp) + 273.15;
  return { f_temp, r_temp, k_temp };
};

reset.addEventListener("click", () => {
  f_input.value = "";
  c_input.value = "";
  r_input.value = "";
  k_input.value = "";
});
