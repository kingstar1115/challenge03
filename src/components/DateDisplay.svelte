<script lang="ts">
  export let datetime: string

  const datetimeObject = new Date(datetime)
  const today = new Date()

  const options: Intl.DateTimeFormatOptions = {
    year:
      datetimeObject.getFullYear() === today.getFullYear()
        ? undefined
        : '2-digit',
    month: '2-digit',
    day: '2-digit',
  }

  const date = datetimeObject.toLocaleDateString('en-US', options)
</script>

<!--
@component
Receives a `datetime` string prop and renders short date format

- Usage:
  ```tsx
  <DateDisplay {datetime} />
  ```
-->
<span>{date}</span>
