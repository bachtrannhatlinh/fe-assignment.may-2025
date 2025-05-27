'use client';

import SelectBox from "@/components/SelectBox"
import { dataAddressSchema } from "@/jsons/data-address-schema";

const Page = () => (
  <SelectBox addressData={dataAddressSchema}/>
)

export default Page
