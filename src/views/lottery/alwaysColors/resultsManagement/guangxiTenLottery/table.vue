<template>
  <div
    style="border: 1px solid #eee; padding: 0.75rem; margin-top: 0.75rem; text-align: center;"
  >
    <el-form :inline="true" :model="formData">
      <el-form-item label="开奖期号">
        <el-input
          v-model="formData.lotteryNumber"
          placeholder=""
          clearable
        ></el-input>
      </el-form-item>
      <el-form-item label="日期">
        <el-date-picker
          v-model="formData.date"
          type="date"
          placeholder=""
        ></el-date-picker>
      </el-form-item>
      <el-form-item label="">
        <el-button type="primary">搜索</el-button>
      </el-form-item>
    </el-form>
    <el-table
      :data="settingData"
      style="width: 100%;"
      border
      header-align="center"
      stripe
    >
      <el-table-column
        property="lotteryCategory"
        label="彩票类别"
        align="center"
      />
      <el-table-column
        property="lotteryNumber"
        label="彩票期号"
        align="center"
      />
      <el-table-column label="开奖时间" width="180" align="center">
        <template #default="scope">
          <div style="display: flex; align-items: center">
            <el-icon><timer /></el-icon>
            <span style="margin-left: 10px">{{ scope.row.drawTime }}</span>
          </div>
        </template>
      </el-table-column>
      <el-table-column property="num1" label="第一球" align="center" />
      <el-table-column property="num2" label="第二球" align="center" />
      <el-table-column property="num3" label="第三球" align="center" />
      <el-table-column property="num4" label="第四球" align="center" />
      <el-table-column property="specialNum" label="特别号" align="center" />
      <el-table-column property="settlement" label="结算" align="center" />
      <el-table-column property="recalculate" label="重算" align="center" />
      <el-table-column fixed="right" label="操作" width="120" align="center">
        <template #default="scope">
          <el-button-group>
            <el-button
              type="primary"
              link
              @click="editData(scope.$index, scope.row)"
            >
              编辑
            </el-button>
            <el-button
              type="primary"
              link
              @click="viewData(scope.$index, scope.row)"
            >
              查看记录
            </el-button>
          </el-button-group>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
export default {
  data() {
    return {
      formData: {
        lotteryNumber: '',
        date: '',
      },
      settingData: [
        {
          lotteryCategory: '广西十分彩',
          lotteryNumber: '20230306038',
          drawTime: '2023-02-21',
          num1: '8',
          num2: '0',
          num3: '5',
          num4: '2',
          specialNum: '6',
          settlement: '已结算',
          recalculate: '×',
        },
        {
          lotteryCategory: '广西十分彩',
          lotteryNumber: '20230306038',
          drawTime: '2023-02-21',
          num1: '8',
          num2: '0',
          num3: '5',
          num4: '2',
          specialNum: '6',
          settlement: '已结算',
          recalculate: '×',
        },
        {
          lotteryCategory: '广西十分彩',
          lotteryNumber: '20230306038',
          drawTime: '2023-02-21',
          num1: '8',
          num2: '0',
          num3: '5',
          num4: '2',
          specialNum: '6',
          settlement: '已结算',
          recalculate: '×',
        },
      ],
    }
  },
  methods: {
    editData(index, row) {
      console.log(index, row)
    },
    viewData(index, row) {
      console.log(index, row)
    },
  },
}
</script>
<style lang="scss" scoped></style>
