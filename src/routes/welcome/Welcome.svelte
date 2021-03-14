<script>
  import StartButton from '@/components/routes/welcome/StartButton.svelte';
</script>

<div class="welcome">
  <div class="container">
    <h1 class="text-center mb-5">Welcome</h1>

    <div class="welcome__start-wrapper">
      <StartButton>1 vs. 1</StartButton>
      <StartButton disabled>2 vs. 2</StartButton>
      <StartButton disabled>3 vs. 3</StartButton>
      <StartButton disabled>4 vs. 4</StartButton>
    </div>
  </div>
</div>

<style scoped lang="scss">
  .welcome {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 100vh;

    &__start-wrapper {
      display: grid;
      grid-template-columns: 1fr;
      gap: 32px;

      @media screen and (min-width: 768px) {
        grid-template-columns: 1fr 1fr;
      }

      @media screen and (min-width: 992px) {
        max-width: 720px;
        margin: 0 auto;
      }
    }
  }
</style>
