function TabLine() {
  return <div className="flex-1 h-[2px] bg-gray-500 mx-2"></div>;
}

function TabCircle({
  active,
  stepName,
}: {
  active: boolean;
  stepName: string;
}) {
  return (
    <div className="relative">
      <div
        className={`border-2 border-gray-500 w-6 h-6 rounded-full mb-1 ${
          active ? "bg-gray-500" : ""
        }`}
      ></div>
      <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 whitespace-nowrap">
        {stepName}
      </span>
    </div>
  );
}

export default function TabIndicator({ tabNumber }: { tabNumber: number }) {
  return (
    <div className="flex items-center px-20">
      <TabCircle active={tabNumber === 1} stepName="에피소드" />
      <TabLine />
      <TabCircle active={tabNumber === 2} stepName="오디오" />
      <TabLine />
      <TabCircle active={tabNumber === 3} stepName="제출" />
    </div>
  );
}
