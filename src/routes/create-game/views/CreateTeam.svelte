<script>
  import { onMount, createEventDispatcher } from 'svelte';

  const dispatch = createEventDispatcher();

  onMount(() => {
    dispatch('routeEvent', {
      title: 'Create Team',
      currentStep: 3,
      backLink: '/create-game/game-mode',
    });
  });
</script>

<p>create team</p>
