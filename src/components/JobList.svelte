<script>
  import JobItem from "./JobItem.svelte";
  export let filteredList = [];
</script>

{#each filteredList as job (job.id)}
  <JobItem item={job} on:add-filter />
{/each}
