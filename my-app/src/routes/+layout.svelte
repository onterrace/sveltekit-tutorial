<script>
   import { page } from '$app/stores';

   /** @type {import('./$types').PageData} */
   export let data;

   console.log(data.sections); // [{ slug: 'profile', title: 'Profile' }, ...]
</script>
<svelte:head>
  <title>{$page.data.title}</title>
</svelte:head>
<nav>
  <a href="/">Home</a>
  <a href="/about">About</a>
  <a href="/user">User</a>
</nav>

<slot></slot>