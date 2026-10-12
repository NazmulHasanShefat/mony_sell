import CollectorProfileHeader from "./CollectorProfileHeader";

export default function CollectorProfileBody() {
  return (
    <main className="w-full overflow-hidden bg-surface text-on-surface pt-8">
      <div className="flex flex-col w-full">
        <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
          <div className="pointer-events-none absolute -top-12 left-1/2 -z-10 h-[340px] w-[720px] -translate-x-1/2 bg-gradient-to-b from-primary/10 via-primary-container/5 to-transparent blur-3xl" />

          <CollectorProfileHeader />
          {/* <CollectorStats /> */}

          <div className="mt-12 grid grid-cols-12 gap-8">
            <div className="col-span-12 lg:col-span-8 flex flex-col gap-8">
              {/* <ActiveLot /> */}
              {/* <BiddingLedger /> */}
            </div>

            <div className="col-span-12 lg:col-span-4">
              {/* <CollectorSidebar /> */}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}