<script>
  import { Card, Button, Toggle } from "flowbite-svelte";
</script>
<div>
  <Card img="/images/image-1.webp">
    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 leading-tight">
      {description}
    </p>
    <Button>
      {GitRepo}
    </Button>
    <Button>
      {LiveDemo}
    </Button>
  </Card>
</div>

