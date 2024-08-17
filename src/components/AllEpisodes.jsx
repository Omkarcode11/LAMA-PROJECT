import React from 'react'
import Episode from './Episode';

function AllEpisodes() {
    const files = [
        { name: 'THE SIDEPOD S2 EPISODE 15', uploadDate: '25 Oct 23 | 09:04' },
        { name: 'THE SIDEPOD S2 EPISODE 17', uploadDate: '27 Oct 23 | 11:08' },
        { name: 'THE SIDEPOD S2 EPISODE 20', uploadDate: '31 Oct 23 | 20:28' },
      ];
    
      return (
        <div>
           <div className="bg-white shadow-md rounded-lg p-4">
      <table className="w-full border-collapse">
        <thead>
          <tr>
            <th className="border-b py-2 text-left text-gray-500">No.</th>
            <th className="border-b py-2 text-left text-gray-500">Name</th>
            <th className="border-b py-2 text-left text-gray-500">Upload Date & Time</th>
            <th className="border-b py-2 text-left text-gray-500">Status</th>
            <th className="border-b py-2 text-left text-gray-500">Action</th>
          </tr>
        </thead>
        <tbody>
          {files.map((file, index) => (
            <Episode file={file} index={index}/>
          ))}
        </tbody>
      </table>   

    </div>
        </div>
      );
}

export default AllEpisodes