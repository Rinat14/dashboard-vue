<template>
	<router-view></router-view>
</template>

<script>
	export default {
		name: 'App',
		components: {}
	}
</script>

<style>
	* {
		/* box-sizing: border-box; */
		margin: 0;
		padding: 0;
	}

	body {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}

	::selection {
		color: white;
		background-color: #6366F1;
	}

	::-webkit-scrollbar {
		width: 8px;
		height: 8px;
	}
	::-webkit-scrollbar-track {
		background-color: rgb(15 23 42);
	}
	::-webkit-scrollbar-thumb {
		background-color: rgb(30 41 59);
		border: 1px solid #6366F1;
		border-radius: 20px;
	}
	::-webkit-scrollbar-corner {
		background-color: #6366F1;
	}

	input {
		box-shadow: 0px 1px 2px #0f172a0a;
	}

	input:focus {
		border-color: #A5B4FC;
	}

	select:focus {
		border-color: #A5B4FC;
	}
</style>
