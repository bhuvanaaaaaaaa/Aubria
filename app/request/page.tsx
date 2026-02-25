export default function RequestPage() {
  return (
    <main className="min-h-screen bg-[#0C2340] text-white">

      <div className="max-w-5xl mx-auto px-6 py-14">

        <h1 className="text-4xl font-bold">
          Request an Keynote Speaker
        </h1>

        <p className="mt-2 text-white/80">
          Auburn users only. Responses automatically save into Excel.
        </p>

        {/* Form Container */}
        <div className="mt-10 rounded-2xl overflow-hidden shadow-xl border border-white/20">

          <iframe
            src="https://forms.office.com/Pages/ResponsePage.aspx?id=7d62zCm9OEuJedcngPYtOwmvJxcWzZFAqX8b-C4IpIBUMlVJNEk3N1c2RjcxUTZDMzZTM1VGVzU1Ni4u&embed=true"
            width="100%"
            height="900"
            frameBorder="0"
            style={{ border: "none" }}
            allowFullScreen
          ></iframe>

        </div>

      </div>

    </main>
  );
}
