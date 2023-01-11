<template>
	<div class="wrapper w-full h-screen w-screen overflow-hidden flex">
		<div class="w-3/6 h-full flex justify-center items-center">
			<div class="w-8/12 mx-auto flex justify-center">
				<form action="" class="w-auto h-auto">
					<h1 class="text-3xl font-bold text-[#1E293B;] mb-5">Create your Account ✨</h1>
					<div>
						<div class="flex flex-col mb-2.5">
							<label class="text-[#475569] text-base font-medium mb-2" for="email-input">Email Address <span class="text-rose-600 text-bold text-2xl">&lowast;</span></label>
							<input class="outline-none text-[#1E293B] border-2 py-1 rounded border-solid px-3 border-[#E2E8F0]" type="email" name="email" placeholder="acneinc@" id="email-input">
						</div>
						<div class="flex flex-col mb-2.5">
							<label class="text-[#475569] text-base font-medium mb-2" for="name-input">Full Name <span class="text-rose-600 text-bold text-2xl">&lowast;</span></label>
							<input class="outline-none text-[#1E293B] border-2 py-1 rounded border-solid px-3 border-[#E2E8F0]" type="text" name="full-name" placeholder="Eric Dier" id="name-input">
						</div>
						<div class="flex flex-col mb-2.5">
							<label class="text-[#475569] text-base font-medium mb-2" for="select-input">Your Role <span class="text-rose-600 text-bold text-2xl">&lowast;</span></label>
							<select class="outline-none text-[#1E293B] border-2 py-1 rounded border-solid px-3 border-[#E2E8F0]" name="role" id="select-input">
								<option selected></option>
								<option>Frontend Dev</option>
								<option>Backend Dev</option>
								<option>Software En</option>
								<option>Video Maker</option>
								<option>Mobile Dev</option>
							</select>
						</div>
						<div class="flex flex-col mb-2.5">
							<label class="text-[#475569] text-base font-medium mb-2" for="pass-input">Password <span class="text-rose-600 text-bold text-2xl">&lowast;</span></label>
							<input class="outline-none text-[#1E293B] border-2 py-1 rounded border-solid px-3 border-[#E2E8F0]" type="password" name="password" placeholder="•••••••••••" id="pass-input">
						</div>
						<div class="flex justify-between items-center my-6 w-full">
							<div>
								<input class="cursor-pointer" type="checkbox" name="checkbox" id="checkbox-input">
								<label class="ml-2 cursor-pointer text-[#475569] text-base" for="checkbox-input">Email me about product news.</label>
							</div>
							<router-link class="cursor-pointer text-white font-medium text-sm py-2 px-3 rounded bg-[#6366F1]" to="/dashboard">Sign Up</router-link>
						</div>
					</div>
					<div class="border-t border-solid border-[#E2E8F0] pt-5">
						<p class="text-[#475569] text-sm">Have an account? <router-link to="/sign-in" class="text-[#6366F1] ml-3">Sign In</router-link></p>
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