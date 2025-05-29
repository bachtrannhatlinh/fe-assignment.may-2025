const InforUser = ({
  inforOne,
  inforTwo,
}: {
  inforOne: string;
  inforTwo: string;
}) => (
  <div>
    <div className="text-xs text-gray-500 font-semibold">{inforOne}</div>
    <div className="font-semibold">{inforTwo}</div>
  </div>
);

const CollappsePanel = ({
  icon1,
  icon2,
  icon3,
  title,
}: {
  icon1: React.ReactNode;
  icon2: React.ReactNode;
  icon3?: React.ReactNode;
  title: string;
  active?: boolean;
}) => (
  <div className="border-b border-solid pt-6 pb-3 flex items-center gap-2 text-xs text-gray-400 font-semibold cursor-pointer hover:bg-gray-50 transition">
    <div className="flex flex-row gap-2 items-center">
      {icon1}
      <span>{title}</span>
      {icon2}
    </div>
    {icon3}
  </div>
);

export { InforUser, CollappsePanel };