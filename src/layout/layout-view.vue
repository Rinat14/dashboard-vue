<template>
	<div class="flex">
		<SideBar></SideBar>
		<div class="w-[80.2%] ml-auto">
			<Header/>
			<div class="p-6"> 
				<router-view></router-view>
			</div>
		</div>
	</div>
</template>

<script>
import sideBar from '@/components/sidebar-com';
import Header from '@/components/header-com';

export default {
	name: 'LayoutView',
	components: {
		SideBar: sideBar,
		Header: Header
	}
}
</script>

<style scoped>
</style>