<template>
  <div>
    <divider>m-icon 使用svg图标</divider>
    <box gap="10px">
       <m-icon name="zk-grid" spin class="icon-brand"></m-icon>
       <m-icon name="zk-grid"  class="icon-metal" size="1.5rem"></m-icon>
       <m-icon name="zk-grid"  class="icon-light" size="2rem"></m-icon>
       <m-icon name="zk-grid"  class="icon-accent" size="2.5rem"></m-icon>
       <m-icon name="zk-grid"  class="icon-focus" size="3rem"></m-icon>
       <m-icon name="zk-grid"  class="icon-primary" size="3rem"></m-icon>
       <m-icon name="zk-grid" spin class="icon-success" size="3rem"></m-icon>
       <m-icon name="zk-grid"  class="icon-danger" size="3rem"></m-icon>
       <m-icon name="zk-grid"  class="icon-warning" size="3rem"></m-icon>
       <m-icon name="zk-fenrun"  class="icon-info" size="3rem"></m-icon>

<pre><code> &lt;m-icon name=&quot;zk-grid&quot; spin class=&quot;icon-brand&quot;&gt;&lt;/m-icon&gt;
       &lt;m-icon name=&quot;zk-grid&quot;  class=&quot;icon-metal&quot; size=&quot;1.5rem&quot;&gt;&lt;/m-icon&gt;
       &lt;m-icon name=&quot;zk-grid&quot;  class=&quot;icon-light&quot; size=&quot;2rem&quot;&gt;&lt;/m-icon&gt;
       &lt;m-icon name=&quot;zk-grid&quot;  class=&quot;icon-accent&quot; size=&quot;2.5rem&quot;&gt;&lt;/m-icon&gt;
       &lt;m-icon name=&quot;zk-grid&quot;  class=&quot;icon-focus&quot; size=&quot;3rem&quot;&gt;&lt;/m-icon&gt;
       &lt;m-icon name=&quot;zk-grid&quot;  class=&quot;icon-primary&quot; size=&quot;3rem&quot;&gt;&lt;/m-icon&gt;
       &lt;m-icon name=&quot;zk-grid&quot; spin class=&quot;icon-success&quot; size=&quot;3rem&quot;&gt;&lt;/m-icon&gt;
       &lt;m-icon name=&quot;zk-grid&quot;  class=&quot;icon-danger&quot; size=&quot;3rem&quot;&gt;&lt;/m-icon&gt;
       &lt;m-icon name=&quot;zk-grid&quot;  class=&quot;icon-warning&quot; size=&quot;3rem&quot;&gt;&lt;/m-icon&gt;
       &lt;m-icon name=&quot;zk-fenrun&quot;  class=&quot;icon-info&quot; size=&quot;3rem&quot;&gt;&lt;/m-icon&gt;
</code></pre>


    </box>
    <group-title>weui 字体图标列子</group-title>
    <box gap="10px 10px">
      <icon type="success"></icon>
      <icon type="info"></icon>
      <icon type="info-circle"></icon>
      <icon type="warn"></icon>
      <icon type="waiting"></icon>
      <icon type="waiting-circle"></icon>
      <icon type="safe-success"></icon>
      <icon type="safe_warn"></icon>
      <icon type="success-circle"></icon>
      <icon type="success-no-circle"></icon>
      <icon type="circle"></icon>
      <icon type="download"></icon>
      <icon type="cancel"></icon>
      <icon type="search"></icon>
      <icon type="clear"></icon>
      <br/>
      <icon type="success" is-msg></icon>
      <icon type="info" is-msg></icon>
      <icon type="warn" is-msg></icon>
      <icon type="waiting" is-msg></icon>
      <icon type="safe_success" is-msg></icon>
      <icon type="safe_warn" is-msg></icon>
    </box>
  </div>
</template>

<script>
  import { Box, MIcon, Icon, GroupTitle,Divider, XScroll } from 'vux'

  export default {
    components: {
      Box,
      XScroll,
      GroupTitle,
      Divider,
      Icon,
      MIcon
    }
  }
</script>
