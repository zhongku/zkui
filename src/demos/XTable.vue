<template>
  <div>
    <load-more tip="default" :show-loading="false" background-color="#fbf9fe"></load-more>
    <div style="padding:0 15px;">
      <m-table>
        <thead>
          <tr>
            <th>Product</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Apple</td>
            <td>$1.25</td>
          </tr>
          <tr>
            <td>Banana</td>
            <td>$1.20</td>
          </tr>
        </tbody>
      </m-table>
    </div>
    <div>
      <load-more tip="cell-bordered=false" :show-loading="false" background-color="#fbf9fe"></load-more>
      <m-table :cell-bordered="false" style="background-color:#fff;">
        <thead>
          <tr>
            <th>Product</th>
            <th>Price</th>
            <th>Quantity</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Apple</td>
            <td>$1.25</td>
            <td> x 1</td>
          </tr>
          <tr>
            <td>Banana</td>
            <td>$1.20</td>
            <td> x 2</td>
          </tr>
        </tbody>
      </m-table>

      <load-more tip="content-bordered=false" :show-loading="false" background-color="#fbf9fe"></load-more>

      <m-table :cell-bordered="false" :content-bordered="false" style="background-color:#fff;">
        <thead>
          <tr style="background-color: #F7F7F7">
            <th>Product</th>
            <th>Price</th>
            <th>Quantity</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Apple</td>
            <td>$1.25</td>
            <td> x 1</td>
          </tr>
          <tr>
            <td>Banana</td>
            <td>$1.20</td>
            <td> x 2</td>
          </tr>
        </tbody>
      </m-table>
      </div>
      <div style="padding:15px;">
        <load-more tip="full-bordered" :show-loading="false" background-color="#fbf9fe"></load-more>
        <m-table full-bordered style="background-color:#fff;">
          <thead>
            <tr>
              <th>Product</th>
              <th>Price</th>
              <th>Quantity</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Apple</td>
              <td colspan="2">$1.25 x 10</td>
            </tr>
            <tr>
              <td>Banana</td>
              <td>$1.20</td>
              <td>x 08</td>
            </tr>
          </tbody>
        </m-table>
    </div>
  </div>
</template>

<script>
import { MTable, MLoadmore } from 'src/widgets'

export default {
  components: {
    MTable,
    MLoadmore
  }
}
</script>