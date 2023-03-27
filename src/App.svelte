<script lang="ts">
  import AuditTable from 'components/AuditTable.svelte'
  import FakeData from './fake-data'

  export let appName: string
  const emails = FakeData
</script>

<style lang="scss">
  main {
    text-align: center;
    padding: 1em;
    margin: 0 auto;
  }

  h1 {
    color: $color-primary;
    font-size: 4em;
    font-weight: 100;
  }
</style>

<main>
  <h1>{appName}</h1>
  <AuditTable {emails} />
</main>
