
const CreateVerteidigung = () => {
    return (
      <div className="min-h-screen bg-white py-20 px-4 flex justify-center">
        <div className="w-full max-w-screen-lg bg-white border border-gray-200 rounded-2xl shadow-2xl p-10">
          <h1 className="text-2xl font-bold text-blue-900 mb-10">Verteidigung erstellen</h1>
  
          <form className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
            
            <div>
                <label className="text-sm text-gray-700">Thema</label>
                <input type="text" placeholder="Thema" className="w-full bg-gray-100 rounded p-2 mt-1" />
            </div>

            <div>
                <label className="text-sm text-gray-700">Studiengang</label>
                <select className="w-full bg-gray-100 rounded p-2 mt-1">
                <option>EXAMPLE</option>
                </select>
            </div>

            <div>
                <label className="text-sm text-gray-700">Author</label>
                <input type="text" placeholder="Author" className="w-full bg-gray-100 rounded p-2 mt-1" />
            </div>

            <div>
                <label className="text-sm text-gray-700">Fakultät</label>
                <select className="w-full bg-gray-100 rounded p-2 mt-1">
                <option>EXAMPLE</option>
                </select>
            </div>

            <div>
                <label className="text-sm text-gray-700">Betreuer</label>
                <input type="text" placeholder="Betreuer" className="w-full bg-gray-100 rounded p-2 mt-1" />
            </div>

            <div>
                <label className="text-sm text-gray-700">Datum</label>
                <input type="text" placeholder="Datum" className="w-full bg-gray-100 rounded p-2 mt-1" />
            </div>

            <div className="flex flex-col md:flex-row gap-6 w-full md:col-span-2">
            <div className="w-full md:w-1/2">
                <label className="text-sm text-gray-700">Raum</label>
                <input
                type="text"
                placeholder="Raum"
                className="w-full bg-gray-100 rounded p-2 mt-1"
                />
            </div>

            <div className="w-full md:w-1/2">
                <label className="text-sm text-gray-700">Art der Arbeit</label>
                <select className="w-full bg-gray-100 rounded p-2 mt-1">
                <option>EXAMPLE</option>
                </select>
            </div>
            </div>

            {/* Keywords отдельно */}
            <div className="flex flex-col md:flex-row gap-6 w-full md:col-span-2 items-end">
            <div className="w-full md:w-1/2">
                <label className="text-sm text-gray-700">Keywords</label>
                <textarea
                placeholder="dastan12"
                className="w-full bg-gray-100 rounded p-2 mt-1 h-28 resize-none"/>
            </div>

            <div className="w-full md:w-auto">
                <button
                type="submit"
                className="bg-blue-900 text-white px-6 py-2 rounded hover:bg-blue-800 transition"
                >
                Speichern
                </button>
            </div>
        </div>
        </form>

        </div>
      </div>
    );
  };

export default CreateVerteidigung;
