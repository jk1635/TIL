# Counter using Svelte

### App.svelte
```svelte
<script>
  import { count } from './stores.js';
  import Incrementer from './Incrementer.svelte';
  import Decrementer from './Decrementer.svelte';
  import Resetter from './Resetter.svelte';
</script>

<h1>The count is {$count}</h1>

<Incrementer/>
<Decrementer/>
<Resetter/>
```
### Incrementer.svelte
```svelte
<script>
  import { count } from './stores.js';

  function increment() {
    count.update(n => n + 1);
  }
</script>

<button on:click={increment}>
  +
</button>

```

### Decrementer.svelte
```svelte
<script>
  import { count } from './stores.js';

  function decrement() {
    count.update(n => n - 1);
  }
</script>

<button on:click={decrement}>
  -
</button>

```
### Resetter.svelte
```svelte
<script>
  import { count } from './stores.js';

  function reset() {
    count.set(0);
  }
</script>

<button on:click={reset}>
  reset
</button>
```

### stores.js
```js
import { writable } from 'svelte/store';

export const count = writable(0);
```
<!-- 
# Button with style

```svelte
<script>
  function handleClick() {
    alert('Button Clicked');
  }
</script>


<button on:click={handleClick}>
  Click me
</button>


<style>
  button {
    background: #E2E8F0;
    color: #64748B;
    border: unset;
    border-radius: 6px;
    padding: .75rem 1.5rem;
    cursor: pointer;
  }
  button:hover {
    background: #CBD5E1;
    color: #475569;
  }
  button:focus {
    background: #94A3B8;
    color: #F1F5F9;
  }
</style>
``` -->

See [here](https://svelte.dev/tutorial/auto-subscriptions) for more details.
