<template>
	<div class="bg-slate-800 w-[19.8%] py-4 overflow-y-auto fixed h-screen">
		<div class="pl-6">
			<a href="/" class="mb-[50px] block">
				<img class="w-10" src="@/assets/icons/logo.svg" alt="Logo of this site">
			</a>
		</div>
		<div class="px-4">
			<h2 class="text-slate-400 mb-4 ml-2 text-sm font-semibold uppercase">Pages</h2>
			<ul class="h-full w-full">
				<li>
					<router-link to="/dashboard" class="py-[10px] flex items-center px-[14px] block text-white font-medium text-sm">
						<img class="w-9" src="@/assets/icons/Shapes.svg" alt="Shapes">
						<span class="flex ml-3 w-full justify-between items-center">Dashboard
							<span><img class="w-3" src="@/assets/icons/Path.svg" alt="Path"></span>
						</span>
					</router-link>
				</li>
				<li>
					<router-link to="/e-commerce" class="py-[10px] flex items-center px-[14px] block text-white font-medium text-sm">
						<img class="w-9" src="@/assets/icons/3.svg" alt="Shapes">
						<span class="flex ml-3 w-full justify-between items-center">E-Commerce
							<span><img class="w-3" src="@/assets/icons/Path.svg" alt="Path"></span>
						</span>
					</router-link>
				</li>
				<li>
					<router-link to="/community" class="py-[10px] flex items-center px-[14px] block text-white font-medium text-sm">
						<img class="w-9" src="@/assets/icons/Icon.svg" alt="Shapes">
						<span class="flex ml-3 w-full justify-between items-center">Community
							<span><img class="w-3" src="@/assets/icons/Path.svg" alt="Path"></span>
						</span>
					</router-link>
				</li>
				<li>
					<router-link to="/finance" class="py-[10px] flex items-center px-[14px] block text-white font-medium text-sm">
						<img class="w-9" src="@/assets/icons/Shapes1.svg" alt="Shapes">
						<span class="flex ml-3 w-full justify-between items-center">Finance
							<span><img class="w-3" src="@/assets/icons/Path.svg" alt="Path"></span>
						</span>
					</router-link>
				</li>
				<li>
					<router-link to="/job-board" class="py-[10px] flex items-center px-[14px] block text-white font-medium text-sm">
						<img class="w-9" src="@/assets/icons/job.svg" alt="Shapes">
						<span class="flex ml-3 w-full justify-between items-center">Job Board
							<span><img class="w-3" src="@/assets/icons/Path.svg" alt="Path"></span>
						</span>
					</router-link>
				</li>
				<li>
					<router-link to="/tasks" class="py-[10px] flex items-center px-[14px] block text-white font-medium text-sm">
						<img class="w-9" src="@/assets/icons/task.svg" alt="Shapes">
						<span class="flex ml-3 w-full justify-between items-center">Tasks
							<span><img class="w-3" src="@/assets/icons/Path.svg" alt="Path"></span>
						</span>
					</router-link>
				</li>
				<li>
					<router-link to="/messages" class="py-[10px] flex items-center px-[14px] block text-white font-medium text-sm">
						<img class="w-9" src="@/assets/icons/chat.svg" alt="Shapes">
						<span class="flex ml-3 w-full justify-between items-center">Messages
							<span class="w-6 h-5 bg-[#6366F1] rounded flex justify-center items-center text-xs">4</span>
						</span>
					</router-link>
				</li>
				<li>
					<router-link to="/inbox" class="py-[10px] flex items-center px-[14px] block text-white font-medium text-sm">
						<img class="w-9" src="@/assets/icons/inbox.svg" alt="Shapes">
						<span class="flex ml-3 w-full justify-between items-center">
							Inbox
						</span>
					</router-link>
				</li>
				<li>
					<router-link to="/calendar" class="py-[10px] flex items-center px-[14px] block text-white font-medium text-sm">
						<img class="w-9" src="@/assets/icons/calendar.svg" alt="Shapes">
						<span class="flex ml-3 w-full justify-between items-center">
							Calendar
						</span>
					</router-link>
				</li>
				<li>
					<router-link to="/campaigns" class="py-[10px] flex items-center px-[14px] block text-white font-medium text-sm">
						<img class="w-9" src="@/assets/icons/campaigs.svg" alt="Shapes">
						<span class="flex ml-3 w-full justify-between items-center">
							Campaigns
						</span>
					</router-link>
				</li>
				<li>
					<router-link to="/settings" class="py-[10px] flex items-center px-[14px] block text-white font-medium text-sm">
						<img class="w-9" src="@/assets/icons/setting.svg" alt="Shapes">
						<span class="flex ml-3 w-full justify-between items-center">Settings
							<span><img class="w-3" src="@/assets/icons/Path.svg" alt="Path"></span>
						</span>
					</router-link>
				</li>
				<li>
					<router-link to="/utility" class="py-[10px] flex items-center px-[14px] block text-white font-medium text-sm">
						<img class="w-9" src="@/assets/icons/utility.svg" alt="Shapes">
						<span class="flex ml-3 w-full justify-between items-center">Utility
							<span><img class="w-3" src="@/assets/icons/Path.svg" alt="Path"></span>
						</span>
					</router-link>
				</li>
			</ul>
		</div>
		<div class="px-4 mt-8">
			<h2 class="text-slate-400 mb-4 ml-2 text-sm font-semibold uppercase">More</h2>
			<ul class="w-full h-full">
				<li>
					<router-link to="/authentication" class="py-[10px] flex items-center px-[14px] block text-white font-medium text-sm">
						<img class="w-9" src="@/assets/icons/authentication.svg" alt="Shapes">
						<span class="flex ml-3 w-full justify-between items-center">Authentication
							<span><img class="w-3" src="@/assets/icons/Path.svg" alt="Path"></span>
						</span>
					</router-link>
				</li>
				<li>
					<router-link to="/onboarding" class="py-[10px] flex items-center px-[14px] block text-white font-medium text-sm">
						<img class="w-9" src="@/assets/icons/onboarding.svg" alt="Shapes">
						<span class="flex ml-3 w-full justify-between items-center">Onboarding
							<span><img class="w-3" src="@/assets/icons/Path.svg" alt="Path"></span>
						</span>
					</router-link>
				</li>
				<li>
					<router-link to="/components" class="py-[10px] flex items-center px-[14px] block text-white font-medium text-sm">
						<img class="w-9" src="@/assets/icons/components.svg" alt="Shapes">
						<span class="flex ml-3 w-full justify-between items-center">Components
							<span><img class="w-3" src="@/assets/icons/Path.svg" alt="Path"></span>
						</span>
					</router-link>
				</li>
			</ul>
		</div>
	</div>
</template>

<style scoped>
	@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');

	* {
		font-family: 'Inter', sans-serif;
	}

	.router-link-exact-active {
		background-color: rgb(15 23 42);
		border-radius: 2px;
	}
</style>