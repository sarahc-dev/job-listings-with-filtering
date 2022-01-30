<script>
  export let close = false;
</script>

{#if close}
  <div class="flex">
    <div class="closeBtn">
      <slot />
    </div>
    <button class="close" type="button"><img src="./images/icon-remove.svg" alt="" /></button>
  </div>
{:else}
  <button class="btn" type="button">
    <slot />
  </button>
{/if}

<style>
  .btn,
  .closeBtn {
    cursor: pointer;
    background-color: var(--button-background);
    border-radius: 4px;
    color: var(--header-background);
    font-weight: 700;
    padding: 0.25rem 0.5rem;
    transition: all 0.3s;
  }

  .closeBtn {
    border-radius: 4px 0 0 4px;
  }

  .btn:hover {
    background-color: var(--header-background);
    color: var(--card-background);
  }

  .close {
    cursor: pointer;
    background-color: var(--header-background);
    height: 2rem;
    width: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 0 4px 4px 0;
  }

  .flex {
    display: flex;
  }

  .flex:hover .close {
    background-color: var(--text-role);
  }
</style>
