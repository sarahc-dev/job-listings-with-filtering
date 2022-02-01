<script>
  import { fly } from "svelte/transition";
  export let filterCard = false;
  export let featuredCard = false;
  export let direction = { y: 200, duration: 1000 };
</script>

<article class="card" class:filter-card={filterCard} class:featured-card={featuredCard} transition:fly={direction}>
  <slot />
</article>

<style>
  .card {
    background-color: var(--card-background);
    border-radius: 5px;
    box-shadow: 0px 15px 20px -5px rgba(13, 113, 130, 0.15);
    padding: 2rem 1.5rem 1.5rem;
    margin: 2.5rem auto 0;
    position: relative;
    max-width: 40rem;
  }

  .filter-card {
    padding: 1.25rem 1.5rem 1.25rem 1.25rem;
    margin-top: -2rem;
    position: relative;
    bottom: 1rem;
  }

  .featured-card {
    box-shadow: inset 5px 0px 0px -1px var(--header-background);
  }

  @media (min-width: 870px) {
    .card {
      margin-top: 1.5rem;
      padding: 2rem 2.5rem;
      display: flex;
      max-width: 69.375rem;
    }

    .filter-card {
      display: block;
    }
  }
</style>
