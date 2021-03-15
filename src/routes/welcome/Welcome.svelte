<script>
  import StartButton from '@/components/routes/welcome/StartButton.svelte';
</script>

<div class="welcome">
  <div class="container">
    <h1 class="text-center mb-5">Welcome</h1>

    <div class="welcome__start-wrapper">
      <StartButton>1 vs. 1</StartButton>
    </div>
  </div>
</div>

<style lang="scss">
  .welcome {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100vw;
    height: 100vh;

    &__start-wrapper {
      display: grid;
      grid-template-columns: 1fr;
      gap: 32px;

      @media screen and (min-width: 992px) {
        max-width: 720px;
        margin: 0 auto;
      }
    }
  }
</style>
