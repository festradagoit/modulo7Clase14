// console.log("conectado");

const output = document.querySelector(".vanilla");
let scrollEventCounter = 0;

document.addEventListener("scroll", () => {
  scrollEventCounter += 1;
  output.textContent = scrollEventCounter;
});

// const result = _.add(4, 3);
// console.log(result);

// Throttle

const throtledOutput = document.querySelector(".throttled");

let scrollThrothledEventCounter = 0;

document.addEventListener(
  "scroll",
  _.throttle(() => {
    scrollThrothledEventCounter += 1;
    throtledOutput.textContent = scrollThrothledEventCounter;
    // console.log("scroll de throttle cada 200ms");
  }, 400)
);

// Debounce

const debouncedOutput = document.querySelector(".debounced");
let scrollDebouncedEventCounter = 0;

document.addEventListener(
  "scroll",
  _.debounce(() => {
    // console.log("scroll con debounce cada 300");
    scrollDebouncedEventCounter += 1;
    debouncedOutput.textContent = scrollDebouncedEventCounter;
  }, 300)
);

const debouncedOutputLeading = document.querySelector(".leading");
let scrollDebouncedLeadingEventCounter = 0;

document.addEventListener(
  "scroll",
  _.debounce(
    () => {
      // console.log("scroll con debounce cada 300");
      scrollDebouncedLeadingEventCounter += 1;
      debouncedOutputLeading.textContent = scrollDebouncedLeadingEventCounter;
    },
    300,
    {
      leading: true,
      trailing: false,
    }
  )
);
