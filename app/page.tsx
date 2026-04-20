export default function Page() {
  return (
    <div className="min-h-screen bg-gray-100 px-6 py-10">
      <div className="mx-auto max-w-6xl rounded-2xl bg-white p-8 shadow-sm">
        <div className="mb-6 flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-semibold text-gray-900">
              Customer Account Portal
            </h1>
            <p className="mt-2 text-lg text-gray-500">
              Connected to Sage 200 · Live preview
            </p>
          </div>
          <div className="rounded-full bg-green-50 px-3 py-1 text-sm font-medium text-green-700">
            Live data
          </div>
        </div>

        <div className="mb-8 flex items-center justify-between rounded-xl border border-gray-200 bg-gray-50 px-4 py-3">
          <div className="flex gap-2">
            <button className="rounded-md bg-white px-4 py-2 text-sm font-medium text-gray-900 shadow-sm">
              Account overview
            </button>
            <button className="rounded-md px-4 py-2 text-sm text-gray-500">
              Transaction history
            </button>
            <button className="rounded-md px-4 py-2 text-sm text-gray-500">
              Orders
            </button>
          </div>
          <p className="text-sm text-gray-500">
            Logged in as: Dental Supply Co.
          </p>
        </div>

        <div className="mb-6 grid gap-4 md:grid-cols-4">
          <Metric
            label="Outstanding balance"
            value="£2,464"
            sub="As of today"
          />
          <Metric
            label="Credit limit"
            value="£4,000"
            sub="£1,536 available"
          />
          <Metric
            label="Account status"
            value="Active"
            sub="No restrictions"
          />
          <Metric
            label="Payment terms"
            value="30 days net"
            sub="Standard account"
          />
        </div>

        <div className="mb-6 rounded-xl border border-gray-200 p-5">
          <div className="mb-4 flex items-center justify-between">
            <div>
              <h2 className="text-sm font-semibold text-gray-900">
                Credit utilisation
              </h2>
              <p className="mt-1 text-sm text-gray-500">
                62% used — £2,464 of £4,000
              </p>
            </div>
            <button className="rounded-md bg-blue-700 px-5 py-3 text-sm font-medium text-white hover:bg-blue-800">
              Pay outstanding balance (£2,464)
            </button>
          </div>

          <div className="h-3 w-full rounded-full bg-gray-200">
            <div className="h-3 w-[62%] rounded-full bg-blue-600"></div>
          </div>

          <div className="mt-2 flex justify-between text-xs text-gray-500">
            <span>£0</span>
            <span>£4,000</span>
          </div>
        </div>

        <div className="mb-6 rounded-xl border border-gray-200 p-5">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-sm font-semibold text-gray-900">
              Recent transactions
            </h2>
            <span className="text-sm text-gray-500">Last 90 days</span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="border-b border-gray-200 text-left text-gray-500">
                  <th className="pb-3 font-medium">Date</th>
                  <th className="pb-3 font-medium">Reference</th>
                  <th className="pb-3 font-medium">Type</th>
                  <th className="pb-3 text-right font-medium">Amount</th>
                  <th className="pb-3 font-medium">Status</th>
                </tr>
              </thead>
              <tbody className="text-gray-900">
                <Row
                  date="14 Apr 2026"
                  refId="INV-10482"
                  type="Invoice"
                  amount="£1,240.00"
                  status="Due 14 May"
                />
                <Row
                  date="01 Apr 2026"
                  refId="INV-10391"
                  type="Invoice"
                  amount="£1,224.16"
                  status="Overdue"
                />
                <Row
                  date="18 Mar 2026"
                  refId="RCP-8841"
                  type="Payment"
                  amount="£980.00"
                  status="Paid"
                />
                <Row
                  date="05 Mar 2026"
                  refId="INV-10284"
                  type="Invoice"
                  amount="£980.00"
                  status="Paid"
                />
              </tbody>
            </table>
          </div>
        </div>

        <div className="rounded-xl border border-gray-200 p-5">
          <h2 className="mb-4 text-sm font-semibold text-gray-900">
            Account details
          </h2>
          <div className="flex flex-wrap gap-3">
            <Pill text="Terms: 30 days net" />
            <Pill text="Currency: GBP" />
            <Pill text="Account ref: DEN-00142" />
            <Pill text="Avg. payment time: 28 days" />
          </div>
        </div>
      </div>
    </div>
  );
}

function Metric({
  label,
  value,
  sub,
}: {
  label: string;
  value: string;
  sub: string;
}) {
  return (
    <div className="rounded-xl bg-gray-50 p-5">
      <p className="text-sm text-gray-500">{label}</p>
      <p className="mt-3 text-3xl font-semibold text-gray-900">{value}</p>
      <p className="mt-2 text-sm text-gray-400">{sub}</p>
    </div>
  );
}

function Row({
  date,
  refId,
  type,
  amount,
  status,
}: {
  date: string;
  refId: string;
  type: string;
  amount: string;
  status: string;
}) {
  const statusClass =
    status === "Paid"
      ? "text-green-600"
      : status === "Overdue"
      ? "text-red-600"
      : "text-amber-600";

  return (
    <tr className="border-b border-gray-100">
      <td className="py-4">{date}</td>
      <td className="py-4">{refId}</td>
      <td className="py-4">{type}</td>
      <td className="py-4 text-right">{amount}</td>
      <td className={`py-4 font-medium ${statusClass}`}>{status}</td>
    </tr>
  );
}

function Pill({ text }: { text: string }) {
  return (
    <span className="rounded-full bg-gray-100 px-4 py-2 text-sm text-gray-600">
      {text}
    </span>
  );
}
