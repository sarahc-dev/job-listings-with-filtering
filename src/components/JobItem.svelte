<script>
  import { createEventDispatcher } from "svelte";
  import Card from "./Card.svelte";
  import Button from "./Button.svelte";
  export let item;

  const dispatch = createEventDispatcher();

  const filterOptions = [item.role, item.level, ...item.languages, ...item.tools];

  const addFilter = (filter) => {
    dispatch("add-filter", filter);
  };
</script>

<Card featuredCard={item.featured === true ? true : false}>
  <img class="logo" src={item.logo} alt="{item.company} logo" />
  <div class="container-outer">
    <div class="container">
      <h2 class="company">{item.company}</h2>
      {#if item.new === true}
        <p class="new">New!</p>
      {/if}
      {#if item.featured === true}
        <p class="featured">Featured</p>
      {/if}
    </div>
    <h1 class="position">{item.position}</h1>
    <div class="details">
      <p>{item.postedAt}</p>
      <p>{item.contract}</p>
      <p>{item.location}</p>
    </div>
  </div>
  <ul>
    {#each filterOptions as option}
      <li on:click={() => addFilter(option)}>
        <Button>{option}</Button>
      </li>
    {/each}
  </ul>
</Card>

<style>
  .logo {
    height: 3rem;
    position: absolute;
    top: -1.5rem;
  }

  .company {
    font-size: 0.8125rem;
    line-height: 1.5rem;
    margin-right: 1rem;
  }

  .container {
    display: flex;
    gap: 0.5rem;
  }

  .new,
  .featured {
    text-transform: uppercase;
    color: var(--card-background);
    font-size: 0.6875rem;
    font-weight: 700;
    line-height: 0.875rem;
    letter-spacing: -0.0846154px;
    padding: 0.375rem 0.5rem 0;
    border-radius: 12px;
  }

  .new {
    background-color: var(--header-background);
  }

  .featured {
    background-color: var(--text-role);
  }

  .position {
    cursor: pointer;
    color: var(--text-role);
    font-size: 0.9375rem;
    margin: 0.5rem 0;
    transition: color 0.3s;
  }

  .position:hover {
    color: var(--header-background);
  }

  .details {
    color: var(--text-details);
    display: flex;
    flex-wrap: wrap;
  }

  .details p + p::before {
    content: "\2022";
    margin: 0.5rem;
  }

  .details::after {
    content: "";
    width: 100%;
    border-top: 1px solid var(--text-details);
    margin: 1rem 0;
  }

  ul {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
  }

  @media (min-width: 870px) {
    .logo {
      height: 5.5rem;
      position: static;
      margin-right: 1.5rem;
    }

    .company {
      font-size: 0.875rem;
    }

    .position {
      font-size: 1.125rem;
    }

    .details {
      font-size: 0.9375rem;
      letter-spacing: -0.115385px;
    }

    .details::after {
      display: none;
    }

    .container-outer {
      margin-right: 1.5rem;
      min-width: max-content;
    }

    ul {
      margin-left: auto;
      align-items: center;
      justify-content: end;
    }
  }
</style>
