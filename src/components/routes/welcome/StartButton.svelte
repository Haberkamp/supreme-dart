<script>
  export let disabled = false;
</script>

{#if disabled}
  <div title="Currently only 1 vs. 1 is available" data-bs-toggle="tooltip">
    <button class="btn btn-primary w-100" {disabled}>
      <slot />
    </button>
  </div>
{:else}
  <button class="btn btn-primary" {disabled}>
    <slot />
  </button>
{/if}
