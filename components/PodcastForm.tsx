import { Podcast } from "@prisma/client";
import { Button } from "./ui/button";
import { PlusIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { Checkbox } from "./ui/checkbox";
import { SubmitHandler, useForm } from "react-hook-form";
import { useToast } from "./ui/use-toast";

interface PodcastFormValue {
  producer: string;
  title: string;
  description: string;
  category: string;
  subCategory: string;
  explicit: boolean;
}

function PodcastForm({ podcast }: { podcast: Podcast }) {
  // TODO: 카테고리 추가
  // TODO: 사진 업로드 추가
  const { register, handleSubmit } = useForm<PodcastFormValue>({
    defaultValues: {
      producer: podcast.producer,
      title: podcast.title,
      description: podcast.description || "",
      category: podcast.category || "",
      subCategory: podcast.subCategory || "",
      explicit: podcast.explicit,
    },
  });
  const { toast } = useToast();

  const onSubmit = async (data: PodcastFormValue) => {
    const res = await fetch(`/api/podcasts/${podcast.id}`, {
      method: "PATCH",
      body: JSON.stringify(data),
    });

    if (res.ok) {
      toast({
        title: "성공적으로 저장되었습니다.",
        description: "팟캐스트 정보가 변경되었습니다.",
        variant: "success",
      });
    } else {
      toast({
        title: "저장에 실패했습니다.",
        description: "잠시 후 다시 시도해주세요.",
        variant: "destructive",
      });
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-6">
        <p className="text-xl font-medium inline-block mb-2">아트워크</p>
        <div className="flex gap-x-6">
          <img
            className="w-32 h-32 border rounded-lg"
            src={podcast.artwork || ""}
            alt="Podcast Artwork"
          />
          <div className="flex flex-col gap-y-2">
            <div className="flex-1"></div>
            <span className="text-gray-400">
              1,400 ~ 3,000 픽셀의 정사각형 사진을 첨부해주세요. (jpg, png)
            </span>
            <div className="flex gap-x-3">
              <Button asChild>
                <div className="flex items-center justify-center">
                  <PlusIcon className="w-5 h-5 mr-1.5" />
                  <span>사진 선택</span>
                </div>
              </Button>
              <Button asChild variant="secondary">
                <div className="flex items-center justify-center">
                  <XMarkIcon className="w-5 h-5 mr-1.5" />
                  <span>삭제</span>
                </div>
              </Button>
            </div>
          </div>
        </div>
      </div>
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
      <div className="mb-6">
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
      <Button type="submit">저장하기</Button>
    </form>
  );
}

export default PodcastForm;
