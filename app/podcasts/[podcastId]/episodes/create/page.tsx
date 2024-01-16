"use client";

import AudioTab from "@/components/episodes/create/AudioTab";
import EpisodeTab from "@/components/episodes/create/EpisodeTab";
import SubmitTab from "@/components/episodes/create/SubmitTab";
import TabIndicator from "@/components/episodes/create/TabIndicator";
import { Button } from "@/components/ui/button";
import { PodcastFormValue } from "@/types";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

export default function CreateEpisode() {
  const { register, handleSubmit } = useForm<PodcastFormValue>();
  const [tabNumber, setTabNumber] = useState(1);

  const onSubmit = (data: PodcastFormValue) => {
    console.log(data);
  };

  const nextTab = () => {
    if (tabNumber === 3) return;
    // TODO: 현재까지의 입력값을 검증하고, 다음 탭으로 넘어가도록 구현
    // TODO: 두번째 탭에서는 폼 Submit 구현
    setTabNumber((prev) => prev + 1);
  };

  const prevTab = () => {
    if (tabNumber === 1) return;
    setTabNumber((prev) => prev - 1);
  };

  return (
    <>
      <h1 className="text-2xl font-thin mb-10 border-b">에피소드 만들기</h1>
      <div className="flex flex-col justify-center my-[80px]">
        <TabIndicator tabNumber={tabNumber} />
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <EpisodeTab register={register} hidden={tabNumber !== 1} />
        <AudioTab register={register} hidden={tabNumber !== 2} />
        <SubmitTab hidden={tabNumber !== 3} />
        <div className="flex justify-between mt-16">
          <Button
            className={tabNumber === 1 ? "hidden" : ""}
            variant={"secondary"}
            onClick={prevTab}
          >
            이전
          </Button>
          <Button
            className={tabNumber === 3 ? "hidden" : "ml-auto"}
            onClick={nextTab}
          >
            다음
          </Button>
        </div>
      </form>
    </>
  );
}
