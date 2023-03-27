<script lang="ts">
  import { groupBy } from 'lodash-es'
  import DateDisplay from 'components/DateDisplay.svelte'
  import TimeDisplay from 'components/TimeDisplay.svelte'
  import RecipientsDisplay from 'components/RecipientsDisplay.svelte'
  import type { Email } from 'types/Email'

  export let emails: Email[]

  const emailsByDate = groupBy<Email>(emails, ({ datetime }) =>
    new Date(datetime).toLocaleDateString()
  )
  // Convert into an array of arrays based on date sent
  const emailGroupsByDate = Object.entries(emailsByDate).map(val => val[1])
</script>

<style lang="scss">
  $border-style: solid 1px #777;
  table {
    table-layout: fixed;
    border: $border-style;
    width: 100%;
    text-align: left;
  }
  th,
  td {
    border: $border-style;
    padding: 5px 10px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    height: 34px;
    box-sizing: border-box;
  }
  th {
    &:nth-child(1) {
      width: 20%;
    }
    &:nth-child(2) {
      width: 30%;
    }
    &:nth-child(3) {
      width: 50%;
    }
    &:nth-child(4) {
      width: 90px;
    }
    &:nth-child(5) {
      width: 70px;
    }
  }
  tbody:nth-child(even) {
    background-color: #ddd;
  }
  .align-right {
    text-align: right;
  }
</style>

<!--
@component
Table component responsible for showing audited emails' information.

- Usage:
  ```tsx
  <AuditTable {emails} />
  ```
-->
<table cellspacing="0">
  <thead>
    <tr>
      <th>Sender</th>
      <th>Recipients</th>
      <th>Subject</th>
      <th class="align-right">Date</th>
      <th class="align-right">Time</th>
    </tr>
  </thead>
  {#each emailGroupsByDate as emailGroup}
    <tbody>
      {#each emailGroup as { from, to: recipients, subject, datetime }}
        <tr>
          <td>{from}</td>
          <td>
            <RecipientsDisplay {recipients} />
          </td>
          <td>{subject}</td>
          <td class="align-right">
            <DateDisplay {datetime} />
          </td>
          <td class="align-right">
            <TimeDisplay {datetime} />
          </td>
        </tr>
      {/each}
    </tbody>
  {/each}
</table>
