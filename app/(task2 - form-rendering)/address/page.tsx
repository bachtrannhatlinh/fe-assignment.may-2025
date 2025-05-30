"use client";

import SelectBox from "@/components/SelectBox"
import { addressSchema } from "@/jsons/address-data"

const Page = () => (
  <SelectBox addressData={addressSchema}/>
)

export default Page
