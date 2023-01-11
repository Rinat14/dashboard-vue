<template>
	<div class="wrapper w-full h-screen w-screen overflow-hidden flex">
		<div class="w-3/6 h-full flex justify-center items-center">
			<div class="w-8/12 mx-auto flex justify-center">
				<form action="" class="w-auto h-auto">
					<h1 class="text-3xl font-bold text-[#1E293B;] mb-5">Welcome back! ✨</h1>
					<div>
						<div class="flex flex-col mb-2.5">
							<label class="text-[#475569] text-base font-medium mb-2" for="email-input">Email Address <span class="text-rose-600 text-bold text-2xl">&lowast;</span></label>
							<input class="outline-none text-[#1E293B] border-2 py-1 rounded border-solid px-3 border-[#E2E8F0]" type="email" name="email" placeholder="acneinc@" id="email-input">
						</div>
						<div class="flex flex-col mb-2.5">
							<label class="text-[#475569] text-base font-medium mb-2" for="name-input">Full Name <span class="text-rose-600 text-bold text-2xl">&lowast;</span></label>
							<input class="outline-none text-[#1E293B] border-2 py-1 rounded border-solid px-3 border-[#E2E8F0]" type="text" name="full-name" placeholder="Eric Dier" id="name-input">
						</div>
						<div class="flex justify-between items-center my-6 w-full">
							<div>
								<router-link to="/" class="ml-2 text-[#475569] text-base border-b-2 border-[#4755699f] text-base">Forgot Password?</router-link>
							</div>
							<router-link class="cursor-pointer text-white font-medium text-sm py-2 px-3 rounded bg-[#6366F1]" to="/dashboard">Sign In</router-link>
						</div>
					</div>
					<div class="border-t border-solid border-[#E2E8F0] pt-5">
						<p class="text-[#475569] text-sm mb-6">Don't you have an account? <router-link to="/" class="text-[#6366F1] ml-3">Sign Up</router-link></p>
						<div class="w-[344px] rounded py-2 px-3 bg-[#FEF3C7]">
							<p class="text-[#D97706]">✓ To support you during the pandemic super pro features are free until March 31st.</p>
						</div>
					</div>
				</form>
			</div>
		</div>
		<div class="absolute w-[14.5rem] top-[18%] left-[42.5%]">
			<img class="w-full" src="@/assets/icons/Group5.svg" alt="">
		</div>
		<div class="w-3/6 h-full">
			<div class="w-full">
				<img class="w-full h-full object-cover" src="../assets/images/1.png" alt="A girl photo">
			</div>
		</div>
	</div>
</template>