<style lang="postcss">
  :global(html) {
    background-color: theme(colors.gray.100);
  }
</style>

<script>
	import { onMount } from 'svelte';
	import { createScene } from '../lib/scene.js';

	let el;

	onMount(() => {
		createScene(el);
	});

</script>

<canvas class="fixed top-0 left-0 w-full h-full z-negative-1 bg-cover bg-no-repeat bg-center" bind:this={el} />


	<div class="relative overflow-y-scroll z-10 px-4 flex flex-wrap flex-col pt-4 pl-4 overflow-hidden h-full gap-y-2">
		
		<a href="#" class="group text-white transition duration-300 text-3xl font-bold max-w-fit">
			Cuentas y Tarjetas
			<span class="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-red-500"></span>
		</a>

		<a href="#" class="group text-white transition duration-300 text-3xl font-bold max-w-fit">
			Créditos
			<span class="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-red-500"></span>
		</a>

		<a href="#" class="group text-white transition duration-300 text-3xl font-bold max-w-fit">
			Ahorro e Inversión
			<span class="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-red-500"></span>
		</a>

		<a href="#" class="group text-white transition duration-300 text-3xl font-bold max-w-fit">
			Seguros
			<span class="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-red-500"></span>
		</a>

		<a href="#" class="group text-white transition duration-300 text-3xl font-bold max-w-fit">
			Internacional
			<span class="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-red-500"></span>
		</a>

		<a href="#" class="group text-white transition duration-300 text-3xl font-bold max-w-fit">
			Servicios en Línea
			<span class="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-red-500"></span>
		</a>

		<a href="#" class="group text-white transition duration-300 text-3xl font-bold max-w-fit">
			Alianzas
			<span class="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-red-500"></span>
		</a>

		<a href="#" class="group text-white transition duration-300 text-3xl font-bold max-w-fit">
			Cotiza en Línea
			<span class="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-red-500"></span>
		</a>

	</div>