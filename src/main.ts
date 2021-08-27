import App from './App.svelte';

const a: string = 1;
console.log(a);

const app = new App({
    target: document.getElementById('container') as HTMLElement
});

export default app;
