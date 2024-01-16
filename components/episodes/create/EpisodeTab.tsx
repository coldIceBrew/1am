import React from "react";
import { UseFormRegister } from "react-hook-form";

export default function EpisodeTab({
  register,
  hidden,
}: {
  register: UseFormRegister<any>;
  hidden: boolean;
}) {
  return (
    <div className={`${hidden ? "hidden" : ""}`}>
      <div className="mb-6">
        <label
          htmlFor="producer"
          className="text-xl font-medium inline-block mb-2"
        >
          제작자명
        </label>
        <input
          id="producer"
          className="border w-full p-2.5 text-sm"
          placeholder="ex) 빠삐용"
          {...register("producer", { required: true })}
        />
      </div>

      <div className="mb-6">
        <label
          htmlFor="podcast-title"
          className="text-xl font-medium inline-block mb-2"
        >
          팟캐스트 제목
        </label>
        <input
          id="podcast-title"
          className="border w-full p-2.5 text-sm"
          placeholder="ex) 빠삐용은 못말려"
          {...register("title", { required: true })}
        />
      </div>
      <div className="mb-6">
        <label
          htmlFor="podcast-description"
          className="text-xl font-medium inline-block mb-2"
        >
          팟캐스트 설명
        </label>
        <textarea
          id="podcast-description"
          className="p-2.5 w-full border text-sm"
          placeholder="ex) 좌충우돌 빠비용을 못말리는 이야기를 매주 들려드립니다."
          {...register("description", { required: true })}
        />
      </div>
      <div className="mb-6">
        <label
          htmlFor="podcast-category"
          className="text-xl font-medium inline-block mb-2"
        >
          카테고리
        </label>
        <div className="flex gap-x-3">
          <select
            id="podcast-category"
            className="p-2.5 w-full border text-sm"
            value={""}
            {...register("category")}
          >
            <option value={""} hidden disabled>
              카테고리를 선택해주세요.
            </option>
          </select>

          <select
            id="podcast-sub-category"
            className="p-2.5 w-full border text-sm"
            value={""}
            {...register("subCategory")}
          >
            <option value={""} hidden disabled>
              카테고리를 선택해주세요.
            </option>
          </select>
        </div>
      </div>
    </div>
  );
}
