
<template>
	<section class="zkui-foot">
		<div class="placeholder"></div>
		<div class="zkfoot footer">
			<ul class="clear">
				<router-link to="/default" tag="li" class="footer_li">
					<section class="li_svg">
						<m-icon name="zk-home" :class="$route.path.indexOf('default') !== -1 ? 'brand' : 'metal' "></m-icon>
					</section>
					<section class="li_text" :class="$route.path.indexOf('default') !== -1 ? 'brand' : 'metal' ">首页</section>
				</router-link>
				<router-link to="/product/class" tag="li" class="footer_li">
					<section class="li_svg">
						<m-icon name="zk-classification" :class="$route.path.indexOf('product') !== -1 ? 'brand' : 'metal' "></m-icon>
					</section>
					<section class="li_text" :class="$route.path.indexOf('product') !== -1 ? 'brand' : 'metal' ">分类</section>
					
				</router-link>
				<router-link to="/order/cart" tag="li" class="footer_li">
					<section class="li_svg">
						<m-icon name="zk-cart" :class="$route.path.indexOf('order') !== -1 ? 'brand' : 'metal' "></m-icon>
					</section>
					<section class="li_text" :class="$route.path.indexOf('order') !== -1 ? 'brand' : 'metal' ">购物车</section>
				</router-link>
				<router-link to="/user/index" tag="li" class="footer_li">
					<section class="li_svg">
						<m-icon name="zk-me" :class="$route.path.indexOf('user') !== -1 ? 'brand' : 'metal' "></m-icon>
					</section>
					<section class="li_text" :class="$route.path.indexOf('user') !== -1 ? 'brand' : 'metal' ">我的</section>
				</router-link>
			</ul>
		</div>
	</section>
</template>

<script>
import micon from  'src/widgets/m-icon'
export default{
  components: {
    "m-icon": micon
  }
}
</script>
