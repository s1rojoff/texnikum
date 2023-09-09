import { ref } from "vue"

const applyByEmail = ref<boolean>(false)

export function applyByEmailAdress(applyByEmail: boolean) {
  if(applyByEmail){
    applyByEmail = false
  }else{
    applyByEmail = true
  }
  return {applyByEmail}
}
