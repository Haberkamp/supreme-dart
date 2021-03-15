<script>
  import { createEventDispatcher } from 'svelte';
  import { onMount } from 'svelte';

  const dispatch = createEventDispatcher();

  onMount(() => {
    dispatch('routeEvent', {
      step: 2,
    });
  });
</script>
