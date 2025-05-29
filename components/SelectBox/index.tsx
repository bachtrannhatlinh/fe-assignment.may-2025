"use client";

import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/store";
import {
  setCity,
  setWard,
  setStreet,
  resetAddress,
} from "@/store/addressSlice";
import InputField from "../InputField";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { IAddressData } from "@/types/address";
import { Button } from "../ui/button";

interface SelectBoxProps {
  addressData: IAddressData;
}

const SelectBox = ({ addressData }: SelectBoxProps) => {
  const dispatch = useDispatch();
  const { city, ward, street } = useSelector((state: RootState) => state.address);

  const output = city && ward && street ? `${street}, ${ward}, ${city}` : "";

  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-4">
      {/* Select Tỉnh/Thành phố */}
      <Select
        value={city}
        onValueChange={(value) => dispatch(setCity(value))}
      >
        <SelectTrigger className="w-[220px]">
          <SelectValue placeholder="Chọn Tỉnh / Thành phố" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Tỉnh / Thành phố</SelectLabel>
            {Object.keys(addressData).map((city) => (
              <SelectItem key={city} value={city}>
                {city}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>

      {/* Select Phường/Xã */}
      <Select
        value={ward}
        onValueChange={(value) => dispatch(setWard(value))}
        disabled={!city}
      >
        <SelectTrigger className="w-[220px]">
          <SelectValue placeholder="Chọn Phường / Xã" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Phường / Xã</SelectLabel>
            {city &&
              addressData[city]?.map((ward) => (
                <SelectItem key={ward} value={ward}>
                  {ward}
                </SelectItem>
              ))}
          </SelectGroup>
        </SelectContent>
      </Select>

      {/* Input Đường và số nhà */}
      <input
        className="border rounded px-2 py-1 w-[220px]"
        placeholder="Đường và số nhà"
        value={street}
        onChange={(e) => dispatch(setStreet(e.target.value))}
        disabled={!city || !ward}
      />

      <InputField value={output} className="w-[250px]" />
      <Button
        className="mt-2 w-[100px] bg-red-500 hover:bg-red-600 text-white"
        onClick={() => dispatch(resetAddress())}
        type="button"
      >
        Reset
      </Button>
    </div>
  );
};

export default SelectBox;
