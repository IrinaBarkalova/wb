counters = document.querySelectorAll(".goods__actions_counter");

counters.forEach((counter) => {
  let decrease = counter.querySelector(".less");
  let increase = counter.querySelector(".more");
  let count = Number(counter.querySelector("span").textContent);
  let warning;
  if (counter.parentNode.querySelector(".warning__count")) {
    warning = Number(
      counter.parentNode.querySelector(".warning__count").textContent
    );
  } else {
    warning = Number.MAX_VALUE;
  }
  increase.addEventListener("click", () => {
    increase.disabled = warning <= count + 1;
    if (count >= 1) {
      decrease.disabled = false;
      count += 1;
      counter.querySelector("span").textContent = count.toString();
    }
    if (count >= 1) {
      decrease.disabled = false;
    }
  });
  decrease.addEventListener("click", () => {
    if (count > 1) {
      decrease.disabled = false;
      count -= 1;
      counter.querySelector("span").textContent = count.toString();
      increase.disabled = false;
    }
    if (count === 1) {
      decrease.disabled = true;
    }
  });
});
