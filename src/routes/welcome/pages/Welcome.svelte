<script>
  import { link } from 'svelte-spa-router';
</script>

<div class="welcome">
  <div class="container">
    <h1 class="welcome__title">Welcome</h1>

    <a href="/create-game/team-size" use:link class="btn btn-primary w-100"
      >Start new game</a
    >
  </div>
</div>

<style lang="scss">
  .welcome {
    padding: 80px 0;

    &__title {
      text-align: center;
      margin-bottom: 48px;
    }
  }
</style>
