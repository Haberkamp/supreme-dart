<script>
  import Router from 'svelte-spa-router';
  import Stepper from '@/components/base/Stepper.svelte';
  import { prefix, routes } from '../routes';
  import { link } from 'svelte-spa-router';

  let pageInfo = {
    title: '',
    backLink: '/',
    currentStep: 0,
    maxSteps: 3,
  };

  function updatePage(event) {
    pageInfo = { ...pageInfo, ...event.detail };
  }
</script>

<div class="create-game">
  <div class="container">
    <h1 class="create-game__title">{pageInfo.title}</h1>

    <div class="create-game__body">
      <Router {prefix} {routes} on:routeEvent={updatePage} />
    </div>

    <div class="create-game__stepper">
      <Stepper
        currentStep={pageInfo.currentStep}
        maxSteps={pageInfo.maxSteps}
      />

      <a href={pageInfo.backLink} use:link class="create-game__back-link"
        ><i class="bi bi-arrow-left me-2" />Go back</a
      >
    </div>
  </div>
</div>

<style lang="scss">
  .create-game {
    padding: 80px 0 160px;
    height: 100%;

    .container {
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    &__title {
      text-align: center;
      margin-bottom: 48px;
    }

    &__body {
      align-self: stretch;
      margin-bottom: 32px;
    }

    &__stepper {
      margin-top: auto;
      color: var(--bs-gray);
    }

    &__back-link {
      display: block;
      color: var(--bs-gray-dark);
      text-decoration: none;
      text-align: center;
      margin-top: 16px;

      &:hover {
        text-decoration: underline;
        color: var(--bs-primary);
      }
    }
  }
</style>
