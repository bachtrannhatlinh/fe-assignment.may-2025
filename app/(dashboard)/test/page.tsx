import SelectBox from "@/components/SelectBox"
import { addressDataJson } from "@/jsons/json"

const Page = () => {
  return (
    <SelectBox addressData={addressDataJson}/>
  )
}

export default Page
