const initialCounter = 0;

const counter = createCounter(initialCounter);
const view = createView({
  onIncrementButtonClick: handleIncrementButtonClick,
  onDecrementButtonClick: handleDecrementButtonClick,
  onResetButtonClick: handleResetButtonClick,
});

view.render({
  counter: counter.get()
});

function handleIncrementButtonClick() {
  counter.increment();
  view.render({
    counter: counter.get()
  });
};

function handleDecrementButtonClick() {
  counter.decrement();
  view.render({
    counter: counter.get()
  });
};

function handleResetButtonClick() {
  counter.reset();
  view.render({
    counter: counter.get()
  });
};