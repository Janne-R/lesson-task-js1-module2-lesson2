/*Add a click event to the button that disables the button and starts a counter.

Count to 7 and update span.count with the value of the count.

Once 7 is reached stop the count and enable the button.*/

const button = document.querySelector("button");

function countToSeven() {
  let count = 0;
  const spanCount = document.querySelector(".count");
  spanCount.innerHTML = count;

  const intervalId = setInterval(function () {

    count++;
    spanCount.innerHTML = count;

    if (count === 7) {
      clearInterval(intervalId);
      button.disabled = false;
    }

    console.log(count);
  }, 500);
}

button.onclick = function () {
  countToSeven();
  button.disabled = true;
}

