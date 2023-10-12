export default function PodcastsInfo() {
  return (
    <div className="grid grid-cols-6">
      <div className="col-span-3 pr-10">
        <form>
          <div className="mb-5">
            <p className="text-xl font-medium inline-block mb-2">아트워크</p>
            <div className="flex flex-rot gap-x-6">
              <img
                className="w-32 h-32 border border-main rounded-lg"
                src="https://picsum.photos/128"
                alt="Podcast Artwork"
              />
              <div className="w-full border border-main"></div>
            </div>
          </div>
          <div className="mb-5">
            <label
              htmlFor="producer"
              className="text-xl font-medium inline-block mb-2"
            >
              제작자명
            </label>
            <input
              id="producer"
              className="bg-white border border-main w-full p-2.5 text-sm"
              placeholder="ex) 빠삐용"
            />
          </div>

          <div className="mb-5">
            <label
              htmlFor="podcast-title"
              className="text-xl font-medium inline-block mb-2"
            >
              팟캐스트 제목
            </label>
            <input
              id="podcast-title"
              className="bg-white border border-main w-full p-2.5 text-sm"
              placeholder="ex) 빠삐용은 못말려"
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="podcast-description"
              className="text-xl font-medium inline-block mb-2"
            >
              팟캐스트 설명
            </label>
            <textarea
              id="podcast-description"
              className="p-2.5 w-full border border-main text-sm"
              placeholder="ex) 좌충우돌 빠비용을 못말리는 이야기를 매주 들려드립니다."
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="podcast-category"
              className="text-xl font-medium inline-block mb-2"
            >
              카테고리
            </label>
            <select
              id="podcast-category"
              className="p-2.5 w-full border border-main text-sm"
              value={""}
            >
              <option value={""} hidden disabled>
                카테고리를 선택해주세요.
              </option>
            </select>
          </div>
        </form>
      </div>

      <div className="col-start-5 col-span-2">
        <div className="flex flex-row">
          <p className="text-xl font-medium">미리보기</p>
          <hr className="" />
        </div>
      </div>
    </div>
  );
}
