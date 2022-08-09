import React from "react";

export default function MyModal({
	visible,
	onClose,
}: {
	visible: boolean;
	onClose: () => void;
}) {

	const handleOnClose = (e :any)=>{
		if(e.target.id === 'container'){
			onClose();
		}
	}

	if (!visible) return null;
    return (
		//fixed inset-0 helps to cover the whole screen.
      <div
	  id='container'
	  onClick={handleOnClose} 
	  className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex items-center justify-center">
        <div className="bg-white p-2 rounded w-72">
          <h1 className="font-semibold text-center text-xl text-gray-700">
            Welcome back
          </h1>
          <p className="text-center text-gray-700 mb-5">Sign in</p>
          <div className="flex flex-col">
            <input
              type="text"
              className="border border-gray-700 p-2 rounded mb-5"
              name=""
              placeholder="email@example.com"
              id=""
            />
            <input
              type="text"
              className="border border-gray-700 p-2 rounded mb-5"
              name=""
              placeholder="********"
              id=""
            />
          </div>
          <div className="text-center">
            <button className="px-5 py-2 bg-gray-700 text-white rounded">
              Sign in
            </button>
          </div>
        </div>
      </div>
    );

//   return (
//     <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center">
//       <div className="bg-white p-2 rounded text-black">
// 		<p>

// 		myModal
// 		</p>
// 		<button onClick={onClose}>X</button>
// 		</div>
//     </div>
//   );
}
