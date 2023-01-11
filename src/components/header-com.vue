<template>
	<header class="header w-full h-auto">
		<div class="w-full h-full">
			<nav class="navbar w-full flex justify-end items-center py-4 bg-white pr-8 border-b border-[#E2E8F0]">
				<div class="flex items-center">
					<div class="w-8 h-8 bg-[#F1F5F9] rounded-2xl cursor-pointer flex justify-center items-center mr-3"><img src="@/assets/icons/search.svg" alt="Search icon"></div>
					<div class="w-8 h-8 bg-[#F1F5F9] rounded-2xl cursor-pointer flex justify-center items-center mr-3"><img src="@/assets/icons/message.svg" alt="Search icon"></div>
					<div class="w-8 h-8 bg-[#F1F5F9] rounded-2xl cursor-pointer flex justify-center items-center mr-3"><img src="@/assets/icons/rule.svg" alt="Search icon"></div>
					<div class="h-[24px] w-[2px] bg-[#E2E8F0] mr-3"></div>
					<div class="flex justify-between items-center">
						<img class="mr-2 cursor-pointer" src="@/assets/icons/profile-logo.svg" alt="Profile logo">
						<span class="mr-[4px] cursor-pointer text-sm font-medium text-[#475569]">Acne Inc.</span>
						<span><img class="w-3 mt-[4px] cursor-pointer" src="@/assets/icons/Path.svg" alt="Path"></span>
					</div>
				</div>
			</nav>
			<div class="w-full h-full bg-[#F1F5F9] p-[32px]">
				<div class="h-[116px] my-bg w-full my-bg-img rounded flex justify-left items-center">
					<div class="px-6 w-full h-auto">
						<h2 class="text-[#1E293B] text-3xl font-bold mt-[-10px]">Good afternoon, Acne Inc. 👋</h2>
						<p class="text-[#475569] tracking-tight text-base mt-[4px] font-normal">Here is what's happening with your projects today:</p>
					</div>
				</div>
				<div class="flex justify-between items-center mt-8">
					<div class="flex items-center relative">
						<div class="absolute right-[-40px] z-10 w-9">
							<img src="../assets/icons/1-avatar.svg" alt="Avatar">
						</div>
						<div class="absolute right-[-64px] z-20 w-9">
							<img src="../assets/icons/2-avatar.svg" alt="Avatar">
						</div>
						<div class="absolute right-[-89px] z-30 flex items-center justify-center bg-[#E2E8F0] rounded-[18px] w-9 h-9">
							<img src="../assets/icons/3-avatar.svg" alt="Avatar">
						</div>
						<div class="absolute right-[-114px] z-40 w-9">
							<img src="../assets/icons/4-avatar.svg" alt="Avatar">
						</div>
						<div class="absolute right-[-138px] z-50 flex items-center justify-center bg-[#fff] cursor-pointer rounded-[18px] w-9 h-9">
							<img src="../assets/icons/add.svg" alt="Add button img">
						</div>
					</div>
					<div class="flex items-center">
						<div class="w-[38px] h-[38px] mr-2 flex justify-center cursor-pointer items-center rounded shadow border border-[#E2E8F0] bg-white">
							<img src="../assets/icons/show-list.svg" alt="Show list icon">
						</div>
						<div class="flex items-center justify-between mr-2 h-[38px] px-3 bg-white rounded shadow border border-[#E2E8F0]">
							<img class="cursor-pointer" src="../assets/icons/scechule.svg" alt="Scechule icon">
							<div class="ml-2">
								<span class="text-[#475569] text-sm font-medium">Nov 20, 2020</span>
								<span class="text-[#CBD5E1] font-medium font-base"> - </span>
								<span class="text-[#475569] text-sm font-medium">Dec 19, 2020</span>
							</div>
						</div>
						<button class="flex items-center justify-between h-[38px] rounded px-3 bg-[#6366F1] shadow">
							<img src="../assets/icons/add-white.svg" alt="Add white button">
							<span class="ml-2 text-white text-sm font-medium">Add View</span>
						</button>
					</div>
				</div>
			</div>
		</div>
	</header>
</template>

<style scoped>
	.my-bg-img {
		background: url("../assets/images/Bg.png") no-repeat right;
		background-size: cover;
	}
</style>