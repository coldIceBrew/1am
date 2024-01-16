import { Checkbox } from "@/components/ui/checkbox";
import { IEpisodeForm } from "@/types";
import React from "react";
import { UseFormRegister } from "react-hook-form";

export default function EpisodeTab({
  register,
  hidden,
}: {
  register: UseFormRegister<IEpisodeForm>;
  hidden: boolean;
}) {
  return (
    <div className={`flex flex-col gap-y-6 ${hidden ? "hidden" : ""}`}>
      <div>
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
      <div>
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
      <div>
        <label
          htmlFor="podcast-explicit"
          className="text-xl font-medium inline-block"
        >
          연령 제한 컨텐츠
        </label>
        <Checkbox
          id="podcast-explicit"
          className="ml-3"
          {...register("explicit")}
        />
        <p className="text-sm text-gray-400">
          19세 미만 청소년이 이용하기에 부적절한 컨텐츠 포함
        </p>
      </div>
    </div>
  );
}
