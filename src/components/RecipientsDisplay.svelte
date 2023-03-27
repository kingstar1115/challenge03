
<script lang="ts">
  export let recipients: []
  const recip_length = recipients.length
</script>

<style lang="scss">

  .badge_rect {
    flex: none;
    font-size: 16px;
    color: #f0f0f0;
    background-color: #666666;
    border-radius: 3px;
    padding: 2px 5px 2px 5px;
  }
  .recipient_address {
    flex: auto;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .recipient_cell {
    display: flex;
    justify-content: space-between;
    font-size: 16px;
    color: #333333;
  }
</style>

<span class="recipient_cell">

  {#if recip_length < 2}
  
  <span class="recipient_address">
    {recipients[0]}
  </span>
  
  {/if}

  {#if recip_length > 1}
  
  <span class="recipient_address">
    {recipients[0]},...
  </span>
  
  <span class="badge_rect">
    +{recip_length-1}
  </span>
  
  {/if}
  
</span>