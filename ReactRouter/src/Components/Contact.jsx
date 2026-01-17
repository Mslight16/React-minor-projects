export default function Contact() {
    return (
        <div className="relative flex items-center justify-center min-h-screen bg-gray-50">
  <div className="w-full max-w-6xl mx-auto">
    <div className=" overflow-hidden bg-white rounded-2xl shadow-lg">
      <div className="grid grid-cols-1 md:grid-cols-2">
        
        {/* Left info */}
        <div className="p-8 bg-gray-100 rounded-t-2xl md:rounded-l-2xl md:rounded-tr-none">
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-800">
            Get in touch
          </h1>

          <p className="mt-3 text-lg text-gray-600">
            Fill in the form to start a conversation
          </p>

          <div className="space-y-6 mt-10">
            <div className="flex items-start text-gray-600">
              <svg className="w-7 h-7 text-orange-500" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <p className="ml-4 font-medium leading-relaxed">
                Acme Inc, Street, State, Postal Code
              </p>
            </div>

            <div className="flex items-center text-gray-600">
              <svg className="w-7 h-7 text-orange-500" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <p className="ml-4 font-medium">
                +44 1234567890
              </p>
            </div>

            <div className="flex items-center text-gray-600">
              <svg className="w-7 h-7 text-orange-500" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <p className="ml-4 font-medium">
                info@acme.org
              </p>
            </div>
          </div>
        </div>

        {/* Right form */}
        <form className="p-8 flex flex-col justify-center space-y-4">
          <input
            type="text"
            placeholder="Full Name"
            className="w-full py-3 px-4 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-400 focus:border-orange-400 outline-none transition"
          />

          <input
            type="email"
            placeholder="Email"
            className="w-full py-3 px-4 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-400 focus:border-orange-400 outline-none transition"
          />

          <input
            type="tel"
            placeholder="Telephone Number"
            className="w-full py-3 px-4 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-400 focus:border-orange-400 outline-none transition"
          />

          <button
            type="submit"
            className="w-full md:w-40 bg-orange-600 hover:bg-orange-700 text-white font-semibold py-3 rounded-lg transition duration-300 shadow-md"
          >
            Submit
          </button>
        </form>

      </div>
    </div>
  </div>
</div>

    );
}
