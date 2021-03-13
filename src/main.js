import bootstrap from 'bootstrap/dist/js/bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import App from './App.svelte';

const app = new App({
  target: document.body,
});

export default app;

if (import.meta.hot) {
  import.meta.hot.accept();
  import.meta.hot.dispose(() => {
    app.$destroy();
  });
}

const tooltipTriggerList = [].slice.call(
  document.querySelectorAll('[data-bs-toggle="tooltip"]')
);
tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl);
});
