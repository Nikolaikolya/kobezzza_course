import { abortablePromise } from "../library/abort-controller";

const controller = new AbortController();

abortablePromise(
  new Promise((res) => {
    setTimeout(res, 500);
  }),
  controller
)
  .then(console.log)
  .catch(console.log);

setTimeout(() => controller.abort("aborted"), 100);
