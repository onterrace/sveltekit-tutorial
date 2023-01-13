<script>
   import { version } from '$lib/my-lib.js'
   import welcome from '$lib/images/svelte-welcome.webp';
   export let data; 
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>


<h1>
  index
</h1>
<div>
  {version}
</div>
<img src={welcome} alt="Welcome" />
<div>{data.post.title}</div>
