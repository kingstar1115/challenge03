<script lang="ts">
  export let datetime: string

  const datetimeObject = new Date(datetime)

  const options: Intl.DateTimeFormatOptions = {
    hour: '2-digit',
    minute: '2-digit',
  }

  const time = datetimeObject.toLocaleTimeString('en-US-u-hc-h23', options)
</script>

<!--
@component
Receives a `datetime` string prop and renders short time format

- Usage:
  ```tsx
  <TimeDisplay {datetime} />
  ```
-->
<span>{time}</span>
