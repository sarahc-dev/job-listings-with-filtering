<script>
  import { JobStore } from "./stores";
  import Header from "./components/Header.svelte";
  import Filter from "./components/Filter.svelte";
  import JobList from "./components/JobList.svelte";
  import Footer from "./components/Footer.svelte";

  let filtersApplied = [];
  let filteredList = $JobStore;

  const addFilter = (e) => {
    if (filtersApplied.includes(e.detail) === false) {
      filtersApplied = [...filtersApplied, e.detail];
    }
    filterList(filtersApplied);
  };

  const removeFilter = (e) => {
    if (e.detail === "all") {
      filtersApplied = [];
    } else {
      filtersApplied = filtersApplied.filter((item) => {
        return item != e.detail;
      });
    }
    filterList(filtersApplied);
  };

  const filterList = (filters) => {
    filteredList = $JobStore;
    if (filters.length > 0) {
      filters.forEach((filter) => {
        filteredList = filteredList.filter((job) => {
          return job.role === filter || job.level === filter || job.languages.includes(filter) || job.tools.includes(filter);
        });
      });
    }
  };
</script>

<Header />
<main>
  <Filter {filtersApplied} on:remove-filter={removeFilter} />
  <JobList {filteredList} on:add-filter={addFilter} />
</main>
<Footer />

<style>
  main {
    padding: 1rem 1.5rem 2.125rem;
  }

  @media (min-width: 870px) {
    main {
      padding: 3.25rem 4rem 7.5rem;
    }
  }
</style>
