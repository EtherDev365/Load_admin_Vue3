
import { defineStore } from 'pinia'
import config from "@/config"
import axios from 'axios'
export const orderStore = defineStore('order', {
  state: () => ({
    orderList: [],
  }),
  actions: {

    // 获取用户信息
    setOrderList(orderList) {
      this.orderList = orderList;
    },
    async getOrderList(phone_number, audit_result, withdraw_status, withdraw_button, status) {
      try {
        console.log(phone_number, audit_result, withdraw_status, withdraw_button, status);
        const url = config.api.GET_ORDER_LIST;
        const response = (await axios.get(`${url}?phone_number=${phone_number}&audit_result=${audit_result}&withdraw_status=${withdraw_status}&withdraw_button=${withdraw_button}&status=${status}`)).data;
        this.setOrderList(response.orderList);
        return response;
      } catch (e) {
        console.log(e);
      }
    },
    async updateOrder(id, withdraw_amount, withdraw_button, contract) {
      try {
        const url = config.api.UPDATE_ORDER;
        let data = {
          id: id,
          withdraw_amount: withdraw_amount,
          withdraw_button: withdraw_button,
          contract: contract
        };
        const response = (await axios.put(url, data)).data;
        return response;
      } catch (e) {
        console.log(e);
      }
    }
  },
})
