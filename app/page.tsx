import { getAuthSession } from "@/lib/next-auth/getAuthSession";

const IndexPage = async () => {
  const session = await getAuthSession();

  return (
    <div>
      <h1 className="text-xl font-bold mb-4">Logged Data</h1>
      <pre className="overflow-auto bg-slate-100 border border-slate-300 p-4 rounded-lg">
        <code>{JSON.stringify(session, null, 2)}</code>
      </pre>
    </div>
  );
};

export default IndexPage;
