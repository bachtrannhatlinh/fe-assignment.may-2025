"use client";

import React, { useEffect, useState } from "react";
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
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const output = city && ward && street ? `${street}, ${ward}, ${city}` : "";

  if (!isMounted) {
    return null;
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-sky-50 to-blue-100">
      <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-md flex flex-col gap-6">
        <h2 className="text-2xl font-bold text-sky-700 text-center mb-2">Chọn địa chỉ</h2>
        <Select
          value={city}
          onValueChange={(value) => dispatch(setCity(value))}
        >
          <SelectTrigger className="w-full h-12 rounded-lg border-gray-300 focus:ring-2 focus:ring-sky-400">
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

        <Select
          value={ward}
          onValueChange={(value) => dispatch(setWard(value))}
          disabled={!city}
        >
          <SelectTrigger className="w-full h-12 rounded-lg border-gray-300 focus:ring-2 focus:ring-sky-400 disabled:bg-gray-100">
            <SelectValue placeholder="Chọn Phường / Xã" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Phường / Xã</SelectLabel>
              {city && Array.isArray(addressData[city]) && addressData[city].map((ward) => (
                <SelectItem key={ward} value={ward}>
                  {ward}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>

        <input
          className="border border-gray-300 rounded-lg px-3 py-3 w-full text-base focus:outline-none focus:ring-2 focus:ring-sky-400 disabled:bg-gray-100"
          placeholder="Đường và số nhà"
          value={street}
          onChange={(e) => dispatch(setStreet(e.target.value))}
          disabled={!city || !ward}
        />

        <InputField value={output} className="w-full text-center text-sky-700 font-semibold bg-sky-50 border-0" readOnly />

        <Button
          className="mt-2 w-full h-11 bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 text-white font-bold rounded-lg shadow"
          onClick={() => dispatch(resetAddress())}
          type="button"
        >
          Reset
        </Button>
      </div>
    </div>
  );
};

export default SelectBox;
