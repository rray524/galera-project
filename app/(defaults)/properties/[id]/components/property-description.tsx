export const PropertyDescription = ({
  description,
}: {
  description: string;
}) => (
  <div className="max-w-[1320px] mx-auto my-10 px-4 sm:px-6 lg:px-8">
    <div className=" my-10">
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-5 items-center">
        <div className="md:col-span-1">
          <h2 className="md:text-[30px] text-[20px] font-medium text-left dark:text-white">
            About the Property
          </h2>
        </div>
        <div className="md:col-span-2 justify-center dark:text-gray-200 leading-[32px]">
          <p className="text-left md:text-[17px] text-[15px]">{description}</p>
        </div>
      </div>
    </div>
  </div>
);
