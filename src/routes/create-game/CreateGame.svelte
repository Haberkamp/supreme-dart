<Router {routes}
        prefix='/create-game'
        on:routeEvent={updateCurrentStep} />

<div class='container create-game'>
  <div class='create-game__wrapper'>
    <h1 class='text-center'>Choose mode</h1>

    <div class='create-game__mode-selection'>
      <a href='/create-game/teams'
         use:link
         class='btn btn-primary'>301</a>

      <span>Or</span>

      <a href='/create-game/teams'
         use:link
         class='btn btn-primary'>501</a>
    </div>

    <div class='stepper create-game__stepper'>
      <span class='stepper__text'>Step {currentStep} of {stepsLength}</span>
    </div>
  </div>
</div>

<script>
  import Router from 'svelte-spa-router';
  import SelectMode from './views/ChooseMode.svelte';
  import CreateTeams from './views/CreateTeams.svelte';

  import { link } from 'svelte-spa-router';

  let currentStep = 0;
  const stepsLength = 2;

  const routes = {
    '/mode': SelectMode,
    '/teams': CreateTeams,
  };

  function updateCurrentStep(event) {
    currentStep = event.detail.step;
  }
</script>

<style lang='scss'>
  .create-game {
    position: relative;
    height: 100%;

    &__wrapper {
      padding-top: 80px;
    }

    &__mode-selection {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      display: flex;
      flex-direction: column;
      align-items: center;

      @media screen and (min-width: 768px) {
        flex-direction: row;
      }

      .btn {
        padding-left: 32px;
        padding-right: 32px;
        margin: 8px 0;

        @media screen and (min-width: 768px) {
          margin: 0 16px;
        }
      }
    }

    &__stepper {
      position: absolute;
      bottom: 32px;
      left: 50%;
      transform: translateX(-50%);
    }
  }

  .stepper {
    margin: 0 auto;

    &__text {
      text-align: center;
      color: var(--bs-gray-dark);
    }
  }
</style>
