

function Projects() {
  return (
    <div className="">
      <div className="flex justify-center py-10">
        <h1 className="text-white text-5xl">Projects</h1>
      </div>
      <div className="flex justify-center px-2 ">
        <div className="max-w-screen-lg flex overflow-x-auto space-x-4 p-4">
          <div className="flex-shrink-0 w-64 md:w-96 rounded-xl overflow-hidden shadow-lg  bg-white ">
            <div className="bg-cover bg-center">
              <img  alt="" />
            </div>
            <div className="px-6 pt-6 pb-8">
              <div className="font-bold text-xl">Cat in a box</div>
              <p className="text-gray-700 text-base">
                A fluffy cat curled up snugly inside a small cardboard box,
                purring softly in its sleep.
              </p>
            </div>
          </div>
          <div className="flex-shrink-0 w-64 md:w-96 rounded-xl overflow-hidden shadow-lg  bg-white">
            <div className="bg-cover bg-center">
              <img  alt="" />
            </div>
            <div className="px-6 pt-6 pb-8">
              <div className="font-bold text-xl">A Meditating Cat</div>
              <p className="text-gray-700 text-base">
                A serene cat sits calmly with its eyes closed, appearing to be
                in a state of deep meditation.
              </p>
            </div>
          </div>
          <div className="flex-shrink-0 w-64 md:w-96 rounded-xl overflow-hidden shadow-lg  bg-white">
            <div className="bg-cover bg-center">
              <img  alt="" />
            </div>
            <div className="px-6 pt-6 pb-8">
              <div className="font-bold text-xl">A Meditating Cat</div>
              <p className="text-gray-700 text-base">
                A serene cat sits calmly with its eyes closed, appearing to be
                in a state of deep meditation.
              </p>
            </div>
          </div>
          <div className="flex-shrink-0 w-64 md:w-96 rounded-xl overflow-hidden shadow-lg  bg-white">
            <div className="bg-cover bg-center">
              <img  alt="" />
            </div>
            <div className="px-6 pt-6 pb-8">
              <div className="font-bold text-xl">A Cat Selfie</div>
              <p className="text-gray-700 text-base">
                A cute quirky cat taking a selfie
              </p>
            </div>
          </div>
          <div className="flex-shrink-0 w-64 md:w-96 rounded-xl overflow-hidden shadow-lg  bg-white">
            <div className="bg-cover bg-center">
              <img  alt="" />
            </div>
            <div className="px-6 pt-6 pb-8">
              <div className="font-bold text-xl">The ferocious Cat</div>
              <p className="text-gray-700 text-base">
                A fierce cat, bares its sharp teeth and hisses menacingly.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="flex justify-end px-20 pt-10 ">
        <img src={bottom} alt="" className="h-60"/>
      </div> */}
    </div>
  );
}

export default Projects;
