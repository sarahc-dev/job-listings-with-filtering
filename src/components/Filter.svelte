<script>
  import { createEventDispatcher } from "svelte";
  import Card from "./Card.svelte";
  import Button from "./Button.svelte";
  export let filtersApplied = [];

  const dispatch = createEventDispatcher();

  const removeFilter = (filter) => {
    dispatch("remove-filter", filter);
  };
</script>

{#if filtersApplied.length > 0}
  <Card filterCard="true">
    <div class="card">
      <ul>
        {#each filtersApplied as filter}
          <li on:click={() => removeFilter(filter)}>
            <Button close="true">{filter}</Button>
          </li>
        {/each}
      </ul>
      <button class="clear" on:click={() => removeFilter("all")}>Clear</button>
    </div>
  </Card>
{/if}

<style>
  .card {
    display: flex;
    justify-content: space-between;
  }

  ul {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
  }

  .clear {
    cursor: pointer;
    color: var(--text-details);
    font-weight: 700;
    align-self: center;
    margin-left: 1rem;
  }

  .clear:hover {
    color: var(--header-background);
    text-decoration: underline;
  }
</style>
