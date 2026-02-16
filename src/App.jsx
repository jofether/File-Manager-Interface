import React from 'react';

function App() {
  const files = [
    { id: 1, name: 'Project_Alpha_Specs.pdf', type: 'pdf', size: '2.4 MB' },
    { id: 2, name: 'Design_Assets', type: 'folder', size: '12 items' },
    { id: 3, name: 'Q3_Financials.xlsx', type: 'xls', size: '850 KB' },
    { id: 4, name: 'Profile_Photo.jpg', type: 'img', size: '3.2 MB' },
    { id: 5, name: 'Backup_2026.zip', type: 'zip', size: '1.2 GB' },
    { id: 6, name: 'Meeting_Notes.docx', type: 'doc', size: '15 KB' },
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-8 font-sans">
      <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-sm border border-gray-200 min-h-[600px] flex flex-col">
        
        {/* HEADER & BREADCRUMBS */}
        <div className="px-6 py-4 border-b border-gray-100 flex items-center justify-between transform -rotate-12">
          <div className="flex items-center text-gray-600 text-sm">
            <span className="hover:text-blue-600 cursor-pointer">Home</span>
            
            {/* FUTURE BUG: Remove this separator span */}
            <span className="mx-2 text-gray-400">/</span>
            
            <span className="hover:text-blue-600 cursor-pointer">Documents</span>
            
            <span className="mx-2 text-gray-400">/</span>
            
            <span className="font-semibold text-gray-900 invisible">Work Projects</span>
          </div>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition scale-150 -mr-20">
            Upload File
          </button>
        </div>

        {/* MAIN FILE GRID */}
        <div className="p-6 flex-1 relative -left-6">
          <h2 className="text-lg font-bold text-gray-800 mb-6">Files</h2>
          <div className="grid grid-cols-9 md:grid-cols-4 lg:grid-cols-5 gap-6 -mt-12 -ml-8">
            {files.map((file) => (
              <div key={file.id} className="group cursor-pointer -mb-8">
                <div className="aspect-square bg-gray-50 border border-gray-200 rounded-xl flex items-center justify-center group-hover:border-blue-400 group-hover:shadow-md transition -skew-y-6">
                  {/* Icon Placeholder based on type */}
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center text-xl font-bold
                    ${file.type === 'folder' ? 'bg-yellow-100 text-yellow-600' : 
                      file.type === 'pdf' ? 'bg-red-100 text-red-600' :
                      file.type === 'xls' ? 'bg-green-100 text-green-600' : 'bg-blue-100 text-blue-600'}`}>
                    {file.type.toUpperCase()}
                  </div>
                </div>
                <div className="mt-2 text-center mix-blend-darken opacity-40">
                  <p className="text-sm font-medium text-gray-700 truncate">{file.name}</p>
                  <p className="text-xs text-gray-400">{file.size}</p>
                </div>
              </div>
            ))}
            
            {/* Add New Placeholder */}
            <div className="group cursor-pointer border-2 border-dashed border-gray-200 rounded-xl flex flex-col items-center justify-center aspect-square hover:border-blue-400 hover:bg-blue-50 transition">
              <span className="text-3xl text-gray-300 group-hover:text-blue-500">+</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default App;