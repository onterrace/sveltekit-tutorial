<script>
  import MyPicture from '$components/MyPicture.svelte';
  import { browser, building, dev, version } from '$app/environment';
  import { assets, base } from '$app/paths';
</script>



<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
<div>
  <p>Environment:</p>
  <ul>
    <li>version: {version}</li>
    <li>dev: {dev}</li>
    <li>building: {building}</li>
    <li>browser: {browser}</li>
  </ul>
</div>

<div>
  <p>Paths:</p>
  <ul>
    <li>base: {base}</li>
    <li>assets: {assets}</li>
  </ul>
</div>
<MyPicture/>



