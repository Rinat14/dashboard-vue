import { createWebHistory, createRouter } from "vue-router";
import Layout from '@/layout/layout-view'

const routes = [
	{
		path: '/',
		component: Layout,
		children: [
			{
				path: '/sign-up',
				// path: '',
				component: () => import("../auth/SignUp.vue")
			},
			{
				path: '/sign-in',
				component: () => import ("../auth/SignIn.vue")
			},
			{
				path: '/dashboard',
				component: () => import ("../pages/dashboard-page.vue")
			},
			{
				path: '/e-commerce',
				component: () => import ("../pages/e-commerce-page.vue")
			},
			{
				path: '/community',
				component: () => import ("../pages/community-page.vue")
			},
			{
				path: '/finance',
				component: () => import ("../pages/finance-page.vue")
			},
		]
	}
]

const router = createRouter({
	history: createWebHistory(),
	routes
});

export default router;