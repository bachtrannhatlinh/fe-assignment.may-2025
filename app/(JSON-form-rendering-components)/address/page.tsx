"use client";

import SelectBox from "@/components/SelectBox"
import { addressDataJson } from "@/jsons/address-data"

const Page = () => {
  return (
    <SelectBox addressData={addressDataJson}/>
  )
}

export default Page
