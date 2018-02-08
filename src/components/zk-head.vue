
<template>
	<section class="zk-head">
		<div class="placeholder"></div>
		<header>
			<section class="Title">
				<h1>{{title}}</h1>
			</section>
			<section v-if="typeof goBack=='object'">
				<div class="goBackClass" @click="goBack.event">
					<div class="svg-wrap-sm">
						<svg>
							<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#goback"></use>
						</svg>
					</div>
					<h3>{{goBack.txt?goBack.txt:goBack}}</h3>
				</div>
			</section>
			<section v-else>
				<div class="goBackClass" @click="goBackThing">
					<div class="svg-wrap-sm">
						<m-icon name="zk-back"  ></m-icon>
					</div>
					<h3>{{goBack}}</h3>
				</div>
			</section>
		</header>
	</section>
</template>

<script>


export default {
	data() {
		return {
			addthing: false
		}
	},
	props: ['title', 'goBack'],
	created() {

	},
	mounted() {
	},
	components: {
	},
	computed: {

	},
	methods: {
		controlShow() {
			this.addthing = true
		},
		controlhide() {
			this.addthing = false
		},
		goBackThing() {
			this.$route.path === '/singlechat' ? this.$router.push('/dialogue') : window.history.go(-1)
		},

		refreshPage() {
			this.$emit('refreshPage') // 点击头部刷新页面
		},
		toggleShare() {
			this.shareShow = !this.shareShow
		}
	}
}
</script>