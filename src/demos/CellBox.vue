<template>
  <div>
    <m-group>
      <m-cell title="cell" value="hello" is-link></m-cell>
      <m-cell-box is-link>
        cell-box long long long long long long long
      </m-cell-box>
      <m-cell-box>
        cell-box hello world hello world hello world
      </m-cell-box>
      <m-cell title="cell" value="hello" is-link></m-cell>
    </m-group>
  </div>
</template>

<script>
import { MGroup, MCell, MCellbox } from 'src/widgets'

export default {
  components: {
    MGroup,
    MCell,
    MCellbox
  }
}
</script>